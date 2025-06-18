import React from "react";
import styles from "./TemplateCard.module.scss";

const TemplateCard = ({ img, onClick }) => (
  <div className={styles.card} onClick={onClick}>
    <img src={img} alt="Resume Template" className={styles.img} />
  </div>
);

export default TemplateCard; 