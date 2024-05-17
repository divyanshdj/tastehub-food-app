import { useParams } from "react-router-dom";
import ShimmerMenu from "./ShimmerMenu";
import MenuCard from "./MenuCard";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const ResInfo = useRestaurantMenu(resId);

  if (ResInfo === null) return <ShimmerMenu />;

  const { name, avgRating, totalRatingsString, sla, cuisines, costForTwoMessage, areaName } = ResInfo?.cards[2]?.card?.card?.info ?? {};

  const itemCards = ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards ??
    ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards ?? [];

  let cards = ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ?? [];
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
      {itemCards.length > 0 ? (
        <div className="resMenuCard-container">
          {itemCards.map((item) => (
            <MenuCard key={item.card.info.id} menuItemInfo={item} />
          ))}
        </div>
      ) : (
        <h3 style={{ marginTop: "20px", fontWeight: "300" }}>
          No Menu Item Available!!
        </h3>
      )}

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
