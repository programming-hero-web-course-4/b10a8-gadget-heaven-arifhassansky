import { useEffect, useState } from "react";
import { getAllFavouites, removeFavourite } from "../addToDB/addToDB";
import Cart from "../cart/Cart";
import { Link } from "react-router-dom";

const Carts = () => {
  const [favourites, setFavourites] = useState([]);
  useEffect(() => {
    const gadgets = getAllFavouites();
    setFavourites(gadgets);
  }, []);

  const handleRemoveCart = (id) => {
    removeFavourite(id);
    const gadgets = getAllFavouites();
    setFavourites(gadgets);
  };

  const [cartPrice, setCartPrice] = useState(0);

  const products = getAllFavouites();

  useEffect(() => {
    let sum = 0;
    const prices = products.map((product) => product.price);
    for (let price of prices) {
      sum = sum + price;
    }
    setCartPrice(sum);
  }, [products]);

  // Sort By price
  const handleSortBtn = () => {
    const sortdsc = products.sort((a, b) => b.price - a.price);
    setFavourites(sortdsc);
  };

  return (
    <div>
      <div className="flex justify-between w-11/12 mx-auto mt-12">
        <h2 className="font-bold text-2xl">Cart</h2>
        <div className="flex justify-between items-center gap-6">
          <h3 className="font-bold text-xl">Total Cost: ${cartPrice} </h3>
          <Link
            onClick={handleSortBtn}
            className="bg-gray-100 border px-8 p-3 rounded-full text-primary text-lg font-semibold"
          >
            Sort By Price <i className="fa-solid fa-sliders ml-2 rotate-90"></i>
          </Link>
          <Link className="bg-primary border px-8 p-3 rounded-full text-white text-lg font-semibold">
            Purchase
          </Link>
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
  );
};

export default Carts;
