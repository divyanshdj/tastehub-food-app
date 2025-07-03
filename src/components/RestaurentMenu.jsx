import { useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerMenu from "./ShimmerMenu";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import RestaurentCategory from "./RestaurentCategory";
import "../css/RestaurentMenu.css"; // Ensure this CSS file includes responsive styles

const RestaurentMenu = () => {
  const { resId } = useParams();
  const ResInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (!ResInfo) return <ShimmerMenu />;

  // Restaurant info
  const {
    name = "",
    avgRating = "",
    totalRatingsString = "",
    locality = "",
    cuisines = [],
    costForTwoMessage = "",
    areaName = "",
  } = ResInfo?.cards?.find(
    (card) => card?.card?.card?.info
  )?.card?.card?.info || {};

  // Safe groupedCard access
  const groupedCard = ResInfo?.cards?.find((c) => c.groupedCard)?.groupedCard;

  const regularCards = groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const Category = regularCards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const lastCard = regularCards[regularCards.length - 1];
  const { area = "", completeAddress = "" } = lastCard?.card?.card || {};

  return (
    <div className="resMenu">
      <h1 className="resMenuName">{name}</h1>

      <div className="resMenuDetailCard">
        <h4 className="resMenuDetailTitle">
          <span className="material-symbols-outlined">star</span>&nbsp;
          {avgRating} ({totalRatingsString}) &nbsp;|&nbsp; {costForTwoMessage}
        </h4>
        <h3 className="resMenuDetailCuisines">{cuisines.join(", ")}</h3>
        <h4 className="resMenuDetailOutlet">
          Outlet : <span>{areaName}</span>
        </h4>
        <h4 className="resMenuDetailTitle">
          <span className="material-symbols-outlined">schedule</span>&nbsp;
          30 mins
        </h4>
      </div>

      <h1>MENU</h1>
      <div className="line"></div>

      <div className="menuCardItems">
        {Category.map((cat, index) => (
          <RestaurentCategory
            key={cat.card?.card?.title}
            data={cat.card?.card}
            showItems={index === showIndex}
            setShowIndex={() =>
              setShowIndex(index === showIndex ? null : index)
            }
          />
        ))}
      </div>

      <div className="footer-menu-item">
        <span className="material-symbols-outlined">location_on</span>
        <h4>{name}</h4>
        <h5>
          (Outlet : <span>{area}</span>)
        </h5>
        <h6>{completeAddress}</h6>
      </div>
    </div>
  );
};

export default RestaurentMenu;
