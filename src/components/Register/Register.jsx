import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import styles from './Register.module.scss'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { instance } from '../../api/instance'

const cn = classNames.bind(styles)

export const Register = () => {
   const [isLoading, setisLoading] = React.useState(false)
   const [name, setName] = React.useState(null)
   const [email, setEmail] = React.useState(null)
   const [password, setPassword] = React.useState(null)
   const [avatar, setAvatar] = React.useState(null)
   const navigate = useNavigate()

   const register = async (a) => {
   a.preventDefault()
   setisLoading(true)
   try {
      let userData = {
         name,
         email,
         password,
         avatar,
      }
      const responce = await instance.post('/users', userData)
      setisLoading(false)
      console.log(responce);  
      navigate('/login')
   } catch (error) {
      console.log(error);      
   }
  }

  return (
   <Box className={cn('register')}>
      <Link to='/' className={cn('register__close')}></Link>
      <Paper className={cn('register__box')}>
        <form onSubmit={register} className={cn('register__box__form')}>
         <Typography variant='h4' className={cn('register__box__title')} component='h3'>Create account</Typography>
         <TextField  onChange={({target}) => setName(target.value)} className={cn('register__box__input')} label="Name" variant="outlined" />
         <TextField onChange={({target}) => setEmail(target.value)} className={cn('register__box__input')} label="Email" variant="outlined" type='email'/>
         <TextField onChange={({target}) => setPassword(target.value)} className={cn('register__box__input')} label="Password" variant="outlined" type='password'/>
         <TextField onChange={({target}) => setAvatar(target.value)} className={cn('register__box__input')} label="Profile Image Url" variant="outlined"/>
         <Button type='submit' className={cn('register__box__button')} variant='contained'>{isLoading ? 'Loading...' : 'Signup'}</Button>
         <Link to='/login' className={cn('register__box__link')}><span>Already have an account?</span> <span>Login</span></Link>
         </form>
      </Paper>
   </Box>
  )
}
