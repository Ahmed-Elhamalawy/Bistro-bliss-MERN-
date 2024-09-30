"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

const UpdateItem = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4500/getItemById/${id}`
        );

        console.log(response.data);
        setName(response.data.name);
        setPrice(response.data.price);
        setCategory(response.data.category);
        setImage(response.data.image);
        setDescription(response.data.description);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const updateItem = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:4500/updateItem/${id}`,
        {
          name,
          price,
          category,
          image,
          description,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section className="w-full h-auto flex flex-col items-center justify-center relative bg-white">
        <div className="w-full max-w-[1600px] h-auto flex flex-col items-center gap-6 p-6">
          <h3 className="text-[40px] md:text-[60px] lg:text-[100px] font-playfair text-center leading-tight">
            Create new Item
          </h3>
        </div>

        <form
          onSubmit={updateItem}
          className="mb-[50px] bg-white shadow-lg rounded-lg p-8 w-full max-w-[95%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[797px] flex flex-col mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="name"
                className="block text-[16px] font-bold text-[#2C2F24] mb-1 "
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your item name"
                className="form-input w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-[16px] font-bold text-[#2C2F24] mb-1 "
              >
                Description
              </label>
              <input
                type="text"
                id="description"
                placeholder="Enter description address"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-input w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="price"
                className="block text-[16px] font-bold text-[#2C2F24] mb-1 "
              >
                Price
              </label>
              <input
                type="text"
                id="price"
                name="price"
                placeholder="Enter your price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="form-input w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="image"
                className="block text-[16px] font-bold text-[#2C2F24] mb-1 "
              >
                Image
              </label>
              <input
                type="text"
                id="image"
                name="image"
                placeholder="Enter your image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="form-input w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="block text-[16px] font-bold text-[#2C2F24] mb-1 "
              >
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                placeholder="Enter your category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="form-input w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#AD343E] hover:bg-red-600 text-white font-medium py-2 px-4 rounded-full transition duration-300 ease-in-out w-full"
          >
            Confirm
          </button>
        </form>
      </section>
    </>
  );
};

export default UpdateItem;
