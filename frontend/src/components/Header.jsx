import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import NavButtons from "../components/NavButtons";
import LoginNavButton from "../components/LoginNavButton";
import { RxHamburgerMenu } from "react-icons/rx";

function Header({ setIsOpen }) {
  return (
    <header className=" bg-logo fixed top-0 w-full z-40">
      <Navbar className="flex justify-between max-w-maxW my-0 mx-auto">
        <div className="flex gap-8 items-center px-6 py-6 bg-logo h-full md:max-w-48 md:w-full md:shrink-0">
          <RxHamburgerMenu
            className=" md:hidden text-xl cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
          <Logo />
        </div>
        <NavButtons />
        <LoginNavButton />
      </Navbar>
    </header>
  );
}

export default Header;
