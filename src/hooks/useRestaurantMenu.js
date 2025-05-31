import { useState, useEffect } from "react";
import { MENU_API_DESKTOP, MENU_API_MOBILE } from "../utils/constant";

const useRestaurantMenu = (resId) => {
  const [ResInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const isMobile = window.innerWidth <= 768;
        const API_URL = isMobile ? MENU_API_MOBILE : MENU_API_DESKTOP;

        const corsProxyUrl = "https://proxy.cors.sh/";
        const response = await fetch(corsProxyUrl + API_URL + resId, {
          headers: {
            "x-cors-api-key": "temp_227a49e8270c204bd2c2dd65ea55870a",
          },
        });

        if (!response.ok) {
          throw new Error(
            `Failed to fetch data. Status: ${response.status} (${response.statusText})`
          );
        }

        const json = await response.json();
        console.log("Fetched Menu Data Successfully for ResId:", resId);
        setResInfo(json?.data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    if (resId) {
      fetchData();
    }
  }, [resId]);

  return ResInfo;
};

export default useRestaurantMenu;
