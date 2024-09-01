import Searchbar from "../../../components/search/Searchbar";
import TopicsFilter from "./TopicsFilter";

const BlogFilters = () => {
  return (
    <section className="flex justify-center w-full p-12">
      <div className="container flex md:flex-row flex-col justify-between items-center gap-4">
        <TopicsFilter />
        <Searchbar />
      </div>
    </section>
  );
};

export default BlogFilters;
