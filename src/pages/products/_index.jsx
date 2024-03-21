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
import { NavLink, useLoaderData} from "react-router-dom";




const Products = () => {
    const productsData = useLoaderData();

 console.log(productsData)
    

  return (
    <div className="grid grid-cols-4 gap-5 p-28">

     { productsData.data.data.map((product)=>(<NavLink to={`/products/${product.slugable
.key}`} key={product.id}>
<img src={`https://ewaiq.com/public/storage/${product.image}`} className="w-[15rem] h-[15rem] object-cover " alt="img"/>

<h1>{product.name}</h1>
<p>{product.brand.name}</p>
<p>${product.price}</p>

</NavLink>
      ))}
  


    </div>

  )
}

export default Products
