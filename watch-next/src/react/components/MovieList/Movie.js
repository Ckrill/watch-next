import React from "react";

// Components
import MoviePanel from "../MoviePanel/MoviePanel";

// Styling
import styles from "./MovieList.module.css";

const Movie = props => {
  return (
    <div className={styles.movie} data-opinion={String(props.movie.opinion)}>
      <img
        className={styles.poster}
        src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
        alt=""
        data-poster-view={String(props.posterView)}
        onClick={props.togglePoster}
      />

      {!props.posterView && (
        <MoviePanel
          {...props.movie}
          rewindable={props.rewindable}
          rewind={props.rewind}
        />
      )}
    </div>
  );
};

export default Movie;
