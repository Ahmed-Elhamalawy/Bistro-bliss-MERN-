"use client";
import React, { useEffect, useState } from "react";
import { useRouter, redirect } from "next/navigation";
import axios from "axios";
import { motion } from "framer-motion";

const MyBookings = () => {
  const [data, setData] = useState([]);

  const getBookings = async () => {
    try {
      const userId = localStorage.getItem("id");
      const response = await axios.get(
        `http://localhost:4500/getBookingsByUser/${userId}`
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const userType = localStorage.getItem("userType");

  if (userType !== "client") {
    redirect("/unAuth");
  }

  useEffect(() => {
    getBookings();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -1000 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 1000 }}
      transition={{ duration: 0.3, stiffness: 50, type: "spring" }}
    >
      <section className="mb-[300px] w-full h-auto flex flex-col items-center justify-center relative">
        <div className="w-full h-auto flex flex-col items-center gap-6 p-6">
          <h3 className="text-[28px] sm:text-[40px] md:text-[60px] lg:text-[100px] font-playfair text-center leading-tight">
            My Bookings
          </h3>
        </div>

        {/* Responsive header row */}
        <div className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl grid grid-cols-3 md:gap-8 lg:gap-20 w-[90%] md:w-[80%] lg:w-[70%] border-b-2 rounded-lg p-2 items-center justify-center text-center">
          <h3>Date / Time</h3>
          {/* <h3 >Time</h3> */}
          <h3>Guests</h3>
          <h3>Status</h3>
        </div>

        {/* Responsive data rows */}
        {data.map((item) => (
          <div
            key={item._id}
            className="text-sm sm:text-lg md:text-xl grid grid-cols-3 md:gap-8 lg:gap-20 w-[90%] md:w-[80%] lg:w-[70%] h-auto border-b-2 rounded-lg p-2 items-center justify-center text-center"
          >
            <h3>
              {item.date.slice(0, 10)} / {item.time}
            </h3>
            {/* <h3 >{item.time}</h3> */}
            <h3>{item.guests}</h3>
            <h3
              className={`${item.status === "accepted" && "text-green-600"} ${
                item.status === "pending" && "text-blue-500"
              } ${item.status === "rejected" && "text-red-600"}`}
            >
              {item.status}
            </h3>
          </div>
        ))}
      </section>
    </motion.div>
  );
};

export default MyBookings;
