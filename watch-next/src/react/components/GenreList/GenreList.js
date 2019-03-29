import React from "react";

// Components
import GenreListItem from "./GenreListItem";

// Styling
import styles from "./GenreList.module.css";

// Images
import Animation from "../../../images/genre/animation.svg";
import Action from "../../../images/genre/action.svg";
import Comedy from "../../../images/genre/comedy.svg";
import Documentary from "../../../images/genre/documentary.svg";
import Drama from "../../../images/genre/drama.svg";
import Horror from "../../../images/genre/horror.svg";
import Thriller from "../../../images/genre/thriller.svg";
import ScienceFiction from "../../../images/genre/science-fiction.svg";

const GenreList = () => {
  const genres = [
    { name: "Action", id: 28, icon: Action },
    { name: "Animation", id: 16, icon: Animation },
    { name: "Comedy", id: 35, icon: Comedy },
    { name: "Documentary", id: 99, icon: Documentary },
    { name: "Drama", id: 18, icon: Drama },
    { name: "Horror", id: 27, icon: Horror },
    { name: "Science Fiction", id: 878, icon: ScienceFiction },
    { name: "Thriller", id: 53, icon: Thriller }
  ];

  return (
    <ul className={styles.list}>
      {genres.map((genre, i) => (
        <GenreListItem key={i} {...genre} />
      ))}
    </ul>
  );
};

export default GenreList;
