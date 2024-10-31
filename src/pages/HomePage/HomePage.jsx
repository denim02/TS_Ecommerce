import ProductCard from "../../components/features/ProductCard";
import products from "../../config/products";
import useCart from "../../hooks/useCart";

const HomePage = () => {
  const { addProduct } = useCart();

  return (
    <div className="grid grid-cols-3 gap-x-6 gap-y-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addProduct={addProduct}
        />
      ))}
    </div>
  );
};

export default HomePage;
