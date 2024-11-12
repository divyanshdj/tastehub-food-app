import React from "react";
import { CDN_URL } from "../utils/constant";

const ReastaurentCard = (props) => {
const { resData } = props;

const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;

  return (
    <div className="card">
      <div className="rest-img">
        <img src={ CDN_URL + cloudinaryImageId } alt="foodImg"/>
      </div>
      <div className="rest-title">
        <h3 className="rest-name">{name}</h3>
      </div>
      <div className="rest-details">
        <h4 className="cuisine">{cuisines.join(", ")}</h4>
        <h4 className="rest-rating-number">
          <span className="material-symbols-outlined rate">star</span>&nbsp;
          {avgRating} &nbsp;|&nbsp;{" "}
          <span className="material-symbols-outlined">schedule</span>&nbsp;
          {sla.deliveryTime} mins
        </h4>
        <h4 className="location">{costForTwo}</h4>
      </div>
    </div>
  );
};

export const withVegLabelCard = (ReastaurentCard) => {
  return (props) => {
    return(
      <>
      <label className="veglabel">Veg</label>
      <ReastaurentCard {...props}/>
      </>
    )
  }
}

export default ReastaurentCard;
