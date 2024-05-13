import React from "react";
import step_1_with_altitude from "../../Screenshots/Step 1 - Coordinates and Altitude.png";
import step_1_without_altitude from "../../Screenshots/Step 1 - Coordinates only.png";
import step_2_with_altitude from "../../Screenshots/Step 2 - with Altitude.png";
import step_2_without_altitude from "../../Screenshots/Step 2 - without Altitude.png";

const FromLive = () => {
  return (
    <div className="flex flex-col text-center justify-start h-full">
      <div className="w-full rounded-lg p-4 sm:px-8 text-center">
        <h3 className="text-gray-700 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6">
          Analyze your GNSS coordinates from a static test in an instant
        </h3>
        <div className="text-center mb-6">
          <h3 className="text-sm sm:text-lg text-gray-600 font-semibold mb-4">
            Please follow the instructions below to prepare your file and
            utilize this tool effectively
          </h3>
          <div className="flex flex-col items-center w-full h-fit justify-center">
            <div className="flex flex-col items-center justify-center w-full mb-4 sm:mb-8">
              <div className="bg-teal-600 font-bold rounded-full h-8 w-8 flex items-center justify-center text-white mb-4">
                1
              </div>
              <div className="text-start">
                <p className="mb-4 text-sm sm:text-md text-gray-600">
                  Follow the spreadsheet format shown below for accurate
                  analysis of coordinate sets.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <div>
                  <img
                    src={step_1_with_altitude}
                    alt="File example without altitude"
                    className="mb-2"
                  />
                  <p className="mb-4 text-sm sm:text-md text-gray-600">
                    Image 1a: File template for single dataset with "Altitude"
                  </p>
                </div>
                <div>
                  <img
                    src={step_1_without_altitude}
                    alt="File example without altitude"
                    className="mb-2"
                  />
                  <p className="mb-4 text-sm sm:text-md text-gray-600">
                    Image 1b: File template for single dataset without
                    "Altitude"
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full mb-4 sm:mb-8">
              <div className="bg-teal-600 font-bold rounded-full h-8 w-8 flex items-center justify-center text-white mb-4">
                2
              </div>
              <div className="text-start">
                <p className="mb-4 text-sm sm:text-md text-gray-600">
                  For two or more datasets within the same file, replicate the
                  formatting demonstrated below. Then, proceed to upload the
                  file using the button provided.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <div>
                  <img
                    src={step_2_with_altitude}
                    alt="File example without altitude"
                    className="mb-2"
                  />
                  <p className="mb-4 text-sm sm:text-md text-gray-600">
                    Image 2a: File template for multiple dataset with "Altitude"
                  </p>
                </div>
                <div>
                  <img
                    src={step_2_without_altitude}
                    alt="File example without altitude"
                    className="mb-2"
                  />
                  <p className="mb-4 text-sm sm:text-md text-gray-600">
                    Image 2b: File template for multiple dataset without
                    "Altitude"
                  </p>
                </div>
              </div>
            </div>
            <label
              htmlFor="file-upload"
              className="mb-4 sm:mb-8 cursor-pointer"
            >
              <input
                type="file"
                id="file-upload"
                className="hidden"
                // Handle file upload functionality
              />
              <button className="h-fit w-fit px-6 py-3 border bg-blue-400 rounded-full text-white transition duration-300 ease-in-out hover:bg-blue-500 mt-0">
                Choose file from local directory
              </button>
            </label>
            <div className="flex flex-col items-center justify-center w-full mb-4 sm:mb-8">
              <div className="bg-teal-600 font-bold rounded-full h-8 w-8 flex items-center justify-center text-white mb-4">
                3
              </div>
              <div className="">
                <p className="text-start mb-2 text-sm sm:text-md text-gray-600">
                  Enter the test site's Latitude, Longitude, and Altitude
                  (optional) below
                </p>
                <div className="flex flex-col gap-4 items-center justify-center">
                  <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-6">
                    {" "}
                    <input
                      type="number"
                      placeholder="Latitude (-90&deg; to 90&deg;)"
                      className="border px-4 py-4 rounded-xl text-green-500 mb-4"
                    />
                    <input
                      type="number"
                      placeholder="Longitude (-180&deg; to 180&deg;)"
                      className="border px-4 py-4 rounded-xl text-green-500 mb-4"
                    />
                    <input
                      type="number"
                      placeholder="Altitude (optional)"
                      className="border px-4 py-4 rounded-xl text-green-500 mb-4"
                    />
                  </div>
                  <div>
                    <button className="h-fit w-fit px-6 py-3 border bg-blue-400 rounded-full text-white transition duration-300 ease-in-out hover:bg-blue-500 mt-0">
                      Start Analysis...
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromLive;
