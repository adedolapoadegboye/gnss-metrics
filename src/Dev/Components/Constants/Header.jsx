import React from "react";
import { IoIosMenu } from "react-icons/io";
import { RiGpsFill } from "react-icons/ri";
import Name from "../../Styles/Name";
import Navbar from "../Nav/Navbar";
import { FaSquareGithub, FaLinkedin, FaBoxArchive } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="flex gap-2 items-center justify-between px-2 sm:px-4">
      <button className="hidden">
        <IoIosMenu size={35} />
      </button>
      <div className="flex gap-2">
        <button>
          <RiGpsFill size={35} color="black" />
        </button>
        <div>
          <Name />
        </div>
      </div>
      <div className="sm:flex gap-4 hidden">
        <Navbar />
      </div>
      <div className="flex gap-4">
        <a
          href="https://github.com/adedolapoadegboye/gnss-metrics"
          target="_blank"
          rel="noreferrer"
        >
          <FaSquareGithub size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/adegboyeadedolapo"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={25} />
        </a>
        <a href="https://adedolapo.dev" target="_blank" rel="noreferrer">
          <FaBoxArchive size={25} />
        </a>
      </div>
    </div>
  );
};

export default Header;
