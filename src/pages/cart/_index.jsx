import addCart from "../../api/get/post/addCart";

export const cartsAction = async ({ request }) => {


 
  let productsData = {};
  try {
    productsData = await addCart(
      'http://localhost:3001/carts',
      
    );
  } catch (err) {
    console.log(err);
  }

  return productsData;
};



const Cart = () => {
  return (
    <div>
      shoping
    </div>
  )
}

export default Cart
