import { MoonIcon, ShoppingCartIcon, SunIcon } from "lucide-react";
import IconButton from "../../core/IconButton";
import useTheme from "../../../hooks/useTheme";
import { THEME_OPTIONS } from "../../../stores/themeContext";
import { cn } from "../../../utils";
import Link from "../../core/Link";
import Typography from "../../core/Typography";
import useCart from "../../../hooks/useCart";
import { useMemo } from "react";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { cartItems } = useCart();

  const cartQuantity = useMemo(() => {
    return cartItems.length > 0
      ? cartItems.reduce(
          (accumulator, currentItem) => accumulator + currentItem.quantity,
          0
        )
      : 0;
  }, [cartItems]);

  return (
    <header
      className={cn(
        "border-b border-b-gray-400 py-3 transition-colors duration-300",
        theme === THEME_OPTIONS.DARK_MODE &&
          "border-b-slate-500 bg-slate-900 text-white"
      )}
    >
      <nav className="container flex justify-between mx-auto px-4 items-center">
        <Link to="/" variant="underline" className="text-2xl">
          Shoppy
        </Link>
        <div className="flex items-center">
          <IconButton onClick={toggleTheme}>
            {theme === THEME_OPTIONS.LIGHT_MODE ? <MoonIcon /> : <SunIcon />}
          </IconButton>

          <Link to="/cart" className="group flex items-center cursor-pointer">
            <Typography
              component="subtitle"
              className={cn(
                "transition-colors duration-200 group-hover:text-blue-600",
                theme === THEME_OPTIONS.DARK_MODE &&
                  "group-hover:text-purple-300"
              )}
            >
              {cartQuantity}
            </Typography>
            <IconButton className="px-1">
              <ShoppingCartIcon />
            </IconButton>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
