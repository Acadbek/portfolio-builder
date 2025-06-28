import classNames from "classnames/bind";
import styles from "./BoxFourMain.module.scss";
import { Box, Container, Typography } from "@mui/material";
import { data } from "./data.js";
const cn = classNames.bind(styles);
const BoxFourMain = () => {
  console.log(data);

  return (
    <div>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          px: 6,
          mx: "auto",
        }}
      >
        <Box className={cn("Main")}>
          <Typography className={cn("main__text")} variant="h2">
            Everything you need, made simple
          </Typography>
          <Typography className={cn("text__main")}>
            No hidden fees, no watermarks, no surprises. Your data stays
            private, your first CV is <br /> free forever, and you can create,
            edit, and download it anytime.
          </Typography>
        </Box>
        <Box className={cn("main__cards")}>
          {data.map((card) => (
            <Box className={cn("card")} key={card.id}>
              <Box className={cn("icon__wrapper")}>
                <Box className={cn("home__icon")}>
                <card.icon/>
              </Box>
              </Box>
              <Typography className={cn("title")}>
                {card.title}
              </Typography>
              <Typography className={cn("description")}>
                {card.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </div>
  );
};

export default BoxFourMain;
