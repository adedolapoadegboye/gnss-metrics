import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { RiGpsFill } from "react-icons/ri";
import Name from "../../Styles/Name";
import Navbar from "../Nav/Navbar";
import { FaSquareGithub, FaLinkedin, FaBoxArchive } from "react-icons/fa6";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center px-4 sm:px-8 md:px-12 h-full">
      <button className="sm:hidden" onClick={toggleMenu}>
        <IoIosMenu size={30} />
      </button>
      <div className="flex justify-center w-full sm:w-auto sm:justify-start items-center gap-2">
        <button>
          <RiGpsFill size={35} className="md:hidden" />
          <RiGpsFill size={45} className="hidden md:block" />
        </button>
        <div className="flex items-center">
          <Name />
        </div>
      </div>
      <div className="hidden sm:flex gap-4">
        <Navbar />
      </div>
      <div className="hidden sm:flex gap-4">
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
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white w-11/12 sm:w-3/4 p-4 rounded-lg flex flex-col gap-6 relative">
            <button
              onClick={toggleMenu}
              className="absolute top-2 right-2 text-red-600 text-lg hover:bg-red-200 rounded-full p-1"
              aria-label="Close"
            >
              &#10005;
            </button>
            <Navbar />
            <div className="flex justify-center gap-6">
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
        </div>
      )}
    </div>
  );
};

export default Header;
