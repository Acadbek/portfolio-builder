import { Box, colors, Container } from '@mui/material'
import React from 'react'
import classnames from 'classnames/bind'
import styles from './PlansPricing.module.scss'
import UnstyledTabsIntroduction from '../../components/Tabs'
const cn = classnames.bind(styles)

export const PlansPricing = () => {
  return (
    <Box  className={cn("plansPricing-top")}>
      <Container className={cn('plansPricing-top__container')}>
        <Box className={cn('plansPricing-top__title')}>
          <h1>Pricing</h1>
          
          <UnstyledTabsIntroduction />
        </Box> 
      </Container>
    </Box>
  )
}
