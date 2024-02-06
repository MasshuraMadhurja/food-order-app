import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestrauMenu from "./components/RestrauMenu";

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

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/", 
    element: <AppLayout />, 
    errorElement: <Error />, // show error component for path is different
    children: [
      // show children component for routing
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestrauMenu/>
       
      },
    ],
  },
]);
// all the children will go to into <outlet/> according to the route
   
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
