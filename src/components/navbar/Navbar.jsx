import { Link, NavLink, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { getAllCarts, getAllWishlist } from "../addToDB/addToDB";

const Navbar = () => {
  const { pathname } = useLocation();

  const navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );

  const carts = getAllCarts();
  const wishlists = getAllWishlist();

  return (
    <div
      className={`mt-4 mx-7 ${
        pathname === "/"
          ? "bg-primary text-white rounded-tl-xl rounded-tr-xl"
          : "text-black bg-white"
      }`}
    >
      <div className="w-11/12 mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm text-base dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navlinks}
              </ul>
            </div>
            <Link to="/" className="text-xl font-bold">
              Gadget Heaven
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navlinks}</ul>
          </div>
          <div className="navbar-end">
            <Link
              to="/dashboard"
              className="bg-white border text-black w-10 h-10 rounded-full flex items-center justify-center relative"
            >
              <AiOutlineShoppingCart size={20} />
              {carts.length > 0 && (
                <div className="h-5 w-5 bg-green-400 text-white rounded-full text-center absolute -top-2 -right-1">
                  {carts.length}
                </div>
              )}
            </Link>
            <Link
              to="/dashboard"
              className="bg-white border text-black w-10 h-10 rounded-full flex items-center justify-center ml-4 relative"
            >
              <CiHeart size={20} />
              {wishlists.length > 0 && (
                <div className="h-5 w-5 bg-green-400 text-white rounded-full text-center absolute -top-2 -right-1">
                  {wishlists.length}
                </div>
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
