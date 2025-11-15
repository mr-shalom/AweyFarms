function Hero({ bg, children, className }) {
  return (
    <section className={className}>
      {/* <section className="min-h-dvh bg-navlinks pt-[72px]"> */}
      <div
        className={`h-[calc(100vh-72px)] bg-bottom bg-cover relative max-w-maxW mx-auto my-0 flex justify-center bg-no-repeat ${bg}`}
      >
        {children}
      </div>
    </section>
  );
}

export default Hero;
