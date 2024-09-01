import { Link } from "react-router-dom";

type Props = {
  title: string;
  description: string;
  buttonText: string;
  path: string;
};

const RequestDemo = ({ title, description, buttonText, path }: Props) => {
  return (
    <section className="py-16 bg-gradient-orange w-dvw flex justify-center">
      <div className="container text-white flex flex-col lg:flex-row lg:justify-between items-center gap-8">
        <div className="flex flex-col gap-4 text-center lg:text-left max-w-[48rem]">
          <h5 className="text-3xl md:text-5xl font-semibold">{title}</h5>
          <p className="text-base md:text-lg">{description}</p>
        </div>

        <Link
          to={path}
          className="hover:scale-110 transition-all duration-300 text-white py-2 px-4 rounded-lg select-none border-2 border-white h-fit text-base md:text-lg hover:bg-white hover:text-custom-text"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default RequestDemo;
