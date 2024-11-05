import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from "react-helmet-async";

const Root = () => {
  return (
    <HelmetProvider>
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer position="top-center" />
    </HelmetProvider>
  );
};

export default Root;
