import Card from "../../components/core/Card";
import Button from "../../components/core/Button";
import Link from "../../components/core/Link";
import CartItem from "../../components/features/CartItem";
import useCartWithDetails from "../../hooks/useCartWithDetails";
import useTheme from "../../hooks/useTheme";
import { THEME_OPTIONS } from "../../stores/themeContext";
import { cn } from "../../utils";
import Typography from "../../components/core/Typography";
import { ShoppingCart, Trash2 } from "lucide-react";

const CartSummaryPage = () => {
  const { theme } = useTheme();
  const {
    cartItems,
    addProduct,
    removeProduct,
    setProductQuantity,
    clearCart,
  } = useCartWithDetails();

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <Typography component="h1" className="flex items-center gap-2">
          <ShoppingCart className="w-6 h-6" />
          Shopping Cart ({cartItems.length})
        </Typography>
        {cartItems.length > 0 && (
          <Button
            handleClick={clearCart}
            className="text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 gap-2 flex items-center transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            Clear Cart
          </Button>
        )}
      </div>

      <Card
        className={cn(
          "bg-white/80 backdrop-blur-sm",
          theme === THEME_OPTIONS.DARK_MODE && "bg-slate-900/80"
        )}
      >
        {cartItems.length > 0 ? (
          <>
            <div
              className={cn(
                "grid grid-cols-12 gap-4 px-6 py-3 border-b",
                theme === THEME_OPTIONS.DARK_MODE
                  ? "bg-slate-800 border-slate-700"
                  : "bg-slate-50 border-slate-200"
              )}
            >
              <div className="col-span-1">
                <Typography component="subtitle">#</Typography>
              </div>
              <div className="col-span-4">
                <Typography component="subtitle">Product</Typography>
              </div>
              <div className="col-span-2 text-right">
                <Typography component="subtitle">Price</Typography>
              </div>
              <div className="col-span-2 text-center">
                <Typography component="subtitle">Quantity</Typography>
              </div>
              <div className="col-span-3 text-right">
                <Typography component="subtitle">Total</Typography>
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              {cartItems.map((item, index) => (
                <CartItem
                  key={item.id}
                  index={index}
                  cartItem={item}
                  addProduct={addProduct}
                  removeProduct={removeProduct}
                  setProductQuantity={setProductQuantity}
                />
              ))}
            </div>

            <div
              className={cn(
                "border-t mt-4 px-6 py-4",
                theme === THEME_OPTIONS.DARK_MODE
                  ? "border-slate-700"
                  : "border-slate-200"
              )}
            >
              <div className="flex justify-between items-center">
                <Typography component="h3">Total Amount</Typography>
                <Typography component="h2" className="text-2xl font-bold">
                  ${totalAmount.toFixed(2)}
                </Typography>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <div
              className={cn(
                "w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center",
                theme === THEME_OPTIONS.DARK_MODE
                  ? "bg-slate-800"
                  : "bg-slate-100"
              )}
            >
              <ShoppingCart className="w-10 h-10 text-slate-400" />
            </div>
            <Typography component="h3" className="mb-4">
              Your cart is empty
            </Typography>
            <Link to="/" variant="filled">
              Start Shopping
            </Link>
          </div>
        )}
      </Card>
    </>
  );
};
export default CartSummaryPage;
