export const productsLoader = async ({ request }) => {
  const url = new URL(request.url);

  const page = url.searchParams.get("page");
  let productsData = {};
  try {
    productsData = await gettingProducts(
      `https://ewaiq.com/public/api/v1/products/all?page=${page ? page : 1}`
    );
  } catch (err) {
    console.log(err);
  }

  return productsData;
};
import { gettingProducts } from "../../api/get/fetchData";
import { useLoaderData,useNavigation } from "react-router-dom";
import ProductCard from "../../components/cards/ProductCard";
import Pagination from "../../components/Pagination";
import { useState } from "react";


const Products = () => {
  const productsData = useLoaderData();
  const navigate=useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(null);

console.log(productsData)

    // Function to handle search query change
    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
      filterProducts(e.target.value);
    };
  
console.log(filteredProducts)



  const filterProducts = (query) => {
    const filtered = productsData.data.data.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

if(navigate.state==='loading'){
  return <h1>Loading...</h1>
}

  return (
    <div className="py-[5rem]">




<div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>



      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-20">
         {filteredProducts
          ? filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product}  />
            ))
          : productsData.data.data.map((product) => (
              <ProductCard key={product.id} product={product}  />
            ))}
      </div>
      <Pagination
        currentPage={productsData.data.current_page}
        totalPages={productsData.data.last_page}
        nextPage={productsData.data.next_page_url}
        prevPage={productsData.data.prev_page_url}
      />
    </div>
  );
};

export default Products;


