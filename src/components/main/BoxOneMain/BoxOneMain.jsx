import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import giftBox from '../../../assets/icon/giftBox.svg'
import qalqonIcon from '../../../assets/icon/qalqonIcon.svg'
import paperIcon from '../../../assets/icon/paperIcon.svg'
import classNames from 'classnames/bind'
import styles from './BoxOneMain.module.scss'

const cn = classNames.bind(styles)
export const BoxOneMain = () => {
    return (
        <Container disableGutters
            sx={{
                px: 6,
                maxWidth: {
                    xs: "100%",
                },
            }}>
            <Box className={cn('BoxOneMain')}>

                <Box className={cn('giftBox__card')}>
                    <img className={cn('giftBox')} src={giftBox} alt="Gift Box" />
                    <Typography className={cn('text')} variant='p' >
                        1st resume, 
                        free forever
                    </Typography>
                </Box>
                <Box className={cn('giftBox__card')}>
                    <img className={cn('giftBox')} src={qalqonIcon} alt="Gift Box" />
                    <Typography className={cn('text')} variant='p'>
                        Privacy & 
                        GDPR compliant
                    </Typography>
                </Box>
                <Box className={cn('giftBox__card')}>
                    <img className={cn('giftBox')} src={paperIcon} alt="Gift Box" />
                    <Typography className={cn('text')} variant='p'>
                        Professionally 
                        designed templates
                    </Typography>
                </Box>

            </Box>
        </Container>
    )
}
