/* eslint-disable react/jsx-key */
import { BsPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function card({ movie }) {
  return (
    <>
      <Link to="detail">
        <div className="card card--big bg-black border-0 relative">
          <div className="card__cover">
            <img src={movie.coverImage} />
            <a href="" className="card__play">
              <h3 className="icon ion-ios-play">
                {" "}
                <BsPlayFill size={50} />{" "}
              </h3>
            </a>
            {/* <span className="card_rate card_rate--green">{movie.rating}</span> */}
          </div>
          <div className="card__content">
            <h3 className="card__title">
              <a href="details.html">{movie.name}</a>
            </h3>
            <span className="card__category">
              {movie.genre.map((item) => (
                <a href="#">{item}</a>
              ))}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}

export default card;
