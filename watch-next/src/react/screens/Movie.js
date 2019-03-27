import React from "react";
import { Link } from "react-router-dom";

// Components
import MovieOpinion from "../components/MovieOpinion";
import MovieInfo from "../components/MovieInfo";

// Images
import Close from "../../images/close.svg";
// import Rewind from "../../images/rewind.svg";

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        vote_count: 5241,
        id: 363088,
        video: false,
        vote_average: 7,
        title: "Ant-Man and the Wasp",
        popularity: 57.517,
        poster_path: "\\/rv1AWImgx386ULjcf62VYaW8zSt.jpg",
        original_language: "en",
        original_title: "Ant-Man and the Wasp",
        genre_ids: [28, 12, 878, 35, 10751],
        backdrop_path: "\\/6P3c80EOm7BodndGBUAJHHsHKrp.jpg",
        adult: false,
        overview:
          "Just when his time under house arrest is about to end, Scott Lang once again puts his freedom at risk to help Hope van Dyne and Dr. Hank Pym dive into the quantum realm and try to accomplish, against time and any chance of success, a very dangerous rescue mission.",
        release_date: "2018-07-04"
      }
    };
  }

  render() {
    return (
      <div className="movies">
        <div
          className="movie"
          data-movie-id="351286"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${
              this.state.movie.poster_path
            })`
          }}
        >
          <div className="close">
            <Link to={"/"}>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 26 26"
              >
                <path d="M21.736,19.64l-2.098,2.096c-0.383,0.386-1.011,0.386-1.396,0l-5.241-5.239L7.76,21.735 c-0.385,0.386-1.014,0.386-1.397-0.002L4.264,19.64c-0.385-0.386-0.385-1.011,0-1.398L9.505,13l-5.24-5.24 c-0.384-0.387-0.384-1.016,0-1.398l2.098-2.097c0.384-0.388,1.013-0.388,1.397,0L13,9.506l5.242-5.241 c0.386-0.388,1.014-0.388,1.396,0l2.098,2.094c0.386,0.386,0.386,1.015,0.001,1.401L16.496,13l5.24,5.241 C22.121,18.629,22.121,19.254,21.736,19.64z" />
              </svg> */}
              <img src={Close} alt="" />
            </Link>
          </div>
          <div className="movie__info">
            {/* Add to watch list */}

            {/* <div className="add-to-watch">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 26 26"
              >
                <path d="M 12 3 C 11.4 3 11 3.4 11 4 L 11 11 L 4 11 C 3.4 11 3 11.4 3 12 L 3 14 C 3 14.6 3.4 15 4 15 L 11 15 L 11 22 C 11 22.6 11.4 23 12 23 L 14 23 C 14.6 23 15 22.6 15 22 L 15 15 L 22 15 C 22.6 15 23 14.6 23 14 L 23 12 C 23 11.4 22.6 11 22 11 L 15 11 L 15 4 C 15 3.4 14.6 3 14 3 L 12 3 z" />
              </svg>
            </div> */}

            {/* Go back to previous movie */}
            {/* <div className="rewind">
              <img src={Rewind} alt="" />
            </div> */}

            <MovieInfo {...this.state.movie} />
            <MovieOpinion />
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
