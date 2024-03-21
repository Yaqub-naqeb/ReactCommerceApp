
import { useState ,useEffect} from "react";
import { gettingProducts } from "../../api/get/fetchData";
import {  useLoaderData} from "react-router-dom";



export const productLoader=async({request,params})=>{
  const url = new URL(request.url);
  // const page = url.searchParams.get("page");
 

  

    
  let productsData = {};
  let productDetail={};

  try {
    productsData = await gettingProducts(
      `https://ewaiq.com/public/api/v1/products/all?page=${page ? page : 1}`
    );    productDetail = productsData.data.data.filter(item =>
      item.slugable.key.toLowerCase().includes(params.id));



  } catch (err) {
    console.log(err);
  }

  return productDetail;
}


const ProductDetail = ({props}) => {
  console.log(props)

  
  const productDetail = useLoaderData();
  
  console.log(productDetail)

  // const [productDetail,setProductDetail]=useState(null)

 

  // const filterProducts = (query) => {
  //   const filtered = productsData.data.data.filter((product) =>
  //     product.name.toLowerCase().includes(query.toLowerCase())
  //   );
  //   setProductDetail(filtered);
  // };
  // useEffect(() => {
  //   const filterProducts = (product) => {
  //     const matchesSearch = product.slugable.key===params.id;
  //     return matchesSearch
  //   };

  //   const filteredProducts = productsData.data.data.filter(filterProducts);
  //   setProductDetail(filteredProducts);
  // }, [productsData.data.data, searchQuery, selectedCategory]);




  return (
    <div>
      hiii
    </div>
  )
}

export default ProductDetail
