import React from "react";

// Components
import MovieOpinion from "../MovieOpinion/MovieOpinion";
import MoviePanel from "../MoviePanel/MoviePanel";
import Button from "../Button/Button";

// Styling
import styles from "./Movie.module.css";

// Images
import Cross from "../../../images/close.svg";
// import AddToList from "../../../images/addToList.svg";
// import Rewind from "../../../images/rewind.svg";

const Movie = props => {
  return (
    <div className={styles.movie}>
      <Button icon={Cross} url={"/"} />
      <img
        className={styles.poster}
        src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
        alt=""
      />
      {/* <div className={styles.info}> */}
      {/* Add to watch list */}
      {/* <div className={styles.addToList}>
          <img src={AddToList} alt="" />
        </div> */}

      {/* Go back to previous movie */}
      {/* <div className={styles.rewind}>
          <img src={Rewind} alt="" />
        </div> */}

      <MoviePanel {...props.movie} />
      <MovieOpinion vote={props.vote} />
      {/* </div> */}
    </div>
  );
};

export default Movie;
