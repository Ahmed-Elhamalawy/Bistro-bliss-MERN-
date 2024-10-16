"use client";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import axios from "axios";

const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isAdmin, setIsAdmin] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post("http://localhost:4500/createUserAdmin", {
      isAdmin: "admin",
      username,
      email,
      password,
      phone,
      address,
    });
    console.log(data);
  };

  return (
    <>
      <section className="w-full h-auto flex flex-col items-center justify-center relative bg-[#F9F9F7]">
        <div className="w-full max-w-[1600px] h-auto flex flex-col items-center gap-6 p-6">
          <h3 className="text-[40px] md:text-[60px] lg:text-[100px] font-playfair text-center leading-tight">
            Register
          </h3>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mb-[50px] bg-white shadow-lg rounded-lg p-8 w-full max-w-[95%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[797px] flex flex-col mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="userName"
                className="block text-[16px] font-bold text-[#2C2F24] mb-1"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your username"
                className="form-input w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            {/* <div>
              <input
                type="text"
                name="isAdmin"
                value={isAdmin}
                className="hidden form-input w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div> */}
            <div>
              <label
                htmlFor="email"
                className="block text-[16px] font-bold text-[#2C2F24] mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter email address"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-input w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-[16px] font-bold text-[#2C2F24] mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                className="form-input w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-[16px] font-bold text-[#2C2F24] mb-1"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter your phone"
                onChange={(e) => setPhone(e.target.value)}
                className="form-input w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-[16px] font-bold text-[#2C2F24] mb-1"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter your address"
                onChange={(e) => setAddress(e.target.value)}
                className="form-input w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          <Link
            href={"/login"}
            className="text-end mb-2 hover:text-red-600 font-bold"
          >
            Already have an account?
          </Link>
          <button
            type="submit"
            className="bg-[#AD343E] hover:bg-red-600 text-white font-medium py-2 px-4 rounded-full transition duration-300 ease-in-out w-full"
          >
            Signup
          </button>
        </form>
      </section>
    </>
  );
};

export default Register;
