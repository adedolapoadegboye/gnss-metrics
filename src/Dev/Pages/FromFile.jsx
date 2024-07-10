"use client";

import React, { useState, useEffect, useRef } from "react";
import HandleFileChange from "../Functions/HandleFileChange";
import HandleInputValues from "../Functions/HandleInputValues";
import StatsAndPlotsRender from "../Functions/StatsAndPlotsRender";
import DataTable from "../Components/Visualizers/DataTable";
import step_1_with_altitude from "../../Screenshots/Step 1 - Coordinates and Altitude.png";
import step_1_without_altitude from "../../Screenshots/Step 1 - Coordinates only.png";

const FromFile = () => {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const [fileType, setFileType] = useState("");
  const [refLat, setRefLat] = useState();
  const [refLong, setRefLong] = useState();
  const [refAlt, setRefAlt] = useState();
  const [startButton, setStartButton] = useState(false);
  const [plotData, setPlotData] = useState([]);

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
    try {
      setStartButton(true);
    } catch (error) {
      console.error(
        "Error occurred while handling start analysis button click:",
        error
      );
    }
  };

  const handleClearButton = () => {
    try {
      window.location.reload();
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
      <div className="w-full rounded-lg p-4 sm:px-8 text-">
        <h3 className="text-gray-700 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6">
          Analyze your static GNSS position readings in an instant
        </h3>
        <div className="text-center mb-6">
          <h3 className="text-sm sm:text-xl text-gray-600 font-semibold mb-4">
            Follow the instructions below to prepare your file in order to
            utilize this tool effectively
          </h3>
          <div className="flex flex-col items-center w-full h-fit justify-center">
            <div className="flex flex-col items-center justify-center w-full mb-4 sm:mb-4">
              <div className="bg-teal-600 font-bold rounded-full h-8 w-8 flex items-center justify-center text-white mb-4">
                1
              </div>
              <div className="text-start">
                <p className="mb-2 text-sm sm:text-lg text-gray-600 w-full flex flex-row justify-center text-center">
                  Format your static position readings as shown in the
                  spreadsheet formats below. For 3D readings, use the template
                  with altitude column, otherwise use the template without the
                  altitude column.
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
                    Image 1a: File template for dataset with "Altitude" values
                  </p>
                </div>
                <div>
                  <img
                    src={step_1_without_altitude}
                    alt="File example without altitude"
                    className="mb-2"
                  />
                  <p className="mb-4 text-sm sm:text-md text-gray-600">
                    Image 1b: File template for dataset without "Altitude"
                    values
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full mb-4 sm:mb-4">
              <div className="bg-teal-600 font-bold rounded-full h-8 w-8 flex items-center justify-center text-white mb-4">
                2
              </div>
              <div className="text-start">
                <p className="mb-2 text-sm sm:text-lg text-gray-600 w-full flex flex-row justify-center text-center">
                  Save the spreadsheet as an excel (.xlsx) or comma separated
                  value (.csv) file, and upload using the button below
                </p>
              </div>
            </div>
            <div className="w-full mb-6 flex flex-col align-center items-center sm:mb-8">
              <button
                onClick={handleButtonClick}
                className="flex flex-row h-fit w-fit justify-center px-6 py-3 border bg-blue-600 rounded-2xl text-white transition duration-300 ease-in-out hover:bg-blue-500 cursor-pointer"
              >
                <h3>Choose file</h3>
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
              />
              <h3 className="mb-0 text-sm sm:text-md text-green-800">
                {fileCheckRender()}
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row w-full rounded-lg text-center sm:justify-center gap-4 sm:gap-8">
              <div className="max-w-full max-h-96 rounded-lg overflow-auto">
                <DataTable file={file} />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full mb-4 sm:mb-4">
              <div className="bg-teal-600 font-bold rounded-full h-8 w-8 flex items-center justify-center text-white mb-4">
                3
              </div>
              <div className="">
                <p className="mb-2 text-sm sm:text-lg text-gray-600 w-full flex flex-row justify-center text-center">
                  Enter the reference latitude, longitude, and altitude values
                  below and click the "Evaluate" button
                </p>
                <HandleInputValues
                  setRefLat={setRefLat}
                  setRefLong={setRefLong}
                  setRefAlt={setRefAlt}
                />
                <div className="w-full flex flex-row justify-center gap-4 sm:gap-8">
                  <button
                    onClick={handleStartAnalysisButton}
                    className="h-fit w-32 px-6 py-3 border bg-blue-600 rounded-2xl text-white transition duration-300 ease-in-out hover:bg-blue-500"
                  >
                    Evaluate
                  </button>
                  <button
                    onClick={handleClearButton}
                    className="h-fit w-32 px-6 py-3 border bg-blue-600 rounded-2xl text-white transition duration-300 ease-in-out hover:bg-blue-500"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StatsAndPlotsRender
        startButton={startButton}
        file={file}
        refLat={refLat}
        refLong={refLong}
        refAlt={refAlt}
        setPlotData={setPlotData}
        plotData={plotData}
      />
    </div>
  );
};

export default FromFile;
