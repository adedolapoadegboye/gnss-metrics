import React from "react";

const HandleInputValues = ({
  refLat,
  setRefLat,
  refLong,
  setRefLong,
  refAlt,
  setRefAlt,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center py-3">
      <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-6">
        <div>
          <label className="pe-4 sm:pe-0 text-start mb-2 text-sm sm:text-md text-gray-600">
            Latitude:{" "}
          </label>
          <input
            type="number"
            value={refLat}
            placeholder="-90°<latitude<90°"
            className="border px-2 py-2 rounded-xl text-green-800 mb-4"
            onChange={(e) => setRefLat(e.target.value)}
          />
        </div>
        <div>
          <label className="text-start mb-2 text-sm sm:text-md text-gray-600 pe-1 sm:pe-0">
            Longitude:{" "}
          </label>
          <input
            type="number"
            value={refLong}
            placeholder="-180°<longitude<180°"
            className="border px-2 py-2 rounded-xl text-green-800 mb-4"
            onChange={(e) => setRefLong(e.target.value)}
          />
        </div>
        <div className="">
          <label className="text-start text-sm sm:text-md text-gray-600 pe-4 sm:pe-0">
            Altitude:{" "}
          </label>{" "}
          <input
            type="number"
            value={refAlt}
            placeholder="-500m<alt<10000m"
            className="border px-2 py-2 rounded-xl text-green-800 mb-4"
            onChange={(e) => setRefAlt(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default HandleInputValues;
