import { NavLink } from "react-router-dom";

function NavButtons() {
  return (
    <ul className=" hidden md:flex items-center justify-center px-6 py-6 gap-6 text-sm bg-navlinks w-full text-white">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-logo font-bold" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "text-logo font-bold" : "")}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/order"
          className={({ isActive }) => (isActive ? "text-logo font-bold" : "")}
        >
          Order
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "text-logo font-bold" : "")}
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "text-logo font-bold" : "")}
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default NavButtons;
