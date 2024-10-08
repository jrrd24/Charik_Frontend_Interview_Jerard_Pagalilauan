import KeyFeatures from "../../components/sections/key_feature/KeyFeatures";
import NeedDemo from "../../components/sections/need_demo/NeedDemo";
import Testimonies from "../../components/sections/testimonies/Testimonies";
import PartnersFAQs from "./PartnersFAQs";
import PricingSection from "./PricingSection";

const Pricing = () => {
  return (
    <div className="flex flex-col items-center">
      <PricingSection />
      <KeyFeatures />
      <NeedDemo />
      <Testimonies />
      <PartnersFAQs />
    </div>
  );
};

export default Pricing;
