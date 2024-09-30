import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

const SmallMenu = () => {
  return (
    <menu className="hidden max-md:flex max-md:flex-col max-md:w-full  gap-4 px-5 py-10 text-2xl bg-[#FFFFFF] bg-opacity-80 font-sans text-[#474747] z-50 absolute">
      <NavLink
        activeClassName="text-red-700  "
        href={"/"}
        className="hover:text-red-600 cursor-pointer"
      >
        Home
      </NavLink>
      <NavLink
        activeClassName="text-red-700  "
        href={"/about"}
        className="hover:text-red-600 cursor-pointer"
      >
        About
      </NavLink>
      <NavLink
        activeClassName="text-red-700  "
        href={"/ourMenu"}
        className="hover:text-red-600 cursor-pointer"
      >
        Menu
      </NavLink>
      <NavLink
        activeClassName="text-red-700  "
        href={"/myBookings"}
        className="hover:text-red-600 cursor-pointer"
      >
        Bookings
      </NavLink>
      <NavLink
        activeClassName="text-red-700  "
        href={"/myProfile"}
        className="hover:text-red-600 cursor-pointer"
      >
        Profile
      </NavLink>
      <NavLink activeClassName="text-red-700  " href={"/bookTable"}>
        Book a table
      </NavLink>
    </menu>
  );
};

export default SmallMenu;
