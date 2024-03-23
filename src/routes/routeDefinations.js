const routes = {
  products: {
    path: "/products",

    productPage: {
      path: "/products/:productId",
    },

  },
  cart: {
    path: "/cart",
  },
  root: {
    path: "/",
  },
  contact:{
    path:'/contact'
  }
};
export default routes;
