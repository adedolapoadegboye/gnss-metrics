const calc3DDistance = (lat1, lon1, alt1, lat2, lon2, alt2) => {
  const earthRadius = 6371e3; // Earth's radius in meters
  const latDiff = (lat2 - lat1) * (Math.PI / 180);
  const lonDiff = (lon2 - lon1) * (Math.PI / 180);
  const altDiff = alt2 - alt1;
  const a =
    Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(lonDiff / 2) *
      Math.sin(lonDiff / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = Math.sqrt(
    Math.pow(earthRadius * c, 2) + Math.pow(altDiff, 2)
  ); // 3D distance
  return distance;
};

export default calc3DDistance;
