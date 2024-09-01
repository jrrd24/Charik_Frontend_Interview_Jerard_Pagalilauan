import Partners from "../../components/sections/partners/Partners";
import CustomAccordion from "../../components/accordion/CustomAccordion";

const PartnersFAQs = () => {
  return (
    <div className="spacer white-wave ">
      <div className="pt-32 lg:pt-24 flex flex-col items-center w-dvw pb-24">
        <div className="container flex flex-col gap-8 lg:gap-16">
          <div className=" flex flex-col gap-12 items-center">
            <div className="text-center w-dvw flex flex-col items-center gap-4">
              <p className=" text-lg lg:text-2xl pt-4 text-custom-text/60 max-w-[48rem]">
                Our Clients
              </p>

              <h4 className="text-3xl lg:text-5xl font-bold">
                They connected HubSpot with Charik
              </h4>
            </div>
            <Partners />
          </div>

          <div className=" flex flex-col gap-12 items-center">
            <div className="text-center w-dvw flex flex-col items-center gap-4">
              <p className=" text-lg lg:text-2xl pt-4 text-custom-text/60 max-w-[48rem]">
                If you still need more information
              </p>

              <h4 className="text-3xl lg:text-5xl font-bold">
                Frequently Asked Questions
              </h4>
            </div>
            <CustomAccordion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersFAQs;
