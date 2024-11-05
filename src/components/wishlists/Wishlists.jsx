import { useEffect, useState } from "react";
import { getAllWishlist, removeWishlists } from "../addToDB/addToDB";
import Wishlist from "../wishlist/Wishlist";

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

  return (
    <div>
      <div className="flex justify-between w-11/12 mx-auto mt-12">
        <h2 className="font-bold text-2xl">Wishlist</h2>
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
