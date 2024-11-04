import { useEffect, useState } from "react";
import { getAllFavouites, removeFavourite } from "../addToDB/addToDB";
import Cart from "../cart/Cart";

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

  return (
    <div className="pb-80">
      {favourites.map((item) => (
        <Cart
          key={item.product_id}
          item={item}
          handleRemoveCart={handleRemoveCart}
        />
      ))}
    </div>
  );
};

export default Carts;
