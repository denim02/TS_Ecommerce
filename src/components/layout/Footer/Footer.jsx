import { Home, ShoppingCart } from "lucide-react";
import useTheme from "../../../hooks/useTheme";
import { cn } from "../../../utils";
import { THEME_OPTIONS } from "../../../stores/themeContext";
import Typography from "../../core/Typography";
import Link from "../../core/Link";

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "mt-auto py-4 border-t",
        theme === THEME_OPTIONS.DARK_MODE
          ? "bg-slate-900 border-slate-800"
          : "bg-white border-slate-200"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Typography component="body" className="text-sm">
            &copy; {currentYear} Deni Mastori
          </Typography>

          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-1">
              <Home className="w-4 h-4" />
              <span className="text-sm">Home</span>
            </Link>
            <Link to="/cart" className="flex items-center gap-1">
              <ShoppingCart className="w-4 h-4" />
              <span className="text-sm">Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
