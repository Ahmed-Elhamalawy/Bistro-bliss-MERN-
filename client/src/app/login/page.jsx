"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("http://localhost:4500/login", {
      email: email,
      password: password,
    });
    localStorage.setItem("username", data.user.username);
    localStorage.setItem("email", data.user.email);
    localStorage.setItem("userType", data.user.userType);
    localStorage.setItem("phone", data.user.phone);
    localStorage.setItem("address", data.user.address);
    localStorage.setItem("id", data.user._id);
    localStorage.setItem("token", data.token);
    console.log(data);
    router.push("/");
    window.location.reload();
  };

  return (
    <>
      <section className="w-[1600px] h-auto flex flex-col items-center justify-center relative bg-[#F9F9F7]">
        <div className="w-[1600px] h-[200px] flex flex-col items-center gap-[24px]  ">
          <h3 className="w-[487px] h-[96px] text-[100px] font-playfair text-center">
            Login
          </h3>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mb-[50px]  bg-white shadow-lg rounded-lg p-8 w-[797px] h-auto flex flex-col "
        >
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="email"
                className="block text-[16px] font-bold text-[#2C2F24] mb-1"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
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
                name="password"
                placeholder="Enter your Password"
                onChange={(e) => setPassword(e.target.value)}
                className="form-input w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          <Link
            href={"/register"}
            className="text-end mb-2 hover:text-red-600 font-bold"
          >
            Create new Account
          </Link>
          <button
            type="submit"
            className=" bg-[#AD343E] hover:bg-red-600 text-white font-medium py-2 px-4 rounded-full transition duration-300 ease-in-out w-full"
          >
            Login
          </button>
        </form>
      </section>
    </>
  );
};

export default Login;
