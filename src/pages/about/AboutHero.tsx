const AboutHero = () => {
  return (
    <section className="min-h-[calc(100dvh-80px)] bg-gradient-orange w-full flex justify-center">
      <div className="container flex flex-col items-center justify-center gap-4 text-white text-center">
        <div>
          <img
            src="/assets/charik-logo-white.png"
            alt="logo-white"
            className="h-32 w-auto"
          />

          <p className=" text-lg lg:text-2xl pt-4 text-white/80 max-w-[48rem]">
            About Us
          </p>
        </div>
        <h3 className=" font-bold text-3xl lg:leading-[4.5rem]  lg:text-6xl max-w-[64rem]">
          Make Sales Intelligence available for every HubSpot Users
        </h3>

        <p className=" text-base lg:text-xl pt-4 text-white/80 max-w-[48rem]">
          <span className="font-bold">Empower every HubSpot user </span>with
          Sales Intelligence to revolutionize sales strategy and drive success.
          Gain valuable insights, identify key opportunities, and make informed
          decisions for increased sales and growth.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
