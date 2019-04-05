// Settings
import settings from "../settings/settings";

// Maps
import genreMap from "../maps/genreMap";

// Helpers
import handleErrors from "../helpers/handleErrors";

export const requestByGenre = (page, genreSlug) => {
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
