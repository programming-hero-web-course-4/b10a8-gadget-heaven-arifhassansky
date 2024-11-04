import SectionTitle from "../section-title/SectionTitle";

const Footer = () => {
  return (
    <div className="p-10">
      <SectionTitle
        title="Gadget Heaven"
        subtitle="Leading the way in cutting-edge technology and innovation."
      />
      <footer className="flex flex-col md:flex-row gap-y-8 md:gap-y-0 justify-around text-black mt-7 w-11/12 mx-auto border-t pt-7">
        <nav className="flex flex-col items-center text-gray-600">
          <h6 className="footer-title text-lg text-black mb-4">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav className="flex flex-col items-center text-gray-600">
          <h6 className="footer-title text-lg text-black mb-4">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav className="flex flex-col items-center text-gray-600">
          <h6 className="footer-title text-lg text-black mb-4">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
