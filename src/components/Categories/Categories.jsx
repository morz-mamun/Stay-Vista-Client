import { useSearchParams } from "react-router-dom";
import CategoryBox from "./CategoryBox";
import { categories } from "./CategoryData/CategoryData";

const Categories = () => {
    const [params, setParams] = useSearchParams()
    const activeCategory = params.get('category')
  return (
    <div className="mb-10 flex justify-between overflow-x-auto">
      {categories.map((category) => (
        <CategoryBox
          key={category.label}
          label={category.label}
          icon={category.icon}
          selected= {activeCategory === category.label}
        ></CategoryBox>
      ))}
    </div>
  );
};

export default Categories;
