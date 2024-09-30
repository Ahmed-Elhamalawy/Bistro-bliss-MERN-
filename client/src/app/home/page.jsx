"use client";
import React, { useState, useEffect } from "react";
import UniqueServices from "@/components/UniqueServices";
import BrowesMenu from "@/components/BrowseMenu";
import Hero from "@/components/Hero";
import { redirect } from "next/navigation";
import FastestFood from "@/components/FastestFood";

const Home = () => {
  const [userType, setType] = useState("");

  useEffect(() => {
    const userType = localStorage.getItem("userType");
    setType(userType);
  }, []);

  if (userType === "adimn") {
    redirect("/unAuth");
  }

  return (
    <>
      <Hero />
      <BrowesMenu />
      <FastestFood />
      <UniqueServices />
    </>
  );
};

export default Home;
