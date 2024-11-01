import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import useTheme from "../../hooks/useTheme";
import { THEME_OPTIONS } from "../../stores/themeContext";
import { cn } from "../../utils";

const Layout = () => {
  const { theme } = useTheme();
  return (
    <>
      <Header />
      <main
        className={cn(
          "min-h-screen py-8 px-4 bg-slate-100 transition-colors duration-300",
          theme === THEME_OPTIONS.DARK_MODE && "bg-gray-900"
        )}
      >
        <div className="mx-auto container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
