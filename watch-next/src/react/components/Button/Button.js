import React from "react";
import { Link } from "react-router-dom";

// Styling
import styles from "./Button.module.css";

const Button = props => (
  <Link className={styles.button} to={props.url}>
    <img className={styles.icon} src={props.icon} alt="" />
  </Link>
);

export default Button;
