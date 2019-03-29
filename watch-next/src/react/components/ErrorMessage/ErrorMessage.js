import React from "react";
import PropTypes from "prop-types";

// Styling
import styles from "./ErrorMessage.module.css";

const ErrorMessage = props => (
  <div className={styles.container}>
    <div className={styles.text}>{props.message}</div>
    <div className={styles.details}>Error: {props.details}</div>
  </div>
);

ErrorMessage.propTypes = {
  message: PropTypes.string,
  details: PropTypes.string
};

export default ErrorMessage;
