import { useContext } from "react";
import { cartContext } from "../stores/cartContext";

const useCart = () => {
  return useContext(cartContext);
};

export default useCart;
