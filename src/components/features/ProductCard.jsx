import PropTypes from "prop-types";
import Card from "../core/Card";
import Typography from "../core/Typography";
import Link from "../core/Link";
import IconButton from "../core/IconButton";
import { PlusCircle } from "lucide-react";
import InputField from "../core/InputField";

const ProductCard = ({ product }) => {
  return (
    <Card className="flex flex-col h-full">
      <img
        src={product.imageSrc}
        alt={product.name}
        className="rounded-tl-md rounded-tr-md w-full"
      />
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex-grow">
          <Typography component="h2" className="mb-2">
            {product.name}
          </Typography>
          <Typography component="h3" className="text-ellipsis">
            ${product.price}
          </Typography>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-x-1">
            <IconButton className="px-1">
              <PlusCircle />
            </IconButton>
            <InputField
              name="quantity"
              type="number"
              min={1}
              className="text-center w-16"
            />
          </div>
          <Link variant="underline" to={`/products/${product.id}`}>
            Details
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
};

export default ProductCard;
