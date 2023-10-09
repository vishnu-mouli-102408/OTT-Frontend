/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Card from "../Card/Card";

const MovieList = ({ title, movieData }) => {
  return (
    <div>
      <h1 className="text-4xl text-white my-3 font-bold">{title}</h1>
      <div className="flex items-center space-x-1 justify-between">
        {movieData?.map((film) => (
          <Card movie={film} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
