import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

// Header
//    -logo
//    -nav items (right side)
//    - cart
// Body
//    - search bar
//    -resturantlist
//      -resturant card
//           -image
//           -name
//           -rating
//           -cusines
//   footer
//    -links
//    -copyright






// Restaurant card component: Image, name, cuisine
// const RestaurantCard = ({
//   cloudinaryImageId,
//   name,
//   cuisines,
//   area,
//   lastMileTravelString,
//   costForTwoString,
//   avgRating,
// }) => {
//   return (
//     <div className="card">
//       <img
//         src={
//           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//           cloudinaryImageId
//         }
//       />
//       <h2>{name}</h2>
//       <h4>{cuisines.join(", ")}</h4>
//       <h4>{area}</h4>
//       <span>
//         <h4><i class="fa-solid fa-star"></i>{avgRating}</h4>
//         <h4>{lastMileTravelString}</h4>
//         <h4>{costForTwoString}</h4>
//       </span>
//     </div>
//   );
// };










const AppLayout=()=>{
  return(
    <>
    <Header/>
    <Body/>
    <Footer/>
    </>
  )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
