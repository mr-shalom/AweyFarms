import Button from "../components/Button";
import { formatCurrency } from "../utils/currencyFormatter";
import ProductsSection from "./Order/ProductsSection";

function OrderPage() {
  return (
    <section className="relative">
      <div className="py-28 px-4 bg-navlinks ">
        <div className="max-w-[900px] mx-auto">
          <h1 className="font-bold text-4xl text-white mb-2">Order Online</h1>
          <p className="font-bold text-2xl text-white">
            Fresh Produce Delivered Weekly
          </p>
        </div>
      </div>
      <ProductsSection className="bg-homesection2 m-auto pb-64 px-2 py-2 min-h-max z-50" />
    </section>
  );
}

export default OrderPage;
