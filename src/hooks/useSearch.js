import { useState, useEffect } from "react";

const useSearch = (restaurants) => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  useEffect(() => {
    const trimmedSearchText = searchText.trim();
    if (trimmedSearchText === "") {
      setFilteredRestaurants(restaurants);
    } else {
      const filtered = restaurants.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredRestaurants(filtered);
    }
  }, [searchText, restaurants]);

  return { searchText, setSearchText, filteredRestaurants, setFilteredRestaurants };
};

export default useSearch;
