import React from "react";
import icon1 from "../public/home/icon1.png";
import icon2 from "../public/home/icon2.png";
import icon3 from "../public/home/icon3.png";
import icon4 from "../public/home/icon4.png";
import Image from "next/image";
import catering from "../public/home/catering.png";
import birthday from "../public/home/birthday.png";
import wedding from "../public/home/wedding.png";
import events from "../public/home/events.png";
import fastestFood1 from "../public/home/fastestFood1.png";
import fastestFood2 from "../public/home/fastestFood2.png";
import fastestFood3 from "../public/home/fastestFood3.png";
import fastestIcon1 from "../public/home/fastestIcon1.png";
import fastestIcon2 from "../public/home/fastestIcon2.png";
import fastestIcon3 from "../public/home/fastestIcon3.png";

const Home = () => {
  return (
    <>
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
      <section className="w-[1600px] h-[712px] flex  justify-center">
        <div className="w-[1296px] h-[500px] flex flex-col items-center">
          <h1 className="w-[450px] h-[61px] text-[55px] my-[60px] text-center font-playfair font-semibold text-[#2C2F24]">
            Browse Our Menu
          </h1>
          <div className="w-[1296px] h-[375px] grid grid-cols-4 gap-[24px]">
            <div className="w-[306px] h-[375px] text-center  border-2 border-[#DBDFD0] rounded-lg flex flex-col items-center justify-center gap-[24px]">
              <Image src={icon1} />
              <h1 className="text-[24px] font-semibold font-[DM Sans] text-[#2C2F24]">
                Breakfast
              </h1>
              <p className="w-[238px] h-[72px] text-[16px] font-normal font-[DM Sans] text-[#414536]">
                In the new era of technology we look in the future with
                certainty and pride for our life.
              </p>
              <button className="text-[#AD343E] w-[111px] h-[26px] font-extrabold text-[17px]">
                Explore Menu
              </button>
            </div>
            <div className="w-[306px] h-[375px] text-center  border-2 border-[#DBDFD0] rounded-lg flex flex-col items-center justify-center gap-[24px]">
              <Image src={icon2} />
              <h1 className="text-[24px] font-semibold font-[DM Sans] text-[#2C2F24]">
                Main Dishes
              </h1>
              <p className="w-[238px] h-[72px] text-[16px] font-normal font-[DM Sans] text-[#414536]">
                In the new era of technology we look in the future with
                certainty and pride for our life.
              </p>
              <button className="text-[#AD343E] w-[111px] h-[26px] font-extrabold text-[17px]">
                Explore Menu
              </button>
            </div>
            <div className="w-[306px] h-[375px] text-center  border-2 border-[#DBDFD0] rounded-lg flex flex-col items-center justify-center gap-[24px]">
              <Image src={icon3} />
              <h1 className="text-[24px] font-semibold font-[DM Sans] text-[#2C2F24]">
                Drinks
              </h1>
              <p className="w-[238px] h-[72px] text-[16px] font-normal font-[DM Sans] text-[#414536]">
                In the new era of technology we look in the future with
                certainty and pride for our life.
              </p>
              <button className="text-[#AD343E] w-[111px] h-[26px] font-extrabold text-[17px]">
                Explore Menu
              </button>
            </div>
            <div className="w-[306px] h-[375px] text-center  border-2 border-[#DBDFD0] rounded-lg flex flex-col items-center justify-center gap-[24px]">
              <Image src={icon4} />
              <h1 className="text-[24px] font-semibold font-[DM Sans] text-[#2C2F24]">
                Desserts
              </h1>
              <p className="w-[238px] h-[72px] text-[16px] font-normal font-[DM Sans] text-[#414536]">
                In the new era of technology we look in the future with
                certainty and pride for our life.
              </p>
              <button className="text-[#AD343E] w-[111px] h-[26px] font-extrabold text-[17px]">
                Explore Menu
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[1600px] h-[867px] flex bg-[#F9F9F7] items-center">
        <div className="w-[745px] h-[627px] flex gap-[24px] pl-[152px]">
          <div className="col-span-2">
            <Image src={fastestFood1} className="w-[431px] h-[600px]" />
          </div>
          <div className="col-span-1 ">
            <div className="flex flex-col gap-[24px] translate-y-[30px]">
              <Image src={fastestFood3} className="w-[290px] h-[333px]" />
              <Image src={fastestFood2} className="w-[290px] h-[240px]" />
            </div>
          </div>
        </div>
        <div className="w-[461px] h-[369px] flex flex-col my-[120px] mx-[152px] ml-[90px]">
          <h1 className="w-[461px] h-[121px] text-[55px] font-playfair leading-[60px]">
            Fastest Food Delivery in City
          </h1>
          <p className="w-[414px] h-[48px] text-[16px] font-[DM Sans] leading-[24px] mt-[20px]">
            Our visual designer lets you quickly and of drag a down your way to
            customapps for both keep desktop.
          </p>

          <span className="w-[251px] h-[26px] flex gap-[20px] mb-[20px] mt-[50px]">
            <Image src={fastestIcon1} />
            <h3> Delivery within 30 minutes</h3>
          </span>
          <span className="w-[251px] h-[26px] flex gap-[20px] mb-[20px]">
            <Image src={fastestIcon2} />
            <h3> Best Offer & Prices</h3>
          </span>
          <span className="w-[251px] h-[26px] flex gap-[20px] mb-[20px]">
            <Image src={fastestIcon3} />
            <h3> Online Services Available</h3>
          </span>
        </div>
      </section>
      <section className="w-[1600px] h-[868px] flex  justify-center">
        <div className="w-[1296px] h-[500px] flex flex-col justify-center items-start mx-[120px] my-[152px]">
          <h1 className="w-[675px] h-[121px] text-[55px] my-[60px] text-start font-playfair font-semibold text-[#2C2F24] leading-[60px]">
            We also offer unique services for your events
          </h1>
          <div className="w-[1296px] h-[628px] grid grid-cols-4 gap-[24px]">
            <div className="w-[306px] h-[443px] text-start   rounded-lg flex flex-col items-start justify-center gap-[15px]">
              <Image src={catering} />
              <h1 className="text-[24px] font-bold font-[DM Sans] text-[#2C2F24]">
                Caterings
              </h1>
              <p className="w-[280px] h-[48px] text-[16px] font-normal font-[DM Sans] text-[#414536]">
                In the new era of technology we look in the future with
                certainty for life.
              </p>
            </div>
            <div className="w-[306px] h-[443px] text-start   rounded-lg flex flex-col items-start justify-center gap-[15px]">
              <Image src={birthday} />
              <h1 className="text-[24px] font-bold font-[DM Sans] text-[#2C2F24]">
                birthday
              </h1>
              <p className="w-[280px] h-[48px] text-[16px] font-normal font-[DM Sans] text-[#414536]">
                In the new era of technology we look in the future with
                certainty for life.
              </p>
            </div>{" "}
            <div className="w-[306px] h-[443px] text-start   rounded-lg flex flex-col items-start justify-center gap-[15px]">
              <Image src={wedding} />
              <h1 className="text-[24px] font-bold font-[DM Sans] text-[#2C2F24]">
                wedding
              </h1>
              <p className="w-[280px] h-[48px] text-[16px] font-normal font-[DM Sans] text-[#414536]">
                In the new era of technology we look in the future with
                certainty for life.
              </p>
            </div>{" "}
            <div className="w-[306px] h-[443px] text-start   rounded-lg flex flex-col items-start justify-center gap-[15px]">
              <Image src={events} />
              <h1 className="text-[24px] font-bold font-[DM Sans] text-[#2C2F24]">
                events
              </h1>
              <p className="w-[280px] h-[48px] text-[16px] font-normal font-[DM Sans] text-[#414536]">
                In the new era of technology we look in the future with
                certainty for life.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
