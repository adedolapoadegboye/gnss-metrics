import React, { useEffect, useState, useRef } from "react";
import GoogleMapReact from "google-map-react";
import { IoLocation } from "react-icons/io5";

// Component for rendering individual markers
const AnyReactComponent = ({ text }) => {
  try {
    return (
      <div className="text-xs text-red-700">
        <IoLocation />
        <p>{text}</p>
      </div>
    );
  } catch (error) {
    console.error("Error occurred while rendering marker component:", error);
    // Handle the error gracefully
    return null; // Render nothing in case of an error
  }
};

const DataMap = ({ file, refLat, refLong }) => {
  // API key for Google Maps, loaded from environment variables
  const mapAPIKEYS = process.env.REACT_APP_GOOGLE_MAP_KEYS;

  // Define default map properties
  const defaultProps = useRef({
    center: { lat: parseFloat(refLat), lng: parseFloat(refLong) },
    zoom: 18,
  });

  // State to store markers
  const [markers, setMarkers] = useState([]);
  const mapRef = useRef();

  // Function to render markers on the map
  const markerRender = () => {
    try {
      return (
        <GoogleMapReact
          bootstrapURLKeys={{ key: mapAPIKEYS }}
          defaultCenter={defaultProps.current.center}
          defaultZoom={defaultProps.current.zoom}
          options={{
            zoomControl: false,
            fullscreenControl: false,
            panControl: false,
            draggable: false,
            zoom: false,
          }}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map }) => {
            mapRef.current = map;
          }}
        >
          {markers.map((marker) => (
            <AnyReactComponent
              key={marker.id}
              lat={marker.lat}
              lng={marker.lng}
              text={marker.id.toString()}
            />
          ))}
        </GoogleMapReact>
      );
    } catch (error) {
      console.error(
        "Error occurred while rendering markers on the map:",
        error
      );
      return null; // Render nothing in case of an error
    }
  };

  // Effect to process the file and set markers
  useEffect(() => {
    if (file && file.data) {
      try {
        // Map file data to markers
        setMarkers(
          file.data.map((item, index) => ({
            id: index, // Unique identifier for each marker
            lat: parseFloat(item.Latitude),
            lng: parseFloat(item.Longitude),
          }))
        );
      } catch (error) {
        console.error("Error occurred while setting markers:", error);
      }
    }
  }, [file]);

  return <div className="w-full h-full rounded-xl">{markerRender()}</div>;
};

export default DataMap;
