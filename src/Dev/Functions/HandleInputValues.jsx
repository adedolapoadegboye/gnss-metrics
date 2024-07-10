import React from "react";

const HandleInputValues = ({ setRefLat, setRefLong, setRefAlt }) => {
  const handleLatValue = (event) => {
    try {
      setRefLat(event.target.value);
    } catch (error) {
      console.error("Error occurred while setting latitude value:", error);
    }
  };

  const handleLongValue = (event) => {
    try {
      setRefLong(event.target.value);
    } catch (error) {
      console.error("Error occurred while setting longitude value:", error);
    }
  };

  const handleAltValue = (event) => {
    try {
      setRefAlt(event.target.value);
    } catch (error) {
      console.error("Error occurred while setting altitude value:", error);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-6">
      <div>
        <label className="pe-4 sm:pe-0 text-start mb-2 text-sm sm:text-md text-gray-600">
          Latitude:
        </label>
        <input
          type="number"
          placeholder="-90°<latitude<90°"
          className="border px-2 py-2 rounded-xl text-green-800 mb-4"
          onChange={handleLatValue}
        />
      </div>
      <div>
        <label className="text-start mb-2 text-sm sm:text-md text-gray-600 pe-1 sm:pe-0">
          Longitude:
        </label>
        <input
          type="number"
          placeholder="-180°<longitude<180°"
          className="border px-2 py-2 rounded-xl text-green-800 mb-4"
          onChange={handleLongValue}
        />
      </div>
      <div>
        <label className="text-start text-sm sm:text-md text-gray-600 pe-4 sm:pe-0">
          Altitude:
        </label>
        <input
          type="number"
          placeholder="-500m<alt<10000m"
          className="border px-2 py-2 rounded-xl text-green-800 mb-4"
          onChange={handleAltValue}
        />
      </div>
    </div>
  );
};

export default HandleInputValues;
