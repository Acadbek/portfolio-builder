import React from 'react'
import { Grid, Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import BuilderForm from '../../Auth/BuilderForm';
import PortfolioPreview from '../../Auth/PortfolioPreview'

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

export const CreateResume = () => {
  const [portfolioData, setPortfolioData] = React.useState({
      name: 'Ismingiz',
      title: 'Kasbingiz (masalan, Frontend Dasturchi)',
      bio: 'O\'zingiz haqingizda qisqacha ma\'lumot. Bu yerga tajribangiz, qiziqishlaringiz va maqsadlaringizni yozishingiz mumkin.',
      avatarUrl: 'https://via.placeholder.com/150',
      skills: ['React', 'JavaScript', 'MUI', 'Vite'],
      projects: [
        {
          title: 'Portfolio Builder',
          description: 'React va MUI yordamida yaratilgan "no-code" portfolio qurish vositasi.',
          imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070',
          link: '#',
        },
        {
          title: 'E-commerce Sayti',
          description: 'Mijozlar uchun onlayn do\'kon. Mahsulotlar katalogi, savat va to\'lov tizimi mavjud.',
          imageUrl: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2070',
          link: '#',
        },
      ],
      contact: {
        email: 'email@example.com',
        linkedin: 'https://linkedin.com/in/yourprofile',
        github: 'https://github.com/yourprofile',
      },
    })

  return (
    <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={4} wrap="nowrap">
              <Grid item xs={12} md={5}>
                <BuilderForm data={portfolioData} setData={setPortfolioData} />
              </Grid>
    
              <Grid item xs={12} md={7}>
                <PortfolioPreview data={portfolioData} />
              </Grid>
            </Grid>
          </Container>
        </ThemeProvider>
  )
}
