import { Box } from '@mui/material'
import React from 'react'
import { Navbar } from '../components/Navbar'
// import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'

export const AuthLayout = () => {
  return (
    <Box>
      <Navbar />
      <Box component="main">
         <Outlet />
      </Box>
      {/* <Footer /> */}
    </Box>
  )
}
