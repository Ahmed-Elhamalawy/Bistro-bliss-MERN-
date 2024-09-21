import React from "react";

const Home = () => {
  return (
    <div>
      <div
        id="hero"
        className="w-[1600px] h-[802px] flex items-center justify-center"
      >
        <div className="w-[667px] h-[392px] flex flex-col items-center justify-center text-center ">
          <h1 className="text-[100px] font-playfair text-[#2C2F24]  leading-[96px] w-[667px] h-[192px] ">
            Best food for your taste
          </h1>
          <h3 className="font-[DM Sans] text-[20px] text-[#2C2F24] leading-[32px] w-[537px] h-[64px] mt-6 ">
            Discover delectable cuisine and unforgettable moments in our
            welcoming, culinary haven.
          </h3>
          <span className="mt-8 flex gap-4">
            <button className="w-[164px] h-[64px] font-[DM Sans]  font-medium bg-[#AD343E] text-[#FFFFFF]  rounded-full">
              Book A Table
            </button>
            <button className="w-[164px] h-[64px] font-[DM Sans] font-bold bg-transparent text-[#2C2F24] border-2 border-[#2C2F24] rounded-full">
              Explore Menu
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
