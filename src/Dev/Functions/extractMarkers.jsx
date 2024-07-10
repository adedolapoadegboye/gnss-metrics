const extractMarkers = (file, setMarkers) => {
  try {
    if (file === undefined) {
      return;
    }
    const markers = file.data.map((item, index) => ({
      id: index,
      lat: parseFloat(item.Latitude),
      lng: parseFloat(item.Longitude),
      alt: parseFloat(item.Altitude),
    }));
    setMarkers(markers);
  } catch (error) {
    console.error("Error occurred while extracting markers:", error);
  }
};

export default extractMarkers;
