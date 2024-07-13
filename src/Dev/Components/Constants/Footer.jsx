import React from "react";
import packageJson from "../../../../package.json";

const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-evenly items-center font-normal">
      <div>
        <p className="text-xs sm:text-sm md:text-md">
          &#169; Copyright 2024 GNSSMetrics.com v{packageJson.version}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
