import React from "react";

const Contact = () => {
  return (
    <>
      <section className="w-[1600px] h-auto flex flex-col items-center justify-center relative">
        <div className="w-[1600px] h-[466px] flex flex-col items-center gap-[24px] bg-[#F9F9F7] ">
          <h3 className="w-[576px] h-[96px] text-[100px] font-playfair text-center">
            Book A Table
          </h3>
          <p className="w-[545px] h-[56px] text-center text-[18px] text-[#495460] font-sans mb-[72px]">
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>
        <form class=" absolute bg-white shadow-lg rounded-lg p-8 w-[797px] h-[380px] flex flex-col top-0 translate-y-[240px]">
          <div class="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label
                for="date"
                class="block text-[16px] font-bold text-[#2C2F24] mb-1"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                placeholder="Select a date"
                class="form-input w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                for="time"
                class="block text-[16px] font-bold text-[#2C2F24] mb-1"
              >
                Time
              </label>
              <input
                type="time"
                id="time"
                placeholder="Select time"
                class="form-input w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                for="name"
                class="blocktext-[16px] font-bold text-[#2C2F24] mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                class="form-input w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                for="email"
                class="block text-[16px] font-bold text-[#2C2F24] mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter email address"
                class="form-input w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>
          <div class="mb-6">
            <label
              for="subject"
              class="block text-[16px] font-bold text-[#2C2F24] mb-1"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Write a subject"
              class="form-input w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            class=" bg-[#AD343E] hover:bg-red-600 text-white font-medium py-2 px-4 rounded-full transition duration-300 ease-in-out w-full"
          >
            Send
          </button>
        </form>
        <div id="mapPhoto" className="w-[1600px] h-[647px]">
          aa
        </div>
      </section>
    </>
  );
};

export default Contact;
