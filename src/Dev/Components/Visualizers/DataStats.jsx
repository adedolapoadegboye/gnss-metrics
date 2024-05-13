import React, { useState, useEffect } from "react";

const DataStats = (props) => {
  const { file, refLat, refLong, refAlt, startButton, setPlotData } = props;

  const [markers, setMarkers] = useState([]);
  const [distances, setDistances] = useState([]);
  const [triDDistances, setTriDDistances] = useState([]);
  const [meanDistances, setMeanDistances] = useState([]);
  const [triDMeanDistances, setTriDMeanDistances] = useState([]);

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

  const extractMarkers = () => {
    try {
      if (file === undefined) {
        // File is not defined
      } else {
        // File is defined, extract markers
        setMarkers(
          file.data.map((item, index) => ({
            id: index,
            lat: parseFloat(item.Latitude),
            lng: parseFloat(item.Longitude),
            alt: parseFloat(item.Altitude),
          }))
        );
        console.log(markers);
      }
    } catch (error) {
      console.error("Error occurred while extracting markers:", error);
    }
  };

  useEffect(() => {
    try {
      extractMarkers();
      calcStats();
      calc3DStats();
      calcMeanValues();
    } catch (error) {
      console.error("Error occurred while calculating stats:", error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    file.data,
    refLat,
    refLong,
    refAlt,
    startButton,
    markers.length,
    distances.length,
    cep50,
    cep90,
    cep98,
  ]);

  const calcDistance = (lat1, lon1, lat2, lon2) => {
    try {
      const earthRadius = 6371 * 1000; // Earth's radius in meters

      const toRadians = (degrees) => {
        return degrees * (Math.PI / 180);
      };

      const latDiffRad = toRadians(lat2 - lat1);
      const lonDiffRad = toRadians(lon2 - lon1);

      const a =
        Math.sin(latDiffRad / 2) ** 2 +
        Math.cos(toRadians(lat1)) *
          Math.cos(toRadians(lat2)) *
          Math.sin(lonDiffRad / 2) ** 2;

      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

      const distance = earthRadius * c;

      return distance.toFixed(2);
    } catch (error) {
      console.error("Error occurred while calculating distance:", error);
      return "";
    }
  };

  const calc3DDistance = (lat1, lon1, alt1, lat2, lon2, alt2) => {
    const earthRadius = 6371e3; // Earth's radius in meters
    const latDiff = (lat2 - lat1) * (Math.PI / 180);
    const lonDiff = (lon2 - lon1) * (Math.PI / 180);
    const altDiff = alt2 - alt1;
    const a =
      Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(lonDiff / 2) *
        Math.sin(lonDiff / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = Math.sqrt(
      Math.pow(earthRadius * c, 2) + Math.pow(altDiff, 2)
    ); // 3D distance
    return distance;
  };

  const calcMeanValues = () => {
    if (markers.length > 1) {
      // Calculate the sum of latitude, longitude, and altitude
      const sumLat = markers.reduce((acc, obj) => acc + obj.lat, 0);
      const sumLong = markers.reduce((acc, obj) => acc + obj.lng, 0);
      const sumAlt = markers.reduce((acc, obj) => acc + obj.alt, 0);

      // Calculate the mean values
      setMeanLat(sumLat / markers.length);
      setMeanLong(sumLong / markers.length);
      setMeanAlt(sumAlt / markers.length);

      // Log the mean values
      // console.log("Mean Latitude:", meanLat);
      // console.log("Mean Longitude:", meanLong);
      // console.log("Mean Altitude:", meanAlt);
    }
  };

  const calcStats = () => {
    try {
      if (markers.length > 1) {
        const fixErrors = markers.map((data) => {
          const { lat, lng } = data;
          const fixError = parseFloat(calcDistance(refLat, refLong, lat, lng));
          return fixError;
        });
        setDistances(fixErrors);
        setPlotData(fixErrors);

        const sortedDistances = distances.sort((a, b) => a - b);
        const cep50Index = Math.floor(sortedDistances.length * 0.5);
        const cep90Index = Math.floor(sortedDistances.length * 0.9);
        const cep98Index = Math.floor(sortedDistances.length * 0.98);

        setCep50(sortedDistances[cep50Index]);
        setCep90(sortedDistances[cep90Index]);
        setCep98(sortedDistances[cep98Index]);

        const meanFixErrors = markers.map((data) => {
          const { lat, lng } = data;
          const meanFixError = parseFloat(
            calcDistance(meanLat, meanLong, lat, lng)
          );
          return meanFixError;
        });
        setMeanDistances(meanFixErrors);
        // console.log(meanFixErrors);

        const sortedMeanDistances = meanDistances.sort((a, b) => a - b);
        const meanCep50Index = Math.floor(sortedMeanDistances.length * 0.5);
        const meanCep90Index = Math.floor(sortedMeanDistances.length * 0.9);
        const meanCep98Index = Math.floor(sortedMeanDistances.length * 0.98);

        setMeanCep50(sortedMeanDistances[meanCep50Index]);
        setMeanCep90(sortedMeanDistances[meanCep90Index]);
        setMeanCep98(sortedMeanDistances[meanCep98Index]);

        // console.log(sortedMeanDistances);
      }
    } catch (error) {
      console.error("Error occurred while calculating stats:", error);
    }
  };

  const calc3DStats = () => {
    try {
      if (markers.length > 1 && markers[0].alt) {
        const fixErrors = markers.map((data) => {
          const { lat, lng, alt } = data;
          const fixError = parseFloat(
            calc3DDistance(refLat, refLong, refAlt, lat, lng, alt).toFixed(2)
          );
          return fixError;
        });

        setTriDDistances(fixErrors);
        // console.log(fixErrors);
        // Sort distances in ascending order
        const sortedFixErrors = triDDistances.sort((a, b) => a - b);
        // console.log(sortedFixErrors);
        const Sep50Index = Math.floor(sortedFixErrors.length * 0.5);
        const Sep90Index = Math.floor(sortedFixErrors.length * 0.9);
        const Sep98Index = Math.floor(sortedFixErrors.length * 0.98);

        setSep50(sortedFixErrors[Sep50Index]);
        setSep90(sortedFixErrors[Sep90Index]);
        setSep98(sortedFixErrors[Sep98Index]);

        // const mean =
        //   sortedFixErrors.reduce((sum, distance) => sum + distance, 0) /
        //   sortedFixErrors.length;
        // const squaredDistances = sortedFixErrors.map(
        //   (distance) => (distance - mean) ** 2
        // );

        const meanFixErrors = markers.map((data) => {
          const { lat, lng } = data;
          const meanFixError = parseFloat(
            calcDistance(meanLat, meanLong, lat, lng)
          );
          return meanFixError;
        });
        setTriDMeanDistances(meanFixErrors);

        const sortedTriDMeanDistances = triDMeanDistances.sort((a, b) => a - b);
        const meanSep50Index = Math.floor(sortedTriDMeanDistances.length * 0.5);
        const meanSep90Index = Math.floor(sortedTriDMeanDistances.length * 0.9);
        const meanSep98Index = Math.floor(
          sortedTriDMeanDistances.length * 0.98
        );

        setMeanSep50(sortedTriDMeanDistances[meanSep50Index]);
        setMeanSep90(sortedTriDMeanDistances[meanSep90Index]);
        setMeanSep98(sortedTriDMeanDistances[meanSep98Index]);
      }
    } catch (error) {}
  };

  const statsRender = () => {
    try {
      if (markers.length > 1) {
        return (
          <table className="divide-y divide-gray-200">
            <thead className="bg-gray-200">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm text-gray-600 uppercase tracking-wider"
                >
                  Statistics
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm text-gray-600 uppercase tracking-wider"
                >
                  Value
                </th>
              </tr>
            </thead>
            <tbody className="bg-white text-xs divide-y divide-gray-200">
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">Number of fixes</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {distances.length}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Max Fix Error</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {Math.max(...distances)} m
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">Min Fix Error</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {Math.min(...distances)} m
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  Average Fix Error
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {(
                    distances.reduce((acc, val) => acc + val, 0) /
                    distances.length
                  ).toFixed(2)}{" "}
                  m
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">CEP 50%</td>
                <td className="px-6 py-4 whitespace-nowrap">{cep50} m</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">CEP 90%</td>
                <td className="px-6 py-4 whitespace-nowrap">{cep90} m</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">CEP 98%</td>
                <td className="px-6 py-4 whitespace-nowrap">{cep98} m</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Mean CEP 50%</td>
                <td className="px-6 py-4 whitespace-nowrap">{meanCep50} m</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">Mean CEP 90%</td>
                <td className="px-6 py-4 whitespace-nowrap">{meanCep90} m</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Mean CEP 98%</td>
                <td className="px-6 py-4 whitespace-nowrap">{meanCep98} m</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">SEP 50%</td>
                <td className="px-6 py-4 whitespace-nowrap">{sep50} m</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">SEP 90%</td>
                <td className="px-6 py-4 whitespace-nowrap">{sep90} m</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">SEP 98%</td>
                <td className="px-6 py-4 whitespace-nowrap">{sep98} m</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Mean SEP 50%</td>
                <td className="px-6 py-4 whitespace-nowrap">{meanSep50} m</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">Mean SEP 90%</td>
                <td className="px-6 py-4 whitespace-nowrap">{meanSep90} m</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Mean SEP 98%</td>
                <td className="px-6 py-4 whitespace-nowrap">{meanSep98} m</td>
              </tr>
            </tbody>
          </table>
        );
      }
    } catch (error) {
      console.error("Error occurred while rendering stats:", error);
      return null;
    }
  };

  //   console.log(markers, refLat, refLong, refAlt, distances, startButton);

  return statsRender();
};

export default DataStats;
