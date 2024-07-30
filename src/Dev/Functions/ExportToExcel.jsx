// Function to export data to Excel
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
const exportToExcel = (data) => {
  //       const formatValue = (value) =>
  //         value !== undefined ? `${value} m` : value;

  //   const data = [
  //     ["Statistics", "Value"],
  //     ["Number of fixes", distances.length],
  //     ["Max Fix Error", formatValue(Math.max(...distances))],
  //     ["Min Fix Error", formatValue(Math.min(...distances))],
  //     [
  //       "Average Fix Error",
  //       formatValue(
  //         (
  //           distances.reduce((acc, val) => acc + val, 0) / distances.length
  //         ).toFixed(2)
  //       ),
  //     ],
  //     ["CEP 50%", formatValue(cep50)],
  //     ["CEP 90%", formatValue(cep90)],
  //     ["CEP 98%", formatValue(cep98)],
  //     ["Mean CEP 50%", formatValue(meanCep50)],
  //     ["Mean CEP 90%", formatValue(meanCep90)],
  //     ["Mean CEP 98%", formatValue(meanCep98)],
  //     ...(markers[0] && markers[0].alt > 1
  //       ? [
  //           ["SEP 50%", formatValue(sep50)],
  //           ["SEP 90%", formatValue(sep90)],
  //           ["SEP 98%", formatValue(sep98)],
  //           ["Mean SEP 50%", formatValue(meanSep50)],
  //           ["Mean SEP 90%", formatValue(meanSep90)],
  //           ["Mean SEP 98%", formatValue(meanSep98)],
  //         ]
  //       : []),
  //   ];

  const worksheet = XLSX.utils.aoa_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Data Stats");

  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });

  const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
  saveAs(blob, "data_stats.xlsx");
};

export default exportToExcel;
