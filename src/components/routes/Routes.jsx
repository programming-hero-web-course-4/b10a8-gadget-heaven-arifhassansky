import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../home/Home";
import Products from "../products/Products";
import ProductDetails from "../productDetails/productDetails";
import Dashboard from "../dashboard/Dashboard";
import Statistics from "../statistics/Statistics";
import Carts from "../carts/carts";
import Wishlists from "../wishlists/Wishlists";
import Error from "../error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
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
          },
          {
            path: "/dashboard/wishlist",
            element: <Wishlists />,
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
