import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ShimmerMenu from "./ShimmerMenu";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import RestaurentCategory from "./RestaurentCategory";
import { CDN2_URL } from "../utils/constant";
import "../css/RestaurentMenu.css";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const ResInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  const navigate = useNavigate();

  // Show shimmer while loading
  if (!ResInfo) return <ShimmerMenu />;

  // Check if cards array exists in response
  if (!ResInfo.cards || !Array.isArray(ResInfo.cards)) {
    return (
      <div className="error-container-menu">
        <div className="error-content">
          <span className="material-symbols-outlined error-icon">error</span>
          <h2>Restaurant Menu Unavailable</h2>
          <p>
            We couldn't load the menu for this restaurant. The restaurant might
            be closed or this location may not service your area.
          </p>
          <button className="home-button" onClick={() => navigate("/")}>
            <span className="material-symbols-outlined">home</span>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  // Restaurant info extraction with fallbacks
  const restaurantInfo =
    ResInfo.cards?.find((card) => card?.card?.card?.info)?.card?.card?.info ||
    {};

  const {
    name = "Restaurant Name Not Available",
    avgRating = "N/A",
    totalRatingsString = "No ratings",
    locality = "Locality not specified",
    cuisines = [],
    costForTwoMessage = "Cost not available",
    areaName = "Area not specified",
    cloudinaryImageId,
    sla = {},
  } = restaurantInfo;

  // Safe groupedCard access
  const groupedCard = ResInfo.cards?.find((c) => c.groupedCard)?.groupedCard;
  const regularCards = groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  const lastCard = regularCards[regularCards.length - 1];
  const { area = "Not specified", completeAddress = "Address not available" } =
    lastCard?.card?.card || {};

  // Filter categories safely
  const categories = regularCards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  // Delivery time with fallback
  const deliveryTime = sla?.deliveryTime
    ? `${sla.deliveryTime} mins`
    : "30 mins";

  return (
    <div className="resMenu">
      <h1 className="resMenuName">{name}</h1>

      <div className="resMenuDetailCard">
        {cloudinaryImageId && (
          <div className="imageContainer">
            <img
              className="resMenuBanner"
              src={`${CDN2_URL}${cloudinaryImageId}`}
              alt={name}
            />
          </div>
        )}

        <div className="cardContent">
          <div className="headerRow">
            <div className="ratingPill">
              <span className="material-symbols-outlined starIcon">star</span>
              <span className="ratingText">
                {avgRating} <span className="divider">•</span>{" "}
                {totalRatingsString}
              </span>
            </div>
            <div className="costForTwo">{costForTwoMessage}</div>
          </div>

          <h3 className="cuisines">
            {cuisines.length > 0
              ? cuisines.join(", ")
              : "Cuisines not specified"}
          </h3>

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
                <div className="infoValue">{deliveryTime}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="menu-h1">MENU</h1>

      <div className="menuCardItems">
        {categories.length > 0 ? (
          categories.map((cat, index) => (
            <RestaurentCategory
              key={cat.card?.card?.title || index}
              data={cat.card?.card}
              showItems={index === showIndex}
              setShowIndex={() =>
                setShowIndex(index === showIndex ? null : index)
              }
            />
          ))
        ) : (
          <div className="no-menu-available">
            <span className="material-symbols-outlined">restaurant_menu</span>
            <h3>Menu Not Available</h3>
            <p>
              We're unable to display the menu at this time. The restaurant may
              be closed or not accepting orders currently.
            </p>
            <button className="back-button" onClick={() => navigate("/")}>
              <span className="material-symbols-outlined">arrow_back</span>
              Back to Home
            </button>
          </div>
        )}
      </div>

      <div className="footer-menu-item">
        <span className="material-symbols-outlined">location_on</span>
        <h4>{name}</h4>
        <h5>
          (Outlet: <span>{area}</span>)
        </h5>
        <h6>{completeAddress}</h6>
      </div>
    </div>
  );
};

export default RestaurentMenu;
