import Partners from "../../../components/sections/partners/Partners";
import RequestDemo from "../../../components/sections/request_demo/RequestDemo";

import CompanySearchHero from "./CompanySearchHero";
import Features from "./Features";

const CompanySearch = () => {
  return (
    <div className="flex flex-col items-center">
      <CompanySearchHero />
      <Features />
      <Partners />
      <RequestDemo />
    </div>
  );
};

export default CompanySearch;
