import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.scss'
import classNames from 'classnames/bind'
import { Box, Container } from '@mui/material'
import { NavLink } from 'react-router-dom'
import logo from './../../assets/icon/logoIcom.svg'
import { CurrentButton } from '../Button/Button'

const cn = classNames.bind(styles)

export const Navbar = ({variant, className }) => {
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Box className={cn("navbar", { fixed: isFixed })}>
      <Container className={cn('navbar__container')}>
        <img src={logo} alt="logo" className={cn('navbar__container_logo')} />
        <Box className={cn('menu')}>
          <ul>
            <li>
              <NavLink className={cn('link')}>Plans & Pricing</NavLink>
            </li>
            <li>
              <NavLink className={cn('link')}>About</NavLink>
            </li>
          </ul>
          <Box className={cn('btnCard')}>
            <CurrentButton variant="outlined" className={cn('btnOne')}  title={"Login"}></CurrentButton>
            <CurrentButton variant="contained" className={cn('btnTwo')} title={"Start Now"}></CurrentButton>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
