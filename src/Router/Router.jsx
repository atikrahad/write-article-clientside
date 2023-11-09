import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Addblog from "../Pages/Addblog"
import Allblog from "../Pages/Allblog"
import Wishlist from "../Pages/Wishlist";
import Feauturesblog from "../Pages/Feauturesblog";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Blogdetails from "../Pages/Blogdetails";
import Privateroute from "./Privateroute";
import Update from "../Pages/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "addblog",
        element: <Privateroute><Addblog></Addblog></Privateroute>
      },
      {
        path: "allblog",
        element: <Allblog></Allblog>,
        loader: ()=> fetch("https://blogsite-server-1psfon91z-atikrahad1-gmailcom.vercel.app/postcount")
      },
      {
        path: "wishlist",
        element: <Wishlist></Wishlist>
      },
      {
        path: "feautures",
        element: <Feauturesblog></Feauturesblog>
      },
      {
        path: "blogdetails/:id",
        element: <Privateroute><Blogdetails></Blogdetails></Privateroute>,
        loader: ({params})=> fetch(`https://blogsite-server-1psfon91z-atikrahad1-gmailcom.vercel.app/allpost/${params.id}`)
      },
      {
        path: "update",
        element: <Privateroute><Update></Update></Privateroute>
      }
    ],
  },
  {
    path: "/register",
    element: <Register></Register>
  },
  {
    path: "/login",
    element: <Login></Login>
  }
]);

const Router = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Router;
