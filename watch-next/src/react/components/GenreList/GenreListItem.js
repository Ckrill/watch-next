import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Styling
import styles from "./GenreList.module.css";

const GenreListItem = props => (
  <li className={styles.item}>
    <Link className={styles.link} to={"/" + props.slug}>
      <img className={styles.icon} src={props.icon} alt="" />
      <span className={styles.text}>{props.name}</span>
    </Link>
  </li>
);

GenreListItem.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number
};

export default GenreListItem;
