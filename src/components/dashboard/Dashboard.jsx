import { Link, NavLink, Outlet } from "react-router-dom";
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

      <div className="flex justify-between w-11/12 mx-auto mt-12">
        <h2 className="font-bold text-2xl">Cart</h2>
        <div className="flex justify-between items-center gap-6">
          <h3 className="font-bold text-xl">Total Cost: </h3>
          <Link className="bg-gray-100 border px-8 p-3 rounded-full text-primary text-lg font-semibold">
            Sort By Price <i className="fa-solid fa-sliders ml-2 rotate-90"></i>
          </Link>
          <Link className="bg-primary border px-8 p-3 rounded-full text-white text-lg font-semibold">
            Purchase
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
