import React from "react";
import DataStats from "../Components/Visualizers/DataStats";
import DataPlot from "../Components/Visualizers/DataPlot";

const StatsAndPlotsRender = ({
  startButton,
  file,
  refLat,
  refLong,
  refAlt,
  setPlotData,
  plotData,
}) => {
  try {
    if (startButton) {
      // console.log(plotData);
      return (
        <div className="flex flex-col sm:flex-row w-full rounded-lg text-center justify-center items-center gap-4 sm:gap-8 mb-4 sm:mb-8">
          <div className="max-w-full sm:w-1/4 max-h-96 rounded-lg overflow-auto sm:flex sm:justify-end">
            <DataStats
              file={file}
              refLat={refLat}
              refLong={refLong}
              refAlt={refAlt}
              startButton={startButton}
              setPlotData={setPlotData}
            />
          </div>
          <div className="max-w-full sm:w-3/4 max-h-96">
            <DataPlot plotData={plotData} />
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
