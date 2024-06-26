import addCart from "../../api/post/addCart";

export const cartsAction = async ({ request }) => {
  const formData = await request.formData();
  const formDataObject = Object.fromEntries(formData.entries());

  let addToCart = {};
  try {
    addToCart = await addCart(formDataObject);
  } catch (err) {
    console.log(err);
  }

  return addToCart;
};

export const productsLoader = async ({ request }) => {
  const url = new URL(request.url);

  const page = url.searchParams.get("page");
  let productsData = {};

  try {
    productsData = await gettingData(
      `https://ewaiq.com/public/api/v1/products/featured?page=${
        page ? page : 1
      }`,
      "GET"
    );
  } catch (err) {
    console.log(err);
  }

  return productsData;
};
import { gettingData } from "../../api/get/fetchData";
import { useLoaderData, useNavigation, useSubmit } from "react-router-dom";
import ProductCard from "../../components/cards/ProductCard";
import Pagination from "../../components/Pagination";
import SuccessAlert from "../../components/alets/SuccessAlert";
import { useState } from "react";

const Products = () => {
  const submit = useSubmit();
  const productsData = useLoaderData();
  const navigate = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [alertVisible, setAlertVisible] = useState(false);

  const handleCart = (data) => {
    submit(data, { method: "post", action: "." });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    filterProducts(e.target.value);
  };

  const filterProducts = (query) => {
    const filtered = productsData.data.data.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="py-[5rem]">
      <div className="absolute w-[16rem] right-5 top-[6.5rem]">
        <SuccessAlert show={alertVisible} />
      </div>

      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="px-4 py-2 border border-gray-300 rounded-md rounded-r-none outline-none "
        />
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-500 text-[.9rem] text-white rounded-l-none py-1 px-4 rounded"
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-10  xl:px-[8rem] p-20">
        {filteredProducts
          ? filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                handleCart={handleCart}
                navigate={navigate}
              />
            ))
          : productsData.data.data.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                handleCart={handleCart}
                navigate={navigate}
              />
            ))}{" "}
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
