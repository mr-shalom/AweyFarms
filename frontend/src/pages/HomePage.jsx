import { Link } from "react-router-dom";
import Hero from "./home/Hero";
import SectionFour from "./home/SectionFour";
import SectionOne from "./home/SectionOne";
import SectionThree from "./home/SectionThree";
import SectionTwo from "./home/SectionTwo";
// import Button from "../components/Button";
import farmhouse from "../assets/illustrations/farmhouse.svg";

const para = `Sustainable farming is Africa’s pathway to food security, economic
              growth, and environmental resilience. By blending traditional
              wisdom with modern eco-friendly practices, it nourishes the land,
              conserves water, and empowers farmers. This approach not only
              feeds communities today but also safeguards resources for
              tomorrow, creating a healthier, greener, and more prosperous
              future for Africa.`;

function HomePage() {
  return (
    <>
      <Hero bg="bg-herobg" className="min-h-dvh bg-navlinks pt-[72px]">
        <div className="absolute inset-0 z-0 bg-black/70"></div>
        <div className="relative z-10 text-homesection1 flex flex-col justify-center font-titlefont">
          <h1 className="text-3xl md:text-7xl font-bold mb-2">
            Fresh Produce Delivery
          </h1>
          <p className="text-xl mb-8">From Our Farm to Your Doorstep</p>

          <Link
            to="/order"
            className="bg-homesection1 text-navlinks font-semibold max-w-fit px-6 py-3 rounded-sm md:hover:bg-logo md:hover:text-homesection1 md:transition-colors duration-300 delay-200 group-hover:delay-0 cursor-pointer"
          >
            Order Online
          </Link>
        </div>
      </Hero>
      <SectionOne
        title="Support Sustainable Farming"
        para={para}
        img={farmhouse}
        bgc="bg-homesection1"
      />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </>
  );
}

export default HomePage;
