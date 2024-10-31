import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CartProvider from "./stores/cartContext.jsx";
import AppRouter from "./router/index.jsx";
import ThemeProvider from "./stores/themeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </ThemeProvider>
  </StrictMode>
);
