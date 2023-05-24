/** @format */

import React, { useState } from "react";
import { isIP } from "is-ip";
import arrow from "../images/icon-arrow.svg";

const Search = ({ setIpAddress }) => {
  const [error, setError] = useState({ status: false, errorMessage: "" });
  const isError = error.status ? "text-danger" : "text-secondary";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.ipAddress.value) {
      setError({ errorMessage: "Can't be blanked", status: true });
      return;
    } else if (isIP(e.target.ipAddress.value)) {
      setIpAddress(e.target.ipAddress.value);
      return;
    } else if (
      e.target.ipAddress.value.endsWith(".com") ||
      e.target.ipAddress.value.endsWith(".net") ||
      e.target.ipAddress.value.endsWith(".co.uk") ||
      e.target.ipAddress.value.endsWith(".com.ng")
    ) {
      setIpAddress(e.target.ipAddress.value);
      return;
    }
    setError({
      errorMessage: "Not A Valid Domain or IP",
      status: true,
    });
  };

  return (
    <div className="w-90 mx-auto">
      <h1 className="text-white py-3">IP Address Tracker</h1>
      <form
        onSubmit={handleSubmit}
        className="d-flex justify-content-center w-100 mx-auto"
      >
        <input
          style={{
            borderTopLeftRadius: "12px",
            borderBottomLeftRadius: "12px",
          }}
          onChange={(e) => {
            setError({ errorMessage: "", status: false });
          }}
          type="text"
          name="ipAddress"
          placeholder="Search for any IP address or domain"
          className={`${isError} border-0 w-100 px-3 py-3 fs-4 fw-normal`}
        />
        <button
          style={{
            borderTopRightRadius: "12px",
            borderBottomRightRadius: "12px",
          }}
          className=" border-0 bg-dark text-white fw-bold px-4"
        >
          <img src={arrow} alt="" />
        </button>
      </form>
      {error.status && (
        <small className="text-danger d-flex justify-content-center py-1">
          {error.errorMessage}
        </small>
      )}
    </div>
  );
};

export default Search;
