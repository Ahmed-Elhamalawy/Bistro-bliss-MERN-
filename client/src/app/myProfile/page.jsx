"use client";
import React from "react";

const Profile = () => {
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  const phone = localStorage.getItem("phone");
  const address = localStorage.getItem("address");

  return (
    <>
      <section className="w-full h-auto flex flex-col items-center justify-center relative bg-[#F9F9F7]">
        <div className="w-full max-w-[1600px] h-auto flex flex-col items-center gap-6 p-6">
          <h3 className="text-[40px] md:text-[60px] lg:text-[100px] font-playfair text-center leading-tight">
            My Profile Data
          </h3>
        </div>

        <form className="mb-[50px] bg-white shadow-lg rounded-lg p-8 w-full max-w-[95%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[797px] flex flex-col mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="userName"
                className="block text-[16px] font-bold text-[#2C2F24] mb-1"
              >
                Username
              </label>
              <div className="form-input w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-full">
                {username}
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-[16px] font-bold text-[#2C2F24] mb-1"
              >
                Email
              </label>
              <div className="form-input w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-full">
                {email}
              </div>
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-[16px] font-bold text-[#2C2F24] mb-1"
              >
                Phone
              </label>
              <div className="form-input w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-full">
                {phone}
              </div>
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-[16px] font-bold text-[#2C2F24] mb-1"
              >
                Address
              </label>
              <div className="form-input w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-full">
                {address}
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Profile;
