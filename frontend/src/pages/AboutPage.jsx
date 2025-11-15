import Hero from "./home/Hero";
import SectionOne from "./home/SectionOne";
import about from "../assets/illustrations/about.svg";

const para = `At Awey Farms, our story began with a simple dream: to grow food that nourishes both people and the land. Founded by a family of passionate agriculturists, our farm started as a small patch of fertile soil on the outskirts of a rural community. Over the years, what began as a handful of crops has blossomed into a thriving farm dedicated to sustainable practices, innovation, and community support.

We believe farming is more than planting seeds; it is about cultivating trust, stewardship, and resilience. Every decision we make is guided by respect for nature. From using organic fertilizers to rotating crops that replenish the soil, we ensure our land remains rich and productive for future generations. Our animals are raised humanely, with care and plenty of open space, reflecting our commitment to ethical farming.

But Awey is not just about farming—it is about people. We partner with local schools, host farm tours, and share knowledge on sustainable agriculture to inspire healthier living. Our produce reaches families, restaurants, and markets, carrying with it the story of dedication and care.
At Awey Farms, we grow more than food—we grow community, sustainability, and a legacy of abundance.`;

function AboutPage() {
  return (
    <>
      <Hero bg="bg-aboutbg">
        <div className="w-full h-full flex-grow bg-[rgba(0,0,0,0.5)]">
          <h1 className="font-bold text-2xl lg:text-6xl text-white flex justify-center mt-60">
            About Us
          </h1>
        </div>
      </Hero>
      <SectionOne
        title="Our Story"
        para={para}
        img={about}
        bgc="bg-navlinks"
        className={`pb-60`}
      />
    </>
  );
}

export default AboutPage;
