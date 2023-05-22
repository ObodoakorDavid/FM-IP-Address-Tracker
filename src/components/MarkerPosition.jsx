/** @format */

import React, { useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import markerIcon from "../images/icon-location.svg";
import { Icon } from "leaflet";

const MarkerPosition = ({ center, zoom }) => {
  const map = useMap();

  const customIcon = new Icon({
    iconUrl: markerIcon,
    iconSize: [30, 38],
  });

  //   console.log(center.center);
  //   console.log(zoom);

  useEffect(() => {
    map.flyTo(center, zoom, {
      animate: true,
    });
  }, [map, center]);
  return (
    <Marker position={center} icon={customIcon}>
      <Popup>Your IP Location</Popup>
    </Marker>
  );
};

export default MarkerPosition;
