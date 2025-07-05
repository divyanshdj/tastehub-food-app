import { useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerMenu from "./ShimmerMenu";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import RestaurentCategory from "./RestaurentCategory";
import "../css/RestaurentMenu.css";

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
  } = ResInfo?.cards?.find((card) => card?.card?.card?.info)?.card?.card
    ?.info || {};

    console.log(ResInfo);

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
        <div className="headerRow">
          <div className="ratingPill">
            <span className="material-symbols-outlined">star</span>
            <span className="ratingText">
              {avgRating} <span className="divider">•</span>{" "}
              {totalRatingsString}
            </span>
          </div>
          <div className="costForTwo">{costForTwoMessage}</div>
        </div>

        <h3 className="cuisines">{cuisines.join(", ")}</h3>

        <div className="infoGrid">
          <div className="infoItem">
            <span className="material-symbols-outlined icon">store</span>
            <div>
              <div className="infoLabel">Outlet</div>
              <div className="infoValue">{areaName}</div>
            </div>
          </div>

            <div className="infoItem">
              <span className="material-symbols-outlined icon">
                location_on
              </span>
              <div>
                <div className="infoLabel">Locality</div>
                <div className="infoValue">{locality}</div>
              </div>
            </div>

          <div className="infoItem">
            <span className="material-symbols-outlined icon">schedule</span>
            <div>
              <div className="infoLabel">Delivery</div>
              <div className="infoValue">30 mins</div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="menu-h1">MENU</h1>

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
