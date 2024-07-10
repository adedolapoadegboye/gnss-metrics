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

export default calcDistance;
