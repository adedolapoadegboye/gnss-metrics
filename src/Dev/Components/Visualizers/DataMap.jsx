import React, { useEffect, useState, useRef } from "react";
import GoogleMapReact from "google-map-react";
import { IoLocation } from "react-icons/io5";

const AnyReactComponent = ({ text }) => {
  try {
    return (
      <div className="text-2 text-red-700">
        <IoLocation />
        <p>{text}</p>
      </div>
    );
  } catch (error) {
    console.error("Error occurred while rendering marker component:", error);
    // Handle the error gracefully, such as logging it or displaying a message to the user
    return null; // Return null to render nothing in case of an error
  }
};

const DataMap = (file) => {
  const [markers, setMarkers] = useState([]);

  const mapRef = useRef();
  const defaultProps = useRef({
    center: { lat: 51.0447, lng: -114.0719 },
    zoom: 10,
  });
  console.log(defaultProps.current.center, defaultProps.current.zoom);

  useEffect(() => {
    if (file.file) {
      try {
        setMarkers(
          file.file.data.map((item, index) => ({
            id: index, // Unique identifier for each marker
            lat: parseFloat(item.Latitude),
            lng: parseFloat(item.Longitude),
          }))
        );
        // setDefLat(file.file.data[0].Latitude);
        // setDefLong(file.file.data[0].Longitude);
      } catch (error) {
        console.error("Error occurred while setting markers:", error);
        // Handle the error gracefully, such as logging it or displaying a message to the user
      }
    }
  }, [file.file, markers]);

  // let defaultProps = {
  //   center: { lat: 51.0447, lng: -114.0719 },
  //   zoom: 10,
  // };

  const markerRender = () => {
    if (markers.length > 0 && markers[0].lat) {
      try {
        return (
          <div className="h-96 w-96 border border-gray-300 rounded-lg overflow-hidden text-xs">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "",
              }}
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
              onGoogleApiLoaded={({ map, maps }) => {
                mapRef.current = map;
              }}
            >
              {markers.map((marker, index) => (
                <AnyReactComponent
                  key={index}
                  lat={marker.lat}
                  lng={marker.lng}
                  text={marker.id}
                />
              ))}
            </GoogleMapReact>
          </div>
        );
      } catch (error) {
        console.error("Error occurred while rendering Google Map:", error);
        // Handle the error gracefully, such as logging it or displaying a message to the user
      }
    }
  };

  return markerRender();
};

export default DataMap;
