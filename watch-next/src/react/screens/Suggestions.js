import React from "react";

// Settings
import settings from "../../settings/settings";

// Maps
import genreMap from "../../maps/genreMap";

// Components
import Spinner from "../components/Spinner/Spinner";
import Movie from "../components/Movie/Movie";

class Suggestions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestions: [],
      alreadySuggested: [], // Never suggest an item from this list, it has already been suggested.
      currentSuggestionIndex: null,
      isLoaded: false
    };
  }

  getByGenre = page => {
    const genreSlug = this.props.match.params.genreSlug;
    const genreObject = genreMap.find(genre => genre.slug === genreSlug);
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

    const promise = fetch(url).then(res => res.json());
    return promise;
  };

  requestAll = () => {
    return Promise.all([
      this.getByGenre(1)
      // this.getByGenre(2),
      // this.getByGenre(3),
      // this.getByGenre(4),
      // this.getByGenre(5)
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
    const index = Math.floor(Math.random() * this.state.suggestions.length);

    this.setState({
      currentSuggestionIndex: index
    });
  };

  vote = () => {
    const currentSuggestionIndex = this.state.currentSuggestionIndex;
    const suggestions = this.state.suggestions;
    const currentSuggestion = suggestions.splice(currentSuggestionIndex, 1);

    const alreadySuggested = this.state.alreadySuggested;
    alreadySuggested.push(currentSuggestion);

    this.setState({
      suggestions,
      alreadySuggested
    });

    this.chooseSuggestion();
  };

  componentDidMount() {
    this.requestAll().then(responses => {
      this.addResultsToState(responses);
      this.chooseSuggestion();

      this.setState({
        isLoaded: true
      });
    });
  }

  render() {
    const { error, isLoaded } = this.state;
    const suggestions = this.state.suggestions;

    return error ? (
      // TODO:
      // <Error
      //   errorMessage={error.message}
      //   errorMessageFun="A tasting? Today? Hmm... Are you sure?"
      // />
      "Error!"
    ) : !isLoaded ? (
      <Spinner message="Getting movies from the archive..." />
    ) : (
      <div className="suggestions">
        <Movie
          movie={suggestions[this.state.currentSuggestionIndex]}
          vote={this.vote}
        />
      </div>
    );
  }
}

export default Suggestions;
