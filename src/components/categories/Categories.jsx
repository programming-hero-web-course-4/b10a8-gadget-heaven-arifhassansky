import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="p-6 bg-white rounded-2xl flex flex-col gap-y-6">
      {categories.map((category) => (
        <NavLink
          to={`/category/${category.category}`}
          key={category.id}
          className={({ isActive }) =>
            `bg-gray-100 px-6 p-3 rounded-full ${
              isActive && "bg-primary text-white"
            }`
          }
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
