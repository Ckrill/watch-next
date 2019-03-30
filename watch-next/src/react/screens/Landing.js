import React from "react";

// Compoments
import GenreList from "../components/GenreList/GenreList";
import Title from "../components/Title/Title";
import FadeIn from "../components/FadeIn/FadeIn";

const Landing = props => (
  <FadeIn>
    <div className="genre">
      <Title />
      <GenreList />
    </div>
  </FadeIn>
);

export default Landing;
