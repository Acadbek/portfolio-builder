import React from "react";
import styles from "./FilterButton.module.scss";

const FilterButton = ({ active, children, ...props }) => (
  <button
    className={`${styles.btn} ${active ? styles.active : ""}`}
    {...props}
  >
    {children}
  </button>
);

export default FilterButton; 