import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-8 items-center justify-between py-2 px-2">
      <NavLink
        to={"/"}
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? `` : ``,
            isActive
              ? `h-fit w-fit px-6 py-3 border bg-blue-600 rounded-2xl text-white transition duration-300 ease-in-out hover:bg-blue-500`
              : `font-normal`,
            isTransitioning ? `` : ``,
          ].join(" ")
        }
      >
        Load from file
      </NavLink>
      <NavLink
        to={"/live"}
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? `` : ``,
            isActive
              ? `h-fit w-fit px-6 py-3 border bg-blue-600 rounded-2xl text-white transition duration-300 ease-in-out hover:bg-blue-500`
              : `font-normal`,
            isTransitioning ? `` : ``,
          ].join(" ")
        }
      >
        Connect to live test
      </NavLink>
    </nav>
  );
};

export default Navbar;
