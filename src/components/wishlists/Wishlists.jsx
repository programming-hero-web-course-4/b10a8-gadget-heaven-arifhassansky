import { useEffect, useState } from "react";
import { getAllWishlist, removeWishlists } from "../addToDB/addToDB";
import Wishlist from "../wishlist/Wishlist";
import { Link } from "react-router-dom";

const Wishlists = () => {
  const [wishlists, setWishlists] = useState([]);
  useEffect(() => {
    const gadgets = getAllWishlist();
    setWishlists(gadgets);
  }, []);

  // Delete items

  const handleRemovewishlist = (id) => {
    removeWishlists(id);
    const gadgets = getAllWishlist();
    setWishlists(gadgets);
  };

  // Set total Price
  const [wishlistprice, setTotalWishlistPrice] = useState(0);

  const products = getAllWishlist();

  useEffect(() => {
    let sum = 0;
    const prices = products.map((product) => product.price);
    for (let price of prices) {
      sum = sum + price;
    }
    setTotalWishlistPrice(sum);
  }, [products]);

  // Sort By price
  const handleSortBtn = () => {
    const sortdsc = products.sort((a, b) => b.price - a.price);
    setWishlists(sortdsc);
  };

  return (
    <div>
      <div className="flex justify-between w-11/12 mx-auto mt-12">
        <h2 className="font-bold text-2xl">Wishlist</h2>
        <div className="flex justify-between items-center gap-6">
          <h3 className="font-bold text-xl">Total Cost: ${wishlistprice} </h3>
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

      {wishlists.map((item) => (
        <Wishlist
          key={item.product_id}
          item={item}
          handleRemovewishlist={handleRemovewishlist}
        />
      ))}
    </div>
  );
};

export default Wishlists;
