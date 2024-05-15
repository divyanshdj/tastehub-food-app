import React from "react";

const Shimmer = () => {
  return (
    <>
      <div className="shimmer-header">
        <div className="search-bar">
          <input type="search" name="search" id="search" />
        </div>
        <div className="filter">
          <button className="filter-btn"></button>
          <button className="filter-btn"></button>
          <button className="filter-btn"></button>
        </div>
      </div>
      <div className="shimmer-container">
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
      </div>
    </>
  );
};

export default Shimmer;
