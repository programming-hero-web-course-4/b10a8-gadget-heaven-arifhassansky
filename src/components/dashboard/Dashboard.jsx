import { NavLink, Outlet } from "react-router-dom";
import SectionTitle from "../section-title/SectionTitle";

const Dashboard = () => {
  return (
    <div className="bg-gray-100">
      <div className="py-8 bg-primary text-white ">
        <SectionTitle
          title="Dashboard"
          subtitle={`Explore the latest gadgets that will take your experience to the next level. From smart devices to  the coolest accessories, we have it all!`}
        />
        <div className="flex justify-center items-center mt-8 gap-6">
          <NavLink
            to="/dashboard/carts"
            className={({ isActive }) =>
              `px-16 border p-3 rounded-full text-lg font-bold ${
                isActive ? "bg-white text-primary" : "bg-primary text-white"
              }`
            }
          >
            Cart
          </NavLink>
          <NavLink
            to="/dashboard/wishlist"
            className={({ isActive }) =>
              `px-16 border p-3 rounded-full text-lg font-bold ${
                isActive ? "bg-white text-primary" : "bg-primary text-white"
              }`
            }
          >
            Wishlist
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
