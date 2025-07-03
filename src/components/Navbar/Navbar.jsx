import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.scss'
import classNames from 'classnames/bind'
import { Box, Container } from '@mui/material'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from './../../assets/icon/logoIcom.svg'
import { CurrentButton } from '../Button/Button'
import { AuthContext } from '../../context/AuthContext'
import { LoginModal } from '../Login'
import { Register } from '../Register'

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

  // Auntifikatsiyani tekshirish token bosa login btn , start now btn ozgaradi
  const {authenticated} = React.useContext(AuthContext)
  const [isLoginModalOpen, setLoginIsModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const handleClick = () => {
    if (!authenticated) {
      setLoginIsModalOpen(true);
    }
  };

  return (
    <Box className={cn("navbar", { fixed: isFixed })}>
      <Container disableGutters
        maxWidth="xl"
        sx={{
          px: 6,
          mx: 'auto', // markazga chiqarish
        }
        } className={cn('navbar__container')}>
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
            {!authenticated &&
              <CurrentButton onClick={handleClick} variant="outlined" className={cn('btnOne')} title={"Login"}></CurrentButton>
            }
            <Link to={`${authenticated ? "/createresume" : ""}`}>
              <CurrentButton onClick={handleClick}  variant="contained" className={cn('btnTwo')} title={"Start Now"}></CurrentButton>
            </Link>
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
          </Box>
        </Box>
      </Container>
    </Box >
  )
}
