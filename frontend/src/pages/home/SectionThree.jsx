import { productsImage } from "../../assets/prodimages/imageObj";

function SectionThree() {
  return (
    <section className="min-h-fit bg-navlinks">
      <div className="max-w-maxW mx-auto w-full my-0 grid grid-cols-1 md:grid-cols-2 grid-rows-auto h-full">
        <aside className="flex justify-center flex-col items-center md:col-start-1 md:col-end-2">
          <figure className="w-full md:w-4/5 flex justify-center items-center h-4/5">
            <img
              src={productsImage.cookedmeal}
              alt=""
              className="w-full h-full object-cover block"
            />
          </figure>
        </aside>
        <aside className="w-full h-full md:col-start-2 md:col-end-3">
          <figure className="w-full h-full">
            <img
              src={productsImage.vegeseller}
              alt=""
              className="w-full h-full object-cover block sticky top-0 bottom-0 inset-0"
            />
          </figure>
        </aside>
      </div>
    </section>
  );
}

export default SectionThree;
