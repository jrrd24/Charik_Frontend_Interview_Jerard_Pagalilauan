import { KEY_FEATURES_DATA } from "../../../data/KeyFeaturesData";
import FeatureContainer from "./FeatureContainer";

const KeyFeatures = () => {
  return (
    <section className="key-features py-24 grid grid-cols-1 lg:grid-cols-3 lg:max-h-[calc(100dvh-80px)] lg:overflow-auto gap-y-16 lg:gap-16">
      <div
        className=" text-left flex flex-col items-center
        lg:sticky lg:top-0 lg:self-start  lg:max-h-[calc(100dvh-80px)] "
      >
        <h4 className="text-3xl lg:text-5xl font-bold">
          Discover our Key Features
        </h4>
        <p className=" text-base pt-4 text-custom-text/60 md:max-w-[48rem]">
          Our clients save an average of{" "}
          <span className="text-primary font-bold">8 hours per month</span> by
          connecting Charik to HubSpot, thanks to our advanced features, which
          are often unique at this level of integration with your favorite CRM.
        </p>
      </div>

      <div className="col-span-2 text-center grid grid-cols-1 lg:grid-cols-3 gap-12">
        {KEY_FEATURES_DATA.map((data) => (
          <FeatureContainer
            key={data.id}
            icon={data.Icon}
            type={data.type}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
