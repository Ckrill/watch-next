import React from "react";

// Styling
import styles from "./SpinnerAnimation.module.css";

const SpinnerAnimation = () => (
  <div className={styles.spinner}>
    <span className={styles.spinner__inner}>
      <span className={styles.spinner__dot + " " + styles.spinner__dot1} />
      <span className={styles.spinner__dot + " " + styles.spinner__dot2} />
      <span className={styles.spinner__front} />
      <span className={styles.spinner__back} />
    </span>
    <span
      className={styles.spinner__inner + " " + styles.spinner__innersecondary}
    >
      <span className={styles.spinner__dot + " " + styles.spinner__dot1} />
      <span className={styles.spinner__dot + " " + styles.spinner__dot2} />
      <span className={styles.spinner__front} />
    </span>
  </div>
);

export default SpinnerAnimation;
