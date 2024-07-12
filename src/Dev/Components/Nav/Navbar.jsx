import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-col sm:flex-row gap-8 items-center justify-center sm:justify-between py-2 px-2">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "h-fit w-fit px-6 py-3 border bg-blue-600 rounded-2xl text-white transition duration-300 ease-in-out hover:bg-blue-500"
            : "font-normal"
        }
      >
        Load Data from File
      </NavLink>
      <NavLink
        to="/live"
        className={({ isActive }) =>
          isActive
            ? "h-fit w-fit px-6 py-3 border bg-blue-600 rounded-2xl text-white transition duration-300 ease-in-out hover:bg-blue-500"
            : "font-normal"
        }
      >
        Analyze Live Data
      </NavLink>
    </nav>
  );
};

export default Navbar;
