import Partners from "../../../components/sections/partners/Partners";
import RequestDemo from "../../../components/sections/request_demo/RequestDemo";
import { DEMO_LINK } from "../../../lib/Defaults";

import CompanySearchHero from "./CompanySearchHero";
import Features from "./Features";

const CompanySearch = () => {
  return (
    <div className="flex flex-col items-center">
      <CompanySearchHero />
      <Features />
      <Partners />
      <RequestDemo
        title="Want to see Charik live?"
        description="The optimal approach is to request a demo!"
        buttonText="Book A Demo"
        path={DEMO_LINK}
      />
    </div>
  );
};

export default CompanySearch;
