import { useEffect, useState } from "react";
import { getAllCarts, removeFavourite } from "../addToDB/addToDB";
import Cart from "../cart/Cart";
import { Link, useNavigate } from "react-router-dom";
import modalImg from "../../assets/Group.png";

const Carts = () => {
  const navigate = useNavigate();
  const [favourites, setFavourites] = useState([]);
  const [cartPrice, setCartPrice] = useState(0);

  useEffect(() => {
    const gadgets = getAllCarts();
    setFavourites(gadgets);
  }, []);

  const handleRemoveCart = (id) => {
    removeFavourite(id);
    const gadgets = getAllCarts();
    setFavourites(gadgets);
  };

  const products = getAllCarts();

  useEffect(() => {
    let sum = 0;
    const prices = products.map((product) => product.price);
    for (let price of prices) {
      sum = sum + price;
    }
    setCartPrice(sum);
  }, [products]);

  const handleCloseModal = () => {
    favourites.map((product) => removeFavourite(product.product_id));
    setFavourites([]);
    setCartPrice(0);
    navigate("/");
  };

  // Sort By price
  const handleSortBtn = () => {
    const sortdsc = products.sort((a, b) => b.price - a.price);
    setFavourites(sortdsc);
  };
  const modal = document.getElementById("modal");
  return (
    <>
      {/* Modal */}
      <dialog id="modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box flex flex-col justify-center items-center p-8">
          <img className="mt-8" src={modalImg} />
          <h2 className="mt-6 pb-3 text-2xl font-bold border-b-2">
            Payment Successfully
          </h2>
          <h3 className="font-medium mt-4 text-gray-500">
            Thanks for Purchasing.
          </h3>
          <h3 className="font-medium text-gray-500 mt-4">
            Total: $ {cartPrice}
          </h3>
          <div className="modal-action">
            <form method="dialog">
              <button
                onClick={handleCloseModal}
                className="btn px-[184px] py-2 rounded-full"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>

      <div>
        <div className="flex flex-col md:flex-row justify-between items-center w-11/12 mx-auto mt-12">
          <h2 className="font-bold text-2xl mb-4 md:mb-0">Cart</h2>
          <div className="flex justify-between items-center gap-6">
            <h3 className="font-bold text:sm  md:text-xl">
              Total Cost: ${cartPrice}
            </h3>
            <Link
              onClick={handleSortBtn}
              className="bg-gray-100 border px-4 md:px-8 p-1 md:p-3 rounded-full text-primary text-lg font-semibold"
            >
              Sort By Price
              <i className="fa-solid fa-sliders ml-2 rotate-90"></i>
            </Link>
            <button
              disabled={favourites.length === 0 && cartPrice <= 0}
              onClick={() => modal.showModal()}
              className="btn bg-primary border px-8 rounded-full text-white text-lg font-semibold"
            >
              Purchase
            </button>
          </div>
        </div>
        <div className="pb-80">
          {favourites.map((item) => (
            <Cart
              key={item.product_id}
              item={item}
              handleRemoveCart={handleRemoveCart}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Carts;
