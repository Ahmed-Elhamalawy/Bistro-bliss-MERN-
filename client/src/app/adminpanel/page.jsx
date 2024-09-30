"use client";
import React, { useState } from "react";
import GetAllUsers from "@/components/GetAllUsers";
import GetAllItems from "@/components/GetAllItems";
import Bookings from "@/components/AcceptBooking";
import { useRouter, redirect } from "next/navigation";
import CreateItem from "../CreateItem/page";

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
      default:
        return null;
    }
  };

  const getButtonClass = (buttonName) => {
    const baseClass =
      "rounded-full border-2 w-[150px] h-[48px] text-[16px] font-bold transition-all duration-300";
    const activeClass = "border-[#4A5568] bg-[#4A5568] text-white";
    const inactiveClass =
      "border-[#DBDFD0] bg-white text-[#4A5568] hover:bg-gray-100";

    return `${baseClass} ${
      activeComponent === buttonName ? activeClass : inactiveClass
    }`;
  };

  return (
    <div className="flex flex-col items-center w-full h-auto gap-[15px] mt-10">
      <div className="flex justify-center w-[740px] h-[48px] gap-[15px] ">
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
      </div>

      <section className="mt-6 w-full max-w-[740px]">
        {renderActiveComponent()}
      </section>
    </div>
  );
};

export default AdminPanel;
