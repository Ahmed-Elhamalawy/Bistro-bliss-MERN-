"use client";
import CardItem from "@/components/cardItem";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BeatLoader } from "react-spinners";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:4500/getItems");
        setTimeout(() => {
          setData(response.data);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:4500/deleteItem/${id}`
      );
      if (response.status === 200) {
        setData((prevData) => prevData.filter((item) => item._id !== id)); // Update UI after deletion
        console.log("Item deleted successfully");
      } else {
        console.error("Failed to delete item");
      }
    } catch (error) {
      console.error("Error occurred while deleting the item", error);
    }
  };

  const filteredData =
    activeCategory === "all"
      ? data
      : data.filter((item) => item.category === activeCategory);

  const categories = [
    { name: "All", value: "all" },
    { name: "Breakfast", value: "breakfast" },
    { name: "Main Dishes", value: "main dish" },
    { name: "Drinks", value: "drinks" },
    { name: "Desserts", value: "desserts" },
  ];

  return (
    <div className="w-full h-auto flex flex-col items-center ">
      <div className="w-full max-w-[1600px] h-auto flex flex-col items-center gap-6 bg-[#FFFFFF] p-6">
        <h3 className="text-[40px] md:text-[60px] lg:text-[100px] font-playfair text-center leading-tight">
          Menu
        </h3>

        {loading ? (
          <div className="h-screen w-full flex items-center justify-center translate-y-[-50%]">
            <BeatLoader color="#AD343E" size={25} />
          </div>
        ) : (
          <div className="flex justify-center w-full h-[48px] gap-[15px] sm:w-[740px] md:w-[1000px] lg:w-[1200px]">
            {categories.map((category) => (
              <button
                key={category.value}
                className={`rounded-full border-2 border-[#DBDFD0] w-[150px] h-[48px] text-[16px] font-bold ${
                  activeCategory === category.value
                    ? "bg-red-500 text-white"
                    : "bg-white"
                }`}
                onClick={() => {
                  setActiveCategory(category.value);
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2   gap-x-[24px] gap-y-[24px] my-[88px]">
        {filteredData.map((item) => (
          <CardItem
            key={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            handleDelete={() => handleDelete(item._id)}
            id={item._id}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
