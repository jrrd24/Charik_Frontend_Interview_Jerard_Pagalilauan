import { cn } from "../lib/utils/cn";
import { IconType } from "react-icons";

type Props = {
  path?: string;
  width?: string;
  height?: string;
  Icon: IconType;
  className?: string;
};

const Icon = ({
  path,
  width = "24px",
  height = "24px",
  Icon,
  className,
}: Props) => {
  if (!Icon) return <img src={path} className={`h-[${height}] w-[${width}]`} />;
  else return <Icon className={cn(`h-[${height}] w-[${width}]`, className)} />;
};

export default Icon;
