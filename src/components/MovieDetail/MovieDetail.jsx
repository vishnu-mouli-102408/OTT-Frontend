/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import CoverImage from "../../assets/covers/cover5.png";
import ReactPlayer from "react-player";
import "../../pages/css/details.css";
import user from "../../assets/user.svg";
import Cover from "../../assets/covers/cover.png";
import { BsPlayFill } from "react-icons/bs";
import Project1 from "../../assets/gallery/project-1.jpg";
import Project2 from "../../assets/gallery/project-2.jpg";
import Project3 from "../../assets/gallery/project-3.jpg";
import Project4 from "../../assets/gallery/project-4.jpg";
import Project5 from "../../assets/gallery/project-5.jpg";
import Project6 from "../../assets/gallery/project-6.jpg";
// import VideoLayout from "../VideoLayout";

const MovieDetail = () => {
  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }
  return (
    <div className="px-8 py-8">
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
          {/* <VideoLayout /> */}
        </div>
      </div>
      <div className="content">
        <div className="content-head">
          <div className="cont-head">
            <div className="row-head">
              <div className="col-head">
                <h2 className="conten_title">Discover</h2>
                <ul className="ul-head">
                  <li className="li-head" onClick={() => updateToggle(1)}>
                    REVIEWS
                  </li>
                  <li className="li-head" onClick={() => updateToggle(2)}>
                    PHOTOS
                  </li>
                  <li className="li-head" onClick={() => updateToggle(3)}>
                    CAST
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cont-head">
        <div className="row-head">
          {/* left corner */}
          <div className="coll-head">
            <div className="tab-content">
              <div className="tab-head">
                <div className="row-head">
                  <div className="col-head">
                    <div className={toggle === 1 ? "show-content" : "reviews"}>
                      <ul className="rev-list">
                        <li className="rev-item">
                          <div className="rev-aut">
                            <img className="rev-img" src={user} />
                            <span className="rev-nam">
                              Best Marvel movie in my opinion
                            </span>
                            <span className="rev-time">
                              24.08.2018, 17:53 by John Doe
                            </span>
                            <span className="rev-rat">8.4</span>
                          </div>
                          <p className="rev-text">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of text.
                          </p>
                        </li>
                        <li className="rev-item">
                          <div className="rev-aut">
                            <img className="rev-img" src={user} />
                            <span className="rev-nam">
                              Best Marvel movie in my opinion
                            </span>
                            <span className="rev-time">
                              24.08.2018, 17:53 by John Doe
                            </span>
                            <span className="rev-rat">8.4</span>
                          </div>
                          <p className="rev-text">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of text.
                          </p>
                        </li>
                        <li className="rev-item">
                          <div className="rev-aut">
                            <img className="rev-img" src={user} />
                            <span className="rev-nam">
                              Best Marvel movie in my opinion
                            </span>
                            <span className="rev-time">
                              24.08.2018, 17:53 by John Doe
                            </span>
                            <span className="rev-rat">8.4</span>
                          </div>
                          <p className="rev-text">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of text.
                          </p>
                        </li>
                      </ul>

                      <form className="form-head">
                        <input
                          type="text"
                          className="in-head"
                          placeholder="Title"
                        />
                        <textarea className="txt-head" placeholder="Review" />

                        <button className="btn-submit">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={toggle === 2 ? "show-content" : "reviews"}>
              <div className="pic">
                <div className="pic-1">
                  <div className="pic-row">
                    <div className="pic-2">
                      <a className="pic-4">
                        <img src={Project1} />
                      </a>
                    </div>
                    <div className="pic-2">
                      <a className="pic-4">
                        <img src={Project2} />
                      </a>
                    </div>
                    <div className="pic-2">
                      <a className="pic-4">
                        <img src={Project3} />
                      </a>
                    </div>
                    <div className="pic-2">
                      <a className="pic-4">
                        <img src={Project4} />
                      </a>
                    </div>
                    <div className="pic-2">
                      <a className="pic-4">
                        <img src={Project5} />
                      </a>
                    </div>
                    <div className="pic-2">
                      <a className="pic-4">
                        <img src={Project6} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={toggle === 3 ? "show-content" : "reviews"}>
              <div className="pic">
                <div className="pic-1">
                  <div className="pic-row">
                    <div className="pic-2">
                      <a className="pic-4">
                        <img src={Project2} />
                      </a>
                    </div>
                    <div className="pic-2">
                      <a className="pic-4">
                        <img src={Project1} />
                      </a>
                    </div>
                    <div className="pic-2">
                      <a className="pic-4">
                        <img src={Project3} />
                      </a>
                    </div>
                    <div className="pic-2">
                      <a className="pic-4">
                        <img src={Project4} />
                      </a>
                    </div>
                    <div className="pic-2">
                      <a className="pic-4">
                        <img src={Project5} />
                      </a>
                    </div>
                    <div className="pic-2">
                      <a className="pic-4">
                        <img src={Project6} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* left corner end */}

          {/* right corner */}
          <div className="coll-right">
            <div className="row-right">
              <div className="col-righ">
                <h2 className="h2-right">You may also like...</h2>
              </div>
              <div className="card-right">
                <div className="card card--big">
                  <div className="card__cover">
                    <img src={Cover} />
                    <a href="details.html" className="card__play">
                      {/* <i className="icon ion-ios-play"></i> */}
                      <h3 className="icon ion-ios-play">
                        {" "}
                        <BsPlayFill />{" "}
                      </h3>
                    </a>
                    {/* <span className="card_rate card_rate--green">7.9</span> */}
                  </div>
                  <div className="card_content">
                    <h3 className="card__title">Benched</h3>
                    <span className="card__category">
                      <a href="#">Romance</a>
                      <a href="#">Drama</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-right">
                <div className="card card--big">
                  <div className="card__cover">
                    <img src={Cover} />
                    <a href="details.html" className="card__play">
                      {/* <i className="icon ion-ios-play"></i> */}
                      <h3 className="icon ion-ios-play">
                        {" "}
                        <BsPlayFill />{" "}
                      </h3>
                    </a>
                    {/* <span className="card_rate card_rate--green">7.9</span> */}
                  </div>
                  <div className="card_content">
                    <h3 className="card__title">Benched</h3>
                    <span className="card__category">
                      <a href="#">Romance</a>
                      <a href="#">Drama</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="card-right">
                <div className="card card--big">
                  <div className="card__cover">
                    <img src={Cover} />
                    <a href="details.html" className="card__play">
                      {/* <i className="icon ion-ios-play"></i> */}
                      <h3 className="icon ion-ios-play">
                        {" "}
                        <BsPlayFill />{" "}
                      </h3>
                    </a>
                    {/* <span className="card_rate card_rate--green">7.9</span> */}
                  </div>
                  <div className="card_content">
                    <h3 className="card__title">Benched</h3>
                    <span className="card__category">
                      <a href="#">Romance</a>
                      <a href="#">Drama</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-right">
                <div className="card card--big">
                  <div className="card__cover">
                    <img src={Cover} />
                    <a href="details.html" className="card__play">
                      {/* <i className="icon ion-ios-play"></i> */}
                      <h3 className="icon ion-ios-play">
                        {" "}
                        <BsPlayFill />{" "}
                      </h3>
                    </a>
                    {/* <span className="card_rate card_rate--green">7.9</span> */}
                  </div>
                  <div className="card_content">
                    <h3 className="card__title">Benched</h3>
                    <span className="card__category">
                      <a href="#">Romance</a>
                      <a href="#">Drama</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-right">
                <div className="card card--big">
                  <div className="card__cover">
                    <img src={Cover} />
                    <a href="details.html" className="card__play">
                      {/* <i className="icon ion-ios-play"></i> */}
                      <h3 className="icon ion-ios-play">
                        {" "}
                        <BsPlayFill />{" "}
                      </h3>
                    </a>
                    {/* <span className="card_rate card_rate--green">7.9</span> */}
                  </div>
                  <div className="card_content">
                    <h3 className="card__title">Benched</h3>
                    <span className="card__category">
                      <a href="#">Romance</a>
                      <a href="#">Drama</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-right">
                <div className="card card--big">
                  <div className="card__cover">
                    <img src={Cover} />
                    <a href="details.html" className="card__play">
                      {/* <i className="icon ion-ios-play"></i> */}
                      <h3 className="icon ion-ios-play">
                        {" "}
                        <BsPlayFill />{" "}
                      </h3>
                    </a>
                    {/* <span className="card_rate card_rate--green">7.9</span> */}
                  </div>
                  <div className="card_content">
                    <h3 className="card__title">Benched</h3>
                    <span className="card__category">
                      <a href="#">Romance</a>
                      <a href="#">Drama</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
