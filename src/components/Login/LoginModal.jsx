import { Box, Button, Modal, Paper, TextField, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import styles from './Login.module.scss'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { instance } from '../../api/instance'

const cn = classNames.bind(styles)



export const LoginModal = ({closeLogin, open, openRegister }) => {
  const [isLoading, setisLoading] = React.useState(false)
  const [email, setEmail] = React.useState(null)
  const [password, setPassword] = React.useState(null)
  const {login: loginFn} = React.useContext(AuthContext)
  const navigate = useNavigate()

  const login = async (e) => {
    e.preventDefault()
    setisLoading(true)
    try {
      const data = {
        email,
        password,
      }
      const responce = await instance.post('/auth/login', data)
      setisLoading(false)
      console.log(responce.data.access_token);
      loginFn(responce.data.access_token)
      navigate('/createresume')
      closeLogin(false)
    } catch (error) {
      console.log(error);
      setisLoading(false)
    }
  }

  return (<Modal open={open}>
    <Box className={cn('login')} >
      <Box onClick={() => closeLogin(false)} className={cn('login__close')}></Box>
      <Paper className={cn('login__box')}>
        <form onSubmit={login}  className={cn('login__box__form')}>
          <Typography variant='h4' className={cn('login__box__title')} component='h3'>Login</Typography>
          <TextField onChange={({target}) => setEmail(target.value)} className={cn('login__box__input')} label="Email" variant="outlined" />
          <TextField onChange={({target}) => setPassword(target.value)} className={cn('login__box__input')} label="Password" variant="outlined" type='password'/>
          <Button type='submit' className={cn('login__box__button')} variant='contained'>{isLoading ? 'Loading...' : 'Login'}</Button>
          <span onClick={() => openRegister()} className={cn('login__box__link')}><span>Don't have an account?</span><span> Sign up</span></span>
         </form>
      </Paper>
    </Box>
    </Modal>
  )
}
