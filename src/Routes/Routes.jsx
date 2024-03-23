import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Hone from "../Pages/Home/Hone";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Hone></Hone>,
      },
      {
        path: "/donation",
        element: <h1>Donation</h1>
      },
      {
        path: "/statistics",
        element: <h1>Statistics</h1>
      },
      {
        path: "/donation-details/:id",
        element:<DonationDetails></DonationDetails>,
      },
    ]
  },
  
]);

export default router
