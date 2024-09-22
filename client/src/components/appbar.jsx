"use client";
import { CgMenu } from "react-icons/cg";
import React, { useEffect, useState } from "react";
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
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const username = localStorage.getItem("username");
  const deleteToken = () => {
    localStorage.clear();

    window.location.reload();
  };

  return (
    <>
      {/* -----------------------Large screen Appbar-----------------------*/}
      <section className="flex flex-col h-[129px] w-[1600px] text-[#F9F9F7]  max-sm:w-auto z-40 ">
        <div className="w-[1600px] h-[45px] flex items-center justify-between px-36 bg-[#474747] max-sm:w-auto max-sm:justify-center max-sm:flex-col max-sm:h-auto  ">
          <span className="flex items-center  w-[362px] h-[24px] gap-3  max-sm:text-sm">
            <span className="flex items-center gap-3">
              <Call size={18} />
              <h3 className="text-[16px] w-[121px]">(414) 857 - 0107</h3>
            </span>
            <span className="flex items-center w-[173px] h-[24px] gap-3">
              <Mail size={18} />
              <h3 className="text-[16px]">yummy@bistrobliss</h3>
            </span>
          </span>
          <span className="flex gap-1 w-[120px] max-sm:text-sm">
            <Facebook size={27} />
            <Instagram size={27} />
            <Twitter size={27} />
            <Github size={27} />
          </span>
        </div>
        <div className="mt-[9px] mb-[20px] w-[1600px] h-[55px] flex items-center flex-row justify-around text-center max-sm:hidden ">
          <span className="flex justify-center text-center gap-3 ">
            <Logo className="w-[56] h-[55]  max-sm:hidden " />

            <Link
              href={"/"}
              className=" max-sm:hidden text-[43px] h-[30px] w-[210px] text-[#474747] font-playfair font-semibold italic"
            >
              Bistro Bliss
            </Link>
          </span>
          <span className="font-['DM_Sans'] ">
            <Link
              href={"/"}
              className="text-[#2C2F24] text-[16px] w-[74px] h-[32px] font-semibold"
            >
              Home
            </Link>
            <button className="text-[#2C2F24] text-[16px] w-[74px] h-[32px] font-semibold">
              About
            </button>
            <button className="text-[#2C2F24] text-[16px] w-[74px] h-[32px] font-semibold">
              Menu
            </button>
            <button className="text-[#2C2F24] text-[16px] w-[74px] h-[32px] font-semibold">
              Pages
            </button>
            <Link
              href={"/contact"}
              className="text-[#2C2F24] text-[16px] w-[74px] h-[32px] font-semibold"
            >
              contact
            </Link>
          </span>
          <div className="flex gap-2 items-center justify-center text-center ">
            <span className="text-[#2C2F24] w-[147px] h-[48px] text-[16px] flex justify-center items-center border-2 border-[#2C2F24] rounded-3xl">
              <Link href={"/bookTable"}>Book a table</Link>
            </span>
            <Link
              href={"/login"}
              className="text-[#2C2F24] text-[16px] w-[74px] h-[32px] font-semibold ml-5 "
            >
              <h3>
                {token ? (
                  <Link
                    href={"/myProfile"}
                    className="text-2xl text-[#AD343E] "
                  >
                    {username}
                  </Link>
                ) : null}
              </h3>
              {token ? <button onClick={deleteToken}>Logout</button> : "Login"}
            </Link>
          </div>
        </div>
        {/* -----------------------Mobile screen Appbar-----------------------*/}
        <nav className="hidden  max-sm:w-auto max-sm:flex flex-row max-sm:items-center max-sm:justify-evenly max-sm:text-center bg-stone-200">
          <div>
            <CgMenu
              onClick={toggleMenu}
              width={20}
              height={20}
              className="cursor-pointer text-[#474747] hidden max-sm:block text-5xl border-2  rounded-md p-1 border-gray-400 hover:text-red-500"
            />
          </div>
          <div className="flex gap-3 items-center justify-center">
            <Logo />
            <Link
              href={"/"}
              className="  text-[#474747] font-playfair font-semibold italic text-2xl"
            >
              Bistro Bliss
            </Link>
          </div>
          <div className="cursor-pointer max-sm:h-[78px] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center text-red-500">
            <Link
              href={"/login"}
              className="font-sans text-xl cursor-pointer font-bold text-red-600 "
            >
              <h3>
                {token ? (
                  <Link
                    href={"/myProfile"}
                    className="text-2xl text-[#474747] "
                  >
                    {username}
                  </Link>
                ) : null}
              </h3>
              {token ? <button onClick={deleteToken}>Logout</button> : "Login"}
            </Link>
          </div>
        </nav>
        {showMenu && (
          <menu className="hidden max-sm:flex max-sm:flex-col max-sm:w-full  gap-4 px-5 py-10 text-2xl bg-white opacity-90 font-sans text-[#474747] z-50">
            <Link href={"/"} className="hover:text-red-600 cursor-pointer">
              Home
            </Link>
            <h3 className="hover:text-red-600 cursor-pointer">About</h3>
            <h3 className="hover:text-red-600 cursor-pointer">Menu</h3>
            <h3 className="hover:text-red-600 cursor-pointer">Pages</h3>
            <h3 className="hover:text-red-600 cursor-pointer">contact</h3>
            <Link href={"/bookTable"}>Book a table</Link>
          </menu>
        )}
      </section>
    </>
  );
};

export default Appbar;
