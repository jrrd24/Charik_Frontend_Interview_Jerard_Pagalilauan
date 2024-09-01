import { INSIGHTS_CATEGORIES } from "../../../data/InsightsData";

const TopicsFilter = () => {
  return (
    <select
      name={"topics"}
      id={"topics"}
      defaultValue={"All Topics"}
      className="w-full  gap-x-1.5 bg-gradient-orange p-4 rounded-3xl text-white  max-w-64 border-r-8 border-primary-dark "
    >
      <option value={"All Topics"} className="text-custom-text py-8">
        All Topics
      </option>
      {INSIGHTS_CATEGORIES.map((options) => (
        <option
          key={options.id}
          value={options.title}
          className="text-custom-text"
        >
          {options.title}
        </option>
      ))}
    </select>
  );
};

export default TopicsFilter;
