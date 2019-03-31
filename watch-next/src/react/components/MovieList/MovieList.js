import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// Components
import Movie from "./Movie";

// Styles
import styles from "./MovieList.module.css";

const MovieList = props => {
  return (
    <TransitionGroup className={styles.movies}>
      <CSSTransition
        classNames={{
          exit: styles.movieTransitionExit,
          exitActive: styles.movieTransitionExitActive
        }}
        key={props.movie.id}
        timeout={500}
      >
        <Movie
          movie={props.movie}
          posterView={props.posterView}
          togglePoster={props.togglePoster}
          rewindable={props.rewindable}
          rewind={props.rewind}
        />
      </CSSTransition>
    </TransitionGroup>
  );
};

export default MovieList;
