import React from "react";
import fastestFood1 from "../public/home/fastestFood1.png";
import fastestFood2 from "../public/home/fastestFood2.png";
import fastestFood3 from "../public/home/fastestFood3.png";
import fastestIcon1 from "../public/home/fastestIcon1.png";
import fastestIcon2 from "../public/home/fastestIcon2.png";
import fastestIcon3 from "../public/home/fastestIcon3.png";
import Image from "next/image";

const FastestFood = () => {
  return (
    <section className="w-auto h-[867px] flex bg-[#F9F9F7] items-center max-sm:w-full max-sm:h-auto max-sm:py-10">
      <div className="w-[745px] h-[627px] flex gap-[24px] pl-[152px] max-sm:hidden">
        <div className="col-span-2">
          <Image
            className="h-full pb-10 w-[450px]"
            alt="PIC"
            src={fastestFood1}
          />
        </div>
        <div className="col-span-1 h-[600px] ">
          <div className="flex flex-col gap-[24px] translate-y-[30px]">
            <Image
              alt="PIC"
              style={{ width: "431px", height: "auto" }}
              src={fastestFood3}
              // className="w-[290px] h-[333px]"
            />
            <Image
              alt="PIC"
              src={fastestFood2}
              style={{ width: "431px", height: "auto" }}
              // className="w-[290px] h-[240px]"
            />
          </div>
        </div>
      </div>
      <div className="w-[461px] h-[369px] flex flex-col my-[120px] mx-[152px] ml-[90px] max-sm:w-full max-sm:mx-0 max-sm:px-5 max-sm:h-auto max-sm:my-0">
        <h1 className="text-[55px] font-playfair leading-[60px] max-sm:text-[36px] max-sm:leading-[42px] max-sm:w-full max-sm:text-center">
          Fastest Food Delivery in City
        </h1>
        <p className="w-[414px] text-[16px] font-[DM Sans] leading-[24px] mt-[20px] max-sm:text-[18px] max-sm:leading-[26px] max-sm:w-full max-sm:text-center">
          Our visual designer lets you quickly and of drag a down your way to
          customapps for both keep desktop.
        </p>
        <div className="mt-[50px] flex flex-col gap-[20px] max-sm:mt-[30px] max-sm:w-full">
          <span className="flex gap-[20px] items-center">
            <Image
              alt="pic"
              src={fastestIcon1}
              className="max-sm:w-[24px] max-sm:h-auto w-auto h-auto"
            />
            <h3 className="text-[16px] max-sm:text-[18px]">
              Delivery within 30 minutes
            </h3>
          </span>

          <span className="flex gap-[20px] items-center">
            <Image
              alt="pic"
              src={fastestIcon2}
              className="max-sm:w-[24px] max-sm:h-auto w-auto h-auto"
            />
            <h3 className="text-[16px] max-sm:text-[18px]">
              Best Offer & Prices
            </h3>
          </span>

          <span className="flex gap-[20px] items-center">
            <Image
              alt="pic"
              src={fastestIcon1}
              className="max-sm:w-[24px] max-sm:h-auto w-auto h-auto"
            />
            <h3 className="text-[16px] max-sm:text-[18px]">
              Online Services Available
            </h3>
          </span>
        </div>
      </div>
    </section>
  );
};

export default FastestFood;
