import { useState } from "react";
import Logo from "../../assets/logo.png";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

const NavbarData = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Movies", url: "/movies" },
  { id: 3, name: "Web Shows", url: "/web-shows" },
  { id: 4, name: "Music", url: "/music" },
  { id: 5, name: "Rent", url: "/rent" },
  { id: 6, name: "Mini Movies", url: "/mini-moives" },
];

const Navbar = () => {
  const [outline, setOutline] = useState(false);
  console.log(outline);
  return (
    <div className="p-1 flex flex-col space-y-4  bg-black py-2  ">
      <div className=" flex items-center justify-between">
        <Link to="/">
          <img src={Logo} alt="OTT Logo" className="w-20 h-16" />
        </Link>
        <ul className="flex items-center space-x-12 text-xl font-[500]">
          {NavbarData.map((item) => (
            <li key={item.id} className="cursor-pointer hover:text-[#bc8a33]">
              {item.name}
            </li>
          ))}
          <li>EN</li>
        </ul>
        <a
          href="#"
          className="px-8 border-2 py-2 rounded text-sm border-[#bc8a33]"
        >
          SIGN IN
        </a>
      </div>
      <div
        className={`w-full rounded-2xl flex items-center justify-between bg-[#131314] px-4 py-2 border-0 space-x-4 ${
          outline ? "border-2 border-primary" : ""
        }`}
      >
        <input
          className="bg-transparent w-full outline-none"
          placeholder="Search..."
          onFocus={() => setOutline(true)}
        />
        <BiSearch size={20} />
      </div>
    </div>
  );
};

export default Navbar;