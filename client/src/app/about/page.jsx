import { BiPlay } from "react-icons/bi";
import { AiFillPlayCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { BiPhone } from "react-icons/bi";
import { AiOutlinePhone } from "react-icons/ai";
import React from "react";
import Image from "next/image";
import heroImage from "../../public/about/aboutHero.png";
import card1 from "../../public/about/card1.png";
import card2 from "../../public/about/card2.png";
import card3 from "../../public/about/card3.png";
import Maskgroup from "../../public/about/Maskgroup.png";
import sophia from "../../public/about/sophia.png";
import sophia2 from "../../public/about/sophia2.png";
import sophia3 from "../../public/about/sophia3.png";

const About = () => {
  return (
    <>
      <section className="mt-[85px] w-full place-items-center  grid grid-cols-2 max-md:grid-cols-1  items-center  mb-28">
        <div className="relative">
          <Image src={heroImage} alt="about" />
          <div className="max-lg:hidden absolute top-[295px] rounded-2xl left-[238px] w-[411px] h-[321px] bg-[#474747] flex flex-col   items-start justify-center">
            <span className="text-start m-[50px]">
              <h1 className="text-[24px] text-[#FFFFFF] font-sans font-bold text-start mb-[45px]">
                Come and visit us
              </h1>
              <span className="text-[16px] text-[#F9F9F7] font-sans font-meduim mb-[25px] flex gap-5">
                <BiPhone size={24} /> <h1>(414) 857 - 0107</h1>
              </span>
              <span className="text-[16px] text-[#F9F9F7] font-sans font-meduim mb-[25px] flex gap-5">
                <CiMail size={24} />
                <h1>happytummy@restaurant.com</h1>
              </span>
              <span className="text-[16px] text-[#F9F9F7] font-sans font-meduim mb-[25px] flex gap-5">
                <CiLocationOn size={24} />
                <h1>
                  837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles
                </h1>
              </span>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-[24px] w-[557px] h-[353px] max-sm:w-full max-sm:h-auto max-sm:text-center">
          <h3 className="font-playfair font-light text-[55px] leading-[60px] text-[#2C2F24] max-sm:text-[36px] max-sm:leading-[42px]">
            We provide healthy food for your family.
          </h3>
          <p className="font-sans font-light text-[18px] leading-[28px] text-[#2C2F24] max-sm:text-[18px] max-sm:leading-[26px]">
            Our story began with a vision to create a unique dining experience
            that merges fine dining, exceptional service, and a vibrant
            ambiance. Rooted in city's rich culinary culture, we aim to honor
            our local roots while infusing a global palate.
          </p>
          <p className="font-sans font-light text-[16px] leading-[28px] text-[#414536] max-sm:text-[16px] max-sm:leading-[24px]">
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </p>
        </div>
      </section>
      <section>
        <div
          id="hero2"
          className="w-full h-[690px] flex flex-col justify-center items-center mb-[80px]"
        >
          <div className="size-[106px]  bg-[#FFFFFF] rounded-full flex justify-center items-center ">
            <BiPlay className="size-[50px] text-[#AD343E] rounded-full text-sm" />
          </div>
          <h1 className=" text-center font-playfair text-[55px] w-[596px] h-[121px] leading-[60px] text-[#FFFFFF] max-sm:text-[36px] max-sm:w-full max-sm:h-auto max-sm:leading-[42px]">
            Feel the authentic & original taste from us
          </h1>
        </div>
        <section className="grid grid-cols-3 max-lg:grid-cols-1  max-lg:gap-10 mb-[95px] place-items-center  ">
          <div className="w-[366px] h-[90px] flex gap-[24px] self-center">
            <div className="w-[38px] h-[44px]">
              <Image src={card1} alt="card" />
            </div>
            <span className="w-[294px] h-[90px]">
              <h1 className="font-sans font-semibold text-[20px] text-[#2C2F24] mb-[16px] ">
                Multi Cuisine
              </h1>
              <h1 className="font-sans font-semibold text-[16px] text-[#414536] ">
                In the new era of technology we look in the future with
                certainty life.
              </h1>
            </span>
          </div>
          <div className="w-[366px] h-[90px] flex gap-[24px]">
            <div className="w-[38px] h-[44px]">
              <Image src={card2} alt="card" />
            </div>
            <span className="w-[294px] h-[90px]">
              <h1 className="font-sans font-semibold text-[20px] text-[#2C2F24] mb-[16px] ">
                Easy To Order
              </h1>
              <h1 className="font-sans font-semibold text-[16px] text-[#414536] ">
                In the new era of technology we look in the future with
                certainty life.
              </h1>
            </span>
          </div>
          <div className="w-[366px] h-[90px] flex gap-[24px]">
            <div className="w-auto h-[44px]">
              <Image src={card3} alt="card" />
            </div>
            <span className="w-[294px] h-[90px]">
              <h1 className="font-sans font-semibold text-[20px] text-[#2C2F24] mb-[16px] ">
                Fast Delivery
              </h1>
              <h1 className="font-sans font-semibold text-[16px] text-[#414536] ">
                In the new era of technology we look in the future with
                certainty life.
              </h1>
            </span>
          </div>
        </section>
        <section className="w-full h-[920px] max-lg:h-auto bg-[#F9F9F7] flex items-center justify-center max-[812px]:h-auto">
          <div
            id="container"
            className="mx-[152px] my-[120px] max-lg:mx-[20px] max-lg:my-[50px] flex flex-row max-lg:flex-col items-center justify-center gap-[131px] max-lg:gap-[50px] max-[812px]:gap-[20px]"
          >
            <div id="textArea">
              <div className="w-[556px] h-[213px] max-lg:w-full max-lg:h-auto">
                <h3 className="font-playfair text-[55px] font-meduim leading-[60px] text-[#2C2F24] max-lg:text-[40px] max-lg:leading-[50px] max-sm:text-[30px] max-sm:leading-[38px]">
                  A little information for our valuable guest
                </h3>
                <p className="w-[556px] h-[72px] font-sans text-[16px] leading-[24px] text-[#414536] max-lg:w-full max-lg:h-auto max-lg:text-[14px] max-lg:leading-[20px]">
                  At place, we believe that dining is not just about food, but
                  also about the overall experience. Our staff, renowned for
                  their warmth and dedication, strives to make every visit an
                  unforgettable event.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-[24px] w-[610px] h-[372px] max-lg:grid-cols-1 max-lg:w-full max-lg:h-auto max-lg:gap-[20px]">
                <span className="border-2 border-[#DBDFD0] flex flex-col w-[293px] h-[174px] bg-[#FFFFFF] items-center justify-center max-lg:w-full max-lg:h-auto">
                  <h4 className="font-playfair text-[55px] text-[#2C2F24] leading-[60px] max-lg:text-[40px] max-lg:leading-[50px]">
                    3
                  </h4>
                  <h4 className="font-sans text-[18px] text-[#414536] leading-[28px] max-lg:text-[16px] max-lg:leading-[24px]">
                    Locations
                  </h4>
                </span>
                <span className="border-2 border-[#DBDFD0] flex flex-col w-[293px] h-[174px] bg-[#FFFFFF] items-center justify-center max-lg:w-full max-lg:h-auto">
                  <h4 className="font-playfair text-[55px] text-[#2C2F24] leading-[60px] max-lg:text-[40px] max-lg:leading-[50px]">
                    1995
                  </h4>
                  <h4 className="font-sans text-[18px] text-[#414536] leading-[28px] max-lg:text-[16px] max-lg:leading-[24px]">
                    Founded
                  </h4>
                </span>{" "}
                <span className="border-2 border-[#DBDFD0] flex flex-col w-[293px] h-[174px] bg-[#FFFFFF] items-center justify-center max-lg:w-full max-lg:h-auto">
                  <h4 className="font-playfair text-[55px] text-[#2C2F24] leading-[60px] max-lg:text-[40px] max-lg:leading-[50px]">
                    65+
                  </h4>
                  <h4 className="font-sans text-[18px] text-[#414536] leading-[28px] max-lg:text-[16px] max-lg:leading-[24px]">
                    Staff Members
                  </h4>
                </span>{" "}
                <span className="border-2 border-[#DBDFD0] flex flex-col w-[293px] h-[174px] bg-[#FFFFFF] items-center justify-center max-lg:w-full max-lg:h-auto">
                  <h4 className="font-playfair text-[55px] text-[#2C2F24] leading-[60px] max-lg:text-[40px] max-lg:leading-[50px]">
                    100%
                  </h4>
                  <h4 className="font-sans text-[18px] text-[#414536] leading-[28px] max-lg:text-[16px] max-lg:leading-[24px]">
                    Satisfied Customers
                  </h4>
                </span>
              </div>
            </div>
            <div className="max-[812px]:hidden">
              <Image src={Maskgroup} alt="hero" />
            </div>
          </div>
        </section>
      </section>
      <section className="w-full h-auto pt-[98px] px-[152px] pb-[135px]">
        <h1 className="w-full text-center font-playfair text-[55px] leading-[60px] text-[#2C2F24] mb-[64px] max-lg:text-[40px] max-lg:leading-[50px]">
          What Our Customers Say
        </h1>
        <div className="w-full h-auto grid grid-cols-3 gap-4 max-lg:grid-cols-1 max-lg:gap-6">
          <span
            id="card-container"
            className="flex flex-col items-center w-full h-[408px] p-4 bg-[#F9F9F7] rounded-xl"
          >
            <h1 className="w-full h-[30px] font-playfair text-[24px] text-[#AD343E] font-semibold place-self-start mb-4">
              “The best restaurant”
            </h1>
            <p className="mb-6 w-full h-[140px] font-sans text-[18px] text-[#414536] font-meduim place-self-start">
              Last night, we dined at place and were simply blown away. From the
              moment we stepped in, we were enveloped in an inviting atmosphere
              and greeted with warm smiles.
            </p>
            <div className="pt-6 border-t-2 border-[#DBDFD0] flex gap-4 items-center justify-start text-start w-full h-[70px]">
              <div className="place-self-start">
                <Image src={sophia} alt="hero" className="w-12 h-12" />
              </div>
              <div className="flex flex-col">
                <h3 className="w-full h-[24px] text-[16px] text-[#2C2F24] font-sans font-semibold">
                  Sophire Robson
                </h3>
                <h3 className="w-full h-[24px] text-[15px] text-[#2C2F24] font-sans">
                  Los Angeles, CA
                </h3>
              </div>
            </div>
          </span>
          <span
            id="card-container"
            className="flex flex-col items-center w-full h-[408px] p-4 bg-[#F9F9F7] rounded-xl"
          >
            <h1 className="w-full h-[30px] font-playfair text-[24px] text-[#AD343E] font-semibold place-self-start mb-4">
              “Simply delicious”
            </h1>
            <p className="mb-6 w-full h-[140px] font-sans text-[18px] text-[#414536] font-meduim place-self-start">
              Place exceeded my expectations on all fronts. The ambiance was
              cozy and relaxed, making it a perfect venue for our anniversary
              dinner. Each dish was prepared and beautifully presented.
            </p>
            <div className="pt-6 border-t-2 border-[#DBDFD0] flex gap-4 items-center justify-start text-start w-full h-[70px]">
              <div className="place-self-start">
                <Image src={sophia2} alt="hero" className="w-12 h-12" />
              </div>
              <div className="flex flex-col">
                <h3 className="w-full h-[24px] text-[16px] text-[#2C2F24] font-sans font-semibold">
                  Matt Cannon
                </h3>
                <h3 className="w-full h-[24px] text-[15px] text-[#2C2F24] font-sans">
                  San Diego, CA
                </h3>
              </div>
            </div>
          </span>
          <span
            id="card-container"
            className="flex flex-col items-center w-full h-[408px] p-4 bg-[#F9F9F7] rounded-xl"
          >
            <h1 className="w-full h-[30px] font-playfair text-[24px] text-[#AD343E] font-semibold place-self-start mb-4">
              “One of a kind restaurant”
            </h1>
            <p className="mb-6 w-full h-[140px] font-sans text-[18px] text-[#414536] font-meduim place-self-start">
              The culinary experience at place is first to none. The atmosphere
              is vibrant, the food - nothing short of extraordinary. The food
              was the highlight of our evening. Highly recommended.
            </p>
            <div className="pt-6 border-t-2 border-[#DBDFD0] flex gap-4 items-center justify-start text-start w-full h-[70px]">
              <div className="place-self-start">
                <Image src={sophia3} alt="hero" className="w-12 h-12" />
              </div>
              <div className="flex flex-col">
                <h3 className="w-full h-[24px] text-[16px] text-[#2C2F24] font-sans font-semibold">
                  Andy Smith
                </h3>
                <h3 className="w-full h-[24px] text-[15px] text-[#2C2F24] font-sans">
                  San Francisco, CA
                </h3>
              </div>
            </div>
          </span>
        </div>
      </section>
    </>
  );
};

export default About;
