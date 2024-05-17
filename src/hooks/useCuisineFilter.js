import { useState } from "react";

const useCuisineFilter = (restaurants, setFilteredRestaurants) => {
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const [showCuisineOptions, setShowCuisineOptions] = useState(false);

  const getUniqueCuisines = () => {
    const cuisinesSet = new Set();
    restaurants.forEach((restaurant) => {
      restaurant.info.cuisines.forEach((cuisine) => {
        cuisinesSet.add(cuisine);
      });
    });
    return Array.from(cuisinesSet);
  };

  const handleFilterByCuisine = (cuisine) => {
    setSelectedCuisine(cuisine);
    const filtered = restaurants.filter((res) => res.info.cuisines.includes(cuisine));
    setFilteredRestaurants(filtered);
    setShowCuisineOptions(false); // Close the cuisine options after selection
  };

  return {
    selectedCuisine,
    showCuisineOptions,
    setShowCuisineOptions,
    getUniqueCuisines,
    handleFilterByCuisine,
  };
};

export default useCuisineFilter;
