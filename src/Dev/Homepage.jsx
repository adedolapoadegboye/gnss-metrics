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
      <div className="max-w-screen h-full flex flex-col bg-gray-100 overflow-y-auto relative">
        <div className="h-1/8 w-full border-b-2 border-gray-200 fixed top-0 z-10 bg-white bg-opacity-100 pt-2 md:pt-4 pb-2 md:pb-4">
          <Header />
        </div>
        <div className="h-full w-full px-[5vw] sm:px-[10vw] py-[2vw] pt-[12vh] sm:pt-[15vh]">
          <FromFile />
        </div>
        <div className="h-1/8 w-full border-t-2 pt-4 md:pt-8 pb-4 md:pb-8 bg-white">
          <Footer />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Homepage;
