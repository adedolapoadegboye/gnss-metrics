/**
 * Calculates the mean latitude, longitude, and altitude from a set of markers.
 * @param {Array} markers - Array of marker objects with lat, lng, and alt properties.
 * @param {Function} setMeanLat - Function to set the mean latitude.
 * @param {Function} setMeanLong - Function to set the mean longitude.
 * @param {Function} setMeanAlt - Function to set the mean altitude.
 */
const calcMeanValues = (markers, setMeanLat, setMeanLong, setMeanAlt) => {
  try {
    // Ensure markers array is not empty and contains valid lat and lng properties
    if (
      markers.length > 0 &&
      markers[0].lat !== undefined &&
      markers[0].lng !== undefined
    ) {
      // Calculate the sum of latitudes, longitudes, and altitudes
      const sumLat = markers.reduce((acc, obj) => acc + obj.lat, 0);
      const sumLong = markers.reduce((acc, obj) => acc + obj.lng, 0);
      const sumAlt = markers.reduce((acc, obj) => acc + obj.alt, 0);

      // Set the mean values using the provided setter functions
      setMeanLat(sumLat / markers.length);
      setMeanLong(sumLong / markers.length);
      setMeanAlt(sumAlt / markers.length);
    } else {
      throw new Error("Markers array is empty or missing lat/lng properties");
    }
  } catch (error) {
    console.error("Error calculating mean values:", error);
  }
};

export default calcMeanValues;
