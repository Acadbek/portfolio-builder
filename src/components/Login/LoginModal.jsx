import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import styles from './Login.module.scss'
import React from 'react'
import { Link } from 'react-router-dom'

const cn = classNames.bind(styles)
export const LoginModal = () => {
  return (
    <Box className={cn('login')}>
      <Box className={cn('login__close')}></Box>
      <Paper className={cn('login__box')}>
        <form  className={cn('login__box__form')}>
          <Typography variant='h4' className={cn('login__box__title')} component='h3'>Login</Typography>
          <TextField className={cn('login__box__input')} label="Email" variant="outlined" />
          <TextField className={cn('login__box__input')} label="Password" variant="outlined" type='password'/>
          <Button className={cn('login__box__button')} variant='contained'>Login</Button>
          <Link to='/register' className={cn('login__box__link')}><span>Don't have an account?</span><span> Sign up</span></Link>
         </form>
      </Paper>
    </Box>
  )
}
