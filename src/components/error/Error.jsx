import { BiError } from "react-icons/bi";
import { Link } from "react-router-dom";
import errorImg from "../../assets/error.jpeg";
const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h2 className="text-6xl font-black mb-4">404</h2>
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        Page Not Found <BiError />
      </h3>
      <h3 className="text-lg font-medium mb-4">
        We cannot find the page you are looking for.
      </h3>
      <Link
        to="/"
        className="bg-primary font-medium rounded-lg text-white px-6 py-2"
      >
        Back to Home
      </Link>
      <figure className="mt-4">
        <img src={errorImg} />
      </figure>
    </div>
  );
};

export default Error;
