import React, { useState } from "react";
import DataStats from "../Components/Visualizers/DataStats";
import DataPlot from "../Components/Visualizers/DataPlot";
import AltDataPlot from "../Components/Visualizers/AltDataPlot";
import DataMap from "../Components/Visualizers/DataMap";
import DataExports from "../Components/Visualizers/DataExports";

const StatsAndPlotsRender = ({
  startButton,
  file,
  refLat,
  refLong,
  refAlt,
  setPlotData,
  plotData,
  setAltPlotData,
  altPlotData,
}) => {
  const [meanLat, setMeanLat] = useState();
  const [meanLong, setMeanLong] = useState();
  const [meanAlt, setMeanAlt] = useState();
  const [cep50, setCep50] = useState();
  const [cep90, setCep90] = useState();
  const [cep98, setCep98] = useState();
  const [meanCep50, setMeanCep50] = useState();
  const [meanCep90, setMeanCep90] = useState();
  const [meanCep98, setMeanCep98] = useState();
  const [sep50, setSep50] = useState();
  const [sep90, setSep90] = useState();
  const [sep98, setSep98] = useState();
  const [meanSep50, setMeanSep50] = useState();
  const [meanSep90, setMeanSep90] = useState();
  const [meanSep98, setMeanSep98] = useState();

  try {
    if (startButton) {
      return (
        <div className="flex flex-col gap-4 p-4 border rounded-lg shadow-md bg-white">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 font-semibold">
            Evaluation Results
          </h3>
          <div className="flex flex-col md:flex-row w-full rounded-lg text-center justify-center items-center gap-4 md:gap-8">
            <div className="max-w-full md:w-1/4 max-h-full rounded-lg overflow-auto p-2">
              <DataStats
                file={file}
                refLat={refLat}
                refLong={refLong}
                refAlt={refAlt}
                startButton={startButton}
                setPlotData={setPlotData}
                setAltPlotData={setAltPlotData}
                meanAlt={meanAlt}
                setMeanAlt={setMeanAlt}
                meanLat={meanLat}
                setMeanLat={setMeanLat}
                meanLong={meanLong}
                setMeanLong={setMeanLong}
                cep50={cep50}
                setCep50={setCep50}
                cep90={cep90}
                setCep90={setCep90}
                cep98={cep98}
                setCep98={setCep98}
                meanCep50={meanCep50}
                setMeanCep50={setMeanCep50}
                meanCep90={meanCep90}
                setMeanCep90={setMeanCep90}
                meanCep98={meanCep98}
                setMeanCep98={setMeanCep98}
                sep50={sep50}
                setSep50={setSep50}
                sep90={sep90}
                setSep90={setSep90}
                sep98={sep98}
                setSep98={setSep98}
                meanSep50={meanSep50}
                setMeanSep50={setMeanSep50}
                meanSep90={meanSep90}
                setMeanSep90={setMeanSep90}
                meanSep98={meanSep98}
                setMeanSep98={setMeanSep98}
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-8 max-w-full md:w-3/4 max-h-full rounded-lg overflow-auto p-2">
              <DataPlot plotData={plotData} />
              <AltDataPlot altPlotData={altPlotData} />
            </div>
          </div>
          <div className="w-full h-[calc(75vh)] md:h-[calc(50vh)]">
            <DataMap file={file} refLat={refLat} refLong={refLong} />
          </div>
          <div>
            <DataExports
              file={file}
              refLat={refLat}
              refLong={refLong}
              refAlt={refAlt}
              meanAlt={meanAlt}
              meanLat={meanLat}
              meanLong={meanLong}
              cep50={cep50}
              cep90={cep90}
              cep98={cep98}
              meanCep50={meanCep50}
              meanCep90={meanCep90}
              meanCep98={meanCep98}
              sep50={sep50}
              sep90={sep90}
              sep98={sep98}
              meanSep50={meanSep50}
              meanSep90={meanSep90}
              meanSep98={meanSep98}
              plotData={plotData}
              altPlotData={altPlotData}
            />
          </div>
        </div>
      );
    }
  } catch (error) {
    console.error("Error occurred while rendering stats and plots:", error);
    return null;
  }
};

export default StatsAndPlotsRender;
