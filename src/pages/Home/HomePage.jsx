import { Box } from '@mui/material'
import React from 'react'
import { Header } from '../../layout/Header/Header'
import { Main } from './components/Main'

export const HomePage = () => {
  return (
    <Box>
      <Header/>
      <Main />
    </Box>
  )
}
