import { useEffect, useState } from "react";
import resList from "../utils/mockData";

const useFetchRestaurants = (API_URL) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching restaurants...");
        const corsProxyUrl = "https://proxy.cors.sh/";
        const response = await fetch(corsProxyUrl + API_URL, {
          headers: {
            'x-cors-api-key': 'temp_b115edb34e36afa3d0962dc415067871'
          }
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status} (${response.statusText})`);
        }

        const jsonData = await response.json();
        const apiRestaurants = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        // If the API data is empty, use mock data
        if (apiRestaurants.length === 0) {
          throw new Error("No restaurants found in the API response.");
        }

        setRestaurants(apiRestaurants);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data, using mock data:", error);
        // Using mock data in case of an error or no data from API
        setRestaurants(resList);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [API_URL]);

  return { restaurants, isLoading };
};

export default useFetchRestaurants;
