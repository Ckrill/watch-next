import React from "react";

// Components
import MoodListItem from "./MoodListItem";

const MoodList = props => {
  const genres = [
    { name: "Animation", id: 16 },
    { name: "Comedy", id: 35 },
    { name: "Action", id: 28 },
    { name: "Drama", id: 18 },
    { name: "Horror", id: 27 },
    { name: "Thriller", id: 53 },
    { name: "Documentary", id: 99 }
    // <li>Broarden my horizon</li> // TODO: Film som man ikke normalt ser
  ];

  return (
    <ul>
      {genres.map((genre, i) => (
        <MoodListItem key={i} {...genre} />
      ))}
    </ul>
  );
};

export default MoodList;
