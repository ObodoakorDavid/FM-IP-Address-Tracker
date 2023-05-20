/** @format */

import { Icon } from "leaflet";
import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import markerIcon from "../images/icon-location.svg";

const Map = () => {
  const center = [51.505, -0.09];
  const zoom = 13;
  const customIcon = new Icon({
    iconUrl: markerIcon,
    iconSize: [30, 38],
  });
  return (
    <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]} icon={customIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
