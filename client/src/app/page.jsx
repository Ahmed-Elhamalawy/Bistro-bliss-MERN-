"use client";
import React, { useEffect, useState } from "react";
import Home from "./home/page";
import AdminPanel from "./adminpanel/page";

const App = () => {
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const userType = localStorage.getItem("userType");
    setUserType(userType);
  }, []);

  return <>{userType === "admin" ? <AdminPanel /> : <Home />}</>;
};

export default App;
