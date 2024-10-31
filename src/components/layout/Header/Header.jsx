import { MoonIcon, ShoppingCartIcon, SunIcon } from "lucide-react";
import IconButton from "../../core/IconButton";
import useTheme from "../../../hooks/useTheme";
import { THEME_OPTIONS } from "../../../stores/themeContext";
import { cn } from "../../../utils";
import Link from "../../core/Link";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className={cn(
        "border-b border-b-gray-400 py-3",
        theme === THEME_OPTIONS.DARK_MODE &&
          "border-b-slate-500 bg-slate-800 text-white"
      )}
    >
      <nav className="container flex justify-between mx-auto px-4 items-center">
        <Link to="/" variant="underline" className="text-2xl">
          Shoppy
        </Link>
        <div>
          <IconButton onClick={toggleTheme}>
            {theme === THEME_OPTIONS.LIGHT_MODE ? <MoonIcon /> : <SunIcon />}
          </IconButton>
          <IconButton>
            <ShoppingCartIcon />
          </IconButton>
        </div>
      </nav>
    </header>
  );
};

export default Header;
