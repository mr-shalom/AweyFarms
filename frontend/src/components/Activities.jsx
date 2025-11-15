import Badge from "./Badge";

function Activities({ className }) {
  return (
    <section className={className}>
      {/* bg-homesection1 */}

      <div className="flex justify-between flex-col md:flex-row gap-8 w-full h-min  text-xl text-navlinks font-bold bg-homesection1 py-20 px-16 font-titlefont mx-auto z-30 lg:-mt-56 flex-wrap">
        <ul className="flex flex-col gap-2 grow">
          <li className="mb-4">NO 2 Olotu Close, HighCourt</li>
          <li>Ota, Sango, Ogun State</li>
          <li>info@my-domain.com</li>
          <li>+234-816-461-3530</li>
        </ul>
        <span className="min-h-max w-[1px] bg-navlinks block"></span>
        <ul className="flex flex-col gap-2 grow">
          <li className="mb-4">Operating Hours</li>

          <li>Mon - Fri: 8am - 8pm</li>
          <li>Sat: 9am - 7pm</li>
          <li>Sun: 9am - 8pm</li>
        </ul>
        <span className="min-h-max w-[1px] bg-navlinks"></span>
        <ul className="flex flex-col gap-2 grow">
          <li className="mb-4">Delivery Hours</li>

          <li>Mon: 8am - 1pm</li>
          <li>Wed: 8am - 1pm</li>
          <li>Fri: 8am - 1pm</li>
        </ul>
      </div>
      <div className="w-full relative h-0 lg:h-52 ">
        <Badge className="hidden lg:block absolute -translate-y-20 translate-x-20 -rotate-45 z-20 w-40 h-full" />
      </div>
    </section>
  );
}

export default Activities;
