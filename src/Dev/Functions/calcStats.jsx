import calcDistance from "./calcDistance";

const calcStats = (
  markers,
  refLat,
  refLong,
  setDistances,
  setPlotData,
  setCep50,
  setCep90,
  setCep98,
  setMeanDistances,
  setMeanCep50,
  setMeanCep90,
  setMeanCep98,
  meanLat,
  meanLong
) => {
  if (markers.length > 0 && refLat && refLong) {
    try {
      const fixErrors = markers.map((data) => {
        const { lat, lng } = data;
        const fixError = parseFloat(calcDistance(refLat, refLong, lat, lng));
        // console.log(fixError);
        return fixError;
      });

      // Set plotData before sorting fixErrors
      setPlotData([...fixErrors]);

      setDistances(fixErrors);

      const sortedDistances = fixErrors.sort((a, b) => a - b);
      const cep50Index = Math.floor(sortedDistances.length * 0.5);
      const cep90Index = Math.floor(sortedDistances.length * 0.9);
      const cep98Index = Math.floor(sortedDistances.length * 0.98);

      setCep50(sortedDistances[cep50Index].toFixed(2));
      setCep90(sortedDistances[cep90Index].toFixed(2));
      setCep98(sortedDistances[cep98Index].toFixed(2));

      const meanFixErrors = markers.map((data) => {
        const { lat, lng } = data;
        const meanFixError = parseFloat(
          calcDistance(meanLat, meanLong, lat, lng)
        );
        return meanFixError;
      });
      setMeanDistances(meanFixErrors);

      const sortedMeanDistances = meanFixErrors.sort((a, b) => a - b);
      const meanCep50Index = Math.floor(sortedMeanDistances.length * 0.5);
      const meanCep90Index = Math.floor(sortedMeanDistances.length * 0.9);
      const meanCep98Index = Math.floor(sortedMeanDistances.length * 0.98);

      setMeanCep50(sortedMeanDistances[meanCep50Index].toFixed(2));
      setMeanCep90(sortedMeanDistances[meanCep90Index].toFixed(2));
      setMeanCep98(sortedMeanDistances[meanCep98Index].toFixed(2));
    } catch (error) {
      console.error("Error occurred while calculating stats:", error);
    }
  }
};

export default calcStats;
