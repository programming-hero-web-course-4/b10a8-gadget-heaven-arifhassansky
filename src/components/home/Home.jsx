import BannerImg from "../banner-image/BannerImg";
import Banner from "../banner/Banner";
import Categories from "../categories/Categories";
import SectionTitle from "../section-title/SectionTitle";
import { Outlet, useLoaderData } from "react-router-dom";

const Home = () => {
  const categories = useLoaderData();

  return (
    <div className="bg-[#F7F7F7] pb-24">
      <Banner />
      <BannerImg />
      <SectionTitle title={"Explore Cutting-Edge Gadgets"} />

      <div className="w-11/12 mx-auto gap-6 flex mt-12">
        <Categories categories={categories} />
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
