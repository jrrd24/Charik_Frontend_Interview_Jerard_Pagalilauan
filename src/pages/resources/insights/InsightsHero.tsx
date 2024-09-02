import { FaQuoteLeft } from "react-icons/fa";
import Icon from "../../../components/Icon";

const InsightsHero = () => {
  return (
    <section className="bg-white w-full flex justify-center pt-12 pb-24  ">
      <div className="container flex flex-col lg:flex-row items-center justify-center lg:justify-between pb-16 lg:pb-0">
        <img
          src="/assets/insights-hero.webp"
          alt="hero image"
          className="lg:h-[calc(100dvh-12rem)] px-16 py-8 lg:p-0 max-h-[20rem] lg:max-h-[24rem] rounded-xl"
        />

        <div className="flex flex-col gap-6 items-center lg:items-start lg:w-full lg:px-16">
          <div className="flex flex-col text-center items-center gap-8">
            <div className="bg-white shadow-xl text-primary p-4 w-fit rounded-full">
              <Icon Icon={FaQuoteLeft} className="h-8 w-auto " />
            </div>

            <h4 className="text-xl lg:text-3xl text-custom-text/80 font-medium lg:leading-[2.5rem]">
              "Our goal is to position your sales team for success quarter after
              quarter by enabling them to focus on high-value tasks and
              supporting their mental health to ensure they thrive both
              professionally and personally."
            </h4>

            <div className="bg-white shadow-xl py-2 px-4 w-fit rounded-xl">
              <h6 className="text-base lg:text-lg">Jimmy, CEO @ Charik</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsHero;
