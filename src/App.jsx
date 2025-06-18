import React from 'react';
import { About } from './pages/About';
import { HomePage } from './pages/Home';
import { PlansPricing } from './pages/PlansPricing';
import { CreateResume } from './pages/CreateResume';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout';
import ResumeTemplates from './pages/ResumeTemplates';
import TemplateDetails from './pages/TemplateDetails';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/planspricing' element={<PlansPricing />} />
        <Route path='/createresume' element={<CreateResume />} />
        <Route path='/resume-templates' element={<ResumeTemplates />} />
        <Route path='/template-details/:id' element={<TemplateDetails />} />
      </Route>
    </Routes>
  )
}

export default App;