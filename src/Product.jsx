import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();

  const fetchProduct = async () => {
    const response = await fetch(
      `https://dummyjson.com/products/${params.productId}`
    );
    const data = await response.json();
    return data;
  };

  const {
    isPending,
    isError,
    error,
    data: product,
  } = useQuery({
    queryKey: ["productss",params.productId],
    queryFn: fetchProduct,
    staleTime: 10000,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  console.log(product);
  return <div>Product {product.title}</div>;
};

export default Product;
