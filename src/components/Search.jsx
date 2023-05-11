/** @format */

import React from "react";

const Search = () => {
  return (
    <div>
      <h1>IP Address Tracker</h1>
      <div className="d-flex justify-content-center">
        <input type="text" placeholder="192.212.174.101" />
        <button className="btn bg-dark text-white fw-bold"> {`>`} </button>
      </div>
    </div>
  );
};

export default Search;
