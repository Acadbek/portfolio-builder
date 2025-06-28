import { Box } from '@mui/material'
import React from 'react'
import { Navbar } from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'

export const Layout = () => {
  return (
    <Box>
      <Navbar />
      <Box component="main">
         <Outlet />
      </Box>
      <Footer/>
    </Box>
  )
}
