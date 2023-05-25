/** @format */

import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import MarkerPosition from "./MarkerPosition";

const Map = ({ lat, long }) => {
  const center = [lat, long];
  console.log(center);
  const zoom = 13;

  return (
    <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerPosition center={center} zoom={zoom} />
    </MapContainer>
  );
};

export default Map;
