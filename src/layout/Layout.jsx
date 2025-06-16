import { Box } from '@mui/material'
import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <Box>
      <Navbar />
      <Box component="main">
         <Outlet />
      </Box>
      <Footer />
    </Box>
  )
}
