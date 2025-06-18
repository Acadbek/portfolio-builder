import { Box, Container, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import React from 'react'
import styles from './BoxThereMain.module.scss'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
import { CurrentButton } from '../../Button/Button'



const cn = classNames.bind(styles)
export const BoxThereMain = ({ variant, title }) => {
    return (
        <Box className={cn("BoxThereMain")}>
            <Container disableGutters
                sx={{
                    px: 6,
                    maxWidth: {
                        xs: "100%",
                    },
                }} className={cn("BoxThereMain__container")}>
                <Typography className={cn("title")}>
                    Free Resume Templates
                </Typography>
                <Typography className={cn("text")}>
                    Stop worrying about formatting—our modern, ATS-ready templates help <br />
                    you create a professional resume that stands out at any career level.
                </Typography>
            </Container>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className={cn("mySwiper")}
            >

                <SwiperSlide>
                    <img className={cn("header__right")} src="https://assets.flowcvassets.com/landing/main-landing-hero-1920w.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={cn("header__right")} src="https://assets.flowcvassets.com/landing/main-landing-hero-1920w.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={cn("header__right")} src="https://assets.flowcvassets.com/landing/main-landing-hero-1920w.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={cn("header__right")} src="https://assets.flowcvassets.com/landing/main-landing-hero-1920w.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={cn("header__right")} src="https://assets.flowcvassets.com/landing/main-landing-hero-1920w.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={cn("header__right")} src="https://assets.flowcvassets.com/landing/main-landing-hero-1920w.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={cn("header__right")} src="https://assets.flowcvassets.com/landing/main-landing-hero-1920w.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={cn("header__right")} src="https://assets.flowcvassets.com/landing/main-landing-hero-1920w.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={cn("header__right")} src="https://assets.flowcvassets.com/landing/main-landing-hero-1920w.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={cn("header__right")} src="https://assets.flowcvassets.com/landing/main-landing-hero-1920w.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={cn("header__right")} src="https://assets.flowcvassets.com/landing/main-landing-hero-1920w.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={cn("header__right")} src="https://assets.flowcvassets.com/landing/main-landing-hero-1920w.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={cn("header__right")} src="https://assets.flowcvassets.com/landing/main-landing-hero-1920w.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={cn("header__right")} src="https://assets.flowcvassets.com/landing/main-landing-hero-1920w.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={cn("header__right")} src="https://assets.flowcvassets.com/landing/main-landing-hero-1920w.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={cn("header__right")} src="https://assets.flowcvassets.com/landing/main-landing-hero-1920w.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={cn("header__right")} src="https://assets.flowcvassets.com/landing/main-landing-hero-1920w.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={cn("header__right")} src="https://assets.flowcvassets.com/landing/main-landing-hero-1920w.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={cn("header__right")} src="https://assets.flowcvassets.com/landing/main-landing-hero-1920w.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={cn("header__right")} src="https://assets.flowcvassets.com/landing/main-landing-hero-1920w.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={cn("header__right")} src="https://assets.flowcvassets.com/landing/main-landing-hero-1920w.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={cn("header__right")} src="https://assets.flowcvassets.com/landing/main-landing-hero-1920w.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={cn("header__right")} src="https://assets.flowcvassets.com/landing/main-landing-hero-1920w.webp" alt="" />
                </SwiperSlide>

            </Swiper>
            <CurrentButton className={cn("btn")} title={"Show all Templates"}></CurrentButton>

        </Box>
    )
}
