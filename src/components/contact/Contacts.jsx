import { MdOutlineMailOutline, MdAddLocation } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import MailBox from "../mailBox/MailBox";
import mapImg from "../../assets/map.png";

const Contacts = () => {
  return (
    <div>
      <div className="mt-10 mb-10 p-10 bg-primary text-white">
        {/* address  */}
        <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold capitalize">Gadget Heaven</h2>
            <div className=" my-2">
              <span className="text-xl">Average Rating: 4.7</span>
            </div>
            <p>Gadget shop in Multiplan City</p>
            <h2 className="flex items-center text:sm md:text-lg lg:text-xl gap-2 mt-2">
              <MdAddLocation />
              <span className="font-bold">
                Address: 14 Daisy Garden, Banasree Main Rd, Dhaka 1219
              </span>
            </h2>
            <p className="flex items-center text-xl gap-2">
              <FaPhone />
              <span className="font-bold">Phone:</span> 017........
            </p>
            <h2 className="flex items-center text-xl gap-2">
              <MdOutlineMailOutline />
              <span className="font-bold">Email:</span> info@bdcalling.com
            </h2>
          </div>
          <div>
            <figure className="md:w-80 lg:w-96 mt-8 md:mt-0">
              <img className="rounded-2xl" src={mapImg} />
            </figure>
          </div>
        </div>
      </div>

      {/* support card section  */}
      <div className="mt-20 w-11/12 mx-auto ">
        <h2 className="text-3xl font-medium text-center mb-10">
          Support Session
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {/* card 1 */}
          <div className="rounded-xl shadow-lg">
            <div className="p-10 rounded-xl shadow-lg">
              <h2 className="font-bold underline">Sales</h2>
              <p className="my-6">
                Whether you are new to GREEMIND or a current customer, get in
                touch with our sales team to discuss how we can work together.
              </p>
              <button className="px-4 py-2 text-primary font-bold shadow-xl rounded-lg">
                Contact Sales
              </button>
            </div>
          </div>

          {/* card 2 */}
          <div className="bg-[#FFFFFF] rounded-xl shadow-xl ">
            <div className="bg-[#FFFFFF] p-10 rounded-xl shadow-xl">
              <h2 className="font-bold underline">Support</h2>
              <p className="my-6">
                Access resources to help our customers learn how to better
                utilize sprout, find answers to tech questions and request
                assistance.
              </p>
              <button className="px-4 py-2 text-primary font-bold shadow-xl rounded-lg">
                Create a Ticket
              </button>
            </div>
          </div>

          {/* card 3 */}
          <div className="bg-[#FFFFFF] rounded-xl shadow-xl ">
            <div className="bg-[#FFFFFF] p-10 rounded-xl shadow-xl">
              <h2 className="font-bold underline">Warrenty</h2>
              <p className="my-6">
                providing a warrantys of repairs,refunds, or replacements and
                demonstrating confidence in product quality.
              </p>
              <button className="px-4 py-2 text-primary font-bold shadow-xl rounded-lg">
                Create a Ticket
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* poster section  */}
      <div className="mb-20">
        <MailBox></MailBox>
      </div>
    </div>
  );
};

export default Contacts;
