import ProductFeatureContainer from "../../../components/product_feature/ProductFeatureContainer";
import { COMPANY_SEARCH_FEATURES } from "../../../data/ProductFeaturesData";

const Features = () => {
  return (
    <section className="container my-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {COMPANY_SEARCH_FEATURES.map((data) => (
        <ProductFeatureContainer
          key={data.id}
          icon={data.icon}
          title={data.title}
          content={data.content}
        />
      ))}
    </section>
  );
};

export default Features;
