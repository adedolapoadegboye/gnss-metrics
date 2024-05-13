import React from "react";
// import {
//   FaSquareGithub,
//   FaLinkedin,
//   FaSquareXTwitter,
//   FaSquareInstagram,
//   FaBoxArchive,
// } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-evenly items-center font-normal">
      <div>
        <p className="text-xs md:text-sm">
          &#169; Copyright 2024 GNSSMetrics.com
        </p>
      </div>
      {/* <div className="flex gap-2 sm:gap-6">
        <a
          href="https://github.com/adedolapoadegboye"
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
        <a
          href="https://www.instagram.com/adethedeveloper"
          target="_blank"
          rel="noreferrer"
        >
          <FaSquareInstagram size={25} />
        </a>
        <a
          href="https://twitter.com/AdeTheDeveloper"
          target="_blank"
          rel="noreferrer"
        >
          <FaSquareXTwitter size={25} />
        </a>
      </div> */}
    </footer>
  );
};

export default Footer;
