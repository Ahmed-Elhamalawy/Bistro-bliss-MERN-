"use client";
import React, { useEffect } from "react";
import Call from "../public/call.svg";
import Mail from "../public/mail.svg";
import Facebook from "../public/facebook.svg";
import Instagram from "../public/instagram.svg";
import Twitter from "../public/twitter.svg";
import Github from "../public/github.svg";
import Logo from "../public/logo.svg";
import Link from "next/link";

const Appbar = () => {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  const deleteToken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.reload();
  };

  return (
    <>
      {/* -----------------------Large screen Appbar-----------------------*/}
      <section className="flex flex-col h-[129px] w-[1600px] text-[#F9F9F7]">
        <div className="w-[1600px] h-[45px] flex items-center justify-between px-36 bg-[#474747]">
          <span className="flex items-center  w-[362px] h-[24px] gap-3 ">
            <span className="flex items-center gap-3">
              <Call size={18} />
              <h3 className="text-[16px] w-[121px]">(414) 857 - 0107</h3>
            </span>
            <span className="flex items-center w-[173px] h-[24px] gap-3">
              <Mail size={18} />
              <h3 className="text-[16px]">yummy@bistrobliss</h3>
            </span>
          </span>
          <span className="flex gap-1 w-[120px]">
            <Facebook size={27} />
            <Instagram size={27} />
            <Twitter size={27} />
            <Github size={27} />
          </span>
        </div>
        <div className="mt-[9px] mb-[20px] w-[1600px] h-[55px] flex items-center flex-row justify-around text-center">
          <span className="flex">
            <Logo className="w-[56] h-[55] " />
            <Link
              href={"/"}
              className="text-[43px] h-[30px] w-[210px] text-[#474747] font-playfair font-semibold italic"
            >
              Bistro Bliss
            </Link>
          </span>
          <span className="font-['DM_Sans']">
            <Link
              href={"/"}
              className="text-[#2C2F24] text-[16px] w-[74px] h-[32px] font-semibold"
            >
              Home{" "}
            </Link>
            <button className="text-[#2C2F24] text-[16px] w-[74px] h-[32px] font-semibold">
              About
            </button>
            <button className="text-[#2C2F24] text-[16px] w-[74px] h-[32px] font-semibold">
              Menu{" "}
            </button>
            <button className="text-[#2C2F24] text-[16px] w-[74px] h-[32px] font-semibold">
              Pages
            </button>{" "}
            <Link
              href={"/contact"}
              className="text-[#2C2F24] text-[16px] w-[74px] h-[32px] font-semibold"
            >
              contact
            </Link>
          </span>
          <div className="flex gap-2 items-center justify-center text-center">
            <span className="text-[#2C2F24] w-[147px] h-[48px] text-[16px] flex justify-center items-center border-2 border-[#2C2F24] rounded-3xl">
              <Link href={"/bookTable"}>Book a table</Link>
            </span>
            <Link
              href={"/login"}
              className="text-[#2C2F24] text-[16px] w-[74px] h-[32px] font-semibold ml-5 "
            >
              <h3>
                {token ? (
                  <Link href={"/myProfile"} className="text-2xl">
                    {username}
                  </Link>
                ) : null}
              </h3>
              {token ? <button onClick={deleteToken}>Logout</button> : "Login"}
            </Link>
          </div>
        </div>
      </section>
      {/* -----------------------Mobile screen Appbar-----------------------*/}
    </>
  );
};

export default Appbar;
