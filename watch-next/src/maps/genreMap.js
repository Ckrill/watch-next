// Images
import Animation from "../images/genre/animation.svg";
import Action from "../images/genre/action.svg";
import Comedy from "../images/genre/comedy.svg";
import Documentary from "../images/genre/documentary.svg";
import Drama from "../images/genre/drama.svg";
import Horror from "../images/genre/horror.svg";
import Romance from "../images/genre/romance.svg";
import Thriller from "../images/genre/thriller.svg";
import ScienceFiction from "../images/genre/science-fiction.svg";
import Western from "../images/genre/western.svg";

const genreMap = [
  { name: "Action", slug: "action", id: 28, icon: Action },
  { name: "Animation", slug: "animation", id: 16, icon: Animation },
  { name: "Comedy", slug: "comedy", id: 35, icon: Comedy },
  { name: "Documentary", slug: "documentary", id: 99, icon: Documentary },
  { name: "Drama", slug: "drama", id: 18, icon: Drama },
  { name: "Horror", slug: "horror", id: 27, icon: Horror },
  { name: "Romance", slug: "romance", id: 10749, icon: Romance },
  {
    name: "Science Fiction",
    slug: "science-fiction",
    id: 878,
    icon: ScienceFiction
  },
  { name: "Thriller", slug: "thriller", id: 53, icon: Thriller },
  { name: "Western", slug: "western", id: 37, icon: Western }
];

export default genreMap;
