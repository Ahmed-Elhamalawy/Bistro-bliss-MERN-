"use client";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import axios from "axios";

const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    const data = await axios.post("http://localhost:4500/createUser", {
      username,
      email,
      password,
      confirmPassword,
      userType,
      phone,
      address,
    });

    // console.log(data);

    e.preventDefault(); // Correctly preventing the default form submission
  };
  return (
    <>
      <section className="w-[1600px] h-auto flex flex-col items-center justify-center relative bg-[#F9F9F7]">
        <div className="w-[1600px] h-[200px] flex flex-col items-center gap-[24px]  ">
          <h3 className="w-[487px] h-[96px] text-[100px] font-playfair text-center">
            Register
          </h3>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mb-[50px]  bg-white shadow-lg rounded-lg p-8 w-[797px] h-auto flex flex-col "
        >
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="userName"
                className="blocktext-[16px] font-bold text-[#2C2F24] mb-1"
              >
                userName
              </label>
              <input
                type="text"
                name="username"
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your userName"
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
                className="blocktext-[16px] font-bold text-[#2C2F24] mb-1"
              >
                password
              </label>
              <input
                type="text"
                id="password"
                name="password"
                placeholder="Enter your Password"
                onChange={(e) => setPassword(e.target.value)}
                className="form-input w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="userType"
                className="block text-[16px] font-bold text-[#2C2F24] mb-1"
              >
                userType
              </label>
              <input
                type="userType"
                id="userType"
                placeholder="Enter userType address"
                onChange={(e) => setUserType(e.target.value)}
                className="form-input w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="blocktext-[16px] font-bold text-[#2C2F24] mb-1"
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
                htmlFor="adress"
                className="block text-[16px] font-bold text-[#2C2F24] mb-1"
              >
                Adress
              </label>
              <input
                type="adress"
                name="adress"
                placeholder="Enter adress address"
                onChange={(e) => setAddress(e.target.value)}
                className="form-input w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          <Link
            href={"/login"}
            className="text-end mb-2 hover:text-red-600 font-bold"
          >
            have an acount already
          </Link>
          <button
            type="submit"
            className=" bg-[#AD343E] hover:bg-red-600 text-white font-medium py-2 px-4 rounded-full transition duration-300 ease-in-out w-full"
          >
            Signup
          </button>
        </form>
      </section>
    </>
  );
};

export default Register;
