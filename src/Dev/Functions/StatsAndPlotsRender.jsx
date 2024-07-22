import React from "react";
import DataStats from "../Components/Visualizers/DataStats";
import DataPlot from "../Components/Visualizers/DataPlot";
import AltDataPlot from "../Components/Visualizers/AltDataPlot";

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
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-8 max-w-full md:w-3/4 max-h-full rounded-lg overflow-auto p-2">
              <DataPlot plotData={plotData} />
              <AltDataPlot altPlotData={altPlotData} />
            </div>
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
