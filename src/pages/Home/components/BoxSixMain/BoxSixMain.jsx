import { Box, Container, Typography } from "@mui/material";
import classNames from "classnames/bind";
import React, { useState } from "react";
import styles from "./BoxSixMain.module.scss";
import OpenAcardion from "../../../../assets/icon/Open";
import CloseAcardion from "../../../../assets/icon/CloseAcardion";

const cn = classNames.bind(styles);

const BoxSixMain = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionItems = [
    {
      question: "What is FlowCV?",
      answer:
        "FlowCV is a resume builder that provides customizable templates and career tools, such as cover letters and job trackers, to help users create professional resumes and extend their professional reach.",
    },
    {
      question: "Is FlowCV free to use?",
      answer:
        "Yes, FlowCV offers a free resume builder where your first resume remains free forever, including all design features, with no hidden fees or watermarks. We have upgrades available if you need multiple resumes or want to use AI features to enhance your job search.",
    },
     {
      question: "How can FlowCV be free?",
      answer:
        "FlowCV is built by a tiny team of indie developers who design and develop everything ourselves. We keep costs low by being small and efficient, which allows us to offer the core features for free while sustaining development through premium upgrades.",
    },
     {
      question: "Can I create different versions of my resume on FlowCV?",
      answer:
        "Absolutely, FlowCV allows you to create multiple versions of your resume or cover letter with just one click, catering to different job applications.",
    },
     {
      question: "How does FlowCV ensure my data is safe?",
      answer:
        "FlowCV is GDPR-compliant, meaning we adhere to data protection regulations, and we commit to not selling user data. Users have the option to delete their data at any time.",
    },
     {
      question: "Does FlowCV support multiple languages?",
      answer:
        "Yes, FlowCV offers multilingual support, enabling users to customize their resumes in various languages, addressing global career opportunities.",
    },
     {
      question: "Can I also create cover letters with FlowCV?",
      answer:
        "Yes, FlowCV allows you to create cover letters that match your resume seamlessly.",
    },
  ];

  return (
    <Container
      disableGutters
      maxWidth="xl"
      sx={{
        px: 6,
        mx: "auto",
      }}
    >
      <Box className={cn("main__acardion")}>
        <Typography className={cn("heading__main")}>
          Frequently Asked Questions
        </Typography>

        <Box className={cn("main__cover")}>
            {accordionItems.map((item, index) => (
          <Box  key={index}>
            <Box
              onClick={() => toggleAccordion(index)}
              className={cn("acar__content")}
            >
              <Typography className={cn("title__acardion")}>
                {item.question}
              </Typography>
              {openIndex === index ? <CloseAcardion /> : <OpenAcardion />}
            </Box>

            {openIndex === index && (
              <Typography className={cn("description")}>
                {item.answer}
              </Typography>
            )}
          </Box>
        ))}
        </Box>
      </Box>
    </Container>
  );
};

export default BoxSixMain;
