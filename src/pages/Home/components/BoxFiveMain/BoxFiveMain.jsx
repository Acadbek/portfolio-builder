import classNames from "classnames/bind";
import React from "react";
import style from "./BoxFiveMain.module.scss";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { data } from "./data";
const cd = classNames.bind(style);
const BoxFiveMain = () => {
  return (
    <>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          px: 6,
          mx: "auto",
        }}
      >
        <Box className={cd("indicator__main")}>
          <Typography variant="h2" className={cd("indicator__title")}>Loved & Trusted By</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mb: 2,
              gap: "50px",
            }}
          >
            <IconButton className="swiper-button-prev"></IconButton>
            <IconButton className="swiper-button-next"></IconButton>
          </Box>
        </Box>
        <Box className={cd("slider")} sx={{ width: "100%", position: "relative", px: 0, pt: 5 }}>
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={-180}
            slidesPerView={1.1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.3 },
            }}
          >
            {data.map((key) => (
              <SwiperSlide className={cd("main__slider")}>
                <Box className={cd("main__inner")}>
                  <Typography>{key.comment}</Typography>
                  <Box className={cd("main__info")}>
                    <Box>
                      <Typography className={cd("main_person")}>
                        {key.person}
                      </Typography>
                      <Typography className={cd("main_job")}>
                        {key.job}
                      </Typography>
                    </Box>
                    <img src={key.icon} alt="Icon" />
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </>
  );
};

export default BoxFiveMain;
