import React from "react";

// Settings
import settings from "../../settings/settings";

// Maps
import genreMap from "../../maps/genreMap";

// Components
import Spinner from "../components/Spinner/Spinner";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import Button from "../components/Button/Button";
import MovieList from "../components/MovieList/MovieList";
import MovieOpinion from "../components/MovieOpinion/MovieOpinion";

// Helpers
import handleErrors from "../../helpers/handleErrors";

// Images
import Cross from "../../images/close.svg";
import FadeIn from "../components/FadeIn/FadeIn";

class Suggestions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      error: null,
      suggestions: [],
      alreadySuggested: [], // Never suggest an item from this list, it has already been suggested.
      currentSuggestion: null,
      posterView: false
    };
  }

  getByGenre = page => {
    const genreSlug = this.props.match.params.genreSlug;
    const genreObject = genreMap.find(genre => genre.slug === genreSlug);
    if (!genreObject) {
      this.setState({
        isLoaded: true,
        error: { message: `Genre "${genreSlug}", could not be found.` }
      });
      return false;
    }

    const mode = "discover/movie?",
      // query = "&with_genres=18&primary_release_year=2014",
      // query = "&primary_release_year=2010&sort_by=vote_average.desc&vote_count.gte=50", // Best average with over 50 ratings
      genre = "&with_genres=" + genreObject.id,
      quality = "&vote_average.gte=7", // Rating greater than
      quantity = "&vote_count.gte=50", // Votes greater than
      popularity = "&sort_by=popularity.desc", // Most popular
      query = quality + quantity + popularity;

    const url = `${settings.endpoint}${mode}&${
      settings.key
    }&page=${page}${genre}${query}`;

    const promise = fetch(url).then(handleErrors);
    return promise;
  };

  requestAll = () => {
    return Promise.all([
      this.getByGenre(1),
      this.getByGenre(2),
      this.getByGenre(3),
      this.getByGenre(4),
      this.getByGenre(5)
    ]);
  };

  addResultsToState = responses => {
    // Add all results to a single array: suggestions
    const suggestions = responses.map(response => response.results).flat();

    this.setState({
      suggestions
    });
  };

  chooseSuggestion = () => {
    if (!this.state.suggestions.length) {
      this.setState({
        isLoaded: true,
        error: { message: `What the hell! You have seen all the movies.` }
      });

      return false;
    }

    const index = Math.floor(Math.random() * this.state.suggestions.length);

    // const previousSuggestion = this.state.currentSuggestion;
    // this.setState({
    //   rewindMemory: previousSuggestion
    // });

    const suggestions = this.state.suggestions;
    const currentSuggestion = suggestions.splice(index, 1)[0];

    this.setState({
      suggestions,
      currentSuggestion
    });
  };

  vote = opinion => {
    const currentSuggestion = this.state.currentSuggestion;

    if (currentSuggestion.opinion) {
      // Prevent the user from vote more than once
      return false;
    }

    currentSuggestion.opinion = opinion;
    // Skal jeg opdatere state med currentSuggestion? Eller er det tids nok at state bliver opdateret nedenunder?
    this.setState({
      currentSuggestion
    });

    const alreadySuggested = this.state.alreadySuggested;
    alreadySuggested.push(currentSuggestion);

    // This block triggers 2 updates of the state, therefore Movie is painted twice
    this.setState({
      alreadySuggested
    });

    this.chooseSuggestion();
    // This block triggers 2 updates of the state, therefore Movie is painted twice - END
  };

  rewind = () => {
    const suggestions = this.state.suggestions;
    const currentSuggestion = this.state.currentSuggestion;
    const alreadySuggested = this.state.alreadySuggested;

    if (!alreadySuggested.length > 0) {
      return false;
    }

    const previousSuggestion = alreadySuggested.splice(
      [alreadySuggested.length - 1],
      1
    )[0];

    // Add current suggestion back to suggestions
    suggestions.push(currentSuggestion);

    // Remove previous opinion from suggestion
    delete previousSuggestion.opinion;

    // Move suggestion from rewindMemory to currentSuggestion
    // Update suggestions and alreadySuggested
    this.setState({
      currentSuggestion: previousSuggestion,
      suggestions: suggestions,
      alreadySuggested: alreadySuggested
    });
  };

  togglePoster = () => {
    this.setState({
      posterView: !this.state.posterView
    });
  };

  componentDidMount() {
    this.requestAll()
      .then(responses => {
        this.addResultsToState(responses);
        this.chooseSuggestion();

        this.setState({
          isLoaded: true
        });
      })
      .catch(error => {
        this.setState({
          isLoaded: true,
          error
        });
      });
  }

  render() {
    const {
      error,
      isLoaded,
      currentSuggestion,
      alreadySuggested,
      posterView
    } = this.state;

    return error ? (
      <ErrorMessage
        message="When is this movie from again?"
        details={error.message}
      />
    ) : !isLoaded ? (
      <Spinner message="Getting movies from the archive..." />
    ) : (
      <FadeIn>
        <div className="suggestions">
          {!posterView && <Button icon={Cross} url={"/"} />}
          <MovieList
            movie={currentSuggestion}
            posterView={posterView}
            togglePoster={this.togglePoster}
            rewindable={alreadySuggested.length > 0}
            rewind={this.rewind}
          />
          {!posterView && <MovieOpinion vote={this.vote} />}
        </div>
      </FadeIn>
    );
  }
}

export default Suggestions;
