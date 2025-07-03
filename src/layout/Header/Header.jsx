import { Avatar, AvatarGroup, Box, Card, Container, Rating, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import React, { useState } from 'react'
import styles from './Header.module.scss'
import { CurrentButton } from '../../components/Button/Button'
import { HerrovIcon } from '../../assets/icon/arrovIcon'
import { Link, NavLink } from 'react-router-dom'
import tictok from '../../assets/icon/tictok.svg'
import { LoginModal } from '../../components/Login'
import { AuthContext } from '../../context/AuthContext'
import { Register } from '../../components/Register'
const cn = classNames.bind(styles)

export const Header = ({ title, starIcon }) => {
  const {authenticated} = React.useContext(AuthContext)
  const [isLoginModalOpen, setLoginIsModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  
    const handleClick = () => {
      if (!authenticated) {
        setLoginIsModalOpen(true);
      }
    };

  return (
    <Container disableGutters
    maxWidth="xl"
    sx={{
      px: 6,
      mx: 'auto', // markazga chiqarish
    }
    }  className={cn("header")}>

      <Box className={cn("header__left")}>
        <Typography className={cn("h2")} >Free Online Resume Builder</Typography>
        <Typography className={cn("title")} >Build a job-winning <br /> resume for free</Typography>
        <Typography className={cn("p")} >Your first resume is 100% free, including all <br /> design features & unlimited downloads. <br />
          Yes, really 🚀</Typography>
        <Link  to={`${authenticated ? '/createresume' : ''}`}>
          <CurrentButton onClick={handleClick} className={cn("getBtn")} starIcon={<HerrovIcon className={cn("heroIcon")} />} title={"Get started – it's free ✨"}></CurrentButton>
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
        <Box className={cn("boxBottom")}>
          <AvatarGroup max={4}>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </AvatarGroup>

          <Typography>Loved by over 3.1 million happy users</Typography>

        </Box>
        <NavLink><Card className={cn("CardOne")}>
          <Box className={cn("CardOne__box")}>
            <Typography className={cn("name")} >Andrew Irwin</Typography>
            <Typography className={cn("work")} >Product Meneger</Typography>
            <Rating className={cn("star")} name="size-small" defaultValue={5} size="small" />
          </Box>
          <Avatar alt="Product" src="/static/images/avatar/1.jpg" />

        </Card>
        </NavLink>
        <NavLink><Card className={cn("Cardtwo")}>
          <Box className={cn("CardTwo__box")}>
            <Typography className={cn("titlle")} >
              Powerful websites I wish I knew earlier: <br /> This one is a LIFESAVER 🤩n</Typography>
            <Typography className={cn("title_link")} >
              @maedeh.davami | 1.8 million views</Typography>
          </Box>
          <img className={cn("tiktio")} src={tictok}
            alt="" />
        </Card>
        </NavLink>
      </Box>
      <Box>

        <img className={cn("header__right")} src="https://assets.flowcvassets.com/landing/main-landing-hero-1920w.webp" alt="" />

      </Box>

    </Container>
  )
}
