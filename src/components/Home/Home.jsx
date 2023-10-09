// /* eslint-disable react/jsx-key */
// import Sidebar from "../Sidebar/Sidebar";
// import { videodata } from "./videos";
// import VideoCard from "../VideoCard/VideoCard";
// import "./Home.css";
// import { SidebarData } from "../Sidebar/Sidebardata";
// import { Box } from "@mui/material";
// export default function Home() {
//   return (
//     <div className="flex-row">
//       <Box sx={{ display: { xs: "none", md: "flex" } }}>
//         <Sidebar SidebarData={SidebarData} />
//       </Box>
//       <div className="flex-row flex-wrap videoContent justify-content-center">
//         {videodata.map((video) => (
//           <VideoCard item={video} />
//         ))}
//       </div>
//     </div>
//   );
// }

// New Home

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
    <div>
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
