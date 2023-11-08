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
        element: <Addblog></Addblog>
      },
      {
        path: "allblog",
        element: <Allblog></Allblog>,
        loader: ()=> fetch("http://localhost:5000/postcount")
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
        element: <Blogdetails></Blogdetails>,
        loader: ({params})=> fetch(`http://localhost:5000/allpost/${params.id}`)
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
