import React, { useState, useEffect } from "react";
import extractMarkers from "../../Functions/extractMarkers";
import calcMeanValues from "../../Functions/calcMeanValues";
import calcStats from "../../Functions/calcStats";
import calc3DStats from "../../Functions/calc3DStats";

const DataStats = (props) => {
  const {
    file,
    refLat,
    refLong,
    refAlt,
    startButton,
    setPlotData,
    setAltPlotData,
    meanAlt,
    setMeanAlt,
    meanLat,
    setMeanLat,
    meanLong,
    setMeanLong,
    cep50,
    setCep50,
    cep90,
    setCep90,
    cep98,
    setCep98,
    meanCep50,
    setMeanCep50,
    meanCep90,
    setMeanCep90,
    meanCep98,
    setMeanCep98,
    sep50,
    setSep50,
    sep90,
    setSep90,
    sep98,
    setSep98,
    meanSep50,
    setMeanSep50,
    meanSep90,
    setMeanSep90,
    meanSep98,
    setMeanSep98,
  } = props;

  const [markers, setMarkers] = useState([]);
  const [distances, setDistances] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [triDDistances, setTriDDistances] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [meanDistances, setMeanDistances] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [triDMeanDistances, setTriDMeanDistances] = useState([]);

  useEffect(() => {
    try {
      extractMarkers(file, setMarkers);
      calcMeanValues(markers, setMeanLat, setMeanLong, setMeanAlt);
      calcStats(
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
      );
      calc3DStats(
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
        meanAlt,
        setAltPlotData
      );
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

  const formatValue = (value) => (value !== undefined ? `${value} m` : value);

  // console.log(markers[0].alt);

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
                  {formatValue(Math.max(...distances))}
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">Min Fix Error</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {formatValue(Math.min(...distances))}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  Average Fix Error
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {formatValue(
                    (
                      distances.reduce((acc, val) => acc + val, 0) /
                      distances.length
                    ).toFixed(2)
                  )}
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">CEP 50%</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {formatValue(cep50)}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">CEP 90%</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {formatValue(cep90)}
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">CEP 98%</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {formatValue(cep98)}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Mean CEP 50%</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {formatValue(meanCep50)}
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">Mean CEP 90%</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {formatValue(meanCep90)}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Mean CEP 98%</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {formatValue(meanCep98)}
                </td>
              </tr>
              {markers[0].alt > 1 && (
                <>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">SEP 50%</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {formatValue(sep50)}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">SEP 90%</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {formatValue(sep90)}
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">SEP 98%</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {formatValue(sep98)}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Mean SEP 50%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {formatValue(meanSep50)}
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      Mean SEP 90%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {formatValue(meanSep90)}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Mean SEP 98%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {formatValue(meanSep98)}
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        );
      }
    } catch (error) {
      console.error("Error occurred while rendering stats:", error);
      return null;
    }
  };

  return statsRender();
};

export default DataStats;
