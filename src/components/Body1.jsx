import { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { filterData } from "../utils/helper";

const Body = () => {
 
  const [restaurants,setResturants]=useState(restaurantList)
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
          setSearchText(e.target.value)
          }}
        />
   
      
        {/*  */}
        <button
          className="search-button"
          onClick={() => {
            const data= filterData(searchText,restaurants)
            setResturants(data)
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
