import { Box, Container } from '@mui/material'
import classNames from 'classnames/bind'
import React from 'react'
import styles from './ResumeContentNav.module.scss'
import { CurrentButton } from '../../components/Button'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { NavLink } from 'react-router-dom'
const cx = classNames.bind(styles)
export const ResumeContentNav = ({ className, title }) => {


  return (
    <Box className={cx('resumeContentNavBox', className)}>
      <Container
        maxWidth="xl"
        sx={{
          px: 6,
          mx: 'auto', // markazga chiqarish
        }}
        className={cx('resumeContentNav')}>

        <Box className={cx('leftBox')}>
          <CurrentButton starIcon={<ArrowBackIosIcon />} color={"grey"} title="Dashboard" variant={"outlined"} >    </CurrentButton>
          <Box className={cx('leftBox__link')}>
            <NavLink>
              <CurrentButton variant="text" title={'Content'} className={cx('ContentLink')}></CurrentButton>
            </NavLink>
            <NavLink>
              <CurrentButton variant="text" title={'Customize'} className={cx('ContentLink')}></CurrentButton>
            </NavLink>
            <NavLink>
              <CurrentButton variant="text" title={'Links'} className={cx('ContentLink')}></CurrentButton>
            </NavLink>
          </Box>
        </Box>

        <Box className={cx('rightBox')}>
          <CurrentButton variant="outlined" title={'Resume 1'} className={cx('currentButton')}></CurrentButton>
          <CurrentButton variant="contained" title={'Dowland '} className={cx('currentButton2')}></CurrentButton>


        </Box>
      </Container >
    </Box >
  )
}
