import { Link } from "react-router-dom";
import { cn } from "../../lib/utils/cn";

type Props = {
  className?: string;
  children: any;
  path?: string;
  theme?: string;
};

const GradientButton = ({ className, children, path, theme }: Props) => {
  return (
    <Link
      to={path || ""}
      className={cn(
        className || "",
        `${
          theme == "green" ? "bg-gradient-green" : "bg-gradient-orange"
        } hover:scale-110 transition-all duration-300 text-white py-2 px-4 rounded-lg select-none`
      )}
    >
      {children}
    </Link>
  );
};

export default GradientButton;
