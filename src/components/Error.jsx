/** @format */

import React from "react";

const Error = ({ error }) => {
  return (
    <div className="details bg-white position-absolute w-90 mx-auto rounded-4 py-4 px-3 d-flex flex-column flex-lg-row align-items-center p-lg-4 gap-3 ">
      <p>{error}</p>
    </div>
  );
};

export default Error;
