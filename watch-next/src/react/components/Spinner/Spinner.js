import React from "react";
import PropTypes from "prop-types";

// Components
import SpinnerAnimation from "./SpinnerAnimation";

// Styles
import styles from "./Spinner.module.css";

const Spinner = props => (
  <div className={styles.spinner}>
    <span>{props.message ? props.message : "Loading..."}</span>
    <SpinnerAnimation />
  </div>
);

Spinner.propTypes = {
  message: PropTypes.string
};

export default Spinner;
