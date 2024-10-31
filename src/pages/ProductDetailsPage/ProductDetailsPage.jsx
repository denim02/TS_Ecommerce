import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { id } = useParams();
  return <p>Product Details {id}</p>;
};

export default ProductDetailsPage;
