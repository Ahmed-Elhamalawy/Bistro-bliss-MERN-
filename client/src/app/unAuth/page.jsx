"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const page = () => {
  const [adminType, setAdminType] = useState(false);

  useEffect(() => {
    const userType = localStorage.getItem("userType") === "admin";
    setAdminType(userType);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col gap-10 justify-center items-center text-4xl font-sans font-bold">
      {adminType
        ? "Sorry this Route is for clients only"
        : "Sorry you are not Logged In"}

      <Link
        href="/login"
        className={`${
          adminType ? "hidden" : "block"
        } text-2xl bg-red-800 hover:scale-110 duration-200 text-white font-bold py-2 px-4 rounded-full`} // Added space before 'text-2xl'
      >
        Log in
      </Link>
    </div>
  );
};

export default page;
