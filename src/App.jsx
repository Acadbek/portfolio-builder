import React, { useState } from 'react';
// import { Grid, Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
// import BuilderForm from './components/BuilderForm';
// import PortfolioPreview from './components/PortfolioPreview'

import { About } from './pages/About';
import { HomePage } from './pages/Home';
import { PlansPricing } from './pages/PlansPricing';
import { CreateResume } from './pages/CreateResume';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './layout';
import ResumeTemplates from './pages/ResumeTemplates';
import TemplateDetails from './pages/TemplateDetails';
import { ResumeContentNav } from './pages/ReumeContentNav/ResumeContentNav';
import { DashLayout } from './layout/DashLayout/DashLayout';
import { LoginModal } from './components/Login';
import { Register } from './components/Register';
import AuthProvider, { AuthContext } from './context/AuthContext';
import { AuthLayout } from './layout/Authlayout';
import { Box, Typography } from '@mui/material';

// import BuilderForm from './components/BuilderForm';

// const theme = createTheme({
//   palette: {
//     mode: 'light',
//   },
// });


const App = () => {

  // const [portfolioData, setPortfolioData] = React.useState({
  //   name: 'Ismingiz',
  //   title: 'Kasbingiz (masalan, Frontend Dasturchi)',
  //   bio: 'O\'zingiz haqingizda qisqacha ma\'lumot. Bu yerga tajribangiz, qiziqishlaringiz va maqsadlaringizni yozishingiz mumkin.',
  //   avatarUrl: 'https://via.placeholder.com/150',
  //   skills: ['React', 'JavaScript', 'MUI', 'Vite'],
  //   projects: [
  //     {
  //       title: 'Portfolio Builder',
  //       description: 'React va MUI yordamida yaratilgan "no-code" portfolio qurish vositasi.',
  //       imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070',
  //       link: '#',
  //     },
  //     {
  //       title: 'E-commerce Sayti',
  //       description: 'Mijozlar uchun onlayn do\'kon. Mahsulotlar katalogi, savat va to\'lov tizimi mavjud.',
  //       imageUrl: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2070',
  //       link: '#',
  //     },
  //   ],
  //   contact: {
  //     email: 'email@example.com',
  //     linkedin: 'https://linkedin.com/in/yourprofile',
  //     github: 'https://github.com/yourprofile',
  //   },
  // })

  const PrivateRouter = ({ children }) => {
  const { authenticated, loading } = React.useContext(AuthContext);
  const [isLoginModalOpen, setLoginIsModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  React.useEffect(() => {
    if (!loading && !authenticated) {
      setLoginIsModalOpen(true);
    }
  }, [loading, authenticated]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {authenticated ? children : null}

      {
        isLoginModalOpen && <LoginModal closeLogin={setLoginIsModalOpen} open={isLoginModalOpen} openRegister={() => {
         setLoginIsModalOpen(false);
         setIsSignUpModalOpen(true);
        }} />
      }
      
      {
        isSignUpModalOpen && (<Register  closeSignUp={setIsSignUpModalOpen}  open={isSignUpModalOpen} openLogin={() => {
        setLoginIsModalOpen(true);
        setIsSignUpModalOpen(false);
       }}/>)
      }
    </>
  );
};


  console.log(import.meta.env.VITE_BASE_URL);


  return (
    <>
      {/* <ThemeProvider theme={theme}>
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
    </ThemeProvider> */}
      <AuthProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<About />} />
            <Route path='/planspricing' element={<PlansPricing />} />
            {/* <Route path='/login' element={<LoginModal />} /> */}
            {/* <Route path='/register' element={<Register />} /> */}
          </Route>
          <Route element={<PrivateRouter><AuthLayout /></PrivateRouter>}>
            <Route path='/createresume' element={<CreateResume />} />
            <Route path='/resume-templates' element={<ResumeTemplates />} />
            <Route path='/template-details/:id' element={<TemplateDetails />} />
            <Route path='/login' element={<LoginModal />} />
            <Route path='/register' element={<Register />} />
          </Route>
          <Route path='/resumecontent' element={<ResumeContentNav />} />
          <Route path='*' element={<Typography variant="h1">404</Typography>} />

          {/* 
        <Route element={<DashLayout />}>
         </Route> */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App;