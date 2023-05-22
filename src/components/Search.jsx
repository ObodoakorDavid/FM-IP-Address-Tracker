/** @format */

import React, { useState } from "react";
import { isIP, isIPv4 } from "is-ip";

const Search = ({ setIpAddress }) => {
  const [error, setError] = useState({ status: false, errorMessage: "" });
  const isError = error.status ? "text-danger" : "text-secondary";
  return (
    <div className="w-90 mx-auto">
      <h1 className="text-white py-3">IP Address Tracker</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!e.target.ipAddress.value) {
            setError({ errorMessage: "Can't be blanked", status: true });
            console.log("jj");
            return;
          } else if (!isIP(e.target.ipAddress.value)) {
            setError({ errorMessage: "Not A Valid IP Address", status: true });
            return;
          }
          console.log(isIP(e.target.ipAddress.value));
          setIpAddress(e.target.ipAddress.value);
        }}
        className="d-flex justify-content-center w-100 mx-auto"
      >
        <input
          onChange={(e) => {
            // setIpAddress(e.target.value);
            setError({ errorMessage: "", status: false });
          }}
          type="text"
          name="ipAddress"
          placeholder="192.212.174.101"
          className={`${isError} border-0 rounded-start w-100 px-3 py-3 fs-4 fw-normal`}
        />
        <button className="btn bg-dark text-white fw-bold rounded-0 rounded-end">
          {`>`}
        </button>
      </form>
      {error.status && (
        <small className="text-danger d-flex">{error.errorMessage}</small>
      )}
    </div>
  );
};

export default Search;
