import React from "react";
import PropTypes from "prop-types";

// Styling
import styles from "./MoviePanel.module.css";

// Images
import Imdb from "../../../images/imdb.svg";
// import AddToList from "../../../images/addToList.svg";
import Rewind from "../../../images/rewind.svg";

const MoviePanel = props => {
  const title = props.title;
  const year = props.release_date && ` (${props.release_date.split("-")[0]})`;
  // Remove everything after the first dash (-). The format received is YYYY-MM-DD

  return (
    <div className={styles.container}>
      {/* <div className={styles.info}> */}
      {/* Add to watch list */}
      {/* <div className={styles.addToList}>
          <img src={AddToList} alt="" />
        </div> */}

      {/* Go back to previous movie */}
      {props.rewindable && (
        <div className={styles.rewind} onClick={() => props.rewind()}>
          <img src={Rewind} alt="" />
        </div>
      )}

      {/* Movie title and release year */}
      <h2 className={styles.title}>
        {title}
        {year}
      </h2>

      {/* Search IMDb for the movie */}
      <a
        className={styles.externalSource}
        href={`https://duckduckgo.com/?q=! IMDb ${title}${year}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Take the user to the IMDb page for that movie (with the Duckduckgo "feeling lucky" link) */}
        <img className={styles.externalSourceIcon} src={Imdb} alt="" />
      </a>
    </div>
  );
};

MoviePanel.propTypes = {
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string
};

export default MoviePanel;
