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
import { useLoaderData } from "react-router-dom";
import ProductCard from "../../components/cards/ProductCard";
import Pagination from "../../components/Pagination";

const Products = () => {
  const productsData = useLoaderData();
  console.log(productsData);

  return (
    <div className="py-[5rem]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-20">
        {productsData.data.data.map((product) => (
          <>
            <ProductCard product={product} />
          </>
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
