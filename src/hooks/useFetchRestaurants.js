import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import { isMobileDevice } from "../utils/isMobileDevice";
import { API_URL_DESKTOP, API_URL_MOBILE } from "../utils/constant";

const useFetchRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching restaurants...");
        const corsProxyUrl = "https://proxy.cors.sh/";
        const selectedApiUrl = isMobileDevice() ? API_URL_MOBILE : API_URL_DESKTOP;

        const response = await fetch(corsProxyUrl + selectedApiUrl, {
          headers: {
            "x-cors-api-key": "temp_314ab88ddc4f3f9dc90aa107a6d2896d",
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status} (${response.statusText})`);
        }

        const jsonData = await response.json();

        setJsonData(jsonData);

        // Extract restaurants differently based on device
        let apiRestaurants = [];
        if (isMobileDevice()) {
          apiRestaurants = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        } else {
          apiRestaurants =
            jsonData?.data?.cards?.find(
              (card) => card.card?.card?.id === "restaurant_grid_listing_v2"
            )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        }

        if (apiRestaurants.length === 0) {
          throw new Error("No restaurants found in the API response.");
        }

        setRestaurants(apiRestaurants);
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching data, using mock data:", error);
        setRestaurants(resList);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { restaurants, isLoading, jsonData };
};

export default useFetchRestaurants;
