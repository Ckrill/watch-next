import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MoodListItem = props => (
  <li data-genre-id="16">
    <Link to={"/" + props.id}>{props.name}</Link>
  </li>
);

MoodListItem.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number
};

export default MoodListItem;
