import ErrorPage from "../pages/Error";
import routes from "./routeDefinations";
import Root from "../pages/Root";
import Home from "../pages/home/_index";
import Products, { cartsAction, productsLoader } from "../pages/products/_index";
import Cart, {  cartsLoader } from "../pages/cart/_index";
import ProductDetail, { productLoader } from "../pages/products/$id"; 
import ContactForm from "../pages/contact/_index";
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
       action:cartsAction,

      },{
        path:'/products/:id',
        element:(<ProductDetail/>),
        loader: productLoader,
      },
      {
        path: routes.cart.path,
        element: <Cart />,
        loader: cartsLoader,
       
      },
      {
        path:routes.contact.path,
        element:<ContactForm/>
      }
    ],
  },
];

export default routesConfig;
