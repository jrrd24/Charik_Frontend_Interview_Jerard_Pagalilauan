import BlogCard from "../../components/cards/BlogCard";
import { INSIGHTS_HOMEPAGE } from "../../data/InsightsData";

const BlogCards = () => {
  return (
    <>
      <section className="spacer white-wave ">
        <div className="pt-32 lg:pt-24 flex items-center justify-center w-dvw pb-24">
          <div className="container text-center w-dvw flex flex-col items-center gap-4">
            <p className=" text-lg lg:text-2xl pt-4 text-custom-text/60 max-w-[48rem]">
              The Art of Smart Selling
            </p>

            <h4 className="text-3xl lg:text-5xl font-bold">
              Sales Intelligence Blog
            </h4>

            <p className=" text-base text-custom-text/60 md:max-w-[28rem] pt-2">
              Dive into the future of selling with our blog on Sales
              Intelligence – where data meets strategy.
            </p>

            <div className=" grid md:grid-cols-2 xl:grid-cols-3 w-full gap-12 mt-12">
              {INSIGHTS_HOMEPAGE.map((data) => (
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
        </div>
      </section>
    </>
  );
};

export default BlogCards;
