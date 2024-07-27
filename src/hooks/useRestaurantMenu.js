import { useState,useEffect } from "react";
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
          "x-cors-api-key": "temp_2d9a22a9c13bd4fe3b2dede499458cc0",
        },
      });

      if (!response.ok) {
        throw new Error(
          `Failed to fetch data. Status: ${response.status} (${response.statusText})`
        );
      }

      const json = await response.json();
      setResInfo(json?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return ResInfo;
};

export default useRestaurantMenu;
