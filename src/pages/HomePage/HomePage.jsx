import ProductCard from "../../components/features/ProductCard";
import products from "../../config/products";
import useTheme from "../../hooks/useTheme";
import { THEME_OPTIONS } from "../../stores/themeContext";
import { cn } from "../../utils";

const HomePage = () => {
  const { theme } = useTheme();

  return (
    <div
      className={cn(
        "py-10 bg-slate-200",
        theme === THEME_OPTIONS.DARK_MODE && "bg-slate-700"
      )}
    >
      <div className="container grid grid-cols-3 gap-x-6 gap-y-4 mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
