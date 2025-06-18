import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.scss'
import classNames from 'classnames/bind'
import { Box, Container } from '@mui/material'
import { NavLink } from 'react-router-dom'
import logo from './../../assets/icon/logoIcom.svg'
import { CurrentButton } from '../Button/Button'

const cn = classNames.bind(styles)

export const Navbar = ({ variant, className }) => {
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('smooth', handleScroll)
  }, [])

  return (
    <Box className={cn("navbar", { fixed: isFixed })}>
      <Container disableGutters
        sx={{
          px: 6,
          maxWidth: {
            xs: "100%",
          },
        }} className={cn('navbar__container')}>
        <NavLink tabIndex={'/'} to={'/'}>
          <img src={logo} alt="logo" className={cn('navbar__container_logo')} />
        </NavLink>
        <Box className={cn('menu')}>
          <ul>
            <li>
              <NavLink to={'/PlansPricing'} className={cn('link')}>Plans & Pricing</NavLink>
            </li>
            <li>
              <NavLink to={"/about"} className={cn('link')}>About</NavLink>
            </li>
          </ul>
          <Box className={cn('btnCard')}>
            <NavLink to="/login">
              <CurrentButton variant="outlined" className={cn('btnOne')} title={"Login"}></CurrentButton>
            </NavLink>
            <NavLink to="/register">
              <CurrentButton variant="contained" className={cn('btnTwo')} title={"Start Now"}></CurrentButton>
            </NavLink>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
