"use client";

import { ErrorBoundary } from "react-error-boundary";
import Error404 from "./Contexts/Error";
import React from "react";
import Header from "./Components/Constants/Header";
import Footer from "./Components/Constants/Footer";
import FromFile from "./Pages/FromFile";

const Homepage = () => {
  return (
    <ErrorBoundary
      fallback={
        <div>
          <Error404 />
        </div>
      }
    >
      <div className="w-full h-full flex flex-col bg-gray-100 overflow-y-auto relative">
        <div className="h-[8vh] sm:h-[8vh] md:h-[10vh] w-full border-b-2 border-gray-200 fixed top-0 z-10 bg-white bg-opacity-100">
          <Header />
        </div>
        <div className="flex-grow w-full px-[5vw] sm:px-[10vw] py-[calc(12vh)] sm:py-[calc(12vh)] md:py-[calc(14vh)]">
          <FromFile />
        </div>
        <div className="h-[10vh] sm:h-[8vh] md:h-[7vh] lg:h-[6vh] xl:h-[5vh] w-full border-gray-200 bg-white bg-opacity-100">
          <Footer />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Homepage;
