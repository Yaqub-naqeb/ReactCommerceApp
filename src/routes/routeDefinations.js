const routes = {
  products: {
    path: "/products",

    productPage: {
      path: "/products/:productId",
    },
    //  loader: booksLoader,
  },
  cart: {
    path: "/cart",
  },
  root: {
    path: "/",
  },
};
export default routes;
