import classNames from 'classnames/bind'
import React from 'react'
import styles from './BoxTwoMain.module.scss'
import { Box, Container, Typography } from '@mui/material'
const cn = classNames.bind(styles)
import addImgOne from "../../../../assets/img/step1.webp";
import addImgTwo from "../../../../assets/img/step2.webp";
import addImgThere from "../../../../assets/img/step3.webp";

export const BoxTwoMain = () => {
    return (
        <Container disableGutters
        sx={{
          px: 6,
          maxWidth: {
            xs: "100%",
          },
        }} className={cn("BoxTwoMain")}>
            <Typography>
                How FlowCV works
            </Typography>
            <Box className={cn("BoxTwoMain__Box")}>

                <Box className={cn("boxs")}>
                    <img src={addImgOne} alt="" />
                    <Box>
                        <Typography className={cn("content")}>
                            1. Add content
                        </Typography>
                        <Typography className={cn("textBuld")}>
                            Build your resume — we'll guide you every step of <br /> the way to ensure it's professional and polished.
                        </Typography>

                    </Box>
                </Box>
                <Box className={cn("boxs")}>
                    <img src={addImgTwo} alt="" />
                    <Box>
                        <Typography className={cn("content")}>
                            2. Design effortlessly
                        </Typography>
                        <Typography className={cn("textBuld")}>
                            Choose from over 50 templates and customize <br /> every detail to suit your style and career.
                        </Typography>

                    </Box>
                </Box>
                <Box className={cn("boxs")}>
                    <img src={addImgThere} alt="" />
                    <Box>
                        <Typography className={cn("content")}>
                            3. Download & Share
                        </Typography>
                        <Typography className={cn("textBuld")}>
                            Download your resume as a PDF or share <br /> it online with your unique link.
                        </Typography>

                    </Box>
                </Box>
            </Box>
        </Container>
    )
}
