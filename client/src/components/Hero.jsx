import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <div
        id="hero"
        className="w-auto h-[802px] flex items-center justify-center max-sm:w-full max-sm:h-auto max-sm:py-10"
      >
        <div className="w-[667px] h-[392px] flex flex-col items-center justify-center text-center">
          <h1 className="text-[100px] max-sm:text-[48px] font-playfair text-[#2C2F24] leading-[96px] max-sm:leading-[56px] w-full">
            Best food for your taste
          </h1>
          <h3 className="font-[DM Sans] text-[20px] max-sm:text-[16px] text-[#2C2F24] leading-[32px] max-sm:leading-[24px] w-full mt-6">
            Discover delectable cuisine and unforgettable moments in our
            welcoming, culinary haven.
          </h3>
          <span className="mt-8 flex gap-4 max-sm:flex-col max-sm:gap-4 ">
            <button className="text-center w-[164px] h-[64px] font-[DM Sans] font-medium bg-[#AD343E] text-[#FFFFFF] rounded-full">
              <Link href={"/bookTable"}> Book A Table</Link>
            </button>
            <button className="w-[164px] h-[64px] font-[DM Sans] font-bold bg-transparent text-[#2C2F24] border-2 border-[#2C2F24] rounded-full">
              <Link href={"/ourMenu"}> Explore Menu</Link>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
