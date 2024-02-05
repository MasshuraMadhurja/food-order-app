
import { IMAGE_CDN_URL } from "../config";

const RestrauntCard = ({
  cloudinaryImageId,
    name,
    id,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,

}) => {
  return (
    <div className="card-details">
      <div className="card">
        
        <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`} />
        <div className="ratings">
          <p style={{ margin: "0" }}>
            <strong>{name}</strong>
          </p>
        </div>
        <small>{cuisines.join(", ")}</small> <br /> <br />
        <p
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <small
            style={avgRating > 3 ? { color: "green" } : { color: "orange" }}
          >
            {avgRating}
          </small>
          <small>{costForTwo}</small>{" "}
          <small>{deliveryTime}</small>
        </p>
      </div>
    </div>
  );
};

export default RestrauntCard;


// import {IMG_CDN_URL} from "../constants";

// const  RestaurantCard=(
//     {cloudinaryImageId,
//       name,
//       cuisines,
//       id,
//       avgRating,
//        area,
//       lastMileTravelString,
//       costForTwoString,
//      })=>{
//    return(
//     <div className="card">
//       <img src={IMG_CDN_URL+cloudinaryImageId} alt="" />
//       <h3>{name}</h3>
//         <h4>{cuisines}</h4>  
//         {/* .join(", ") */}
//         <h4>{area}</h4>
//         <span>
//           <h4><i className="fa-solid fa-star"></i>{avgRating}</h4>
//           <h4>{lastMileTravelString}</h4>
//           <h4>{costForTwoString}</h4>
//         </span>
//       </div>
//    ) 
   
//   }
//   export default RestaurantCard;