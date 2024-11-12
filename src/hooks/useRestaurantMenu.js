import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constant";

const useRestaurantMenu = (resId) => {
  const [ResInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, [resId]);

  const fetchData = async () => {
    try {
      const corsProxyUrl = "https://proxy.cors.sh/";
      const response = await fetch(corsProxyUrl + MENU_API + resId, {
        headers: {
          "x-cors-api-key": "temp_b115edb34e36afa3d0962dc415067871",
        },
      });

      if (!response.ok) {
        throw new Error(
          `Failed to fetch data. Status: ${response.status} (${response.statusText})`
        );
      }

      const json = await response.json();
      console.log("Fetched Menu Data:", json?.data); // Log the data here
      setResInfo(json?.data); // You can use this or check the correct structure
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return ResInfo;
};

export default useRestaurantMenu;
