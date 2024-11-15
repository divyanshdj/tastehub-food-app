import { useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerMenu from "./ShimmerMenu";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import RestaurentCategory from "./RestaurentCategory";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const ResInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (ResInfo === null) return <ShimmerMenu />;

  const {
    name,
    avgRating,
    totalRatingsString,
    sla,
    cuisines,
    costForTwoMessage,
    areaName,
  } = ResInfo?.cards[2]?.card?.card?.info ?? {};

  const Category =
    ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
      return (
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

  let cards =
    ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ?? [];
  let cardsLen = cards.length - 1;

  const { area, completeAddress } = cards[cardsLen]?.card?.card ?? {};

  return (
    <div className="resMenu">
      <h1 className="resMenuName">{name}</h1>

      <div className="resMenuDetailCard">
        <h4 className="resMenuDetailTitle">
          <span className="material-symbols-outlined">star</span>&nbsp;
          {avgRating} ({totalRatingsString}) &nbsp;|&nbsp; {costForTwoMessage}
        </h4>
        <h3 className="resMenuDetailCuisines">{cuisines?.join(", ")}</h3>
        <h4 className="resMenuDetailOutlet">
          Outlet : <span>{areaName}</span>
        </h4>
        <h4 className="resMenuDetailTitle">
          <span className="material-symbols-outlined">schedule</span>&nbsp;
          {sla?.slaString}
        </h4>
      </div>

      <h1>MENU</h1>
      <div className="line"></div>

      <div className="menuCardItems">
        {Category.map((cat, index) => (
          <RestaurentCategory
            key={cat.card?.card?.title}
            data={cat.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={()=>setShowIndex(index === showIndex ? null : index)}
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
