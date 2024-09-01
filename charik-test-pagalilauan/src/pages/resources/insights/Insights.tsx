import Blogs from "./Blogs";
import BlogFilters from "./BlogsFilters";
import InsightsHero from "./InsightsHero";

const Insights = () => {
  return (
    <div className="flex flex-col items-center">
      <InsightsHero />
      <BlogFilters />
      <Blogs />
    </div>
  );
};

export default Insights;
