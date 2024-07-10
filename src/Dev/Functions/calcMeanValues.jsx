const calcMeanValues = (markers, setMeanLat, setMeanLong, setMeanAlt) => {
  if (markers.length > 1) {
    const sumLat = markers.reduce((acc, obj) => acc + obj.lat, 0);
    const sumLong = markers.reduce((acc, obj) => acc + obj.lng, 0);
    const sumAlt = markers.reduce((acc, obj) => acc + obj.alt, 0);

    setMeanLat(sumLat / markers.length);
    setMeanLong(sumLong / markers.length);
    setMeanAlt(sumAlt / markers.length);
  }
};

export default calcMeanValues;
