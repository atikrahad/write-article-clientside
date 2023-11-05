import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
            index: true,
            element: <Home></Home>
        }
      ]
    },
  ]);

const Router = () => {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};

export default Router;