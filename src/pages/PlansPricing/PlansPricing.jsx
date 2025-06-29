import { Box, colors, Container } from '@mui/material'
import React from 'react'
import classnames from 'classnames/bind'
import styles from './PlansPricing.module.scss'
import UnstyledTabsIntroduction from './components/Tabs'
import { SaveMoney } from '../../assets/icon/SaveMoney'
import { BoxSixMain } from '../Home/components/BoxSixMain'
const cn = classnames.bind(styles)

export const PlansPricing = () => {
  return (
    <Box  className={cn("plansPricing-top")}>
      <Container className={cn('plansPricing-top__container')}>
        <Box className={cn('plansPricing-top__title')}>
          <h1>Pricing</h1>
          <span><SaveMoney /></span>
          <UnstyledTabsIntroduction />
        </Box> 
        <BoxSixMain />
      </Container>
    </Box>
  )
}
