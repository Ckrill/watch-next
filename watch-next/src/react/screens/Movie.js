import React from "react";
import { Link } from "react-router-dom";

// Components

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 26 26"
              >
                <path d="M21.736,19.64l-2.098,2.096c-0.383,0.386-1.011,0.386-1.396,0l-5.241-5.239L7.76,21.735 c-0.385,0.386-1.014,0.386-1.397-0.002L4.264,19.64c-0.385-0.386-0.385-1.011,0-1.398L9.505,13l-5.24-5.24 c-0.384-0.387-0.384-1.016,0-1.398l2.098-2.097c0.384-0.388,1.013-0.388,1.397,0L13,9.506l5.242-5.241 c0.386-0.388,1.014-0.388,1.396,0l2.098,2.094c0.386,0.386,0.386,1.015,0.001,1.401L16.496,13l5.24,5.241 C22.121,18.629,22.121,19.254,21.736,19.64z" />
              </svg>
            </Link>
          </div>
          <div className="movie__info">
            {/* <!--                    Add to watch list--> */}
            {/* <!--
                    <div class="add-to-watch">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 26 26">
                            <path d="M 12 3 C 11.4 3 11 3.4 11 4 L 11 11 L 4 11 C 3.4 11 3 11.4 3 12 L 3 14 C 3 14.6 3.4 15 4 15 L 11 15 L 11 22 C 11 22.6 11.4 23 12 23 L 14 23 C 14.6 23 15 22.6 15 22 L 15 15 L 22 15 C 22.6 15 23 14.6 23 14 L 23 12 C 23 11.4 22.6 11 22 11 L 15 11 L 15 4 C 15 3.4 14.6 3 14 3 L 12 3 z"></path>
                        </svg>
                    </div>
--> */}

            {/* <!--                    Go back to previous movie--> */}
            {/* <!--
                    <div class="rewind">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 50 50">
                            <path d="M25,6c-4.5,0-8.7,1.6-12,4.4v-0.1V8c0-1.1-0.9-2-2-2S9,6.9,9,8v9h1l0,0h2.5l0,0H18c1.1,0,2-0.9,2-2s-0.9-2-2-2h-1.8 c2.5-1.9,5.6-3,8.8-3c8.3,0,15,7,15,15.5S33.3,41,25,41c-8,0-14.8-6.7-15-15c0-1.1-0.9-2-2-2s-2,0.9-2,2c0.3,10.5,8.8,19,19,19 c10.5,0,19-8.7,19-19.5S35.5,6,25,6z"></path>
                        </svg>
                    </div>
--> */}

            {/* <!--                    Movie title and release year--> */}
            <h2 className="movie__title">
              {this.state.movie.title} (
              {this.state.movie.release_date.split("-")[0]})
              {/* Remove everything after the first dash (-). The format received is YYYY-MM-DD */}
            </h2>

            {/* <!--                    Search in Imdb for the movie--> */}
            <a
              href={`https://duckduckgo.com/?q=! IMDb ${
                this.state.movie.title
              }(${this.state.movie.release_date.split("-")[0]})&amp;btnI`}
              className="movie__open-in-imdb"
              target="_blank"
            >
              {/* <!--Take the user to the IMDb page for that movie (with the google "feeling lucky" link)--> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 26 26"
              >
                <path d="M 4 4 C 2.9 4 2 4.9 2 6 L 2 17 L 4 15 L 4 8 L 23 8 L 23 20 L 9 20 L 7 22 L 23 22 C 24.1 22 25 21.1 25 20 L 25 6 C 25 4.9 24.1 4 23 4 L 4 4 z M 6 13 L 7.8125 14.8125 L 1.03125 21.5625 L 2.4375 22.96875 L 9.1875 16.1875 L 11 18 L 11 13 L 6 13 z" />
              </svg>
            </a>
            <div className="movie__opinion">
              <div
                className="movie__opinion__button movie__opinion__button--dislike"
                data-value="-1"
              >
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="48px"
                  height="48px"
                  viewBox="0 0 48 48"
                  enableBackground="new 0 0 48 48"
                  //   xml:space="preserve"
                >
                  <g>
                    <g>
                      <path
                        fill="#FFCC80"
                        d="M20.959,30H36V6H20.959c-3.247,0-5.878,2.686-5.878,5.997V24C15.081,27.315,17.712,30,20.959,30z"
                      />
                      <path
                        fill="#FFCC80"
                        d="M32,27c0-1.657,1.343-3,3-3h3c1.657,0,3,1.343,3,3l0,0c0,1.657-1.343,3-3,3h-3C33.343,30,32,28.657,32,27
                                            L32,27z"
                      />
                      <path
                        fill="#FFCC80"
                        d="M29,21c0-1.657,1.343-3,3-3h6c1.657,0,3,1.343,3,3l0,0c0,1.657-1.343,3-3,3h-6C30.343,24,29,22.657,29,21
                                            L29,21z"
                      />
                      <path
                        fill="#FFCC80"
                        d="M28,15c0-1.657,1.343-3,3-3h6c1.657,0,3,1.343,3,3l0,0c0,1.657-1.343,3-3,3h-6C29.343,18,28,16.657,28,15
                                            L28,15z"
                      />
                      <path
                        fill="#FFCC80"
                        d="M27,9c0-1.657,1.343-3,3-3h6c1.657,0,3,1.343,3,3l0,0c0,1.657-1.343,3-3,3h-6C28.343,12,27,10.657,27,9
                                            L27,9z"
                      />
                      <path
                        fill="#FFCC80"
                        d="M17.407,28.746l8.193-4.266l2.626,4.763c1.36,2.462,1.813,5.243,1.813,8.071v1.392
                                            C30.04,40,28.854,42,27.072,42h-0.675c-0.582,0-1.092-0.402-1.231-0.98l-0.724-2.955c-0.334-1.354-0.99-2.601-1.916-3.631
                                            L17.407,28.746z"
                      />
                    </g>
                    <g>
                      <path
                        fill="#F2A25A"
                        d="M39,24h-4c-0.552,0-1-0.447-1-1s0.448-1,1-1L39,24z"
                      />
                      <path
                        fill="#F2A25A"
                        d="M38,18h-4c-0.552,0-1-0.447-1-1s0.448-1,1-1L38,18z"
                      />
                      <path
                        fill="#F2A25A"
                        d="M37,12h-4c-0.552,0-1-0.447-1-1s0.448-1,1-1L37,12z"
                      />
                    </g>
                    <rect
                      x="6.04"
                      y="7"
                      fill="#009688"
                      width="10"
                      height="22"
                    />
                    <circle fill="#B2DFDB" cx="11.04" cy="12" r="2" />
                  </g>
                </svg>
              </div>
              <div
                className="movie__opinion__button movie__opinion__button--unseen"
                data-value="0"
              >
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="48px"
                  height="48px"
                  viewBox="0 0 48 48"
                  enableBackground="new 0 0 48 48"
                  //   xml:space="preserve"
                >
                  <path
                    fill="#FFFFFF"
                    d="M5.995,24c0,0,8.06-11,18.004-11s17.996,11,17.996,11S33.944,35,24,35S5.995,24,5.995,24z"
                  />
                  <path
                    fill="#CFD8DC"
                    d="M24,13c9.945,0,17.996,11,17.996,11S33.944,35,24,35S5.995,24,5.995,24S14.055,13,24,13 M24,11
                                    C13.165,11,4.735,22.335,4.382,22.818L3.516,24l0.866,1.182C4.735,25.665,13.165,37,24,37s19.256-11.336,19.61-11.818L44.474,24
                                    l-0.864-1.181C43.256,22.336,34.834,11,24,11L24,11z"
                  />
                  <path
                    fill="#00ACC1"
                    d="M15,23.953c0-4.971,4.034-8.994,9-8.994c4.967,0,9,4.023,9,8.994c0,4.977-4.033,9.006-9,9.006
                                    C19.034,32.959,15,28.93,15,23.953z"
                  />
                  <path
                    fill="#006064"
                    d="M20,23.958c0-2.213,1.786-3.999,4-3.999c2.203,0,4,1.786,4,3.999c0,2.22-1.797,4.001-4,4.001
                                    C21.786,27.959,20,26.178,20,23.958z"
                  />
                  <path
                    fill="#90A4AE"
                    d="M6.025,23.96C6.549,23.26,14.394,13,24,13c9.606,0,17.442,10.26,17.965,10.96h4.958l-1.7-2.322
                                    C44.846,21.121,35.838,9,24,9C12.163,9,3.146,21.12,2.769,21.636L1.065,23.96H6.025z"
                  />
                  <rect
                    x="21.586"
                    y="-3.284"
                    transform="matrix(0.7071 -0.7071 0.7071 0.7071 -9.7696 23.5859)"
                    fill="#37474F"
                    width="4"
                    height="53.74"
                  />
                </svg>
              </div>
              <div
                className="movie__opinion__button movie__opinion__button--like"
                data-value="1"
              >
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="48px"
                  height="48px"
                  viewBox="0 0 48 48"
                  enableBackground="new 0 0 48 48"
                  //   xml:space="preserve"
                >
                  <g>
                    <path
                      fill="#FFCC80"
                      d="M22.959,18H38v24H22.959c-3.247,0-5.878-2.686-5.878-5.996V24C17.081,20.684,19.712,18,22.959,18z"
                    />
                    <path
                      fill="#FFCC80"
                      d="M34,21c0,1.656,1.343,3,3,3h3c1.657,0,3-1.344,3-3l0,0c0-1.656-1.343-3-3-3h-3
                                        C35.343,18,34,19.344,34,21L34,21z"
                    />
                    <path
                      fill="#FFCC80"
                      d="M31,27c0,1.656,1.343,3,3,3h6c1.657,0,3-1.344,3-3l0,0c0-1.656-1.343-3-3-3h-6
                                        C32.343,24,31,25.344,31,27L31,27z"
                    />
                    <path
                      fill="#FFCC80"
                      d="M30,33c0,1.656,1.343,3,3,3h6c1.657,0,3-1.344,3-3l0,0c0-1.656-1.343-3-3-3h-6
                                        C31.343,30,30,31.344,30,33L30,33z"
                    />
                    <path
                      fill="#FFCC80"
                      d="M29,39c0,1.656,1.343,3,3,3h6c1.657,0,3-1.344,3-3l0,0c0-1.656-1.343-3-3-3h-6
                                        C30.343,36,29,37.344,29,39L29,39z"
                    />
                    <path
                      fill="#FFCC80"
                      d="M24.526,13.566c0.926-1.031,1.582-2.277,1.916-3.631l0.724-2.955C27.306,6.402,27.815,6,28.397,6
                                        h0.675c1.781,0,2.968,2,2.968,3.293v1.393c0,2.828-0.453,5.609-1.813,8.072l-2.626,4.762l-8.193-4.266L24.526,13.566z"
                    />
                  </g>
                  <g>
                    <path
                      fill="#F2A25A"
                      d="M41,24h-4c-0.552,0-1,0.447-1,1c0,0.553,0.448,1,1,1L41,24z"
                    />
                    <path
                      fill="#F2A25A"
                      d="M40,30h-4c-0.552,0-1,0.447-1,1s0.448,1,1,1L40,30z"
                    />
                    <path
                      fill="#F2A25A"
                      d="M39,36h-4c-0.552,0-1,0.447-1,1s0.448,1,1,1L39,36z"
                    />
                  </g>
                  <polygon fill="#BA68C8" points="18,41 8,41 5,19 18,19 " />
                  <circle fill="#F3E5F5" cx="13" cy="36" r="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
