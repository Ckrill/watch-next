import React from "react";

const MovieInfo = props => (
  <>
    {/* Movie title and release year */}
    <h2 className="movie__title">
      {props.title} ({props.release_date.split("-")[0]})
      {/* Remove everything after the first dash (-). The format received is YYYY-MM-DD */}
    </h2>

    {/* Search IMDb for the movie */}
    <a
      href={`https://duckduckgo.com/?q=! IMDb ${props.title} (${
        props.release_date.split("-")[0]
      })`}
      className="movie__open-in-imdb"
      target="_blank"
    >
      {/* Take the user to the IMDb page for that movie (with the google "feeling lucky" link) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 26 26"
      >
        <path d="M 4 4 C 2.9 4 2 4.9 2 6 L 2 17 L 4 15 L 4 8 L 23 8 L 23 20 L 9 20 L 7 22 L 23 22 C 24.1 22 25 21.1 25 20 L 25 6 C 25 4.9 24.1 4 23 4 L 4 4 z M 6 13 L 7.8125 14.8125 L 1.03125 21.5625 L 2.4375 22.96875 L 9.1875 16.1875 L 11 18 L 11 13 L 6 13 z" />
      </svg>
    </a>
  </>
);

export default MovieInfo;
