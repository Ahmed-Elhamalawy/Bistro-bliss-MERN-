import React from "react";
import catering from "../public/home/catering.png";
import birthday from "../public/home/birthday.png";
import wedding from "../public/home/wedding.png";
import events from "../public/home/events.png";
import Image from "next/image";

const UniqueServices = () => {
  return (
    <section className="flex justify-center p-4">
      <div className="max-w-4xl mx-auto my-8 flex flex-col items-start">
        <h1 className="text-3xl md:text-4xl font-playfair font-semibold text-[#2C2F24] leading-tight mb-6">
          We also offer unique services for your events
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { img: catering, title: "Caterings" },
            { img: birthday, title: "Birthday" },
            { img: wedding, title: "Wedding" },
            { img: events, title: "Events" },
          ].map(({ img, title }, index) => (
            <div
              key={index}
              className="rounded-lg flex flex-col items-start justify-center text-start bg-white shadow-md p-4"
            >
              <Image alt={title} src={img} className="w-full h-auto" />
              <h1 className="text-xl font-bold font-[DM Sans] text-[#2C2F24] mt-4">
                {title}
              </h1>
              <p className="text-base font-normal font-[DM Sans] text-[#414536] mt-2">
                In the new era of technology we look in the future with
                certainty for life.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueServices;
