import React from "react";
import PropTypes from "prop-types";

// Images
import ThumbsUp from "../../../images/thumbs-up.svg";
import ThumbsDown from "../../../images/thumbs-down.svg";
import Eye from "../../../images/eye.svg";

// Styling
import styles from "./MovieOpinion.module.css";

const VoteButton = props => (
  <div
    className={styles.button}
    onClick={() => props.vote()}
    style={{ background: props.background }}
  >
    <img className={styles.icon} src={props.icon} alt="" />
  </div>
);

const MovieOpinion = props => (
  <div className={styles.movieOpinion}>
    <VoteButton
      icon={ThumbsDown}
      vote={props.vote}
      background={"linear-gradient(45deg, #e74c3c 0%, #e67e22 100%)"}
    />
    <VoteButton
      icon={Eye}
      vote={props.vote}
      background={"linear-gradient(45deg, #34495e 0%, #7f8c8d 100%)"}
    />
    <VoteButton
      icon={ThumbsUp}
      vote={props.vote}
      background={"linear-gradient(45deg, #27ae60 0%, #1abc9c 100%)"}
    />
  </div>
);

MovieOpinion.propTypes = {
  vote: PropTypes.func.isRequired
};

export default MovieOpinion;
