import React from "react";
import bannerimage from "../../assets/banner.jpg";

const BannerImg = () => {
  return (
    <div className=" border-2 bg-white/30 m-2 p-6 absolute top-[510px] md:top-[400px] lg:top-[480px] left-14 md:left-28 lg:left-48 z-10 rounded-3xl">
      <img
        className="w-60 md:w-[500px] lg:w-[1062px] lg:h-[563px] rounded-3xl"
        src={bannerimage}
      />
    </div>
  );
};

export default BannerImg;
