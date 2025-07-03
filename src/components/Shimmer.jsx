import React from "react";

const Shimmer = () => {
  return (
    <>
      <div className="shimmer-header">
        <div className="help-search">
          <input type="search" name="search" id="search" className="search-input shimmer-search" />
        </div>
        <div className="filter shimmer-container-filter">
          <button className="filter-btn shimmer-filter"></button>
          <button className="filter-btn shimmer-filter"></button>
          <button className="filter-btn shimmer-filter"></button>
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
