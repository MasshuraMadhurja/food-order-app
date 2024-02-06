import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import {createBrowserRouter, RouterProvider} from "react-router-dom";


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







const AppLayout=()=>{
  return(
    <>
    <Header/>
    <Body/>
    <Footer/>
    </>
  )
}



const appRouter= createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,

  },
  {
    path:"/about",
    element: <About/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
