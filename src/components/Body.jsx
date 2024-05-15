import ReastaurentCard from "./ReastaurentCard.JSX";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [RestaurentList, setRestaurentList] = useState([]);
  const [FilteredList, setFilteredList] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const [showCuisineOptions, setShowCuisineOptions] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const corsProxyUrl = "https://proxy.cors.sh/";
    const apiUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=24.585445&lng=73.712479&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    try {
      const response = await fetch(corsProxyUrl + apiUrl, {
        headers: {
          'x-cors-api-key': 'temp_2d9a22a9c13bd4fe3b2dede499458cc0'
        }
      });
      
      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status} (${response.statusText})`);
      }
      
      const jsonData = await response.json();
      const apiRestaurants = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setRestaurentList(apiRestaurants);
      setFilteredList(apiRestaurants);
      
      // Merge API data with your JSON data
      // const mergedRestaurants = [...apiRestaurants, ...resList];
      // setRestaurentList(mergedRestaurants);
      // setFilteredList(mergedRestaurants);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const trimmedSearchText = searchText.trim();
    if (trimmedSearchText === "") {
      setFilteredList(RestaurentList); 
    } 
    else {
      const filteredRestaurants = RestaurentList.filter(
        (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredList(filteredRestaurants);
    }
  }, [searchText]);

  const getUniqueCuisines = () => {
    const cuisinesSet = new Set();
    RestaurentList.forEach((restaurant) => {
      restaurant.info.cuisines.forEach((cuisine) => {
        cuisinesSet.add(cuisine);
      });
    });
    return Array.from(cuisinesSet);
  };
  
  const handleFilterByCuisine = (cuisine) => {
    setSelectedCuisine(cuisine);
    const filteredList = RestaurentList.filter((res) =>
      res.info.cuisines.includes(cuisine)
    );
    setFilteredList(filteredList);
    setShowCuisineOptions(false); // Close the cuisine options after selection
  };

  return RestaurentList.length===0 ? <Shimmer/> :(
    <div className="body">
      <div className="search-bar">
        <input type="search" name="search" id="search" value={searchText} onChange={
          (e) => setSearchText(e.target.value)
        }/>
        <button className="searchBtn" onClick={() => {
            const filteredRestaurants = RestaurentList.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredList(filteredRestaurants);
          }}><span className="material-symbols-outlined search">search</span>
        </button>
      </div>
      <div className="filter">
        <button className="filter-btn" onClick={() => {
            const filteredList = RestaurentList.filter(
              (res) => res.info.avgRating > 4.1
            );
            setFilteredList(filteredList);
          }}>Top Rated Restaurants
        </button>
        <button className="filter-btn" onClick={() => {
            const filteredList = RestaurentList.filter(
              (res) => res.info.sla.deliveryTime < 26
            );
            setFilteredList(filteredList);
          }}>Fast Delivery
        </button>
        <div className="cuisine-dropdown">
          <button
            className="filter-btn"
            onClick={() => setShowCuisineOptions(!showCuisineOptions)}
          >
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
        {FilteredList.map((restaurant) => {
          return (
            <Link key={restaurant.info.id} to={"/restaurents/" + restaurant.info.id}><ReastaurentCard  resData={restaurant} /></Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
