"use client";
import React, { useState } from "react";
import GetAllUsers from "@/components/GetAllUsers";
import GetAllItems from "@/components/GetAllItems";
import Bookings from "@/components/AcceptBooking";
import { useRouter, redirect } from "next/navigation";
import CreateItem from "../CreateItem/page";
import CreateAdmin from "../createAdmin/page";

const AdminPanel = () => {
  const router = useRouter();
  const [activeComponent, setActiveComponent] = useState("users");

  if (localStorage.getItem("userType") !== "admin") {
    redirect("/unAuththorized");
  }

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "users":
        return <GetAllUsers />;
      case "items":
        return <GetAllItems />;
      case "bookings":
        return <Bookings />;
      case "createItem":
        return <CreateItem />;
      case "createAdmin":
        return <CreateAdmin />;
      default:
        return null;
    }
  };

  const getButtonClass = (buttonName) => {
    const baseClass =
      " border-2 w-[150px] h-[48px] text-[16px] font-bold transition-all duration-300";
    const activeClass = "border-[#4A5568] bg-[#4A5568] text-white";
    const inactiveClass =
      "border-[#DBDFD0] bg-white text-[#4A5568] hover:bg-gray-100";

    return `${baseClass} ${
      activeComponent === buttonName ? activeClass : inactiveClass
    }`;
  };

  return (
    <>
      <div className="flex flex-row items-start justify-start mt-10">
        <div className="flex flex-col w-[300px] h-screen  gap-[15px] border-r-2 p-2 items-center justify-start ">
          <button
            className={getButtonClass("users")}
            onClick={() => setActiveComponent("users")}
          >
            Users
          </button>
          <button
            className={getButtonClass("items")}
            onClick={() => setActiveComponent("items")}
          >
            Menu Items
          </button>
          <button
            className={getButtonClass("bookings")}
            onClick={() => setActiveComponent("bookings")}
          >
            Client Bookings
          </button>
          <button
            className={getButtonClass("createItem")}
            onClick={() => setActiveComponent("createItem")}
          >
            Create Item
          </button>
          <button
            className={getButtonClass("createAdmin")}
            onClick={() => setActiveComponent("createAdmin")}
          >
            Create Admin
          </button>
        </div>
        <section className="w-[1000px] p-10 h-fit self-start    overflow-x-auto overflow-y-hidden  ">
          {renderActiveComponent()}
        </section>
      </div>
    </>
  );
};

export default AdminPanel;
