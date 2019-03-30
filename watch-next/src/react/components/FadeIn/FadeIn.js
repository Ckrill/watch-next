import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// Styling
import styles from "./FadeIn.module.css";

const FadeIn = props => (
  <TransitionGroup className={styles.transitionWrapper}>
    <CSSTransition
      classNames={{
        appear: styles.fadeInAppear,
        appearActive: styles.fadeInAppearActive
      }}
      appear={true}
      timeout={250}
    >
      {props.children}
    </CSSTransition>
  </TransitionGroup>
);

export default FadeIn;
