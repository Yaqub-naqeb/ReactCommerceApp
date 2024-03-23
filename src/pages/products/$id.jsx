import { gettingData } from "../../api/get/fetchData";
import { useLoaderData } from "react-router-dom";

export const productLoader = async ({ request}) => {
  const url = new URL(request.url);
  const page = url.searchParams.get("page");

  let productsData = {};

  try {
    productsData = await gettingData(
      `https://ewaiq.com/public/api/v1/products/all?page=${page ? page : 1}`,
      "POST"
    );
  } catch (err) {
    console.log(err);
  }

  return productsData.data.current_page;
};

const ProductDetail = () => {
  const page = useLoaderData();

  return <div>ProductDetail</div>;
};

export default ProductDetail;
