import { useEffect, useState } from "react";

const useFetchRestaurants = (API_URL) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const corsProxyUrl = "https://proxy.cors.sh/";
        const response = await fetch(corsProxyUrl + API_URL, {
          headers: {
            'x-cors-api-key': 'temp_2d9a22a9c13bd4fe3b2dede499458cc0'
          }
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status} (${response.statusText})`);
        }

        const jsonData = await response.json();
        const apiRestaurants = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setRestaurants(apiRestaurants);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [API_URL]);

  return { restaurants, isLoading };
};

export default useFetchRestaurants;
