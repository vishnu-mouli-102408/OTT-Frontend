import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="shadow py-4 "
      style={{ paddingLeft: "25px", paddingRight: "25px" }}
    >
      <div className="flex items-center justify-between">
        <div className="text-sm opacity-70">
          © 8G, 2023-2024 <br />
          Create by Bharath IT Solutions
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contacts</Link>
          <Link to="/privacy">Privacy Policy</Link>

          <button className="p-3 border rounded border-[#bc8a33]">
            <FaArrowUp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
