/* eslint-disable react/no-unescaped-entities */
import CoverImage from "../../assets/covers/cover5.png";
import ReactPlayer from "react-player";

const MovieDetail = () => {
  return (
    <div className="px-1 py-8" style={{ padding: "25px" }}>
      <h1 className="text-4xl font-bold">I Dream in Another Language</h1>
      <div className="flex items-start justify-between my-8 space-x-4">
        <div className="flex items-start space-x-4 ">
          <div className="md:w-1/2">
            <img src={CoverImage} className="w-full h-96" />
            <button className="w-full bg-primary py-3">Watch Trailer</button>
          </div>
          <div className="md:w-1/2">
            <div>
              <ul className="text-md">
                <li>
                  <span>Director:</span> Vince Gilligan
                </li>
                <li className="text-primary">
                  <span className="text-white">Cast:</span>{" "}
                  <a href="#">Brian Cranston</a> <a href="#">Jesse Plemons</a>{" "}
                  <a href="#">Matt Jones</a> <a href="#">Jonathan Banks</a>{" "}
                  <a href="#">Charles Baker</a> <a href="#">Tess Harper</a>
                </li>
                <li>
                  <span>Genre:</span> <a href="#">Action</a>
                  <a href="#">Triler</a>
                </li>
                <li>
                  <span>Release year:</span> 2019
                </li>
                <li>
                  <span>Running time:</span> 130 min
                </li>
                <li>
                  <span>Country:</span>{" "}
                  <a href="#" className="text-primary">
                    USA
                  </a>
                </li>
              </ul>
              <div className="card__description h-[300px] overflow-y-auto">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English.
              </div>
            </div>
          </div>
        </div>
        <div>
          <ReactPlayer url="https://www.youtube.com/watch?v=LXb3EKWsInQ" />
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
