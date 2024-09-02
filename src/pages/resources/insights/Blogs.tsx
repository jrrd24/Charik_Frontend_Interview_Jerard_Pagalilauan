import BlogCard from "../../../components/cards/BlogCard";
import { INSIGHTS_ALL } from "../../../data/InsightsData";

const Blogs = () => {
  return (
    <section className="flex justify-center w-full py-12 bg-white">
      {" "}
      <div className="container flex md:flex-row flex-col justify-between items-center gap-4">
        <div className=" grid md:grid-cols-2 xl:grid-cols-3 w-full gap-12 mt-12">
          {INSIGHTS_ALL.map((data) => (
            <BlogCard
              key={data.id}
              image={data.image}
              tag={data.tag}
              title={data.title}
              dateCreated={data.dateCreated}
              readTime={data.readTime}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
