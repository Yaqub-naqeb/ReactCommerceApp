
import { gettingProducts } from "../../api/get/fetchData";
import {  useLoaderData} from "react-router-dom";


export const productLoader=async({params})=>{
console.log(params.id)
    
  let productData = {};

  try {
    productData = await gettingProducts(`https://ewaiq.com/public/api/v1/products/${params.id}`);
  } catch (err) {
    console.log(err);
  }

  return productData;
}


const ProductDetail = () => {
  const productData = useLoaderData();
  console.log(productData)
  return (
    <div>
      hiiiii
    </div>
  )
}

export default ProductDetail
