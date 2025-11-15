import { IoClose } from "react-icons/io5";
import { FaNewspaper } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { HiHome } from "react-icons/hi";
import { BiBox, BiPhone } from "react-icons/bi";
import { Link } from "react-router-dom";

import Button from "./Button";

function MobileMenu({ setIsOpen }) {
  return (
    <aside className="fixed top-0 bottom-0 left-0 w-full bg-[rgba(0,0,0,.6)] z-50">
      <section className=" w-2/4 h-full flex flex-col  ">
        <header className="bg-logo px-2 py-[22px] flex items-center justify-between gap-2">
          <Link to="/" className="font-bold text-xl">
            Logo
          </Link>
          <IoClose
            className="font-bold text-2xl cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </header>
        <div className="bg-navlinks flex-grow flex flex-col gap-6 px-2 py-4">
          {/* home about order blog contact */}

          <Button to="/" type="link" className="flex items-center gap-2">
            <HiHome className="text-logo text-2xl" />
            <span className="text-white text-sm">Home</span>
          </Button>
          <Button to="about" type="link" className="flex items-center gap-2">
            <FaHistory className="text-logo text-2xl" />
            <span className="text-white text-sm">About</span>
          </Button>
          <Button to="order" type="link" className="flex items-center gap-2">
            <BiBox className="text-logo text-2xl" />
            <span className="text-white text-sm">Order</span>
          </Button>
          <Button to="blog" type="link" className="flex items-center gap-2">
            <FaNewspaper className="text-logo text-2xl" />
            <span className="text-white text-sm">Blog</span>
          </Button>
          <Button to="/contact" type="link" className="flex items-center gap-2">
            <BiPhone className="text-logo text-2xl" />
            <span className="text-white text-sm">Contact</span>
          </Button>

          <Button
            to="logout"
            type="link"
            className="flex flex-col justify-end gap-2  flex-grow justify-self-end"
          >
            <span className="flex items-center gap-2 mb-4">
              <TbLogout className="text-logo text-2xl" />
              <span className="text-white text-sm">Logout</span>
            </span>
          </Button>
        </div>
      </section>
    </aside>
  );
}

export default MobileMenu;
