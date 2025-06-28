import Typography from "@mui/material/Typography";
import classNames from "classnames/bind";
import React from "react";
import styles from "./BoxFourMain.module.scss";
import { Container } from "@mui/material";

const cd = classNames.bind(styles);

const BoxFourMain = () => {
  return (
    <div className={cd("cover")}>
      <Container
        disableGutters
        sx={{
          px: 6,
          maxWidth: {
            xs: "100%",
          },
        }}
      >
        <Typography className={cd("main__text")}>
          Everything you need, made simple
        </Typography>
        <Typography className={cd("main-paragraph")}>
            No hidden fees, no watermarks, no surprises. Your data stays private, your first CV is <br /> free forever, and you can create, edit, and download it anytime.
        </Typography>
      </Container>
    </div>
  );
};

export default BoxFourMain;
