import { FaRegCircleUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
function LoginNavButton() {
  return (
    <ul className="flex items-center justify-end px-6 py-6 gap-6 md:max-w-48 md:w-full md:shrink-0 bg-logo">
      <li>
        <NavLink to="/auth" className="flex items-center gap-1">
          <FaRegCircleUser className="text-xl" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/cart" className="flex items-center">
          <GiShoppingCart className="text-xl" />
          {/* <span className="">4</span> */}
        </NavLink>
      </li>
    </ul>
  );
}

export default LoginNavButton;
