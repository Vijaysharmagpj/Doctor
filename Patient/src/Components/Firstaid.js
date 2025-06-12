import React, { useState,useEffect } from "react";
import { MdOutlineSearch } from "react-icons/md";
import Footer from "./Footer";
import Navbar from "./Navbar";
import axios from "axios";
import toast from "react-hot-toast";

const Firstaid = () => {
    const [firstAidData, setfirstAidData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const fetchFirstAidData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:4000/api/doctor/getfirstAid?search=${searchTerm}`
          );
          setfirstAidData(response.data.data);
        } catch (error) {
          console.log(error);
        }
      };

      if (searchTerm.trim() !== "") {
        fetchFirstAidData();
      } else {
        setfirstAidData([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

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
                placeholder="Search..."
                name="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent border-2 border-[#FA6A28] text-white p-2 rounded-md focus:outline-none"
              />
              <MdOutlineSearch className="text-[#FA6A28] text-2xl" />
            </div>

            {searchTerm.trim() !== "" &&
            Array.isArray(firstAidData) &&
            firstAidData.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {firstAidData.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#003566] border border-[#FA6A28] rounded-xl shadow-lg p-4 text-white hover:scale-105 transition-transform duration-300"
                  >
                    <div className="mb-2">
                      <p className="text-lg font-semibold text-[#FA6A28]">
                        Disease:
                      </p>
                      <p className="text-base">{item.disease}</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-[#FA6A28]">
                        Medicine:
                      </p>
                      <p className="text-base">{item.medicine}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              searchTerm.trim() !== "" && (
                <p className="text-white mt-4">No results found</p>
              )
            )}

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Firstaid;
