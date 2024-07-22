"use client";

import React, { useState, useEffect, useRef } from "react";
import HandleFileChange from "../Functions/HandleFileChange";
import HandleInputValues from "../Functions/HandleInputValues";
import StatsAndPlotsRender from "../Functions/StatsAndPlotsRender";
import DataTable from "../Components/Visualizers/DataTable";
import step_1_with_altitude from "../../Screenshots/Step 1 - Coordinates and Altitude.png";
import step_1_without_altitude from "../../Screenshots/Step 1 - Coordinates only.png";
import downloadExampleFiles from "../Functions/HandleZip";

const FromFile = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [fileType, setFileType] = useState("");
  const [refLat, setRefLat] = useState("");
  const [refLong, setRefLong] = useState("");
  const [refAlt, setRefAlt] = useState("");
  const [startButton, setStartButton] = useState(false);
  const [plotData, setPlotData] = useState([]);
  const [altPlotData, setAltPlotData] = useState([]);
  const [inactiveStartButton, setInactiveStartButton] = useState("");

  const fileCheckRender = () => {
    try {
      if (fileType === "csv" || fileType === "xlsx") {
        return fileName;
      } else {
        return "Please upload a csv or xlsx file";
      }
    } catch (error) {
      console.error("Error occurred in fileCheckRender:", error);
      return "An error occurred while processing the file";
    }
  };

  const handleStartAnalysisButton = () => {
    if (file === null) {
      setInactiveStartButton(
        "Please go back to step 2 and upload a valid csv or xlsx file"
      );
    } else {
      try {
        setStartButton(true);
      } catch (error) {
        console.error(
          "Error occurred while handling start analysis button click:",
          error
        );
      }
    }
  };

  const handleClearButton = () => {
    try {
      setFile(null);
      setFileName("");
      setFileType("");
      setRefLat("");
      setRefLong("");
      setRefAlt("");
      setStartButton(false);
      setPlotData([]);
      setAltPlotData([]);
      setInactiveStartButton("");
    } catch (error) {
      console.error("Error occurred while handling clear button click:", error);
    }
  };

  useEffect(() => {}, [
    refLat,
    refLong,
    refAlt,
    startButton,
    file,
    fileName,
    fileType,
    plotData,
    altPlotData,
  ]);

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    HandleFileChange(event, setFileName, setFileType, setFile);
  };

  return (
    <div className="flex flex-col text-center justify-start h-full">
      <div className="flex flex-col gap-4 w-full rounded-lg">
        <h3 className="text-gray-700 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Instantly Analyze Your Static GNSS Position Readings!
        </h3>
        <div className="flex flex-col gap-16 text-center">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 font-semibold">
            Ready to get started? Follow these simple steps to prepare your
            file.
          </h3>
          <div className="flex flex-col gap-8 md:gap-10 items-center w-full h-full justify-center">
            <div className="flex flex-col items-center justify-center gap-2 md:gap-4 w-full">
              <div className="bg-teal-600 font-bold rounded-full h-8 w-8 flex items-center justify-center text-white">
                1
              </div>
              <div className="text-start">
                <p className="text-sm sm:text-md md:text-lg lg:text-xl text-gray-600 w-full flex flex-row justify-center text-center">
                  Format your static position readings as shown below. Use the
                  template with the altitude column for 3D readings, and without
                  for 2D readings.
                </p>
                <br />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <div>
                  <img
                    src={step_1_with_altitude}
                    alt="File example with altitude"
                    className="rounded-lg shadow-lg w-96 h-50"
                  />
                  <p className="text-xs sm:text-sm md:text-md text-gray-600">
                    Image 1a: Template for datasets with "Altitude" values
                  </p>
                </div>
                <div>
                  <img
                    src={step_1_without_altitude}
                    alt="File example without altitude"
                    className="rounded-lg shadow-lg w-96 h-50"
                  />
                  <p className="text-xs sm:text-sm md:text-md text-gray-600">
                    Image 1b: Template for datasets without "Altitude" values
                  </p>
                </div>
              </div>
              <div className="text-start">
                <p className="text-sm sm:text-md md:text-lg lg:text-xl text-gray-600 w-full text-center">
                  Click{" "}
                  <button
                    onClick={downloadExampleFiles}
                    className="text-blue-600 underline"
                  >
                    {" "}
                    here
                  </button>{" "}
                  to download example files for reference.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:gap-6 items-center w-full h-full justify-center">
              <div className="bg-teal-600 font-bold rounded-full h-8 w-8 flex items-center justify-center text-white">
                2
              </div>
              <div className="text-start">
                <p className="text-sm sm:text-md md:text-lg lg:text-xl text-gray-600 w-full flex flex-row justify-center text-center">
                  Save your file as an Excel (.xlsx) or CSV (.csv) and upload it
                  using the button below.
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col align-center items-center">
              <button
                onClick={handleButtonClick}
                className="flex flex-row h-fit w-fit justify-center px-6 py-3 border bg-gray-700 rounded-2xl text-white transition duration-300 ease-in-out hover:bg-blue-500 cursor-pointer"
              >
                <h3>Choose file</h3>
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
              />
              <h3 className="text-md sm:text-md text-green-800 mt-4">
                {fileCheckRender()}
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row w-full rounded-lg text-center sm:justify-center gap-4 sm:gap-8">
              <div className="max-w-full max-h-96 rounded-lg overflow-auto shadow-md">
                <DataTable file={file} />
              </div>
            </div>
            <div className="flex flex-col gap-4 md:gap-6 items-center w-full h-full justify-center">
              <div className="bg-teal-600 font-bold rounded-full h-8 w-8 flex items-center justify-center text-white">
                3
              </div>
              <div className="">
                <p className="text-sm sm:text-md md:text-lg lg:text-xl text-gray-600 w-full flex flex-row justify-center text-center">
                  Enter the reference latitude, longitude, and altitude values
                  below and hit "Evaluate" to get your results.
                </p>
                <HandleInputValues
                  refLat={refLat}
                  setRefLat={setRefLat}
                  refLong={refLong}
                  setRefLong={setRefLong}
                  refAlt={refAlt}
                  setRefAlt={setRefAlt}
                />
                <div className="w-full flex flex-row justify-center gap-4 sm:gap-8 mt-4">
                  <button
                    onClick={handleStartAnalysisButton}
                    className="h-fit w-32 px-6 py-3 border bg-gray-700 rounded-2xl text-white transition duration-300 ease-in-out hover:bg-blue-500"
                  >
                    Evaluate
                  </button>
                  <button
                    onClick={handleClearButton}
                    className="h-fit w-32 px-6 py-3 border bg-red-600 rounded-2xl text-white transition duration-300 ease-in-out hover:bg-red-500"
                  >
                    Clear
                  </button>
                </div>
                <div className="text-md sm:text-md text-green-800 mt-4">
                  {inactiveStartButton}
                </div>
              </div>
            </div>
          </div>
          <div>
            <StatsAndPlotsRender
              startButton={startButton}
              file={file}
              refLat={refLat}
              refLong={refLong}
              refAlt={refAlt}
              setPlotData={setPlotData}
              plotData={plotData}
              setAltPlotData={setAltPlotData}
              altPlotData={altPlotData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromFile;
