import React from "react";
import Facebook from "../public/facebook.svg";
import Instagram from "../public/instagram.svg";
import Twitter from "../public/twitter.svg";
import Github from "../public/github.svg";
import photo1 from "../public/footer/1.png";
import photo2 from "../public/footer/2.png";
import photo3 from "../public/footer/3.png";
import photo4 from "../public/footer/4.png";
import Image from "next/image";
import Logo from "../public/logo.svg";

const Footer = () => {
  return (
    <section className="w-[1600px] h-[778px] bg-[#474747] ">
      <div className="w-[1296px] h-[573px] grid grid-cols-6  mx-auto pt-[120px]">
        <div className="w-[293px] h-[222px] col-span-2 flex flex-col gap-[30px]  ">
          <span className="flex gap-2">
            <Logo className="w-[56] h-[55] text-[#FFFFFF] " />
            <h3 className="text-[43px] h-[55px] w-[210px] text-[#FFFFFF] font-playfair font-semibold italic">
              Bistro Bliss
            </h3>
          </span>
          <h3 className="text-[16px] h-[72px] w-[293px] text-[#ADB29E] font-[DM Sans] font-semibold ">
            In the new era of technology we look a in the future with certainty
            and pride to for our company and.
          </h3>
          <span className="flex gap-3 ">
            <Facebook className="bg-[#AD343E] rounded-full" />
            <Instagram className="bg-[#AD343E] rounded-full" />
            <Twitter className="bg-[#AD343E] rounded-full" />
            <Github className="bg-[#AD343E] rounded-full object-cover" />
          </span>
        </div>
        <div className="col-span-1 flex flex-col gap-[40px]">
          <h1 className="mb-5 w-[44px] h-[24px] font-[DM Sans] font-semibold text-[#FFFFFF] text-[16px]">
            Pages
          </h1>
          <h1 className="w-[44px] h-[24px] font-[DM Sans] font-meduim text-[#DBDFD0] text-[16px]">
            Home
          </h1>
          <h1 className="w-[44px] h-[24px] font-[DM Sans] font-meduim text-[#DBDFD0] text-[16px]">
            About
          </h1>
          <h1 className="w-[44px] h-[24px] font-[DM Sans] font-meduim text-[#DBDFD0] text-[16px]">
            Menu
          </h1>
          <h1 className="w-[44px] h-[24px] font-[DM Sans] font-meduim text-[#DBDFD0] text-[16px]">
            Pricing
          </h1>
          <h1 className="w-[44px] h-[24px] font-[DM Sans] font-meduim text-[#DBDFD0] text-[16px]">
            Blog
          </h1>
          <h1 className="w-[44px] h-[24px] font-[DM Sans] font-meduim text-[#DBDFD0] text-[16px]">
            Contact
          </h1>
          <h1 className="w-[44px] h-[24px] font-[DM Sans] font-meduim text-[#DBDFD0] text-[16px]">
            Delivery
          </h1>
        </div>
        <div className="col-span-1 flex flex-col gap-[40px] ">
          <h1 className="mb-5 w-[149px] h-[24px] font-[DM Sans] font-semibold text-[#FFFFFF] text-[16px]">
            Utility Pages
          </h1>
          <h1 className="w-[149px] h-[24px] font-[DM Sans] font-meduim text-[#DBDFD0] text-[16px]">
            Start Here
          </h1>
          <h1 className="w-[149px] h-[24px] font-[DM Sans] font-meduim text-[#DBDFD0] text-[16px]">
            Styleguide
          </h1>
          <h1 className="w-[149px] h-[24px] font-[DM Sans] font-meduim text-[#DBDFD0] text-[16px]">
            Password Protected
          </h1>
          <h1 className="w-[149px] h-[24px] font-[DM Sans] font-meduim text-[#DBDFD0] text-[16px]">
            404 Not Found
          </h1>
          <h1 className="w-[149px] h-[24px] font-[DM Sans] font-meduim text-[#DBDFD0] text-[16px]">
            Licenses
          </h1>
          <h1 className="w-[149px] h-[24px] font-[DM Sans] font-meduim text-[#DBDFD0] text-[16px]">
            Changelog
          </h1>
          <h1 className="w-[149px] h-[24px] font-[DM Sans] font-meduim text-[#DBDFD0] text-[16px]">
            View More
          </h1>
        </div>

        <div className="col-span-2 w-[403px] h-[419px]">
          <span className="font-bold w-[182px] h-[24px] text-[16px] text-[#FFFFFF] font-[DM Sans] leading-[24px]">
            Follow Us On Instagram
          </span>
          <span className=" grid grid-cols-2 mt-16 gap-3">
            <Image src={photo1} alt="My Image" className="rounded-md" />
            <Image src={photo2} alt="My Image" className="rounded-md" />
            <Image src={photo3} alt="My Image" className="rounded-md" />
            <Image src={photo4} alt="My Image" className="rounded-md" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
