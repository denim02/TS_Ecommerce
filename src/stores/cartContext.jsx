import { createContext, useCallback, useReducer } from "react";
import PropTypes from "prop-types";

// Cart Item object:
// {
//  id: number;
//  quantity: number;
// }
const INITIAL_VALUES = {
  cartItems: [],
};

const ACTION_TYPE = {
  ADD_PRODUCT: "ADD_PRODUCT",
  REMOVE_PRODUCT: "REMOVE_PRODUCT",
  CLEAR_CART: "CLEAR_CART",
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
    case ACTION_TYPE.CLEAR_CART:
      return { ...state, cartItems: [] };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export const cartContext = createContext({});

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_VALUES);

  console.log(state);

  const addProduct = useCallback((id, quantity = 1) => {
    dispatch({
      type: ACTION_TYPE.ADD_PRODUCT,
      payload: { id, quantity },
    });
  }, []);

  const removeProduct = useCallback((id) => {
    dispatch({
      type: ACTION_TYPE.REMOVE_PRODUCT,
      payload: { id },
    });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({
      type: ACTION_TYPE.CLEAR_CART,
    });
  }, []);

  return (
    <cartContext.Provider
      value={{
        cartItems: state.cartItems,
        addProduct,
        removeProduct,
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
