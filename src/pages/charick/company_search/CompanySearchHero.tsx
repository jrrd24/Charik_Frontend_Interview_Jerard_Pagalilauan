import TryCharikButton from "../../../components/buttons/TryCharikButton";

const CompanySearchHero = () => {
  return (
    <section className="container flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between pb-16 lg:pb-0 min-h-[calc(100dvh-100px)]">
      <div className="flex flex-col gap-6 pt-8 items-center lg:items-start">
        <div className=" text-white font-bold px-4 py-2 border-2 text-base lg:text-lg  rounded-xl bg-tertiary w-fit">
          Charik Company Search
        </div>
        <div className="flex flex-col lg:text-left text-center gap-2">
          <h4 className="text-xl lg:text-3xl text-custom-text/80 font-medium">
            Effortlessly Discover and
          </h4>
          <h3 className=" font-bold text-3xl text-tertiary lg:text-6xl">
            Integrate Companies
          </h3>
          <h4 className="text-xl lg:text-3xl text-custom-text/80 font-medium">
            into your CRM
          </h4>
        </div>

        <p className=" text-center lg:text-left text-custom-text/60 max-w-[28rem]">
          <span className="font-bold"> Charik Company Search</span> streamlines
          your ability to find and add businesses based on specific criteria
          such as city, country, industry, etc., directly into HubSpot CRM,
          enhancing your prospecting efforts.
          <br /> <br />
          Stop wasting your time on manual searches for companies.
        </p>

        <TryCharikButton />
      </div>

      <img
        src="/assets/company-search-hero.webp"
        alt="hero image"
        className="lg:h-[calc(100dvh-12rem)] px-16 py-8 lg:p-0 max-h-[28rem] lg:max-h-[36rem]"
      />
    </section>
  );
};

export default CompanySearchHero;
