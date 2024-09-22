import React from "react";

const Contact = () => {
  return (
    <>
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

        <form className="absolute bg-white shadow-lg rounded-lg p-8 w-full max-w-[95%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[797px] flex flex-col top-0 translate-y-[180px] lg:translate-y-[240px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
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
                type="text"
                id="name"
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
                type="email"
                id="email"
                placeholder="Enter email address"
                className="form-input w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block text-[16px] font-bold text-[#2C2F24] mb-1"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Write a subject"
              className="form-input w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-[#AD343E] hover:bg-red-600 text-white font-medium py-2 px-4 rounded-full transition duration-300 ease-in-out w-full"
          >
            Send
          </button>
        </form>

        <div
          id="mapPhoto"
          className="w-full h-[400px] lg:h-[647px] mt-48 lg:mt-64 bg-gray-200"
        >
          {/* Replace this with your map/photo */}
          <p className="text-center text-gray-500">Map or Image Placeholder</p>
        </div>
      </section>
    </>
  );
};

export default Contact;
