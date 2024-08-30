import { cn } from "../../lib/utils/cn";

type Props = { className?: string };

const GradientButton = ({ className }: Props) => {
  return (
    <button
      className={cn(
        className || "",
        "bg-gradient-to-br from-primary to-primary-dark hover:scale-110 transition-all duration-300 text-white py-2 px-4 rounded-lg"
      )}
    >
      Demo
    </button>
  );
};

export default GradientButton;
