import React from "react";
import { MdOutlineSearch } from "react-icons/md";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Firstaid = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#000814] text-gray-300 h-screen py-12 px-4 flex flex-col justify-between">
        <div className="container mx-auto space-y-12">
          <div className="text-center mt-[50px]">
            <h1 className="text-4xl font-bold text-[#18BCFC] mb-4">Search Medicine</h1>
            <p className="text-lg mb-6">Search Medicine According To Disease</p>
            <div className="flex justify-center items-center space-x-4 bg-[#001D3D] p-4 rounded-lg shadow-lg">
              <input
                type="text"
                required
                placeholder="Search..."
                name="search"
                className="bg-transparent border-2 border-[#FA6A28] text-white p-2 rounded-md focus:outline-none"
              />
              <MdOutlineSearch className="text-[#FA6A28] text-2xl" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Firstaid;
