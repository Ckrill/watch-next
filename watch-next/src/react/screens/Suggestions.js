import React from "react";

// Components
import Spinner from "../components/Spinner/Spinner";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import Wrapper from "../components/Wrapper/Wrapper";
import Button from "../components/Button/Button";
import MovieList from "../components/MovieList/MovieList";
import MovieOpinion from "../components/MovieOpinion/MovieOpinion";

// Helpers
import {
  findSuggestion,
  voteHelper,
  rewindHelper
} from "../../helpers/suggestions";
import { requestByGenre } from "../../helpers/requests";

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

  requestMovies = numberOfMovies => {
    const moviesPerRequest = 20;
    const numberOfRequests = numberOfMovies / moviesPerRequest;
    const genreSlug = this.props.match.params.genreSlug;
    let requestList = [];

    for (let i = 0; i < numberOfRequests; i++) {
      requestList.push(requestByGenre(i + 1, genreSlug));
    }

    return Promise.all(requestList);
  };

  addResultsToState = responses => {
    // Add all results to a single array: suggestions
    const suggestions = responses.map(response => response.results).flat();

    this.setState({
      suggestions
    });
  };

  vote = opinion => {
    let { alreadySuggested, currentSuggestion } = this.state;
    alreadySuggested = voteHelper(alreadySuggested, currentSuggestion, opinion);
    const foundSuggestion = findSuggestion(this.state.suggestions);

    this.setState({
      alreadySuggested,
      ...foundSuggestion
    });
  };

  rewind = () => {
    const { suggestions, currentSuggestion, alreadySuggested } = this.state;
    const rewound = rewindHelper(
      suggestions,
      currentSuggestion,
      alreadySuggested
    );

    // Move suggestion from rewindMemory to currentSuggestion
    // Update suggestions and alreadySuggested
    this.setState({
      ...rewound
    });
  };

  togglePoster = () => {
    this.setState({
      posterView: !this.state.posterView
    });
  };

  componentDidMount() {
    this.requestMovies(100)
      .then(responses => {
        this.addResultsToState(responses);

        const foundSuggestion = findSuggestion(this.state.suggestions);

        this.setState({
          isLoaded: true,
          ...foundSuggestion
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
        <Wrapper singlePage={true}>
          {!posterView && <Button icon={Cross} url={"/"} />}
          <MovieList
            movie={currentSuggestion}
            posterView={posterView}
            togglePoster={this.togglePoster}
            rewindable={alreadySuggested.length > 0}
            rewind={this.rewind}
          />
          {!posterView && <MovieOpinion vote={this.vote} />}
        </Wrapper>
      </FadeIn>
    );
  }
}

export default Suggestions;
