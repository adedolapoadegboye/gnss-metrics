import LatLonEllipsoidal from "geodesy/latlon-ellipsoidal";

/**
 * Calculates the 3D Cartesian distance between two geographical points using ellipsoidal coordinates.
 * @param {number} lat1 - Latitude of the first point.
 * @param {number} lon1 - Longitude of the first point.
 * @param {number} alt1 - Altitude of the first point.
 * @param {number} lat2 - Latitude of the second point.
 * @param {number} lon2 - Longitude of the second point.
 * @param {number} alt2 - Altitude of the second point.
 * @returns {string} - The Cartesian distance between the two points in meters, formatted to two decimal places.
 */
const calc3DDistance = (lat1, lon1, alt1, lat2, lon2, alt2) => {
  try {
    // Convert geographical points to Cartesian coordinates
    const refPoint = new LatLonEllipsoidal(lat1, lon1, alt1).toCartesian();
    const testPoint = new LatLonEllipsoidal(lat2, lon2, alt2).toCartesian();

    // Log the Cartesian points for debugging
    // console.log(refPoint, testPoint);

    // Calculate the Cartesian distance between the two points
    const distance = Math.sqrt(
      (refPoint.x - testPoint.x) ** 2 +
        (refPoint.y - testPoint.y) ** 2 +
        (refPoint.z - testPoint.z) ** 2
    );

    // console.log(distance);

    // Return the distance formatted to two decimal places
    return distance.toFixed(2);
  } catch (error) {
    // Log any errors that occur during the distance calculation
    console.error("Error occurred while calculating 3D distance:", error);
    return "";
  }
};

export default calc3DDistance;
