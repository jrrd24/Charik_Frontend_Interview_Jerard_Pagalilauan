import TryCharikButton from "../../../components/buttons/TryCharikButton";

const EmailFinderHero = () => {
  return (
    <section className="container flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between pb-16 lg:pb-0 min-h-[calc(100dvh-100px)]">
      <div className="flex flex-col gap-6 pt-8 lg:items-start">
        <div className=" text-white font-bold px-4 py-2 border-2 text-base lg:text-lg  rounded-xl bg-secondary w-fit">
          Charik Email Finder
        </div>
        <div className="flex flex-col lg:text-left text-center gap-2">
          <h4 className="text-xl lg:text-3xl text-custom-text/80 font-medium">
            Discover your
          </h4>
          <h3 className=" font-bold text-3xl text-secondary lg:text-6xl">
            Contacts, Professional Emails
          </h3>
          <h4 className="text-xl lg:text-3xl text-custom-text/80 font-medium">
            with just a few clicks
          </h4>
        </div>

        <p className=" text-center lg:text-left text-custom-text/60 max-w-[28rem]">
          Easily find your contacts' professional emails by simply inputting
          their first name, last name, and company. <br />
          <br />
          Stop wasting time searching for your contacts' emails. <br />
          <br />
          Try
          <span className="font-bold"> Charik Email Finder </span> and see how
          our tool can revolutionize the way you work.
        </p>

        <TryCharikButton />
      </div>

      <img
        src="/assets/email-finder-hero.webp"
        alt="hero image"
        className="lg:h-[calc(100dvh-12rem)] px-16 py-8 lg:p-0 max-h-[28rem] lg:max-h-[36rem]"
      />
    </section>
  );
};

export default EmailFinderHero;
