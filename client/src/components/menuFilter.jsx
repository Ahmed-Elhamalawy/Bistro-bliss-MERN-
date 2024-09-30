import React from "react";

const MenuFilter = () => {
  return (
    <div className="flex justify-center  w-[740px] h-[48px] gap-[15px]">
      <button className=" rounded-full border-2 border-[#DBDFD0] w-[150px] h-[48px]  bg-white  text-[16px] font-bold  ">
        All
      </button>
      <button className=" rounded-full border-2 border-[#DBDFD0] w-[150px] h-[48px]  bg-white  text-[16px] font-bold">
        Breakfast
      </button>
      <button className=" rounded-full border-2 border-[#DBDFD0] w-[150px] h-[48px]  bg-white  text-[16px] font-bold">
        Main Dishes
      </button>
      <button className=" rounded-full border-2 border-[#DBDFD0] w-[150px] h-[48px]  bg-white  text-[16px] font-bold">
        Drinks
      </button>
      <button className=" rounded-full border-2 border-[#DBDFD0] w-[150px] h-[48px]  bg-white text-[16px] font-bold ">
        Desserts
      </button>
    </div>
  );
};

export default MenuFilter;
