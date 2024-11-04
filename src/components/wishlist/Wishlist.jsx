const Wishlist = ({ item, handleRemovewishlist }) => {
  console.log(item);
  const { product_image, product_title, description, price, product_id } = item;
  return (
    <div className="flex gap-6 items-center w-11/12 mx-auto mt-8 p-8 bg-white rounded-2xl">
      <figure className="w-40 rounded-2xl ">
        <img className="rounded-2xl" src={product_image} />
      </figure>
      <div className=" w-full">
        <div className="flex justify-between">
          <h2 className="font-semibold text-2xl mb-4 ">{product_title}</h2>
          <button
            onClick={() => handleRemovewishlist(product_id)}
            className="text-red-600 border border-red-500 rounded-full w-10 h-10 text-center"
          >
            <i className="fa-solid fa-x"></i>
          </button>
        </div>
        <p className="text-lg text-gray-500 mb-4">{description}</p>
        <h3 className="text-xl font-semibold">Price: ${price}</h3>
      </div>
    </div>
  );
};

export default Wishlist;
