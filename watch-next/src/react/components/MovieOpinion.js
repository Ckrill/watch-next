import React from "react";

// Images
import ThumbsUp from "../../images/thumbs-up.svg";
import ThumbsDown from "../../images/thumbs-down.svg";
import Eye from "../../images/eye.svg";

const MovieOpinion = () => (
  <div className="movie__opinion">
    <div
      className="movie__opinion__button movie__opinion__button--dislike"
      data-value="-1"
    >
      <img className="movie-opinion__icon" src={ThumbsDown} alt="" />
    </div>
    <div
      className="movie__opinion__button movie__opinion__button--unseen"
      data-value="0"
    >
      <img className="movie-opinion__icon" src={Eye} alt="" />
    </div>
    <div
      className="movie__opinion__button movie__opinion__button--like"
      data-value="1"
    >
      <img className="movie-opinion__icon" src={ThumbsUp} alt="" />
    </div>
  </div>
);

export default MovieOpinion;
