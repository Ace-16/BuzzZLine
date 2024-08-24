import React from "react";
import logo from "../assets/BuzzzLineLogo.png";

import { FaSignalMessenger } from "react-icons/fa6";
import { FaNewspaper } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-darker-purple fixed z-10 w-dvw flex justify-between">
      <div className="navlogo flex ml-4">
        <img className="h-20 py-1" src={logo} alt="This is the logo" />
        <Link to={"/"}>
          <div className="text-lighter-purple text-5xl font-HeadingFont pt-2 mt-2 mx-4">
            BuzzzLine
          </div>
        </Link>
      </div>
      <div className="nav_menu flex mr-4">
        <FaNewspaper className="text-4xl text-lighter-purple mt-5 mx-4" />
        <FaSignalMessenger className="text-4xl text-lighter-purple mt-5 mx-4" />
        <Link to={"/login"}>
          <img className="h-20 py-1" src={logo} alt="This is the logo" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
