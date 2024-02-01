import { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";

function filterData(searchText, restaurant){
  restaurant.filter()
}

const Body = () => {
 
  const [restaurant,setResturant]=useState(restaurantList)
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
          setSearchText(e.searchText.value)
          }}
        />
        <h1>{searchText}</h1>
        <h2>{clicked}</h2>
        {/*  */}
        <button
          className="search-button"
          onClick={() => {
            const data= filterData(searchText,restaurant)
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {restaurantList.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
