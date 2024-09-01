import GradientButton from "../../components/buttons/GradientButton";

const HeroSection = () => {
  return (
    <section className="container flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between pb-16 lg:pb-0 min-h-[calc(100dvh-100px)]">
      <div className="flex flex-col gap-6 items-center lg:items-start">
        <div className="flex flex-col lg:text-left text-center gap-2">
          <h4 className="text-xl lg:text-3xl text-custom-text/80 font-medium">
            Get the
          </h4>
          <h3 className="text-secondary font-bold text-4xl lg:text-7xl">
            Sales Intelligence 🦚
          </h3>
          <h4 className=" text-xl lg:text-3xl text-custom-text/80 font-medium">
            made for{" "}
          </h4>
          <h3 className="text-primary font-bold text-4xl lg:text-7xl">
            Hubspot 🚀
          </h3>
        </div>

        <p className=" text-center lg:text-left text-custom-text/60 max-w-[28rem]">
          Add contacts and companies from anywhere: LinkedIn, the web, ... and
          even HubSpot itself.{" "}
          <span className="font-bold text-lg">SAVE TIME, SELL MORE</span>
        </p>
        <GradientButton className="w-fit text-lg" path="/pricing">
          🌟 Discover our Offers
        </GradientButton>
      </div>

      <img
        src="/assets/hero.svg"
        alt="hero image"
        className="lg:h-[calc(100dvh-12rem)] px-16 py-8 lg:p-0 max-h-[28rem] lg:max-h-[36rem]"
      />
    </section>
  );
};

export default HeroSection;
