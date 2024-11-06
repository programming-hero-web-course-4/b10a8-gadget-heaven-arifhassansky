import { useLoaderData, useParams } from "react-router-dom";
import Product from "../product/Product";
import { useEffect, useState } from "react";
import notAvailable from "../../assets/error.webp";

const Products = () => {
  const data = useLoaderData();
  const { category } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category) {
      const filteredProducts = [...data].filter(
        (product) => product.category === category
      );
      setProducts(filteredProducts);
    } else {
      setProducts(data);
    }
  }, [category, data]);

  return (
    <>
      {products.length ? (
        <div className="w-11/12 mx-auto flex gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((item) => (
              <Product key={item.product_id} item={item} />
            ))}
          </div>
        </div>
      ) : (
        <div className=" bg-[#F8F8F8] py-24 rounded-3xl flex flex-col justify-center items-center space-y-3 mx-auto">
          <img src={notAvailable} />
          <h2 className="md:text-2xl lg:text-4xl font-black">
            No Information Available
          </h2>
          <p className="text-center">
            There is no information available right now. We are working on it.
            Hopefully <br className="hidden lg:block" />
            products will come to our shop as soon as possible.
          </p>
        </div>
      )}
    </>
  );
};

export default Products;
