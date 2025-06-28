import React from "react";
import { useParams, useLocation, NavLink } from "react-router-dom";
import styles from "./TemplateDetails.module.scss";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const fallbackTemplates = [
  {
    id: 1,
    title: "ATLANTIC BLUE MULTI-COLUMN RESUME WITH LEFT SIDEBAR",
    img: "https://prod.flowcvassets.com/resume-templates/wk78myowij2vvh1gy8l-s/2560.webp",
    description: "Each template has been crafted with care to make designing your resume an absolute breeze for you.",
    details: [
      "A4 / US-Letter Size",
      "Editable Text",
      "Fully customizable",
      "Print ready format",
      "Online resume with shareable link",
    ],
  },
  {
    id: 2,
    title: "BLUE STEEL MINIMALIST RESUME FOR PROFESSIONALS",
    img: "https://prod.flowcvassets.com/resume-templates/blue-steel-minimalist-professional-classic/2560.webp",
    description: "Each template has been crafted with care to make designing your resume an absolute breeze for you.",
    details: [
      "A4 / US-Letter Size",
      "Editable Text",
      "Fully customizable",
      "Print ready format",
      "Online resume with shareable link",
    ],
  },
  {
    id: 3,
    title: "EXECUTIVE RESUME TEMPLATE WITH SERIF FONT IN BLACK AND WHITE",
    img: "https://prod.flowcvassets.com/resume-templates/executive-serif-black-white/2560.webp",
    description: "Each template has been carefully crafted with care to make designing your resume an absolute breeze for you.",
    details: [
      "A4 / US-Letter Size",
      "Editable Text",
      "Fully customizable",
      "Print ready format",
      "Online resume with shareable link",
    ],
  },
];

const TemplateDetails = () => {
  const { id } = useParams();
  const location = useLocation();

  let template = null;
  if (location.state && location.state.template) {
    const fallback = fallbackTemplates.find((tpl) => tpl.id === Number(id));
    template = {
      ...fallback,
      ...location.state.template,
      title: location.state.template.title || fallback?.title,
      description: location.state.template.description || fallback?.description,
      details: location.state.template.details || fallback?.details,
    };
  } else {
    template = fallbackTemplates.find((tpl) => tpl.id === Number(id));
  }

  if (!template) return <div>Template not found</div>;

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.preview}>
        <img
          src={template.img}
          alt={template.title}
          className={styles.img}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{template.title}</h2>
        <div className={styles.hr} />
        <p className={styles.desc}>{template.description}</p>
        <ul className={styles.list}>
          {template.details &&
            template.details.map((item, i) => <li key={i}>{item}</li>)}
        </ul>

        <NavLink to={"/resumecontent"}> <button className={styles.button}> Use this template     </button></NavLink>

        <div style={{ marginTop: 32 }}>
          <b className={styles.shareTitle}>Share this template with your friends</b>
          <div className={styles.icons}>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer"><WhatsAppIcon fontSize="large" /></a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer"><XIcon fontSize="large" /></a>
            <a href="mailto:" target="_blank" rel="noopener noreferrer"><EmailIcon fontSize="large" /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><LinkedInIcon fontSize="large" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateDetails; 