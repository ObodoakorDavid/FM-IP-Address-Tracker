/** @format */

import React from "react";

const Details = () => {
  return (
    <div className="details bg-white position-absolute w-90 mx-auto rounded-4 p-3 d-flex flex-column gap-3 ">
      <div>
        <small className="fw-bold text-secondary">IP ADDRESS</small>
        <p className="fw-bold m-0">192.212.174.101</p>
      </div>
      <div>
        <small className="fw-bold text-secondary">LOCATION</small>
        <p className="fw-bold m-0">Brooklyn, NY 10001</p>
      </div>
      <div>
        <small className="fw-bold text-secondary">TIMEZONE</small>
        <p className="fw-bold m-0">UTC-05:00</p>
      </div>
      <div>
        <small className="fw-bold text-secondary">ISP</small>
        <p className="fw-bold m-0">SpaceX StarLink</p>
      </div>
    </div>
  );
};

export default Details;
