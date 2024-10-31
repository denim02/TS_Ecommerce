import { useRef } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft, MinusCircle, PlusCircle, ShoppingCart } from "lucide-react";
import useCart from "../../hooks/useCart";
import products from "../../config/products";
import Typography from "../../components/core/Typography";
import Card from "../../components/core/Card";
import InputField from "../../components/core/InputField";
import Button from "../../components/core/Button";
import Link from "../../components/core/Link";
import IconButton from "../../components/core/IconButton";
import { cn } from "../../utils";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const quantityRef = useRef();
  const { cartItems, addProduct, removeProduct } = useCart();

  const product = products.find((p) => p.id === parseInt(id));
  const cartQuantity = cartItems.find((item) => item.id === +id)?.quantity ?? 0;

  if (!product) {
    return (
      <>
        <Typography component="h1">Product not found.</Typography>
        <Link to="/" className="mt-4">
          <ArrowLeft className="w-4 h-4 mr-2 inline" />
          Back to Products
        </Link>
      </>
    );
  }

  return (
    <>
      <Link
        to="/"
        variant="underline"
        className="inline-flex items-center mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Products
      </Link>

      <Card className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        <div className="relative">
          <img
            src={product.imageSrc}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col space-y-6">
          <div>
            <Typography component="h1" className="mb-2">
              {product.name}
            </Typography>
            <Typography component="h2" className="text-xl mb-4">
              ${product.price.toFixed(2)}
            </Typography>
            <Typography component="body">{product.description}</Typography>
          </div>

          {cartQuantity > 0 && (
            <div
              className={cn(
                "flex items-center gap-2 p-4 rounded-lg",
                "bg-blue-50 text-blue-700",
                "dark:bg-blue-900/20 dark:text-blue-200"
              )}
            >
              <ShoppingCart className="w-5 h-5" />
              <Typography component="body">
                {cartQuantity} {cartQuantity === 1 ? "item" : "items"} in cart
              </Typography>

              <div className="ml-auto flex items-center gap-2">
                <IconButton
                  onClick={() => removeProduct(product.id)}
                  className="hover:bg-blue-100 dark:hover:bg-blue-900/40 rounded-full p-1"
                >
                  <MinusCircle className="w-4 h-4" />
                </IconButton>
                <Typography component="body" className="font-medium">
                  {cartQuantity}
                </Typography>
                <IconButton
                  onClick={() => addProduct(product.id, 1)}
                  className="hover:bg-blue-100 dark:hover:bg-blue-900/40 rounded-full p-1"
                >
                  <PlusCircle className="w-4 h-4" />
                </IconButton>
              </div>
            </div>
          )}

          <div className="flex flex-col space-y-4 pt-6 border-t border-gray-200">
            <div className="flex items-end gap-4">
              <InputField
                label="Quantity"
                name="quantity"
                type="number"
                min={1}
                defaultValue={1}
                className="w-24"
                ref={quantityRef}
              />
              <Button
                className="flex items-center gap-2"
                handleClick={() =>
                  addProduct(
                    product.id,
                    parseInt(quantityRef.current.value) || 1
                  )
                }
              >
                <ShoppingCart className="w-4 h-4" />
                Add
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ProductDetailsPage;
