"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { userRouter, redirect } from "next/navigation";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);

  if (localStorage.getItem("userType") !== "client") {
    redirect("/unAuth");
  }

  const createBooking = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://localhost:4500/createBooking", {
        user: localStorage.getItem("id"),
        email,
        date: new Date(date).toISOString(),
        time,
        guests: parseInt(guests, 10), // Convert guests to an integer
      });
      toast.success("table booked successfully");
    } catch (error) {
      console.error(
        "Error creating booking:",
        error.response?.data || error.message
      );
      toast.error(error.response?.data || error.message);
      setError("Failed to create booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setUser(localStorage.getItem("username"));
    setEmail(localStorage.getItem("email"));
    setId(localStorage.getItem("id"));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -1000 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 1000 }}
      transition={{ duration: 0.3, stiffness: 50, type: "spring" }}
    >
      <section className="w-full h-auto flex flex-col items-center justify-center relative">
        <div className="w-full max-w-[1600px] h-auto flex flex-col items-center gap-6 bg-[#F9F9F7] p-6">
          <h3 className="text-[40px] md:text-[60px] lg:text-[100px] font-playfair text-center leading-tight">
            Book A Table
          </h3>
          <p className="text-[16px] md:text-[18px] text-center text-[#495460] font-sans max-w-[90%] md:max-w-[70%] lg:max-w-[50%] mb-6 md:mb-12">
            We consider all the drivers of change to give you the components you
            need to make things happen.
          </p>
        </div>

        <form
          onSubmit={createBooking}
          className="absolute bg-white shadow-lg rounded-lg p-8 w-full max-w-[95%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[797px] flex flex-col top-0 translate-y-[180px] lg:translate-y-[240px] mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="hidden">
              <input
                type="text"
                id="id"
                name="id"
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="form-input w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="date"
                className="block text-[16px] font-bold text-[#2C2F24] mb-1"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Select a date"
                className="form-input w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="time"
                className="block text-[16px] font-bold text-[#2C2F24] mb-1"
              >
                Time
              </label>
              <input
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                type="time"
                id="time"
                placeholder="Select time"
                className="form-input w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-[16px] font-bold text-[#2C2F24] mb-1"
              >
                Name
              </label>
              <input
                id="name"
                name="user"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                type="text"
                placeholder="Enter your name"
                className="form-input w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-[16px] font-bold text-[#2C2F24] mb-1"
              >
                Email
              </label>
              <input
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                placeholder="Enter email address"
                className="form-input w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="guests"
              className="block text-[16px] font-bold text-[#2C2F24] mb-1"
            >
              No. of Guests
            </label>
            <input
              name="guests"
              onChange={(e) => setGuests(e.target.value)}
              type="text"
              id="guests"
              placeholder="Enter number of guests"
              className="form-input w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-[#AD343E] hover:bg-red-600 text-white font-medium py-2 px-4 rounded-full transition duration-300 ease-in-out w-full"
          >
            Book
          </button>
        </form>

        <div
          id="mapPhoto"
          className="w-full h-[400px] lg:h-[647px] mt-48 lg:mt-64 bg-gray-200"
        ></div>
      </section>
    </motion.div>
  );
};

export default Contact;
