import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import ShimmerMenu from "./ShimmerMenu";
import MenuCard from "./MenuCard";

const RestaurentMenu = () => {
  const [ResInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const corsProxyUrl = "https://proxy.cors.sh/";
      const response = await fetch(corsProxyUrl + MENU_API + resId, {
        headers: {
          "x-cors-api-key": "temp_2d9a22a9c13bd4fe3b2dede499458cc0",
        },
      });

      if (!response.ok) {
        throw new Error(
          `Failed to fetch data. Status: ${response.status} (${response.statusText})`
        );
      }

      const json = await response.json();
      console.log(json);
      // setResInfo(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
      setResInfo(json?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (ResInfo === null) {
    return <ShimmerMenu />;
  }

  const {
    name,
    avgRating,
    totalRatingsString,
    sla,
    cuisines,
    costForTwoMessage,
    areaName,
  } = ResInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  let { cards } = ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  let cardsLen = cards.length - 1;

  const { area, completeAddress } = cards[cardsLen]?.card?.card;

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
          {sla.slaString}
        </h4>
      </div>

      <h1>MENU</h1>
      <div className="line"></div>
      {itemCards && itemCards.length > 0 ? (
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
        <h5>(Outlet : <span>{area}</span>)</h5>
        <h6>{completeAddress}</h6>
      </div>
    </div>
  );
};
export default RestaurentMenu;
