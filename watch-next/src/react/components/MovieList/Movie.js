import React from "react";

// Components
import MoviePanel from "../MoviePanel/MoviePanel";

// Styling
import styles from "./MovieList.module.css";

// Images
// import AddToList from "../../../images/addToList.svg";
// import Rewind from "../../../images/rewind.svg";

const Movie = props => {
  return (
    <div className={styles.movie} data-opinion={String(props.movie.opinion)}>
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
      {/* <MovieOpinion vote={props.vote} /> */}
      {/* </div> */}
    </div>
  );
};

export default Movie;
