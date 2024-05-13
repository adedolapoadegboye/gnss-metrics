import React from "react";

const DataTable = (file) => {
  const dataTableRender = () => {
    if (file.file) {
      // console.log("File:", file.file);
      return (
        <table className="divide-y divide-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm text-gray-600 uppercase tracking-wider"
              >
                Index
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm text-gray-600 uppercase tracking-wider"
              >
                Latitude
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm text-gray-600 uppercase tracking-wider"
              >
                Longitude
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm text-gray-600 uppercase tracking-wider"
              >
                Altitude
              </th>
            </tr>
          </thead>
          <tbody className="bg-white text-xs divide-y divide-gray-200">
            {file.file.data.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.Latitude}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.Longitude}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.Altitude ? item.Altitude : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else {
    }
  };

  return <div>{dataTableRender()}</div>;
};

export default DataTable;
