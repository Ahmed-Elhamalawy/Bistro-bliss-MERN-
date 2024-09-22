import React from "react";
import icon1 from "../public/home/icon1.png";
import icon2 from "../public/home/icon2.png";
import icon3 from "../public/home/icon3.png";
import icon4 from "../public/home/icon4.png";
import Image from "next/image";

const BrowseMenu = () => {
  return (
    <section className="flex justify-center p-4">
      <div className="max-w-4xl mx-auto my-8 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-playfair font-semibold text-[#2C2F24] mb-8 text-center">
          Browse Our Menu
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { img: icon1, title: "Breakfast" },
            { img: icon2, title: "Main Dishes" },
            { img: icon3, title: "Drinks" },
            { img: icon4, title: "Desserts" },
          ].map(({ img, title }, index) => (
            <div
              key={index}
              className="border-2 border-[#DBDFD0] rounded-lg flex flex-col items-center justify-center text-center p-4"
            >
              <Image src={img} alt={title} className="w-24 h-auto" />
              <h1 className="text-xl font-semibold font-[DM Sans] text-[#2C2F24] mt-4">
                {title}
              </h1>
              <p className="text-base font-normal font-[DM Sans] text-[#414536] mt-2">
                In the new era of technology we look in the future with
                certainty and pride for our life.
              </p>
              <button className="text-[#AD343E] w-[111px] h-[26px] font-extrabold text-[17px] mt-4">
                Explore Menu
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseMenu;
