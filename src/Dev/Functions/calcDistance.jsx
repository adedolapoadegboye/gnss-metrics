import LatLonEllipsoidal_Vincenty from "geodesy/latlon-ellipsoidal-vincenty";

/**
 * Calculates the distance between two geographical points using spherical coordinates.
 * @param {number} lat1 - Latitude of the first point.
 * @param {number} lon1 - Longitude of the first point.
 * @param {number} lat2 - Latitude of the second point.
 * @param {number} lon2 - Longitude of the second point.
 * @returns {string} - The distance between the two points in meters, formatted to two decimal places.
 */
const calcDistance = (lat1, lon1, lat2, lon2) => {
  try {
    // Create LatLonSpherical objects for the reference and test points
    const refPoint = new LatLonEllipsoidal_Vincenty(lat1, lon1);
    const testPoint = new LatLonEllipsoidal_Vincenty(lat2, lon2);

    // Calculate the distance between the points
    const distance = refPoint.distanceTo(testPoint);

    // Return the distance formatted to two decimal places
    return distance.toFixed(2);
  } catch (error) {
    // Log any errors that occur during the distance calculation
    console.error("Error occurred while calculating distance:", error);
    return "";
  }
};

export default calcDistance;
