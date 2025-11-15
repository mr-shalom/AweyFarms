import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import { useState } from "react";

function MainLayout() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="relative min-h-dvh">
      <Header setIsOpen={setIsOpen} />
      {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
      <Main />
      <Footer />
    </section>
  );
}

export default MainLayout;
