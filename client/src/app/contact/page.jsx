import React from "react";

const Contact = () => {
  return (
    <>
      <section className="w-[1600px] h-auto flex flex-col items-center justify-center relative">
        <div className="w-[1600px] h-[611px] flex flex-col items-center gap-[24px] bg-[linear-gradient(180deg,_#F9F9F7_70%,_#FFFFFF_0)] ">
          <h3 className="w-[487px] h-[96px] text-[100px] font-playfair text-center">
            Contact Us
          </h3>
          <p className="w-[545px] h-[56px] text-center text-[18px] text-[#495460] font-sans mb-[72px]">
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>
        <form class=" absolute bg-white shadow-lg rounded-lg p-8 w-[797px] h-[500px] flex flex-col translate-y-[-50px]">
          <div class="grid grid-cols-2 gap-6 mb-6">
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
          <div class="mb-8">
            <label
              for="message"
              class="block text-[16px] font-bold text-[#2C2F24] mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="6"
              placeholder="Write your message"
              class="form-input w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            class=" bg-[#AD343E] hover:bg-red-600 text-white font-medium py-2 px-4 rounded-full transition duration-300 ease-in-out w-full"
          >
            Send
          </button>
        </form>
        <div className="w-[1600px] px-[412px] h-[134px] grid grid-cols-3 mt-[239px] mb-[30px] ">
          <div>
            <h3 className="mb-[24px] text-[20px] font-bold font-sans">
              Call Us:
            </h3>
            <h3 className="w-[187px] h-[56px] text-[#AD343E] text-[24px] font-bold">
              +1-234-567-8900
            </h3>
          </div>{" "}
          <div>
            <h3 className="mb-[24px] text-[20px] font-bold font-sans">
              Hours:
            </h3>
            <h3 className="w-[187px] h-[56px] text-[#2C2F24] text-[18px] font-semibold">
              Mon-Fri: 11am - 8pm Sat, Sun: 9am - 10pm
            </h3>
          </div>{" "}
          <div>
            <h3 className="mb-[24px] text-[20px] font-bold font-sans">
              Our Location:
            </h3>
            <h3 className="w-[209px] h-[56px] text-[#2C2F24] text-[18px] font-semibold ">
              123 Bridge Street Nowhere Land, LA 12345 United States
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
