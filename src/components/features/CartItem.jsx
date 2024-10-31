import PropTypes from "prop-types";
import Typography from "../core/Typography";
import IconButton from "../core/IconButton";
import { CircleMinus, PlusCircle } from "lucide-react";
import useTheme from "../../hooks/useTheme";
import { THEME_OPTIONS } from "../../stores/themeContext";
import { cn } from "../../utils";
import Link from "../core/Link";

const CartItem = ({ index, cartItem, addProduct, removeProduct }) => {
  const { theme } = useTheme();

  return (
    <div
      className={cn(
        "grid grid-cols-12 items-center py-4 px-6 gap-4 group transition-colors",
        theme === THEME_OPTIONS.DARK_MODE
          ? "hover:bg-slate-800/50"
          : "hover:bg-slate-50"
      )}
    >
      <div className="col-span-1">
        <Typography
          component="subtitle"
          className={cn(
            "inline-flex items-center justify-center w-6 h-6 rounded-full text-xs",
            theme === THEME_OPTIONS.DARK_MODE
              ? "bg-slate-800 text-slate-300"
              : "bg-slate-100 text-slate-600"
          )}
        >
          {index + 1}
        </Typography>
      </div>

      <div className="col-span-4">
        <Typography component="body" className="font-medium line-clamp-1">
          <Link to={`/products/${cartItem.id}`}>{cartItem.name}</Link>
        </Typography>
      </div>

      <div className="col-span-2 text-right">
        <Typography
          component="body"
          className={cn(
            theme === THEME_OPTIONS.DARK_MODE
              ? "text-slate-300"
              : "text-slate-600"
          )}
        >
          ${cartItem.price.toFixed(2)}
        </Typography>
      </div>

      <div className="col-span-2">
        <div className="flex items-center justify-center gap-1">
          <IconButton
            onClick={() => removeProduct(cartItem.id)}
            className={cn(
              "p-1 rounded-full transition-colors",
              theme === THEME_OPTIONS.DARK_MODE
                ? "hover:bg-slate-700"
                : "hover:bg-slate-100"
            )}
          >
            <CircleMinus className="w-5 h-5" />
          </IconButton>

          <Typography component="body" className="w-8 text-center font-medium">
            {cartItem.quantity}
          </Typography>

          <IconButton
            onClick={() => addProduct(cartItem.id)}
            className={cn(
              "p-1 rounded-full transition-colors",
              theme === THEME_OPTIONS.DARK_MODE
                ? "hover:bg-slate-700"
                : "hover:bg-slate-100"
            )}
          >
            <PlusCircle className="w-5 h-5" />
          </IconButton>
        </div>
      </div>

      <div className="col-span-3 text-right">
        <Typography component="body" className="font-bold">
          ${(cartItem.price * cartItem.quantity).toFixed(2)}
        </Typography>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  index: PropTypes.number.isRequired,
  cartItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
  }).isRequired,
  addProduct: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
  setProductQuantity: PropTypes.func.isRequired,
};

export default CartItem;
