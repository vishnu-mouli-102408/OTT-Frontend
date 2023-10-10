// import Card from "../Card/Card";
import MovieList from "../../components/MovieList/MovieList";

import Cover1 from "../../assets/covers/cover1.png";
import Cover2 from "../../assets/covers/cover2.png";
import Cover3 from "../../assets/covers/cover3.png";

import Cover4 from "../../assets/covers/cover4.png";
import Cover5 from "../../assets/covers/cover5.png";
import { getAllMoviesAdmin } from "../../services/adminAction";
// import Carousel from "../components/Carousel";
import { useEffect, useState } from "react";
const Home = () => {
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    getAllMoviesAdmin({ accepted: true })
      .then((response) => {
        console.log(response.data, "data");
        setMovieData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div style={{ paddingLeft: "25px", paddingRight: "25px" }}>
      {/* <Carousel /> */}
      <div>
        <MovieList title="8G Live Original Show" movieData={movieData} />
        {/* <MovieList title="8G - Recently added" movieData={filmData} />

        <MovieList title="Continue Watching show" movieData={filmData} />

        <MovieList title="Top 10 web show in India" movieData={filmData} />

        <MovieList title="8G-Top rated TV shows on IMDb" movieData={filmData} />
        <MovieList title="Sci-fi series" movieData={filmData} />

        <MovieList title="8G-Because you watched" movieData={filmData} />
        <MovieList
          title="Filmfare OTT Award Winners Shows"
          movieData={filmData}
        />

        <MovieList title="Most popular" movieData={filmData} /> */}
      </div>
    </div>
  );
};

export default Home;
