// https://ewaiq.com/public/storage/decoala/
export const productsLoader=async({request})=>{

    
        let productsData = {};
    
        try {
          productsData = await gettingProducts('https://ewaiq.com/public/api/v1/products/all');

        } catch (err) {
          console.log(err);
        }
      
        return productsData;
    }



import { gettingProducts } from "../../api/get/fetchData";
import {  useLoaderData} from "react-router-dom";
import ProductCard from '../../components/cards/ProductCard'



const Products = () => {
    const productsData = useLoaderData();

    console.log(productsData)

  return (
    <div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-20">

    {productsData.data.data.map(product => (
       <>
         <ProductCard product={product}/>
         </>
    ))}
  
</div>
</div>

  )
}

export default Products
