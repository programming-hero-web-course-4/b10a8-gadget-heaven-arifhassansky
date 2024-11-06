import { useNavigate } from "react-router-dom";

const Product = ({ item }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/productDetails/${item.product_id}`);
  };
  const { product_image, price, product_title } = item;
  return (
    <div className="card card-compact bg-white p-5">
      <figure>
        <img src={product_image} alt="Shoes" />
      </figure>
      <div className="">
        <h2 className="mt-6 font-bold text-md md:text-xl lg::text-2xl mb-3">
          {product_title}
        </h2>
        <p className="font-medium text:sm md:text-xl mb-4">price: ${price} </p>
        <div className="card-actions ">
          <button
            onClick={handleViewDetails}
            className="btn bg-transparent text-primary border border-primary rounded-full hover:bg-primary hover:text-white"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
