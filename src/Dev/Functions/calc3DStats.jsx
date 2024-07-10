import calc3DDistance from "./calc3DDistance";

const calc3DStats = (
  markers,
  refLat,
  refLong,
  refAlt,
  setTriDDistances,
  setSep50,
  setSep90,
  setSep98,
  setTriDMeanDistances,
  setMeanSep50,
  setMeanSep90,
  setMeanSep98,
  meanLat,
  meanLong,
  meanAlt
) => {
  if (markers.length > 1 && markers[0].alt > 1 && refAlt && refLat && refLong) {
    try {
      const fixErrors = markers.map((data) => {
        const { lat, lng, alt } = data;
        const fixError = parseFloat(
          calc3DDistance(refLat, refLong, refAlt, lat, lng, alt).toFixed(2)
        );
        return fixError;
      });

      setTriDDistances([...fixErrors]);

      const sortedFixErrors = fixErrors.sort((a, b) => a - b);
      const Sep50Index = Math.floor(sortedFixErrors.length * 0.5);
      const Sep90Index = Math.floor(sortedFixErrors.length * 0.9);
      const Sep98Index = Math.floor(sortedFixErrors.length * 0.98);

      setSep50(sortedFixErrors[Sep50Index].toFixed(2));
      setSep90(sortedFixErrors[Sep90Index].toFixed(2));
      setSep98(sortedFixErrors[Sep98Index].toFixed(2));

      const meanTriDFixErrors = markers.map((data) => {
        const { lat, lng, alt } = data;
        const meanTriDFixError = parseFloat(
          calc3DDistance(meanLat, meanLong, meanAlt, lat, lng, alt)
        );
        // console.log(meanTriDFixError);
        return meanTriDFixError;
      });
      setTriDMeanDistances(...meanTriDFixErrors);

      const sortedTriDMeanDistances = meanTriDFixErrors.sort((a, b) => a - b);
      const meanSep50Index = Math.floor(sortedTriDMeanDistances.length * 0.5);
      const meanSep90Index = Math.floor(sortedTriDMeanDistances.length * 0.9);
      const meanSep98Index = Math.floor(sortedTriDMeanDistances.length * 0.98);

      setMeanSep50(sortedTriDMeanDistances[meanSep50Index].toFixed(2));
      setMeanSep90(sortedTriDMeanDistances[meanSep90Index].toFixed(2));
      setMeanSep98(sortedTriDMeanDistances[meanSep98Index].toFixed(2));
    } catch (error) {
      console.error("Error occurred while calculating 3D stats:", error);
    }
  }
};
export default calc3DStats;
