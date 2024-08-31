import Partners from "../../../components/sections/partners/Partners";
import RequestDemo from "../../../components/sections/request_demo/RequestDemo";
import EmailFinderHero from "./EmailFinderHero";
import Features from "./Features";

const EmailFinder = () => {
  return (
    <div className="flex flex-col items-center">
      <EmailFinderHero />
      <Features />
      <Partners />
      <RequestDemo />
    </div>
  );
};

export default EmailFinder;
