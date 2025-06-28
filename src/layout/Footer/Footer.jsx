import classNames from "classnames/bind";
import React from "react";
import style from "./Footer.module.scss";
import { Box, Container, Typography } from "@mui/material";
import logo from "../../assets/icon/logoIcom.svg";
import FooterLogo from "../../assets/icon/FooterLogo";
import {
  FaEnvelope,
  FaFacebook,
  FaRedditAlien,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
const cn = classNames.bind(style);
const Footer = () => {
  return (
    <Box className={cn("footer")}>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          px: 6,
          mx: "auto",
        }}
      >
        <Box className={cn("main__footer")}>
          <Box className={cn("footer__content")}>
            <Box className={cn("img")}>
              <FooterLogo />
            </Box>
            <Typography className={cn("footer__desc")}>
              We are indie developers based in Austria - Mozart, not kangaroos.
              Our mission: Empower job seekers worldwide. We are here to make
              your journey smoother, more enjoyable and ultimately more
              successful.
            </Typography>
            <Box className={cn("footer__info")}>
              <Typography className={cn("icon__text")}>
                Tell your friends about us
              </Typography>
              <Box className={cn("icons")}>
                <FaEnvelope cursor={"pointer"} color="white" size={20} />
                <IoLogoLinkedin cursor={"pointer"} color="white" size={22} />
                <FaTelegram cursor={"pointer"} color="white" size={20} />
                <FaFacebook cursor={"pointer"} color="white" size={20} />
                <FaWhatsapp  cursor={"pointer"} color="white" size={20} />
                <FaTwitter cursor={"pointer"} color="white" size={20} />
                <FaRedditAlien cursor={"pointer"} color="white" size={20} />
              </Box>
            </Box> 
            <Typography className={cn("footer__last")}>
              © 2025 Uniqkorn Creative GmbH
            </Typography>
          </Box>
          <Box className={cn("footer__list")}>
            <Typography className={cn("list__title")}>Product</Typography>
            <Box component="ul">
              <Box
                component="li"
                sx={{
                  marginBottom: 2,
                  color: "#E2E1DA",
                  marginTop: "20px",
                  fontSize: "17px",
                  cursor: "pointer"
                }}
              >
                Resume Templates
              </Box>
              <Box
                component="li"
                sx={{ marginBottom: 2, color: "#E2E1DA", fontSize: "17px", cursor: "pointer" }}
              >
                AI Resume Writer
              </Box>
              <Box
                component="li"
                sx={{ marginBottom: 2, color: "#E2E1DA", fontSize: "17px",
                    cursor: "pointer"
                 }}
              >
                Cover Letter
              </Box>
              <Box
                component="li"
                sx={{ marginBottom: 2, color: "#E2E1DA", fontSize: "17px",
                    cursor: "pointer"
                 }}
              >
                Cover Letter Templates
              </Box>
              <Box
                component="li"
                sx={{ marginBottom: 2, color: "#E2E1DA", fontSize: "17px",
                    cursor: "pointer"
                 }}
              >
                Job Tracker
              </Box>
            </Box>
          </Box>
          <Box className={cn("footer__list")}>
            <Typography className={cn("list__title")}>Company</Typography>
            <Box component="ul">
              <Box
                component="li"
                sx={{
                  marginBottom: 2,
                  color: "#E2E1DA",
                  marginTop: "20px",
                  fontSize: "17px",
                  cursor: "pointer"
                }}
              >
                About
              </Box>
              <Box
                component="li"
                sx={{ marginBottom: 2, color: "#E2E1DA", fontSize: "17px", cursor: "pointer" }}
              >
                Pricing
              </Box>
              <Box
                component="li"
                sx={{ marginBottom: 2, color: "#E2E1DA", fontSize: "17px", cursor: "pointer" }}
              >
                Contact
              </Box>
              <Box
                component="li"
                sx={{ marginBottom: 2, color: "#E2E1DA", fontSize: "17px", cursor: "pointer" }}
              >
                Terms of Service
              </Box>
              <Box
                component="li"
                sx={{ marginBottom: 2, color: "#E2E1DA", fontSize: "17px", cursor: "pointer" }}
              >
                Privacy Policy
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
