import PricingContainer from "./PricingContainer";
import { PRICING_DATA } from "../../data/PricingData";

const PricingSection = () => {
  return (
    <section className="container">
      <div className="grid md:grid-cols-2 pt-12  gap-8">
        {PRICING_DATA.map((data) => (
          <PricingContainer
            key={data.id}
            title={data.title}
            showToggle={data.showToggle}
            monthlyRate={data.monthlyRate}
            annualDiscount={data.annualDiscount}
            ratePerDescription={data.ratePerDescription}
            summary={data.summary}
            features={data.features}
            buttonText1={data.buttonText1}
            buttonText2={data.buttonText2}
            theme={data.theme}
          />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
