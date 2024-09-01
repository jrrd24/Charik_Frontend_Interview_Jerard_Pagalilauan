import "./accordion.css";
import { Accordion } from "@szhsin/react-accordion";
import AccordionItem from "./AccordionItem";
import { PRICING_FAQS } from "../../data/PricingData";

const CustomAccordion = () => {
  return (
    <section className="bg-white p-8 max-w-[64rem] w-full rounded-xl">
      <Accordion transition allowMultiple>
        {PRICING_FAQS.map((content) => (
          <AccordionItem
            key={content.id}
            header={content.header}
            initialEntered={content.defaultOpened}
          >
            {content.content}
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default CustomAccordion;
