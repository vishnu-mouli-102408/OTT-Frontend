/* eslint-disable react/jsx-key */
import { BsPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CLOUD_FRONT } from "../../env";
import { useDispatch } from "react-redux";
import { setSelectedVideo } from "../../userSlice";
function card({ movie }) {
  const dispatch = useDispatch();
  const handleMovieClick = () => {
    dispatch(setSelectedVideo(movie));
  };
  return (
    <>
      <Link to="detail" onClick={handleMovieClick}>
        <div
          className="card card--big bg-black border-0 relative"
          style={{ maxWidth: "250px", maxHeight: "360px" }}
        >
          <div className="card__cover">
            <img src={`${CLOUD_FRONT}/${movie?.key}thumbnail.jpeg`} />
            <a href="" className="card__play">
              <h3 className="icon ion-ios-play">
                {" "}
                <BsPlayFill size={50} />{" "}
              </h3>
            </a>
            {/* <span className="card_rate card_rate--green">
              {movie.rating || 8.3}
            </span> */}
          </div>
          <div className="card__content">
            {/* <h3 className="card__title">
              <a href="details.html">{movie?.movieName}</a>
            </h3> */}
            {/* <span className="card__category">
              {movie.genre.map((item) => (
                <a href="#">{item}</a>
              ))}
            </span> */}
          </div>
        </div>
      </Link>
    </>
  );
}

export default card;
