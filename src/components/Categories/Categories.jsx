import CategoryBox from "./CategoryBox";
import { categories } from "./CategoryData/CategoryData";


const Categories = () => {
    return (
        <div className="mb-10 flex justify-between overflow-x-auto">
           {
            categories.map(category => <CategoryBox key={category.label} label={category.label} icon={category.icon}></CategoryBox>)
           } 
        </div>
    );
};

export default Categories;