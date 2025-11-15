import { Outlet } from "react-router-dom";
import LoginNavButton from "../components/LoginNavButton";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

function AuthLayout() {
  return (
    <section>
      <header>
        <Navbar>
          <Logo />
          <LoginNavButton />
        </Navbar>
      </header>
      <main>
        Auth Page
        <Outlet />
      </main>
    </section>
  );
}

export default AuthLayout;
