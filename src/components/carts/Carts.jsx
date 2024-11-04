import { useEffect, useState } from "react";
import { getStoredGadgetList } from "../../addToDB/addToDB";
import { useLoaderData } from "react-router-dom";
import Cart from "../cart/Cart";

const Carts = () => {
  const data = useLoaderData();
  const [gadgetLists, setGadgetLists] = useState([]);

  useEffect(() => {
    const storedGadgetList = getStoredGadgetList();
    const likedBookList = data.filter((gadget) =>
      storedGadgetList.includes(gadget.product_id)
    );

    setGadgetLists(likedBookList);
  }, [data]);

  return (
    <div className="pb-80">
      {gadgetLists.map((gadget) => (
        <Cart key={gadget.product_id} gadget={gadget} />
      ))}
    </div>
  );
};

export default Carts;
