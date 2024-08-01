import React from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const DataExports = (props) => {
  const {
    file,
    refLat,
    refLong,
    refAlt,
    meanAlt,
    meanLat,
    meanLong,
    cep50,
    cep90,
    cep98,
    meanCep50,
    meanCep90,
    meanCep98,
    sep50,
    sep90,
    sep98,
    meanSep50,
    meanSep90,
    meanSep98,
    plotData,
    altPlotData,
  } = props;

  const exportToExcelAndKml = () => {
    // Data for the second sheet
    const fileData = file.data.map((item, index) => {
      const dataEntry = {
        Latitude: item.Latitude,
        Longitude: item.Longitude,
        "2D Fix Error": plotData[index],
      };

      // Add Altitude and 3D Fix Error if Altitude exists
      if (item.Altitude !== undefined) {
        dataEntry.Altitude = item.Altitude;
        dataEntry["3D Fix Error"] = altPlotData[index];
      }

      return dataEntry;
    });

    // Data for the first sheet
    const statsData = [
      ["Statistics", "Value"],
      ["Reference Latitude", refLat],
      ["Reference Longitude", refLong],
      ["Reference Altitude", refAlt],
      ["Mean Altitude", meanAlt],
      ["Mean Latitude", meanLat],
      ["Mean Longitude", meanLong],
      ["CEP 50%", cep50],
      ["CEP 90%", cep90],
      ["CEP 98%", cep98],
      ["Mean CEP 50%", meanCep50],
      ["Mean CEP 90%", meanCep90],
      ["Mean CEP 98%", meanCep98],
      ["SEP 50%", sep50],
      ["SEP 90%", sep90],
      ["SEP 98%", sep98],
      ["Mean SEP 50%", meanSep50],
      ["Mean SEP 90%", meanSep90],
      ["Mean SEP 98%", meanSep98],
    ];

    // Create a new workbook
    const workbook = XLSX.utils.book_new();

    // Create the first sheet and append it to the workbook
    const ws1 = XLSX.utils.aoa_to_sheet(statsData);
    XLSX.utils.book_append_sheet(workbook, ws1, "Statistics");

    // Create the second sheet and append it to the workbook
    const ws2 = XLSX.utils.json_to_sheet(fileData);
    XLSX.utils.book_append_sheet(workbook, ws2, "Data");

    // Write the workbook to a binary string
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    // Create a Blob object from the binary string
    const excelBlob = new Blob([excelBuffer], {
      type: "application/octet-stream",
    });

    // Generate a timestamp for the filename
    const timestamp = new Date()
      .toISOString()
      .replace(/[-:T.]/g, "")
      .slice(0, 14);

    // Trigger the file download for the Excel file
    saveAs(excelBlob, `data_results_${timestamp}.xlsx`);

    // Generate KML content
    const kmlContent = `<?xml version="1.0" encoding="UTF-8"?>
      <kml xmlns="http://www.opengis.net/kml/2.2">
        <Document>
          <name>Position Fixes</name>
          <description>Position Fixes from GNSS Data</description>
          ${fileData
            .map(
              (item, index) => `
          <Placemark>
            <name>Fix ${index}</name>
            <Point>
              <coordinates>${item.Longitude},${item.Latitude},${
                item.Altitude ? item.Altitude : 0
              }</coordinates>
            </Point>
          </Placemark>`
            )
            .join("")}
        </Document>
      </kml>`;

    // Create a Blob object for the KML file
    const kmlBlob = new Blob([kmlContent], {
      type: "application/vnd.google-earth.kml+xml",
    });

    // Trigger the file download for the KML file
    saveAs(kmlBlob, `data_results_${timestamp}.kml`);
  };

  return (
    <div>
      <button
        className="h-fit w-fit px-6 py-3 border bg-gray-700 rounded-2xl text-white transition duration-300 ease-in-out hover:bg-blue-500"
        onClick={exportToExcelAndKml}
      >
        Download Results
      </button>
    </div>
  );
};

export default DataExports;
