import ErrorPage from "../pages/Error";
import routes from "./routeDefinations";
import Root from "../pages/Root";
import Home from "../pages/home/_index";
import Products, { productsLoader } from "../pages/products/_index";
import Cart from "../pages/cart/_index";
import ProductDetail, { productLoader } from "../pages/products/$id"; 
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
       loader: productsLoader,

      },{
        path:'/products/:id',
        element:(<ProductDetail/>),
        loader: productLoader,
      },
      {
        path: routes.cart.path,
        element: <Cart />,
      },
    ],
  },
];

export default routesConfig;
