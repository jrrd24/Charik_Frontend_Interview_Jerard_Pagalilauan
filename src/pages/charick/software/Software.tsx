import KeyFeatures from "../../../components/sections/key_feature/KeyFeatures";
import NeedDemo from "../../../components/sections/need_demo/NeedDemo";
import SoftwareHero from "./SoftwareHero";

const Software = () => {
  return (
    <div className="flex flex-col items-center">
      <SoftwareHero />
      <KeyFeatures />
      <NeedDemo />
    </div>
  );
};

export default Software;
