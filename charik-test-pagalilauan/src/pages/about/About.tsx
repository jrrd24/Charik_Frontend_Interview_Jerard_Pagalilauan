import RequestDemo from "../../components/sections/request_demo/RequestDemo";
import AboutHero from "./AboutHero";
import Timeline from "./Timeline";

const About = () => {
  return (
    <div className="flex flex-col items-center">
      <AboutHero />
      <Timeline />
      <RequestDemo
        title="Become a Partner"
        description="If you're ready to assist your customers in harnessing the power of Sales Intelligence within HubSpot, let's get in touch!"
        buttonText="Become A Partner"
        path="/contact"
      />
    </div>
  );
};

export default About;
