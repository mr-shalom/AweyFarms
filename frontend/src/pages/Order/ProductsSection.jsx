import {
  addToCart,
  removeFromCart,
  increaseItem,
  decreaseItem,
  removeItem,
  clearCart,
} from "../../cart/CartSlice";

import { productsImage } from "../../assets/prodimages/imageObj";
import Button from "../../components/Button";

function ProductsSection({ className }) {
  return (
    <section className={className}>
      <ul className="max-w-[900px] mx-auto grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-6 ">
        {[
          productsImage.apples,
          productsImage.apples,
          productsImage.apples,
          productsImage.apples,
        ].map((fruit, i) => {
          return <Product product={fruit} key={i} />;
        })}
      </ul>
      <div className="flex justify-center items-center gap-6 lg:gap-24 mt-8 w-full ">
        <Button className="bg-navlinks py-2 lg:py-4 px-8 lg:px-16 rounded-xl text-white min-w-10">
          Prev
        </Button>
        <Button className="bg-navlinks py-2 lg:py-4 px-8 lg:px-16 rounded-xl text-white min-w-10">
          Next
        </Button>
      </div>
    </section>
  );
}

function Product({ product }) {
  return (
    <li className="flex flex-col gap-2">
      <figure className="flex flex-col rounded-t-lg">
        <img src={product} alt={product} className="rounded-t-lg" />
        <figcaption>
          <h3 className="mt-2">Mixed Basket</h3>
          <p className="mt-2">$45.00</p>
        </figcaption>
      </figure>
      <div className="flex justify-between items-center gap-6 border px-1 bg-white">
        <Button
          className="text-2xl rounded-xl cursor-pointer"
          onClick={() => decreaseItem()}
        >
          -
        </Button>
        <span>1</span>
        <Button
          className="text-2xl rounded-xl cursor-pointer"
          onClick={() => increaseItem()}
        >
          +
        </Button>
      </div>
      <Button
        className="border border-navlinks py-3 hover:bg-navlinks hover:text-white rounded-br-lg rounded-bl-lg"
        onClick={() => addToCart()}
      >
        Add to Cart
      </Button>
    </li>
  );
}

export default ProductsSection;
