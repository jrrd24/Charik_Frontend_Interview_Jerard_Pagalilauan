import GradientButton from "../../components/buttons/GradientButton";
import { usePricingToggle } from "../../lib/stores/PricingToggles";
import { cn } from "../../lib/utils/cn";
import "./pricing.css";
import PricingToggle from "./PricingToggle";

type Props = {
  title: string;
  showToggle: boolean;
  monthlyRate: number;
  annualDiscount: number | undefined;
  ratePerDescription: string;
  summary: string;
  buttonText1: string;
  buttonText2: string;
  features: Features[];
  theme: string;
};

type Features = {
  id: number;
  title: string;
};

const PricingContainer = (props: Props) => {
  const { isChecked } = usePricingToggle();
  return (
    <div className="flex flex-col gap-8 pb-12">
      <h4 className="text-3xl lg:text-5xl font-bold text-center">
        {props.title}
      </h4>

      <PricingToggle
        showToggle={props.showToggle}
        annualDiscount={props.annualDiscount}
      />
      <div className="p-8 md:p-12 bg-white rounded-xl flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h4
            className={cn(
              "text-4xl lg:text-6xl font-bold ",
              props.theme == "orange"
                ? "text-primary"
                : props.theme == "green"
                ? "text-secondary"
                : "text-current"
            )}
          >
            €
            {isChecked && props.annualDiscount
              ? Math.round(
                  props.monthlyRate - props.monthlyRate * props.annualDiscount
                ).toFixed(0)
              : props.monthlyRate}
            <span className="text-custom-text/60 font-normal text-base lg:text-lg">
              {props.ratePerDescription} *
            </span>
          </h4>

          <p className="text-custom-text/60 text-base lg:text-lg">
            {props.summary}
          </p>
        </div>

        <ul className="list-image-[url(/assets/icons/check.svg)] pl-4 text-base lg:text-lg">
          {props.features.map((data) => (
            <li key={data.id}>{data.title}</li>
          ))}
        </ul>

        <GradientButton
          className="flex flex-col text-center items-center"
          theme={props.theme}
        >
          {props.buttonText1}
          <span className="pt-2"> {props.buttonText2}</span>
        </GradientButton>
      </div>

      <p className="text-center text-custom-text/60">* Billed Yearly</p>
    </div>
  );
};

export default PricingContainer;
