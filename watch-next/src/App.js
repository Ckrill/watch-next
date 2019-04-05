import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Screens
import Landing from "./react/screens/Landing";
import Suggestions from "./react/screens/Suggestions";
import NotFound from "./react/screens/NotFound";

// Styling
import "./App.css";
// import "./from-old-site.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Landing} />
          <Route exact path={"/mood/:genreSlug"} component={Suggestions} />

          {/* Not Found */}
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

// TODO: Animate the first page in, in a nice way
// TODO: What should happen after the suggestions list is empty?

// TODO: Sometimes a movies is shown twice. It should not be.
// TODO: Hvis man liker en film som allerede findes i session.similarMovies, skal den fjernes fra session.similarMovies.
// TODO: Make sure that if session.similarMovies run out of movies, the app will go back to getting popular movies, or should it go back to showing high rated movies?

// FUTURE: Save data to local storage
// FUTURE: Ny genre: "Broarden my horizon" - Film som man ikke normalt ser
// FUTURE: Swipe right to like, left to dislike, up to unsee, down to unsee (or down to add to watch list)
// FUTURE: Make the app load X (5) movies ahead, so that it has time to load the picture, before it has to be shown.
// FUTURE: Optimere anbefalings algoritme: Tag top X (10)% og abefal en film fra disse.
// FUTURE: Optimere anbefalings algoritme: Når en film anbefales skal den have et timestamp, og hvis den ender i session.unseenMovies skal den ikke vises igen i X(7) dage.
// FUTURE: Optimere anbefalings algoritme: Film der anbefales (tilføjes til session.SimilarMovies) skal have en rating over X (6.5).
// FUTURE: Når session.similarMovies er skal en ny side hentes ind i session.movies.
