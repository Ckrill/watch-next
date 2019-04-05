import React from "react";

// Compoments
import FadeIn from "../components/FadeIn/FadeIn";
import Wrapper from "../components/Wrapper/Wrapper";
import Title from "../components/Title/Title";
import GenreList from "../components/GenreList/GenreList";

const Landing = props => (
  <FadeIn>
    <Wrapper>
      <Title />
      <GenreList />
    </Wrapper>
  </FadeIn>
);

export default Landing;
