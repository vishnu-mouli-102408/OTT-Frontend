/* eslint-disable react/no-unescaped-entities */
import SectionImage from "../../assets/section.jpg";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Privacy = () => {
  return (
    <>
      <Navbar />
      <div style={{ paddingLeft: "25px", paddingRight: "25px" }}>
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
            <h2 className="text-4xl font-bold">Privacy Policy</h2>
            <ul className="flex items-center justify-between space-x-4">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to=".">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="my-12">
          <p className="my-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <p className="my-4">
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like).
          </p>
          <p className="my-4">
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet. It uses a dictionary of over 200 Latin words,
            combined with a handful of model sentence structures, to generate
            Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
            therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
        </div>

        <div></div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
