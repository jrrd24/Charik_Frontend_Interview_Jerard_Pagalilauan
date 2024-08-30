import KeyFeatures from "../../components/sections/key_feature/KeyFeatures";
import HeroSection from "./HeroSection";

const Homepage = () => {
  return (
    <div className="page-start">
      <div className="container">
        <HeroSection />
        <KeyFeatures />
      </div>
    </div>
  );
};

export default Homepage;
