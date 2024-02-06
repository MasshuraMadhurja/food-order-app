import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react"; /* This is named export */
import Shimmer from "./Shimmer"; /* This is default export */
import { swiggy_api_URL } from "../constants";
import { restaurantList } from "../constants";
import { Link } from "react-router-dom";

// Filter the restaurant data according input type
function filteredData(searchText, restaurants) {
  const filterData = restaurants.filter((res) =>
    res.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

// Body Component for body section: It contain all restaurant cards
const Body = () => {
  // use useEffect for one time call getRestaurants using empty dependency array
  useEffect(() => {
    getRestaurants();
  }, []);
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllResturants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage,setErrorMessage]=useState("")

  // async function getRestaurant to fetch Swiggy API data

  async function getRestaurants() {
    try {
      // initialize checkData for Swiggy Restaurant data
      const response = await fetch(swiggy_api_URL);
      const json = await response.json();
      const jsonData =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
    
      setAllResturants(jsonData);
      setFilteredRestaurants(jsonData);
    } catch (error) {
      console.log(error);
    }
  }

  if (!allRestaurants) return null;

  const searchData=(searchText, restaurants)=>{
     if (searchText !== "") {
      const filtData = filteredData(searchText, restaurants);
      setFilteredRestaurants(filtData);
      setErrorMessage("");
        if (filtData?.length === 0) {
          setErrorMessage("No matches restaurant found");
      }else {
        setErrorMessage("");
       }
    }else{
      setFilteredRestaurants(restaurants);
    }

  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          // update the state variable searchText when we typing in input box
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            searchData(searchText, allRestaurants);
       
          }}
        >
          Search
        </button>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}
      {/* if restaurants data is not fetched then display Shimmer UI after the fetched data display restaurants cards */}

      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
          {filteredRestaurants.map((restaurant) => {
            return (
              
              <Link to={"/restaurant/" + restaurant.info.id}  className="link" key={restaurant.info.id} >
              <RestaurantCard  {...restaurant.info} />
              </Link>
              );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
