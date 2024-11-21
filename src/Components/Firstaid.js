import React, { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import Footer from "./Footer";

const Firstaid = () => {
  // State to manage both search and add medicine
  const [formData, setFormData] = useState({
    search: "",
    disease: "",
    medicine: "",
  });

  // Handle input changes and update the state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submit (for adding medicine)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Added Medicine: ", formData);
    // You can handle the submission logic here
  };

  return (
    <div className="bg-[#000814] text-gray-300 py-12 px-4">
      <div className="container mx-auto space-y-12">
        {/* Search Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#18BCFC] mb-4">Search Medicine</h1>
          <p className="text-lg mb-6">Search Medicine According To Disease</p>
          <div className="flex justify-center items-center space-x-4 bg-[#001D3D] p-4 rounded-lg shadow-lg">
            <input
              type="text"
              placeholder="Search..."
              name="search"
              className="bg-transparent border-2 border-[#FA6A28] text-white p-2 rounded-md focus:outline-none"
            />
            <MdOutlineSearch className="text-[#FA6A28] text-2xl" />
          </div>
        </div>

        {/* Add Medicine Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#18BCFC] mb-4">Add Medicine</h2>
          <p className="text-lg mb-6">Add Medicine According To Disease</p>
          <form className="bg-[#001D3D] p-8 rounded-lg shadow-lg mx-auto max-w-lg mb-[10px]" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Disease"
              name="disease"
              value={formData.disease}
              onChange={handleInputChange}
              className="w-full bg-transparent border-2 border-[#FA6A28] text-white p-3 mb-4 rounded-md focus:outline-none"
            />
            <input
              type="text"
              placeholder="Enter Medicine"
              name="medicine"
              value={formData.medicine}
              onChange={handleInputChange}
              className="w-full bg-transparent border-2 border-[#FA6A28] text-white p-3 mb-6 rounded-md focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-[#FFD60A] text-black py-3 rounded-md font-semibold hover:bg-[#FFC300] transition duration-300"
            >
              Add Medicine
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Firstaid;
