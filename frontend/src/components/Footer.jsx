import { Link } from "react-router-dom";
import Activities from "./Activities";
import Button from "./Button";
import Socials from "./Socials";

function Footer() {
  return (
    <footer className="bg-navlinks relative pt-16 ">
      {/* min-h-dvh */}
      <section className="px-4 md:max-w-5xl mx-auto">
        {/* <Activities className="relative  flex justify-center md:-mt-40 w-full lg:pt-40 md:pt-0" /> */}

        {/* relative flex justify-center md:-mt-40 w-full lg:pt-40 md:pt-0 */}
        <Activities className="translate-y-[-1%] relative" />
        <div className="flex flex-col-reverse md:flex-row md:items-center gap-16 flex-wrap w-full pt-8 lg:pt-0">
          <div className="flex flex-col gap-2 text-homesection1 text-xl">
            <Link to="/store-policy">Store Policy</Link>
            <Link to="/shipping-returns">Shipping & Returns</Link>
            <Link to="/faq">FAQ</Link>
          </div>
          <>
            <form
              action=""
              method="POST"
              className="flex flex-col gap-2 text-homesection1 flex-grow"
            >
              <h1 className="text-homesection1 font-titlefont text-2xl mt-6 mb-4">
                Get the Latest News & Updates from Our Farm
              </h1>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="relative text-homesection1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-navlinks border outline-none border-homesection1 px-2 py-2.5 text-md focus:ring-1 ring-homesection1"
                />
                <p className="text-xs text-red-600 hidden">
                  Enter an email address like example@mysite.com
                </p>
              </div>

              <div className="flex justify-between flex-col md:flex-row gap-8 ">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                    className="appearance-none 
    h-6 w-6 
    border border-homesection1
    rounded checked:bg-navlinks
    checked:border-navlinks
    checked:after:content-['✔'] 
    checked:after:block 
    checked:after:text-white 
    checked:after:text-center 
    checked:after:leading-5"
                  />
                  <label htmlFor="">Yes, suscribe me to your newsletter</label>
                </div>
                <Button
                  type="button"
                  className="bg-homesection1 text-navlinks font-semibold text-center py-4 px-24 max-w-max text-2xl font-titlefont"
                >
                  Join
                </Button>
              </div>
            </form>
          </>
        </div>
        <Socials
          list="flex justify-between gap-2 flex-wrap text-logo text-xl lg:text-3xl font-bold font-titlefont pt-20 pb-10"
          rule="max-h-max w-[1px] bg-logo block"
        />

        <p className="text-center text-logo text-sm pb-6">
          Developed by Vee for Awey Farms &copy; {new Date().getFullYear()}
        </p>
      </section>
    </footer>
  );
}

export default Footer;
