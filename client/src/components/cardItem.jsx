"use client";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const CardItem = ({ id, price, name, description, image, handleDelete }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const userType = localStorage.getItem("userType");
    setUser(userType);
  }, []);

  return (
    <div className="relative hover:scale-105 duration-300 w-[310px] bg-red-500 h-auto flex flex-col items-center justify-center rounded-3xl shadow-lg">
      <div
        className={`${
          user === "client" ? "hidden" : "flex"
        } absolute cursor-pointer z-30 left-0 top-0 bg-white hover:scale-110 hover:text-red-500 duration-100 rounded-md w-[120px] h-[35px] items-center justify-center m-5`}
      >
        <AiOutlineDelete
          onClick={handleDelete}
          className={`cursor-pointer text-2xl ${
            user === "client" ? "hidden" : "flex"
          }`}
        />
      </div>
      <Link
        href={`/edit/${id}`}
        className={`${
          user === "client" ? "hidden" : "flex"
        } absolute z-30 right-0 top-0 bg-white hover:scale-110 hover:text-red-500 duration-100 rounded-md w-[120px] h-[35px] items-center justify-center m-5`}
      >
        <AiOutlineEdit
          className={`text-2xl ${user === "client" ? "hidden" : "flex"}`}
        />
      </Link>
      <div className="w-full relative rounder-t-3xl h-fit">
        {
          <Image
            layout="responsive"
            width={310}
            height={200}
            src={image}
            alt="Product Image"
            className="object-cover w-full max-h-[257px] rounded-t-3xl"
          />
        }
      </div>
      <div className="rounded-b-xl w-full flex flex-col items-center justify-center p-4 bg-[#FFFFFF] leading-[30px] border-2 border-[#DBDFD0]">
        <h3 className="text-lg font-bold text-[#AD343E] text-[24] font-sans">
          ${price || 34.5}
        </h3>
        <h3 className="text-[#2C2F24] text-[20px] font-bold">
          {name || "Burger"}
        </h3>
        <p className="text-center text-sm text-[#414536] font-sans leading-[24px] text-[16]">
          {description || "This is a very juicy burger with all the toppings."}
        </p>
      </div>
    </div>
  );
};

export default CardItem;
