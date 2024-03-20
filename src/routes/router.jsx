import ErrorPage from "../pages/Error";
import routes from "./routeDefinations";
import Root from "../pages/Root";
import Home from "../pages/home/_index";
import Products from "../pages/products/_index";
import Cart from "../pages/cart/_index";

const routesConfig = [
  {
    errorElement: <ErrorPage />,
    element: <Root />,
    children: [
      {
        path: routes.root.path,
        element: <Home />,
      },
      {
        path: routes.products.path,
        element: <Products />,
      },
      {
        path: routes.cart.path,
        element: <Cart />,
      },
    ],
  },
];

export default routesConfig;
