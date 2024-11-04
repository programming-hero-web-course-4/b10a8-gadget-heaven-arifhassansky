import { useEffect, useState } from "react";
import { getAllWishlist, removeWishlists } from "../addToDB/addToDB";
import Wishlist from "../wishlist/Wishlist";

const Wishlists = () => {
  const [wishlists, setWishlists] = useState([]);
  useEffect(() => {
    const gadgets = getAllWishlist();
    setWishlists(gadgets);
  }, []);

  const handleRemovewishlist = (id) => {
    removeWishlists(id);
    const gadgets = getAllWishlist();
    setWishlists(gadgets);
  };

  return (
    <div>
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
