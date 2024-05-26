import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constant.js";
import ReastaurentCard, { withVegLabelCard } from "./ReastaurentCard.JSX";
import OfflinePage from "./OfflinePage.jsx";
import useFetchRestaurants from "../hooks/useFetchRestaurants";
import useSearch from "../hooks/useSearch";
import useCuisineFilter from "../hooks/useCuisineFilter";
import useOnlineStatus from "../hooks/useOnlineStatus.js";

const Body = () => {
  const { restaurants, isLoading } = useFetchRestaurants(API_URL);
  const {
    searchText,
    setSearchText,
    filteredRestaurants: searchedRestaurants,
    setFilteredRestaurants,
  } = useSearch(restaurants);
  const {
    selectedCuisine,
    showCuisineOptions,
    setShowCuisineOptions,
    getUniqueCuisines,
    handleFilterByCuisine,
  } = useCuisineFilter(searchedRestaurants, setFilteredRestaurants);
  const onlineStatus = useOnlineStatus();

  const ReastaurentVegCard = withVegLabelCard(ReastaurentCard);

  if (onlineStatus === false) {
    return <OfflinePage />;
  }

  if (isLoading) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search-bar">
        <input
          type="search"
          name="search"
          id="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="searchBtn"
          onClick={() => {
            const filteredRestaurants = restaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filteredRestaurants);
          }}
        >
          <span className="material-symbols-outlined search">search</span>
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurants.filter(
              (res) => res.info.avgRating > 4.1
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurants.filter(
              (res) => res.info.sla.deliveryTime < 26
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Fast Delivery
        </button>
        <div className="cuisine-dropdown">
          <button
            className="filter-btn"
            onClick={() => setShowCuisineOptions(!showCuisineOptions)}
          >
            {" "}
            {selectedCuisine || "Cuisines"}
          </button>
          {showCuisineOptions && (
            <div className="cuisine-options">
              {getUniqueCuisines().map((cuisine) => (
                <button
                  key={cuisine}
                  className="cuisine-btn"
                  onClick={() => handleFilterByCuisine(cuisine)}
                >
                  {cuisine}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="rest-container">
        {searchedRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurents/" + restaurant.info.id}
          >
            {restaurant.info.veg ? (
              <ReastaurentVegCard resData={restaurant} />
            ) : (
              <ReastaurentCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
