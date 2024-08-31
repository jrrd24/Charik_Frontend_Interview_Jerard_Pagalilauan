import { Link } from "react-router-dom";

type Props = {
  image: string;
  tag: string;
  title: string;
  dateCreated: string;
  readTime: number;
};

const BlogCard = ({ image, tag, title, dateCreated, readTime }: Props) => {
  return (
    <div className="w-full  flex items-center justify-center select-none ">
      <Link
        to={"/insights"}
        className="max-w-[360px] bg-white rounded-xl flex flex-col shadow-xl shadow-custom-text/5 group hover:scale-105 transition duration-500 min-h-96 "
      >
        <div className="h-[24rem] rounded-t-xl overflow-hidden">
          {" "}
          <img
            src={image}
            alt=""
            className=" group-hover:scale-110 transition duration-500  h-[24rem]"
          />
        </div>

        <div className="p-6 text-left flex flex-col gap-4">
          <div className="bg-gradient-to-br from-primary to-primary-dark w-fit py-1 px-2 rounded-md text-white text-sm font-semibold">
            {tag}
          </div>

          <h6 className="text-xl font-medium">{title}</h6>

          <div className="text-custom-text/60">
            {dateCreated} &nbsp; <span className="text-custom-text/20">|</span>{" "}
            &nbsp; {readTime} min read
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
