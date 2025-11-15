// import { Link } from "react-router-dom";
import Button from "../../components/Button";
// import farmhouse from "../../assets/illustrations/farmhouse.svg";

function SectionOne({ title, para, img, bgc, className }) {
  return (
    <section className={className}>
      <div className="max-w-maxW mx-auto my-0 flex flex-col md:flex-row flex-wrap bg-homesection1 py-10">
        <aside className="w-full md:w-2/4 flex px-10 flex-col justify-center flex-grow text-left">
          <div className="mb-6">
            <h1 className="text-xl lg:text-4xl font-semibold mb-2 text-navlinks font-titlefont">
              {title}
            </h1>
            <span className="w-20 bg-navlinks block h-0.5"></span>
          </div>
          <p className="mb-8 text-navlinks leading-6.5">{para}</p>
          <Button
            to="/"
            type="link"
            className="bg-logo text-navlinks font-semibold max-w-fit px-6 py-3 rounded-sm md:hover:bg-navlinks md:hover:text-homesection1 md:transition-colors duration-300 delay-200 group-hover:delay-0 cursor-pointer"
          >
            Join Our Community
          </Button>
        </aside>
        <aside
          className={`w-full md:w-2/4 flex items-center flex-grow px-6 py-4 ${bgc}`}
        >
          <img src={img} alt="" className="w-[85%] inline-block mx-auto" />
        </aside>
      </div>
    </section>
  );
}

export default SectionOne;
