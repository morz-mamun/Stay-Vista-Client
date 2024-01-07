
const CategoryBox = ({label, icon: Icon}) => {
    return (
        <div className="flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:font-bold transition cursor-pointer hover:border-red-600">
            <Icon size={26}></Icon>
            <div>{label}</div>
        </div>
    );
};

export default CategoryBox;