"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BeatLoader } from "react-spinners";

const Bookings = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getBookings = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:4500//getAllBookings"
        );
        setTimeout(() => {
          setData(response.data);
          setLoading(false);
        }, 1000);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getBookings();
  }, []);

  const acceptBooking = async ({ bookingId }) => {
    try {
      const response = await axios.put(
        `http://localhost:4500/acceptBooking/${bookingId}`
      );
      console.log("Booking accepted:", response.data);
      window.location.reload();
    } catch (err) {
      console.error("Error accepting booking:", err);
      setError("Failed to accept booking. Please try again.");
    } finally {
    }
  };

  const declineBooking = async ({ bookingId }) => {
    try {
      const response = await axios.put(
        `http://localhost:4500/declineBooking/${bookingId}`
      );
      console.log("Booking declined:", response.data);
      window.location.reload();
    } catch (err) {
      console.error("Error declining booking:", err);
      setError("Failed to decline booking. Please try again.");
    } finally {
    }
  };

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
                <th className="px-4 py-2 first-letter:uppercase">username</th>
                <th className="px-4 py-2 first-letter:uppercase">time</th>
                <th className="px-4 py-2 first-letter:uppercase">date</th>
                <th className="px-4 py-2 first-letter:uppercase">guests</th>
                <th className="px-4 py-2 first-letter:uppercase">status</th>
                <th className="px-4 py-2 first-letter:uppercase">Response</th>
              </tr>
            </thead>

            <tbody>
              {data.map((user) => (
                <tr key={user._id}>
                  <td className="px-4 py-5 text-center font-sans border-b-2">
                    {user.user.username || "username"}
                  </td>
                  <td className="px-4 py-5 text-center font-sans border-b-2">
                    {user.time || "time"}
                  </td>

                  <td className="px-4 py-5 text-center font-sans border-b-2">
                    {new Date(user.date).toLocaleDateString() || "date"}
                  </td>
                  <td className="px-4 py-5 text-center font-sans border-b-2">
                    {user.guests || "guests"}
                  </td>
                  <td
                    className={
                      `px-4 py-5 text-center font-sans border-b-2  ` +
                      (user.status === "pending"
                        ? "text-blue-500 font-bold"
                        : user.status === "accepted"
                        ? "text-green-500 font-bold"
                        : "text-red-500 font-bold")
                    }
                  >
                    {user.status || "status"}
                  </td>
                  <td className="px-4 py-5 text-center font-sans border-b-2 flex gap-4">
                    <button
                      onClick={() => acceptBooking({ bookingId: user._id })}
                      className="text-md border-2 p-2 bg-green-700 text-white rounded-lg hover:text-green-700 hover:bg-white ease-in-out duration-300"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => declineBooking({ bookingId: user._id })}
                      className="text-md border-2 p-2 bg-red-700 text-white rounded-lg hover:text-red-700 hover:bg-white ease-in-out duration-300"
                    >
                      Decline
                    </button>
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

export default Bookings;
