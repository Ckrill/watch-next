import React from "react";
import { Link } from "react-router-dom";

// Styling
import styles from "./Close.module.css";

// Images
import Cross from "../../../images/close.svg";

const Close = () => (
  <Link className={styles.close} to={"/"}>
    <img className={styles.icon} src={Cross} alt="" />
  </Link>
);

export default Close;
