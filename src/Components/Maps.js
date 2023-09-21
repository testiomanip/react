import React, { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import osmProviders from "./osm-providers";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import { NavLink } from "react-router-dom";

const Maps = () => {
  const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
  const ZOOM_LEVEL = 9;
  const mapRef = useRef();
 const markerRef = useRef(); 

  const handleMarkerClick = () => {
    const marker = markerRef.current;
    if (marker) {
      const markerLatLng = marker.getLatLng();
      alert(
        `Marker Clicked! Location: ${markerLatLng.lat}, ${markerLatLng.lng}`
      );
    }
  };

  return (
    <>
      <div className="flex mt-2 justify-center items-center  px-4">
        <h2 className="p-1 font-medium text-white rounded-md bg-green-500">
          <NavLink to="/react">Home</NavLink>
        </h2>
      </div>

      <div>
        <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef} onClick={handleMarkerClick}>
          <TileLayer
            url={osmProviders.maptiler.url}
            attribution={osmProviders.maptiler.attribution}
          />
        </MapContainer>
      </div>
    </>
  );
};

export default Maps;
