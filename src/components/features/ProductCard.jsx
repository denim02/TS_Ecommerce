import PropTypes from "prop-types";
import Card from "../core/Card";
import Typography from "../core/Typography";
import Link from "../core/Link";
import IconButton from "../core/IconButton";
import { ExternalLink, PlusCircle } from "lucide-react";
import InputField from "../core/InputField";
import { memo, useRef } from "react";

const ProductCard = ({ product, addProduct }) => {
  const quantityRef = useRef();

  return (
    <Card className="flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden rounded-tr-md rounded-tl-md">
        <Link to={`/products/${product.id}`} className="p-0">
          <img
            src={product.imageSrc}
            alt={product.name}
            className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
          />
        </Link>
      </div>

      <div className="flex flex-col flex-grow p-4 space-y-4">
        <div className="flex-grow space-y-2">
          <Typography component="h2">{product.name}</Typography>

          <Typography component="h3">${product.price.toFixed(2)}</Typography>

          <Typography component="body" className="line-clamp-2">
            {product.description}
          </Typography>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <InputField
              name="quantity"
              type="number"
              min={1}
              defaultValue={1}
              className="w-16 text-center"
              ref={quantityRef}
            />
            <IconButton
              className="p-2"
              onClick={() =>
                addProduct(product.id, parseInt(quantityRef.current.value) || 1)
              }
            >
              <PlusCircle className="w-5 h-5" />
            </IconButton>
          </div>

          <Link
            to={`/products/${product.id}`}
            className="flex items-center gap-1"
          >
            Details
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  addProduct: PropTypes.func.isRequired,
};

export default memo(ProductCard);
