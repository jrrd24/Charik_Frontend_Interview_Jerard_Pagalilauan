import KeyFeatures from "../../components/sections/key_feature/KeyFeatures";
import NeedDemo from "../../components/sections/need_demo/NeedDemo";
import HeroSection from "./HeroSection";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <KeyFeatures />
      <NeedDemo />
    </div>
  );
};

export default Homepage;
