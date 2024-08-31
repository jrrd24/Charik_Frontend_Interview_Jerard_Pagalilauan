import { IconType } from "react-icons";
import Icon from "../Icon";

type Props = {
  icon: IconType;
  title: string;
  content: Content[];
};

type Content = {
  id: number;
  heading: string;
  content: string;
};

const ProductFeatureContainer = ({ icon, title, content }: Props) => {
  return (
    <div className="bg-white flex flex-col gap-6 p-8 rounded-xl">
      <div>
        <Icon Icon={icon} className="h-12 w-12 text-primary" />
        <h4 className="text-3xl md:text-4xl text-primary pt-2">{title}</h4>
      </div>
      {content.map((data) => (
        <p key={data.id} className="text-custom-text/60">
          <span className="font-bold">{data.heading}:</span> {data.content}
        </p>
      ))}
    </div>
  );
};

export default ProductFeatureContainer;
