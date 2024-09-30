"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BeatLoader } from "react-spinners";

const GetAllUsers = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:4500/getAllUsers");
        setTimeout(() => {
          setData(response.data);
          setLoading(false);
        }, 1000);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center translate-y-1/3 h-screen w-full ">
          <BeatLoader color="#AD343E" size={25} />
        </div>
      ) : (
        <div className="md:overflow-x-auto">
          <table className="table-auto w-full md:w-[740px] mb-24">
            <thead className="bg-gray-100 font-bold text-xl font-sans ">
              <tr>
                <th className="px-4 py-2">Username</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">User Type</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Address</th>
              </tr>
            </thead>

            <tbody>
              {data.map((user) => (
                <tr key={user._id}>
                  <td className="px-4 py-5 text-center font-sans border-b-2">
                    {user.username || "username"}
                  </td>
                  <td className="px-4 py-5 text-center font-sans border-b-2">
                    {user.email || "email"}
                  </td>
                  <td
                    className="px-4 py-5 text-center font-sans border-b-2"
                    style={{
                      color: user.isAdmin === "admin" ? "#AD343E" : "black",
                      fontWeight: user.isAdmin === "admin" ? "bold" : "normal",
                    }}
                  >
                    {user.isAdmin || "userType"}
                  </td>
                  <td className="px-4 py-5 text-center font-sans border-b-2">
                    {user.phone || "phone"}
                  </td>
                  <td className="px-4 py-5 text-center font-sans border-b-2">
                    {user.address || "address"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default GetAllUsers;
