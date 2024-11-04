import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../home/Home";
import Products from "../products/Products";
import ProductDetails from "../productDetails/productDetails";
import Dashboard from "../dashboard/Dashboard";
import Statistics from "../statistics/Statistics";
import Carts from "../carts/carts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../category.json"),
        children: [
          {
            path: "/",
            element: <Products />,
            loader: () => fetch("../products.json"),
          },
          {
            path: "/category/:category",
            element: <Products />,
            loader: () => fetch("../products.json"),
          },
        ],
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails />,
        loader: () => fetch("../products.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,

        children: [
          {
            path: "/dashboard/carts",
            element: <Carts />,
            loader: () => fetch("../products.json"),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
    ],
  },
]);
export default router;
