import { IconType } from "react-icons";

import Icon from "./../../Icon";
import { cn } from "../../../lib/utils/cn";

type Props = {
  icon: IconType;
  title: string;
  description: string;
  type?: string;
};

const FeatureContainer = (props: Props) => {
  return (
    <div className="h-fit w-full text-left flex flex-col gap-4">
      <div
        className={cn(
          "h-16 w-16  rounded-full relative flex items-center justify-center",
          props.type == "orange"
            ? "bg-gradient-to-br from-primary to-primary-dark text-white "
            : props.type == "green"
            ? "bg-gradient-to-br from-secondary to-secondary-dark text-white "
            : "bg-white text-primary"
        )}
      >
        <Icon Icon={props.icon} className="absolute h-8 w-8" />
      </div>
      <div className="flex flex-col gap-2">
        <h5 className="text-xl font-medium">{props.title}</h5>
        <p className="text-base  text-custom-text/60">{props.description}</p>
      </div>
    </div>
  );
};

export default FeatureContainer;
