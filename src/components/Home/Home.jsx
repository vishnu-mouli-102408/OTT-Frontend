// import Card from "../Card/Card";
import MovieList from "../../components/MovieList/MovieList";

import Cover1 from "../../assets/covers/cover1.png";
import Cover2 from "../../assets/covers/cover2.png";
import Cover3 from "../../assets/covers/cover3.png";

import Cover4 from "../../assets/covers/cover4.png";
import Cover5 from "../../assets/covers/cover5.png";
// import Carousel from "../components/Carousel";

const filmData = [
  {
    id: 1,
    coverImage: Cover1,
    rating: "8.6",
    name: "Red Display",
    genre: ["Comedy", "Action"],
  },
  {
    id: 2,
    coverImage: Cover2,
    rating: "8.6",
    name: "Red Display",
    genre: ["Comedy", "Action"],
  },
  {
    id: 3,
    coverImage: Cover3,
    rating: "8.6",
    name: "Red Display",
    genre: ["Comedy", "Action"],
  },
  {
    id: 4,
    coverImage: Cover4,
    rating: "8.6",
    name: "Red Display",
    genre: ["Comedy", "Action"],
  },
  {
    id: 5,
    coverImage: Cover5,
    rating: "8.6",
    name: "Filmora",
    genre: ["Comedy", "Action"],
  },
];

const Home = () => {
  return (
    <div style={{ paddingLeft: "25px", paddingRight: "25px" }}>
      {/* <Carousel /> */}
      <div>
        <MovieList title="8G Live Original Show" movieData={filmData} />
        <MovieList title="8G - Recently added" movieData={filmData} />

        <MovieList title="Continue Watching show" movieData={filmData} />

        <MovieList title="Top 10 web show in India" movieData={filmData} />

        <MovieList title="8G-Top rated TV shows on IMDb" movieData={filmData} />
        <MovieList title="Sci-fi series" movieData={filmData} />

        <MovieList title="8G-Because you watched" movieData={filmData} />
        <MovieList
          title="Filmfare OTT Award Winners Shows"
          movieData={filmData}
        />

        <MovieList title="Most popular" movieData={filmData} />
      </div>
    </div>
  );
};

export default Home;
