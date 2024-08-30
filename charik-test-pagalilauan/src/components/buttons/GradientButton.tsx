import { cn } from "../../lib/utils/cn";

type Props = { className?: string; children: string; onClick?: () => void };

const GradientButton = ({ className, children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        className || "",
        "bg-gradient-to-br from-primary to-primary-dark hover:scale-110 transition-all duration-300 text-white py-2 px-4 rounded-lg select-none"
      )}
    >
      {children}
    </button>
  );
};

export default GradientButton;
