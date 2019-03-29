import React from "react";

// Maps
import genreMap from "../../../maps/genreMap";

// Components
import GenreListItem from "./GenreListItem";

// Styling
import styles from "./GenreList.module.css";

const GenreList = () => {
  return (
    <ul className={styles.list}>
      {genreMap.map((genre, i) => (
        <GenreListItem key={i} {...genre} />
      ))}
    </ul>
  );
};

export default GenreList;
