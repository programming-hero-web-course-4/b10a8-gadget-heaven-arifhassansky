const Cart = ({ gadget }) => {
  return (
    <div className="flex gap-6 p-8 items-center bg-white w-11/12 mx-auto mt-8 rounded-2xl">
      <figure className="w-40 bg-gray-200 rounded-2xl p-2">
        <img src={gadget?.product_image} />
      </figure>
      <div>
        <h2 className="font-semibold text-2xl mb-4">{gadget?.product_title}</h2>
        <p className="text-lg text-gray-500 mb-4">{gadget?.description}</p>
        <h3 className="text-xl font-semibold">Price: ${gadget?.price}</h3>
      </div>
    </div>
  );
};

export default Cart;
