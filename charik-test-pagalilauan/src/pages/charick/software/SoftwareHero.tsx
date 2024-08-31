import GradientButton from "../../../components/buttons/GradientButton";

const SoftwareHero = () => {
  return (
    <section className="container flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between pb-16 lg:pb-0 min-h-[calc(100dvh-100px)]">
      <div className="flex flex-col gap-6 items-center lg:items-start">
        <div className="flex flex-col lg:text-left text-center gap-2">
          <h4 className="text-xl lg:text-3xl text-custom-text/80 font-medium">
            Discover the
          </h4>
          <h3 className=" font-bold text-4xl lg:text-7xl">Power of Charik</h3>
        </div>

        <p className=" text-center lg:text-left text-custom-text/60 max-w-[28rem]">
          Dive into our list of features and see how Charik can transform your
          sales strategy, making every interaction more impactful and every
          decision more informed. Prepare to redefine what you thought was
          possible with HubSpot CRM.
        </p>
        <GradientButton className="w-fit text-lg">Live Demo</GradientButton>
      </div>

      <img
        src="/assets/charik-logo-full.webp"
        alt="hero image"
        className="lg:h-[calc(100dvh-12rem)] px-16 py-8 lg:p-0 max-h-[28rem] lg:max-h-[36rem]"
      />
    </section>
  );
};

export default SoftwareHero;
