/* eslint-disable react/no-unescaped-entities */
import SectionImage from "../../assets/section.jpg";
import { Link } from "react-router-dom";

import { PiMonitorFill } from "react-icons/pi";
import { HiFilm } from "react-icons/hi";
import {
  BsFillTrophyFill,
  BsFillBellFill,
  BsFillRocketTakeoffFill,
  BsGlobe,
} from "react-icons/bs";

const featuresData = [
  {
    id: 1,
    icon: <PiMonitorFill size={35} color="#bc8a33" />,
    title: "Ultra Hd",
    desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
  {
    id: 2,
    icon: <HiFilm size={35} color="#bc8a33" />,
    title: "Film",
    desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
  {
    id: 3,
    icon: <BsFillTrophyFill size={35} color="#bc8a33" />,
    title: "Awards",
    desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
  {
    id: 4,
    icon: <BsFillBellFill size={35} color="#bc8a33" />,
    title: "Notifications",
    desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
  {
    id: 5,
    icon: <BsFillRocketTakeoffFill size={35} color="#bc8a33" />,
    title: "Rocket",
    desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
  {
    id: 6,
    icon: <BsGlobe size={35} color="#bc8a33" />,
    title: "Multi Language Subtitles ",
    desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
];

const workingInfo = [
  {
    id: 1,
    number: "01",
    title: "Create an account",
    body: "It has never been an issue to find an old movie or TV show on the internet. However, this is not the case with the new releases.",
  },
  {
    id: 2,
    number: "02",
    title: "Choose your Plan",
    body: "It has never been an issue to find an old movie or TV show on the internet. However, this is not the case with the new releases.",
  },
  {
    id: 3,
    number: "03",
    title: "Enjoy MovieGo",
    body: "It has never been an issue to find an old movie or TV show on the internet. However, this is not the case with the new releases.",
  },
];

const About = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${SectionImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100px",
        }}
      >
        <div className="p-1 py-4 flex items-center justify-between">
          <h2 className="text-4xl font-bold">About Us</h2>
          <ul className="flex items-center justify-between space-x-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to=".">About Us</Link>
            </li>
          </ul>
        </div>
      </div>

      <section className="my-4">
        <h1 className="text-4xl font-bold my-2">8G – Best Place for Movies</h1>

        <p className="my-1  text-sm font-semibold">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using.
        </p>

        <p className="my-1 text-sm font-semibold">
          'Content here, content here', making it look like readable English.
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident, sometimes on purpose
          (injected humour and the like).
        </p>
        <div className="grid md:grid-cols-3 items-center justify-between mt-4 gap-6">
          {featuresData.map((item) => (
            <div
              key={item.id}
              className="py-4 flex  items-start justify-between space-x-4"
            >
              <div>{item.icon}</div>
              <div className="flex flex-col space-y-4">
                <h1 className="text-2xl font-bold ">{item.title}</h1>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="p-1 mt-8">
          <h1 className="text-4xl font-bold text-white">How it works?</h1>

          <div className="grid md:grid-cols-3 items-center justify-between my-8 gap-10">
            {workingInfo.map((item) => (
              <div
                key={item.id}
                className="p-1 flex flex-col justify-between space-y-2"
              >
                <h1 className="text-4xl font-bold text-primary ">
                  {item.number}
                </h1>
                <h3 className="font-bold text-2xl">{item.title}</h3>
                <p>{item.body} </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
