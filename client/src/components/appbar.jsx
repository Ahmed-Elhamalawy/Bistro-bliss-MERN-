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
import SmallMenu from "./smallMenu";
import NavLink from "./NavLink";

const Appbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [userType, setUserType] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setUsername(localStorage.getItem("username"));
    setUserType(localStorage.getItem("userType"));
  }, []);

  const deleteToken = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <>
      {/* -----------------------Large screen Appbar-----------------------*/}
      <section className="flex flex-col h-[129px] w-auto text-[#F9F9F7]  max-sm:w-auto z-40 overflow-hidden ">
        <div className="w-auto h-[45px] flex items-center justify-between px-[150px] bg-[#474747] max-sm:w-auto max-sm:justify-center max-sm:flex-col max-sm:h-auto  ">
          <span className="flex items-center w-[362px] h-[24px] gap-3  max-sm:text-sm">
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
        <div className="  w-auto h-auto flex flex-row  items-center justify-around text-center max-md:hidden ">
          <span className="flex justify-center text-center  ">
            <Logo
              className={`${
                userType === "admin" ? "hidden" : ""
              } w-[80px] h-[55]  max-sm:hidden `}
            />

            <Link
              href={userType === "admin" ? "/adminpanel" : "/"}
              className=" max-sm:hidden text-[43px] h-[30px] w-full text-[#474747] font-playfair font-semibold italic"
            >
              {userType === "admin" ? "Admin Panel" : "Bistro Bliss"}
            </Link>
          </span>
          <span
            className={`${
              userType === "admin" ? "hidden" : ""
            } font-sans  gap-3 flex flex-row  justify-center items-center h-full translate-y-[50%]`}
          >
            <NavLink
              href="/"
              className={`text-[#2C2F24] text-[18px] w-[74px] h-full font-semibold `}
              activeClassName="text-red-700 "
            >
              Home
            </NavLink>
            <NavLink
              href="/about"
              className={`text-[#2C2F24] text-[18px] w-[74px] h-full font-semibold`}
              activeClassName="text-red-700  "
            >
              About
            </NavLink>
            <NavLink
              href="/ourMenu"
              className={`text-[#2C2F24] text-[18px] w-[74px] h-full font-semibold`}
              activeClassName="text-red-700  "
            >
              Menu
            </NavLink>
            <NavLink
              href="/myBookings"
              className={`text-[#2C2F24] text-[18px] w-[74px] h-full font-semibold`}
              activeClassName="text-red-700  "
            >
              Bookings
            </NavLink>
            <NavLink
              href="/myProfile"
              className={`text-[#2C2F24] text-[18px] w-[74px] h-full font-semibold`}
              activeClassName="text-red-700  "
            >
              Profile
            </NavLink>
          </span>
          <div className="flex gap-2 items-center justify-center text-center ">
            <span
              className={`${
                userType === "admin" ? "hidden" : ""
              } text-[#2C2F24] w-[147px] h-[48px] text-[16px] flex justify-center items-center border-2 border-[#2C2F24] rounded-3xl`}
            >
              <Link href={"/bookTable"}>Book a table</Link>
            </span>
            <span className="flex flex-col  justify-center items-center text-center">
              <span
                // href={"/login"}
                className="text-[#2C2F24] text-[16px] w-[74px] h-[32px] font-semibold ml-5 "
              >
                <span
                  className="font-sans text-2xl text-red-600 "
                  onClick={(e) => e.preventDefault}
                >
                  {token ? (
                    <h4>{username}</h4>
                  ) : (
                    <Link href={"/login"}>Login</Link>
                  )}
                  {/* Display username or "Login" */}
                </span>
              </span>

              {token && (
                <button
                  className="font-sans text-gray-950 font-semibold text-lg"
                  onClick={deleteToken}
                >
                  Logout
                </button>
              )}
            </span>
          </div>
        </div>
        {/* -----------------------Mobile screen Appbar-----------------------*/}
        <nav className="hidden relative max-md:w-auto max-md:flex flex-row max-md:items-center max-md:justify-evenly max-md:text-center bg-stone-200">
          <div>
            <CgMenu
              onClick={toggleMenu}
              width={20}
              height={20}
              className="cursor-pointer text-[#474747] hidden max-md:block text-5xl border-2  rounded-md p-1 border-gray-400 hover:text-red-500"
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
          <div className="cursor-pointer max-md:h-[78px] max-md:flex max-md:flex-col max-md:items-center max-md:justify-center text-red-500">
            <div className="flex flex-col justify-center items-center text-center">
              {token ? (
                <>
                  <Link
                    href="/myProfile"
                    className="font-sans text-xl cursor-pointer font-bold text-red-600"
                  >
                    {username}
                  </Link>
                  <button
                    className="font-sans text-xl cursor-pointer font-bold text-black"
                    onClick={deleteToken}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  href="/login"
                  className="font-sans text-xl cursor-pointer font-bold text-red-600"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </nav>
      </section>
      {showMenu && <SmallMenu />}
    </>
  );
};

export default Appbar;
