import { cn } from "../../lib/utils/cn";

type Props = {
  className?: string;
  children: any;
  onClick?: () => void;
  theme?: string;
};

const GradientButton = ({ className, children, onClick, theme }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        className || "",
        `${
          theme == "green" ? "bg-gradient-green" : "bg-gradient-orange"
        } hover:scale-110 transition-all duration-300 text-white py-2 px-4 rounded-lg select-none`
      )}
    >
      {children}
    </button>
  );
};

export default GradientButton;
