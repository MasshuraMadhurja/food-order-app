import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import { swiggy_menu_api_URL } from "../constants";

const RestraurantMenu = () => {
  //how to read a dynamic url params

  const { resId } = useParams();

  useEffect(() => {
    getRestaurantInfo(); // call getRestaurantInfo function so it fetch api data and set data in restaurant state variable
  }, []);

  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState([]);

  async function getRestaurantInfo() {
    const data = await fetch(swiggy_menu_api_URL + resId);

    const json = await data.json();
    const jsonData = json?.data?.cards[0]?.card?.card?.info;
    console.log(jsonData);
    setRestaurant(jsonData);
    const menuu =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards;

    console.log(menuu);
    setMenu(menuu);
   
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurent id: {resId}</h1>
        <h2>{restaurant?.name}</h2>
        <h3>{restaurant?.cuisines.join(", ")}</h3>
        <h3>{restaurant?.areaName}</h3>
        <h3>Average Rating: {restaurant?.avgRating}</h3>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
      </div>
      <div>
        <h1>Menu</h1>

        <ul>
          {menu.map((item) => (
            <li key={item?.card?.info?.id}> {item?.card?.info?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestraurantMenu;
