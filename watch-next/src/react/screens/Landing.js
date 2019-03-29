import React from "react";

// Compoments
import GenreList from "../components/GenreList/GenreList";
import Title from "../components/Title/Title";

const Landing = props => (
  <div className="genre">
    <Title />
    <GenreList />
  </div>
);

export default Landing;
