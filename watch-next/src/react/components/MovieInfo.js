import React from "react";
import PropTypes from "prop-types";

// Images
import NewWindow from "../../images/new-window.svg";

const MovieInfo = props => {
  const title = props.title;
  const year = props.release_date.split("-")[0];
  // Remove everything after the first dash (-). The format received is YYYY-MM-DD

  return (
    <>
      {/* Movie title and release year */}
      <h2 className="movie__title">
        {title} ({year})
      </h2>

      {/* Search IMDb for the movie */}
      <a
        href={`https://duckduckgo.com/?q=! IMDb ${title} (${year})`}
        className="movie__open-in-imdb"
        target="_blank"
      >
        {/* Take the user to the IMDb page for that movie (with the google "feeling lucky" link) */}
        <img className="movie__new-window" src={NewWindow} alt="" />
      </a>
    </>
  );
};

MovieInfo.propTypes = {
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired
};

export default MovieInfo;
