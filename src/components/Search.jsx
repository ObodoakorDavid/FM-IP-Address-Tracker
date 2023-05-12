/** @format */

import React from "react";

const Search = () => {
  return (
    <div className="w-90 mx-auto">
      <h1 className="text-white py-3">IP Address Tracker</h1>
      <form className="d-flex justify-content-center w-100">
        <input
          type="text"
          placeholder="192.212.174.101"
          className="border-0 rounded-start w-100 fw-semibold px-3 py-2 "
        />
        <button className="btn bg-dark text-white fw-bold rounded-0 rounded-end">
          {" "}
          {`>`}{" "}
        </button>
      </form>
    </div>
  );
};

export default Search;
