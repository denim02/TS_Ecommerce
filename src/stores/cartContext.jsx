import { createContext, useCallback, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import { retrieve, store } from "../utils";

// Cart Item object:
// {
//  id: number;
//  quantity: number;
// }
const INITIAL_STATE = {
  cartItems: [],
};

const ACTION_TYPE = {
  ADD_PRODUCT: "ADD_PRODUCT",
  REMOVE_PRODUCT: "REMOVE_PRODUCT",
  SET_QUANTITY: "SET_QUANTITY",
  CLEAR_CART: "CLEAR_CART",
  SET_STATE: "SET_STATE",
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_PRODUCT: {
      const productInCart = state.cartItems.find(
        (entry) => entry.id === action.payload.id
      );
      if (productInCart)
        return {
          ...state,
          cartItems: state.cartItems.map((entry) =>
            entry.id === action.payload.id
              ? { ...entry, quantity: entry.quantity + action.payload.quantity }
              : entry
          ),
        };
      else {
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            {
              id: action.payload.id,
              quantity: action.payload.quantity,
            },
          ],
        };
      }
    }
    case ACTION_TYPE.REMOVE_PRODUCT: {
      const productInCart = state.cartItems.find(
        (entry) => entry.id === action.payload.id
      );
      return {
        ...state,
        cartItems:
          productInCart.quantity === 1
            ? state.cartItems.filter((entry) => entry.id !== action.payload.id)
            : state.cartItems.map((entry) =>
                entry.id === action.payload.id
                  ? { ...entry, quantity: entry.quantity - 1 }
                  : entry
              ),
      };
    }
    case ACTION_TYPE.SET_QUANTITY: {
      return {
        ...state,
        cartItems:
          action.payload.quantity > 0
            ? state.cartItems.map((entry) =>
                entry.id === action.payload.id
                  ? { ...entry, quantity: action.payload.quantity }
                  : entry
              )
            : state.cartItems.filter((entry) => entry.id !== action.payload.id),
      };
    }
    case ACTION_TYPE.CLEAR_CART:
      return { ...state, cartItems: [] };
    case ACTION_TYPE.SET_STATE:
      return action.payload;
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export const cartContext = createContext({});

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const addProduct = useCallback((id, quantity = 1) => {
    dispatch({
      type: ACTION_TYPE.ADD_PRODUCT,
      payload: { id, quantity: +quantity },
    });
  }, []);

  const removeProduct = useCallback((id) => {
    dispatch({
      type: ACTION_TYPE.REMOVE_PRODUCT,
      payload: { id },
    });
  }, []);

  const setProductQuantity = useCallback((id, quantity) => {
    dispatch({
      type: ACTION_TYPE.SET_QUANTITY,
      payload: { id, quantity },
    });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({
      type: ACTION_TYPE.CLEAR_CART,
    });
  }, []);

  // Initialize state
  useEffect(() => {
    dispatch({
      type: ACTION_TYPE.SET_STATE,
      payload: retrieve("cart") ?? INITIAL_STATE,
    });
  }, []);

  // Persist state
  useEffect(() => {
    if (state !== INITIAL_STATE) store("cart", state);
  }, [state]);

  return (
    <cartContext.Provider
      value={{
        cartItems: state.cartItems,
        addProduct,
        removeProduct,
        setProductQuantity,
        clearCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
