/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import { CLOUD_FRONT } from "../../env";
import "../../pages/css/details.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import VideoLayout from "../VideoLayout";
import { useSelector } from "react-redux";
const MovieDetail = () => {
  const userState = useSelector((state) => state.user);
  const { selectedVideo } = userState;
  const link = `${CLOUD_FRONT}/${selectedVideo?.key}${selectedVideo.movieName}.mp4`;
  console.log(selectedVideo);
  return (
    <>
      <Navbar />
      <div className="px-8 py-8">
        <h1 className="text-4xl font-bold">I Dream in Another Language</h1>
        <div className="flex items-start justify-between my-8 space-x-4">
          <div
            className="flex items-start space-x-4"
            style={{ marginTop: "50px" }}
          >
            <div className="md:w-1/2">
              <img
                src={`${CLOUD_FRONT}/${selectedVideo.key}thumbnail.jpeg`}
                className="w-full h-96"
              />
              <button
                className="w-full bg-primary py-3"
                style={{ borderRadius: "10px" }}
              >
                Watch Trailer
              </button>
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
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed to
                  using 'Content here, content here', making it look like
                  readable English.
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", height: "400px" }}>
            <VideoLayout videoLink={link} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MovieDetail;
