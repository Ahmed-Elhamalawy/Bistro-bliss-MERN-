"use client";
import React from "react";

const Profile = () => {
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  const phone = localStorage.getItem("phone");
  const address = localStorage.getItem("address");

  return (
    <>
      <section className="w-[1600px] h-auto flex flex-col items-center justify-center relative bg-[#F9F9F7]">
        <div className="w-[1600px] h-[200px] flex flex-col items-center gap-[24px]  ">
          <h3 className="w-[800px] h-[96px] text-[100px] font-playfair text-center">
            My Profile Data
          </h3>
        </div>
        <form className="mb-[50px]  bg-white shadow-lg rounded-lg p-8 w-[797px] h-auto flex flex-col ">
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="userName"
                className="blocktext-[16px] font-bold text-[#2C2F24] mb-1"
              >
                userName
              </label>
              <div className="form-input w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500">
                {username}
              </div>
            </div>
            <div>
              <label
                htmlFor="userName"
                className="blocktext-[16px] font-bold text-[#2C2F24] mb-1"
              >
                email
              </label>
              <div className="form-input w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500">
                {email}
              </div>
            </div>
            <div>
              <label
                htmlFor="userName"
                className="blocktext-[16px] font-bold text-[#2C2F24] mb-1"
              >
                Phone
              </label>
              <div className="form-input w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500">
                {phone}
              </div>
            </div>
            <div>
              <label
                htmlFor="userName"
                className="blocktext-[16px] font-bold text-[#2C2F24] mb-1"
              >
                Adress
              </label>
              <div className="form-input w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500">
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
