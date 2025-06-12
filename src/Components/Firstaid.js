import React, { useEffect, useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import Footer from "./Footer";
import Navbar from "./Navbar";
import axios from "axios";
import toast from "react-hot-toast";

const Firstaid = () => {
  const [firstAidData, setfirstAidData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/doctor/firstAid",
        formData
      );
      if (response.data) {
        setFormData({
          disease: "",
          medicine: "",
        });
        toast.success("Medicine added successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

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
      <div className="bg-[#000814] text-gray-300 py-12 px-4">
        <div className="container mx-auto space-y-12">
          {/* Search Section */}
          <div className="text-center mt-[50px]">
            <h1 className="text-4xl font-bold text-[#18BCFC] mb-4">
              Search Medicine
            </h1>
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

          {/* Add Medicine Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#18BCFC] mb-4">
              Add Medicine
            </h2>
            <p className="text-lg mb-6">Add Medicine According To Disease</p>
            <form
              className="bg-[#001D3D] p-8 rounded-lg shadow-lg mx-auto max-w-lg mb-[10px]"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                required
                placeholder="Enter Disease"
                name="disease"
                value={formData.disease}
                onChange={handleInputChange}
                className="w-full bg-transparent border-2 border-[#FA6A28] text-white p-3 mb-4 rounded-md focus:outline-none"
              />
              <input
                type="text"
                required
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
      </div>
      <Footer />
    </>
  );
};

export default Firstaid;
