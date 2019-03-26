import React from "react";
import { Link } from "react-router-dom";

const MoodListItem = props => (
  <li data-genre-id="16">
    <Link to={"/" + props.id}>{props.name}</Link>
  </li>
);

export default MoodListItem;
