import { useCallback } from 'react';
// PDF fayl yaratish kutubxonasi
import jsPDF from 'jspdf';
// HTML elementni rasmga (canvas) aylantirish uchun
import html2canvas from 'html2canvas';

// Custom hook
export const usePortfolioPDF = () => {
  const downloadPDF = useCallback(async (portfolioData, elementId = 'portfolio-preview') => {
    try {
      // PDF qilish kerak bo'lgan HTML elementni topamiz
      const element = document.getElementById(elementId);
      if (!element) {
        console.error('Portfolio preview elementi topilmadi');
        return;
      }

      // Yuklanmoqda degan loading qilish
      const loadingElement = document.createElement('div');
      loadingElement.id = 'pdf-loading';
      loadingElement.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        color: white;
        font-size: 18px;
      `;
      loadingElement.innerHTML = 'PDF yaratilmoqda...';
      document.body.appendChild(loadingElement);

      // Elementni canvas'ga aylantiramiz (rasm ko‘rinishiga)
      const canvas = await html2canvas(element, {
        scale: 2, // 2x qilib sifati yuqoriroq bo‘lsin
        useCORS: true, // Cross-origin ruxsatini beradi
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: element.scrollWidth, // Asl o‘lchamni oladi
        height: element.scrollHeight,
        scrollX: 0,
        scrollY: 0,
      });

      // Canvas'dan PNG formatida rasmni olamiz
      const imgData = canvas.toDataURL('image/png');

      // jsPDF bilan PDF fayl yaratish
      const pdf = new jsPDF({
        orientation: 'portrait', // Sahifa yo‘nalishi: portret
        unit: 'mm',              // O‘lchov birligi: millimetr
        format: 'a4',            // A4 formatdagi sahifa
      });

      // A4 o‘lchamlari (mm)
      const pageWidth = 210;
      const pageHeight = 297;
      const margin = 10;

      // Canvas o‘lchamlari (px)
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      // PDF ichida rasm qancha joy egallashi kerak
      const imgWidth = pageWidth - (margin * 2);
      const imgHeight = (canvasHeight * imgWidth) / canvasWidth;

      let yPosition = margin;

      // Rasm balandligi bir sahifadan katta bo‘lsa, sahifalarga bo‘lib chiqamiz
      if (imgHeight > pageHeight - (margin * 2)) {
        const pageImgHeight = pageHeight - (margin * 2);
        const totalPages = Math.ceil(imgHeight / pageImgHeight); // Nechta sahifa kerakligini aniqlaymiz

        for (let page = 0; page < totalPages; page++) {
          if (page > 0) {
            pdf.addPage(); // Yangi sahifa qo‘shiladi
          }

          // Canvas'dan kerakli qismni ajratib olamiz
          const sourceY = (page * pageImgHeight * canvasHeight) / imgHeight;
          console.log(sourceY);

          const sourceHeight = Math.min(
            (pageImgHeight * canvasHeight) / imgHeight,
            canvasHeight - sourceY
          );

          // Sahifa uchun yangi canvas yaratamiz
          const pageCanvas = document.createElement('canvas');
          const pageCtx = pageCanvas.getContext('2d');
          pageCanvas.width = canvasWidth;
          pageCanvas.height = sourceHeight;

          // Asl canvas'dan kesib olish
          pageCtx.drawImage(
            canvas,
            0, sourceY,                 // Manba boshi
            canvasWidth, sourceHeight, // Manba o‘lchami
            0, 0,            // Maqsad boshi
            canvasWidth, sourceHeight  // Maqsad o‘lchami
          );

          // Kesilgwan canvas'dan PNG ma'lumotini olamiz
          const pageImgData = pageCanvas.toDataURL('image/png');
          const actualHeight = (sourceHeight * imgWidth) / canvasWidth;

          // PNG rasmni PDF sahifasiga joylashtiramiz
          pdf.addImage(
            pageImgData,
            'PNG',
            margin,
            margin,
            imgWidth,
            actualHeight
          );
        }
      } else {
        console.log('Hello');
        // Agar rasm bitta sahifaga sig‘sa, to‘g‘ridan-to‘g‘ri qo‘shamiz
        pdf.addImage(imgData, 'PNG', margin, yPosition, imgWidth, imgHeight);
      }

      // PDF nomini aniqlaymiz
      const fileName = `${portfolioData.name || 'portfolio'}_CV.pdf`;

      // PDF faylni yuklab olish
      pdf.save(fileName);

      // Loading overlay'ni olib tashlaymiz
      document.body.removeChild(loadingElement);

    } catch (error) {
      // Xatolik yuz bersa, konsolga chiqaramiz
      console.error('PDF yaratishda xatolik:', error);

      // Agar loading element hali ham mavjud bo‘lsa, olib tashlaymiz
      const loadingElement = document.getElementById('pdf-loading');
      if (loadingElement) {
        document.body.removeChild(loadingElement);
      }

      // Foydalanuvchiga xabar chiqaramiz
      alert('PDF yaratishda xatolik yuz berdi. Iltimos, qayta urinib ko\'ring.');
    }
  }, []);

  // Hook ichidan downloadPDF funksiyasini qaytaramiz
  return { downloadPDF };
};
