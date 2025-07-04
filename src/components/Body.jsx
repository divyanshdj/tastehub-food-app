import { useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import ReastaurentCard, { withVegLabelCard } from "./ReastaurentCard.JSX";
import OfflinePage from "./OfflinePage.jsx";
import useFetchRestaurants from "../hooks/useFetchRestaurants";
import useSearch from "../hooks/useSearch";
import useCuisineFilter from "../hooks/useCuisineFilter";
import useOnlineStatus from "../hooks/useOnlineStatus.js";
import ItemCorousel from "./ItemCorousel.jsx";

const Body = () => {
  const { restaurants, isLoading } = useFetchRestaurants();
  const [activeFilter, setActiveFilter] = useState(null);

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

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
    if (e.target.value === '') {
      setFilteredRestaurants(restaurants);
      setActiveFilter(null);
    }
    setActiveFilter('search');
  }

  const handleTopRatedFilter = () => {
    const filteredList = restaurants.filter((res) => res.info.avgRating > 4.1);
    setFilteredRestaurants(filteredList);
    setActiveFilter('topRated');
  };

  const handleFastDeliveryFilter = () => {
    const filteredList = restaurants.filter((res) => res.info.sla.deliveryTime < 26);
    setFilteredRestaurants(filteredList);
    setActiveFilter('fastDelivery');
  };

  const handleCuisineFilter = (cuisine) => {
    handleFilterByCuisine(cuisine);
    setActiveFilter('cuisine');
  };

  const clearFilters = () => {
    setFilteredRestaurants(restaurants);
    setActiveFilter(null);
    setSearchText('');
    setShowCuisineOptions(false);
  };

  if (onlineStatus === false) {
    return <OfflinePage />;
  }

  if (isLoading) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="help-search">
        <input
          type="search"
          name="search"
          id="search"
          value={searchText}
          onChange={handleSearchTextChange}
          placeholder="Search restaurants..."
          className="search-input"
        />
        <button
          className="search-button"
          onClick={() => {
            const filteredRestaurants = restaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filteredRestaurants);
            setActiveFilter('search');
          }}
        >
          <span className="material-symbols-outlined search-icon">search</span>
        </button>
      </div>

      {activeFilter !== 'search' && (
        <ItemCorousel />
      )}

      {restaurants.length > 0 && searchedRestaurants.length > 0 && (
        <div className="restaurant-count">
          <h2 className="carousel-title">
            {searchedRestaurants.length} Restaurants Found
          </h2>
        </div>
      )}

      <div className="filter">
        <button
          className={`filter-btn ${activeFilter === 'topRated' ? 'active' : ''}`}
          onClick={handleTopRatedFilter}
        >
          Top Rated Restaurants
        </button>

        <button
          className={`filter-btn ${activeFilter === 'fastDelivery' ? 'active' : ''}`}
          onClick={handleFastDeliveryFilter}
        >
          Fast Delivery
        </button>

        <div className="cuisine-dropdown">
          <button
            className={`filter-btn ${activeFilter === 'cuisine' ? 'active' : ''}`}
            onClick={() => setShowCuisineOptions(!showCuisineOptions)}
          >
            {activeFilter == null ? "Cuisines" : selectedCuisine || "Cuisines"}
          </button>

          {showCuisineOptions && (
            <div className="cuisine-options">
              {getUniqueCuisines().map((cuisine) => (
                <button
                  key={cuisine}
                  className="cuisine-btn"
                  onClick={() => handleCuisineFilter(cuisine)}
                >
                  {cuisine}
                </button>
              ))}
            </div>
          )}
        </div>

        {activeFilter && (
          <button className="clear-filter-btn" onClick={clearFilters}>
            Clear Filters
          </button>
        )}
      </div>

      <div className="rest-container">
        {searchedRestaurants.length > 0 ? searchedRestaurants.map((restaurant) => (
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
        )) : (
          <div className="no-results-container">
  <div className="no-results-content">
    <span className="material-symbols-outlined no-res-search">search_off</span>
    <h1 className="no-results">No restaurants found</h1>
    <p className="no-results-suggestion">
      Try adjusting your search or filter to find what you're looking for
    </p>
    <button 
      className="reset-filters-btn"
      onClick={clearFilters}
    >
      Reset Filters
    </button>
  </div>
</div>
        )}
      </div>

      {activeFilter === 'search' && (
        <ItemCorousel />
      )}
    </div>
  );
};

export default Body;