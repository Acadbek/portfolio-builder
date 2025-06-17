import { Avatar, Box, Button, Container, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import React from 'react'
import styles from './Header.module.scss'

const cn = classNames.bind(styles)

export const Header = ({ title }) => {
  return (
    <Container className={cn("header")}>

      <Box className={cn("header__left")}>
        <Typography >Free Online Resume Builder</Typography>
        <Typography >Build a job-winning <br /> resume for free</Typography>
        <Typography >Your first resume is 100% free, including all <br /> design features & unlimited downloads. <br />
          Yes, really 🚀</Typography>
        <Button >{title = "Get started – it's free ✨"}</Button>
        <Box>
          <Box>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </Box>
          <Typography>Loved by over 3.1 million happy users</Typography>

        </Box>
      </Box>
      <Box></Box>
    </Container>
  )
}
