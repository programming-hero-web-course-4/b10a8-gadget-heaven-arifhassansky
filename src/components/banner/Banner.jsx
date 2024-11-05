import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-14 pb-36 md:pb-64 bg-primary text-white rounded-bl-xl rounded-br-xl mx-7 relative mb-[491px]">
      <h1 className="text-3xl md:text-4xl lg:text-6xl mb-6 text-center lg:leading-[72px]">
        Upgrade Your Tech Accessorize with <br />
        Gadget Heaven Accessories
      </h1>
      <h4 className="text-center text-gray-200 mb-8 px-2">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to <br className="hidden lg:block" /> the
        coolest accessories, we have it all!
      </h4>
      <Link
        to="/dashboard"
        className="bg-white rounded-full px-8 py-4 text-primary font-bold "
      >
        Shop Now
      </Link>
    </div>
  );
};

export default Banner;
