import { Box, Container, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import React from 'react'
import styleы from './BoxThereMain.module.scss'

const cn = classNames.bind(styleы)
export const BoxThereMain = () => {
    return (
        <Box className={cn("BoxThereMain")}>
            <Container className={cn("BoxThereMain__container")}>
                <Typography className={cn("title")}>
                    Free Resume Templates
                </Typography>
                <Typography className={cn("text")}>
                    Stop worrying about formatting—our modern, ATS-ready templates help <br />
                    you create a professional resume that stands out at any career level.
                </Typography>
            </Container>

        </Box>
    )
}
