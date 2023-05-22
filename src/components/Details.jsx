/** @format */

import React from "react";

const Details = ({ ipData }) => {
  return (
    <div className="details bg-white position-absolute w-90 mx-auto rounded-4 py-4 px-3 d-flex flex-column flex-lg-row align-items-center p-lg-4 gap-3 ">
      <div className="p-lg-2">
        <small className="fw-bold text-secondary">IP ADDRESS</small>
        <p className=" fs-3 m-0">{ipData && ipData.ip}</p>
      </div>
      <div className="p-lg-2">
        <small className="fw-bold text-secondary">LOCATION</small>
        <p className=" fs-2 m-0">
          {ipData && `${ipData.location.city}, ${ipData.location.region}`}
        </p>
      </div>
      <div className="p-lg-2">
        <small className="fw-bold text-secondary">TIMEZONE</small>
        <p className=" fs-2 m-0">
          {ipData && `UTC ${ipData.location.timezone}`}
        </p>
      </div>
      <div className="p-lg-2">
        <small className="fw-bold text-secondary">ISP</small>
        <p className="fs-2 m-0">{ipData && ipData.isp}</p>
      </div>
    </div>
  );
};

export default Details;
