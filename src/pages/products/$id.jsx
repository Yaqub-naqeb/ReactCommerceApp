
import { gettingData } from "../../api/get/fetchData";
import {  useLoaderData} from "react-router-dom";



export const productLoader=async({request,params})=>{
  const url = new URL(request.url);
  const page = url.searchParams.get("page");
 
  let productsData = {};

  try {
    productsData = await gettingData(
      `https://ewaiq.com/public/api/v1/products/all?page=${page ? page : 1}`,'POST'
    );  
     
  } catch (err) {
    console.log(err);
  }

  return productsData.data.current_page;
}


const ProductDetail = () => {
 
  const page = useLoaderData();

  
  console.log(page)

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
