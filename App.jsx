import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./src/logo.jpg"
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

const Title = () => {
  return (
    <a href="/">
   <img src={logo} className="logo" alt="logo" />
   </a>
  );
};

const Header = ()=> {
  return (
    <div className="header">
      <Title/>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const burgerKing={
  name:"Burger King",
  img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
  cusines:["Burger ", "American"],
  rating:"4.2"
}



const RestrauntCard=()=>{
 return(
  <div className="card">
    <img src={burgerKing.img} alt="" />
    <h2>{burgerKing.name}</h2>
    <h3>{burgerKing.cusines.join(", ")}</h3>
    <h4>{burgerKing.rating} stars</h4>
  </div>
 ) 
}



const Body=()=>{
  return(
    <div className="restaurant-list">
    <RestrauntCard/>
    <RestrauntCard/>
    <RestrauntCard/>
    <RestrauntCard/>
    <RestrauntCard/>
    <RestrauntCard/>
    <RestrauntCard/>
    </div>
  )
}
const Footer=()=>{
  return(
    <h4>footer</h4>
  )
}

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
