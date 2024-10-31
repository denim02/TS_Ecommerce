import products from "../config/products";
import useCart from "./useCart";

const useCartWithDetails = () => {
  const cart = useCart();

  return {
    ...cart,
    cartItems: cart.cartItems.map((item) => ({
      ...item,
      ...products.find((product) => product.id === item.id),
    })),
  };
};

export default useCartWithDetails;
