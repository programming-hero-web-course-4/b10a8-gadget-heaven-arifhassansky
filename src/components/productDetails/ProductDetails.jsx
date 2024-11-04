import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import SectionTitle from "../section-title/SectionTitle";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { addFavourites, addWishlists } from "../addToDB/addToDB";

const ProductDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [seeDetails, setSeeDetails] = useState({});

  const handleAddBtn = (product) => {
    addFavourites(product);
  };
  const handleWishAddbtn = (product) => {
    addWishlists(product);
  };

  useEffect(() => {
    const filteredProducts = [...data].find(
      (product) => product.product_id == id
    );
    setSeeDetails(filteredProducts);
  }, [data, id]);

  return (
    <>
      <div className="bg-gray-100 relative">
        <div className="pt-8 bg-primary text-white pb-60 mb-96">
          <SectionTitle
            title="Product Details"
            subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to br
       the coolest accessories, we have it all!"
          />
        </div>

        <div className="w-10/12 mx-auto flex gap-8 p-8 bg-white rounded-3xl absolute top-36 left-32">
          <figure className="w-1/3 ">
            <img
              className="w-full h-full object-cover"
              src={seeDetails?.product_image}
              alt={seeDetails?.product_title || "Product"}
            />
          </figure>
          <div className="w-2/3 ">
            <h3 className="font-semibold text-3xl mb-3">
              {seeDetails?.product_title}
            </h3>
            <h4 className="mb-4 font-semibold text-lg">
              Price: ${seeDetails?.price}
            </h4>
            <span
              className={`px-4 py-1 rounded-full font-medium ${
                seeDetails?.availability === "In Stock"
                  ? "bg-green-100 border-green-400"
                  : "bg-red-100 border-red-400"
              }`}
            >
              {seeDetails?.availability}
            </span>
            <h4 className="mb-4 mt-4 text-gray-500">
              {seeDetails?.description}
            </h4>
            <h3 className="mb-3 mt-4 text-lg font-bold">Specification:</h3>
            {seeDetails.specification?.length > 0 ? (
              <ol className="list-decimal pl-5 text-gray-500">
                {seeDetails.specification.map((spec, idx) => (
                  <li key={idx}>{spec}</li>
                ))}
              </ol>
            ) : (
              <p>No specifications available.</p>
            )}
            <h3 className="mb-3 mt-4 text-lg font-bold">Rating</h3>

            <div className="mb-4 flex items-center gap-4">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <h4 className="bg-gray-100 px-4 py-1 rounded-full">
                {seeDetails?.rating}
              </h4>
            </div>
            <div className="flex items-center">
              <Link
                onClick={() => handleAddBtn(seeDetails)}
                className="btn border rounded-full bg-primary text-white flex items-center"
              >
                Add To Card <AiOutlineShoppingCart size={20} />
              </Link>
              <Link
                onClick={() => handleWishAddbtn(seeDetails)}
                className="bg-white text-black w-14 h-14 border p-2 rounded-full flex items-center justify-center ml-4"
              >
                <CiHeart size={50} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
