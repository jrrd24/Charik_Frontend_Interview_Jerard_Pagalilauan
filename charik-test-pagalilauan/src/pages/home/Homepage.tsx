import KeyFeatures from "../../components/sections/key_feature/KeyFeatures";
import NeedDemo from "../../components/sections/need_demo/NeedDemo";
import Testimonies from "../../components/sections/testimonies/Testimonies";
import HeroSection from "./HeroSection";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <KeyFeatures />
      <NeedDemo />
      <Testimonies />
    </div>
  );
};

export default Homepage;
