import { usePricingToggle } from "../../lib/stores/PricingToggles";

type Props = {
  showToggle: boolean;
  annualDiscount: number | undefined;
};

const PricingToggle = ({ showToggle, annualDiscount }: Props) => {
  const { isChecked, setIsChecked } = usePricingToggle();

  return (
    <div
      className={`flex items-center justify-center w-full ${
        !showToggle && "hidden"
      }`}
    >
      <label className="flex items-center cursor-pointer">
        <div className="mr-3 text-custom-text/80 font-medium">Monthly</div>
        <div className="relative">
          <input
            type="checkbox"
            id="toggleB"
            className="sr-only"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <div className="block bg-primary/30 w-14 h-8 rounded-full"></div>
          <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
        </div>
        <div className="ml-3 text-custom-text/80  font-medium">
          Annual{" "}
          <span className="ml-2 bg-primary py-1 px-3 rounded-md text-white">
            - {(annualDiscount || 0) * 100}%
          </span>
        </div>
      </label>
    </div>
  );
};

export default PricingToggle;
