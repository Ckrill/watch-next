import React from "react";

// Styling
import styles from "./Wrapper.module.css";

const Wrapper = props => (
  <div className={props.singlePage ? styles.singlePage : styles.wrapper}>
    {props.children}
  </div>
);

export default Wrapper;
