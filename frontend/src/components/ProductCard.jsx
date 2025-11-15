import { useDispatch } from "react-redux";
import Button from "../components/Button";
import { increaseItem, decreaseItem, addToCart } from "../cart/CartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  return (
    <li>
      <figure>
        {product.discount && (
          <span>
            ${(product.price * (1 - product.discount / 100)).toFixed(2)}
          </span>
        )}
        <img src={product.image_url} alt={product.name} />
        <figcaption>
          <h3>Product Name{product.name}</h3>
          <p>{product.price.toFixed(2)}</p>
          <p>{product.description}</p>
        </figcaption>
      </figure>
      <div className="flex items-center justify-between shadow border border-black p-2 rounded-sm">
        <Button
          onClick={() =>
            product.quantity > 1 && dispatch(decreaseItem(product._id))
          }
        >
          -
        </Button>
        <p>{product.quantity || 1}</p>
        <Button onClick={() => dispatch(increaseItem(product._id))}>+</Button>
      </div>
      <Button onClick={() => dispatch(addToCart(product))}>Add to Cart</Button>
    </li>
  );
}

export default ProductCard;
