import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const searchText= "kfc";
  return (
    <>
   <div className="search-container">
    <input type="text" className="search-input"  placeholder="Search" value={searchText} />
    console.log({searchText} )
    <button className="search-button" >Search</button>
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
