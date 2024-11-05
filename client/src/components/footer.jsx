"use client";
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
  const userType = localStorage.getItem("userType");
  return (
    <>
      {userType === "admin" ? null : (
        <section className="w-full bg-[#474747] py-10">
          <div className="max-w-[1296px] mx-auto grid grid-cols-1 md:grid-cols-6 gap-8 px-5 md:px-0">
            <div className="col-span-2 flex flex-col gap-5">
              <span className="flex gap-2 items-center">
                <Logo className="w-[56px] h-[55px] text-white" />
                <h3 className="text-[30px] md:text-[43px] text-white font-playfair font-semibold italic">
                  Bistro Bliss
                </h3>
              </span>
              <h3 className="text-[14px] md:text-[16px] text-[#ADB29E] font-semibold">
                In the new era of technology we look to the future with
                certainty and pride for our company.
              </h3>
              <span className="flex gap-3">
                <Facebook className="w-8 h-8 bg-[#AD343E] rounded-full" />
                <Instagram className="w-8 h-8 bg-[#AD343E] rounded-full" />
                <Twitter className="w-8 h-8 bg-[#AD343E] rounded-full" />
                <Github className="w-8 h-8 bg-[#AD343E] rounded-full" />
              </span>
            </div>
            <div className="col-span-1 flex flex-col gap-2 md:gap-4">
              <h1 className="text-[16px] text-white font-semibold">Pages</h1>
              {[
                "Home",
                "About",
                "Menu",
                "Pricing",
                "Blog",
                "Contact",
                "Delivery",
              ].map((page) => (
                <h1 key={page} className="text-[16px] text-[#DBDFD0]">
                  {page}
                </h1>
              ))}
            </div>
            <div className="col-span-1 flex flex-col gap-2 md:gap-4">
              <h1 className="text-[16px] text-white font-semibold">
                Utility Pages
              </h1>
              {[
                "Start Here",
                "Styleguide",
                "Password Protected",
                "404 Not Found",
                "Licenses",
                "Changelog",
                "View More",
              ].map((page) => (
                <h1 key={page} className="text-[16px] text-[#DBDFD0]">
                  {page}
                </h1>
              ))}
            </div>
            <div className="col-span-2">
              <span className="font-bold text-[16px] text-white">
                Follow Us On Instagram
              </span>
              <div className="grid grid-cols-2 gap-3 mt-4">
                <Image
                  src={photo1}
                  alt="Instagram Image 1"
                  className="rounded-md"
                />
                <Image
                  src={photo2}
                  alt="Instagram Image 2"
                  className="rounded-md"
                />
                <Image
                  src={photo3}
                  alt="Instagram Image 3"
                  className="rounded-md"
                />
                <Image
                  src={photo4}
                  alt="Instagram Image 4"
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Footer;
