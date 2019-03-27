import React from "react";
import PropTypes from "prop-types";

// Images
import ThumbsUp from "../../images/thumbs-up.svg";
import ThumbsDown from "../../images/thumbs-down.svg";
import Eye from "../../images/eye.svg";

const MovieOpinion = props => (
  <div className="movie__opinion">
    <div
      className="movie__opinion__button movie__opinion__button--dislike"
      data-value="-1"
      onClick={() => props.vote()}
    >
      <img className="movie-opinion__icon" src={ThumbsDown} alt="" />
    </div>
    <div
      className="movie__opinion__button movie__opinion__button--unseen"
      data-value="0"
      onClick={() => props.vote()}
    >
      <img className="movie-opinion__icon" src={Eye} alt="" />
    </div>
    <div
      className="movie__opinion__button movie__opinion__button--like"
      data-value="1"
      onClick={() => props.vote()}
    >
      <img className="movie-opinion__icon" src={ThumbsUp} alt="" />
    </div>
  </div>
);

MovieOpinion.propTypes = {
  vote: PropTypes.func.isRequired
};

export default MovieOpinion;
