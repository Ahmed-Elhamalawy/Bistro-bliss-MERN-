"use client";
import React, { useState, useEffect } from "react";
import UniqueServices from "@/components/UniqueServices";
import BrowesMenu from "@/components/BrowseMenu";
import Hero from "@/components/Hero";
import { redirect } from "next/navigation";
import FastestFood from "@/components/FastestFood";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, x: -1000 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 1000 }}
      transition={{ duration: 0.3, stiffness: 50, type: "spring" }}
    >
      <Hero />
      <BrowesMenu />
      <FastestFood />
      <UniqueServices />
    </motion.div>
  );
};

export default Home;
