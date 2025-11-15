import { Link } from "react-router-dom";
import { FaUserCircle, FaHeart } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import { GoComment } from "react-icons/go";
import { CiHeart } from "react-icons/ci";

import { productsImage } from "../../assets/prodimages/imageObj";
import Button from "../../components/Button";

function SectionFour() {
  return (
    <section className=" bg-homesection2 pt-16 pb-32 lg:pb-64">
      <div className="max-w-[900px] mx-auto my-0 flex flex-col flex-wrap px-6 py-4">
        <div className="mb-10">
          <h1 className="text-xl lg:text-4xl font-semibold mb-2 text-navlinks font-titlefont">
            From Our Blog
          </h1>
          <span className="w-16 bg-navlinks block h-0.5"></span>
        </div>
        <main>
          <ul className="grid md:grid-cols-3 grid-cols-1 auto-rows-auto gap-8 text-navlinks relative mb-14">
            <li className="bg-homesection1">
              <article className="h-full">
                <header className="overflow-hidden">
                  <Link to="/blog/${id}">
                    <img
                      src={productsImage.avocado}
                      alt="fruits"
                      className="w-full block"
                    />
                  </Link>
                </header>
                <main className="px-4 py-6">
                  <div className="flex gap-2 items-center mb-3">
                    <Link to="/auth/profile">
                      <FaUserCircle className="text-4xl" />
                    </Link>
                    <div className="flex-grow pt-1">
                      <h3 className="text-xs">
                        <Link to="/auth/profile">Admin</Link>
                      </h3>
                      <div className="flex items-center gap-2">
                        <p className="text-sm">Nov 13, 2025</p>{" "}
                        <span className="w-0.5 h-0.5 bg-navlinks rounded-full"></span>{" "}
                        <small className="text-xs">1 min read</small>
                      </div>
                    </div>
                  </div>
                  <h1 className="text-lg">
                    <Link to="/blog/posts/${id}">Avocado Season is Here</Link>
                  </h1>
                  <span className="block w-full h-[1px] bg-stone-300 mt-6 mb-3"></span>
                  <div className="flex justify-between">
                    <div className="flex items-center justify-between gap-6">
                      <p className="flex items-center gap-1">
                        <BsEye className="text-lg cursor-pointer" />
                        <span className="text-sm">0</span>
                      </p>
                      <p className="flex items-center gap-1 text-lg">
                        <GoComment className="hover:text-logo text-lg cursor-pointer" />
                        <span className="text-sm">0</span>
                      </p>
                    </div>
                    <p className="flex items-center gap-1">
                      <CiHeart className="hover:text-red-600 text-lg cursor-pointer" />
                      <FaHeart className="text-red-600 hidden text-lg cursor-pointer" />
                      <span className="text-sm">0</span>
                    </p>
                  </div>
                </main>
              </article>
            </li>
            <li className="bg-homesection1">
              <article className="h-full">
                <header className="overflow-hidden">
                  <Link to="/blog/${id}">
                    <img
                      src={productsImage.avocado}
                      alt="fruits"
                      className="w-full block"
                    />
                  </Link>
                </header>
                <main className="px-4 py-6">
                  <div className="flex gap-2 items-center mb-3">
                    <Link to="/auth/profile">
                      <FaUserCircle className="text-4xl" />
                    </Link>
                    <div className="flex-grow pt-1">
                      <h3 className="text-xs">
                        <Link to="/auth/profile">Admin</Link>
                      </h3>
                      <div className="flex items-center gap-2">
                        <p className="text-sm">Nov 13, 2025</p>{" "}
                        <span className="w-0.5 h-0.5 bg-navlinks rounded-full"></span>{" "}
                        <small className="text-xs">1 min read</small>
                      </div>
                    </div>
                  </div>
                  <h1 className="text-lg">
                    <Link to="/blog/posts/${id}">
                      Tips For Your Herb Garden
                    </Link>
                  </h1>
                  <span className="block w-full h-[1px] bg-stone-300 mt-6 mb-3"></span>
                  <div className="flex justify-between">
                    <div className="flex items-center justify-between gap-6">
                      <p className="flex items-center gap-1">
                        <BsEye className="text-lg cursor-pointer" />
                        <span className="text-sm">0</span>
                      </p>
                      <p className="flex items-center gap-1 text-lg">
                        <GoComment className="hover:text-logo text-lg cursor-pointer" />
                        <span className="text-sm">0</span>
                      </p>
                    </div>
                    <p className="flex items-center gap-1">
                      <CiHeart className="hover:text-red-600 text-lg cursor-pointer" />
                      <FaHeart className="text-red-600 hidden text-lg cursor-pointer" />
                      <span className="text-sm">0</span>
                    </p>
                  </div>
                </main>
              </article>
            </li>
            <li className="bg-homesection1">
              <article className="h-full">
                <header className="overflow-hidden">
                  <Link to="/blog/${id}">
                    <img
                      src={productsImage.avocado}
                      alt="fruits"
                      className="w-full block"
                    />
                  </Link>
                </header>
                <main className="px-4 py-6">
                  <div className="flex gap-2 items-center mb-3">
                    <Link to="/auth/profile">
                      <FaUserCircle className="text-4xl" />
                    </Link>
                    <div className="flex-grow pt-1">
                      <h3 className="text-xs">
                        <Link to="/auth/profile">Admin</Link>
                      </h3>
                      <div className="flex items-center gap-2">
                        <p className="text-sm">Nov 13, 2025</p>{" "}
                        <span className="w-0.5 h-0.5 bg-navlinks rounded-full"></span>{" "}
                        <small className="text-xs">1 min read</small>
                      </div>
                    </div>
                  </div>
                  <h1 className="text-lg">
                    <Link to="/blog/posts/${id}">Creamy Pumpkin Soup</Link>
                  </h1>
                  <span className="block w-full h-[1px] bg-stone-300 mt-6 mb-3"></span>
                  <div className="flex justify-between">
                    <div className="flex items-center justify-between gap-6">
                      <p className="flex items-center gap-1">
                        <BsEye className="text-lg cursor-pointer" />
                        <span className="text-sm">0</span>
                      </p>
                      <p className="flex items-center gap-1 text-lg">
                        <GoComment className="hover:text-logo text-lg cursor-pointer" />
                        <span className="text-sm">0</span>
                      </p>
                    </div>
                    <p className="flex items-center gap-1">
                      <CiHeart className="hover:text-red-600 text-lg cursor-pointer" />
                      <FaHeart className="text-red-600 hidden text-lg cursor-pointer" />
                      <span className="text-sm">0</span>
                    </p>
                  </div>
                </main>
              </article>
            </li>
          </ul>

          <Button
            to="/posts"
            type="link"
            className="bg-logo text-navlinks max-w-fit px-6 py-3 rounded-sm md:hover:bg-navlinks md:hover:text-homesection1 md:transition-colors duration-300 delay-200 cursor-pointer mx-auto block"
          >
            See More
          </Button>
        </main>
      </div>
    </section>
  );
}

export default SectionFour;
