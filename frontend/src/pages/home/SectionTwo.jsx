import { Link } from "react-router-dom";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";

import { formatCurrency } from "../../utils/currencyFormatter";

import { productsImage } from "../../assets/prodimages/imageObj";
import Button from "../../components/Button";

function SectionTwo() {
  return (
    <section className="bg-homesection2 py-10">
      <div className="max-w-[900px] mx-auto flex flex-col px-6">
        <div className="mb-10">
          <h1 className="text-xl lg:text-4xl font-semibold mb-2 text-navlinks font-titlefont">
            Shop Season's Produce
          </h1>
          <span className="w-16 bg-navlinks block h-0.5"></span>
        </div>
        <main>
          <ul className="grid md:grid-cols-3 grid-cols-1 auto-rows-auto gap-8">
            <li>
              <Link to="/order/${id}">
                <figure className="overflow-hidden">
                  <div className="overflow-hidden">
                    <img
                      src={productsImage.bitterkola}
                      alt="fruits"
                      className="transition-transform block w-full duration-500 ease-in-out hover:scale-110"
                    />
                  </div>
                  <figcaption className="flex flex-col gap-1 mt-1">
                    <h1 className="">Product</h1>
                    <p className="">$2.00</p>
                  </figcaption>
                </figure>
              </Link>
            </li>
            <li>
              <Link to="/order/${id}">
                <figure>
                  <div className="overflow-hidden">
                    <img
                      src={productsImage.blueberry}
                      alt="fruits"
                      className="transition-transform duration-500 ease-in-out hover:scale-110 block w-full"
                    />
                  </div>
                  <figcaption className="flex flex-col gap-1 mt-1">
                    <h1 className="">Product</h1>
                    <p className="">$2.00</p>
                  </figcaption>
                </figure>
              </Link>
            </li>
            <li>
              <Link to="/order/${id}">
                <figure>
                  <div className="overflow-hidden">
                    <img
                      src={productsImage.cabbage}
                      alt="fruits"
                      className="transition-transform duration-500 ease-in-out hover:scale-110 block w-full"
                    />
                  </div>
                  <figcaption className="flex flex-col gap-1 mt-1">
                    <h1 className="">Product</h1>
                    <p className="">$2.00</p>
                  </figcaption>
                </figure>
              </Link>
            </li>
          </ul>

          <Button
            to="/"
            type="link"
            className="bg-logo text-navlinks max-w-fit px-6 py-3 rounded-sm md:hover:bg-navlinks md:hover:text-homesection1 md:transition-colors duration-300 delay-200 cursor-pointer mt-5 mx-auto block"
          >
            Order Online
          </Button>
        </main>
      </div>
    </section>
  );
}

export default SectionTwo;
