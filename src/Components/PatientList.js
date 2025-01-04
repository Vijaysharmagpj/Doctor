import React, { useState } from "react";
import Patientlist from "../../src/assets/PatientList.jpg";
import Navbar from "./Navbar";
import { FaListOl } from "react-icons/fa";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { FaCloudDownloadAlt } from "react-icons/fa";

const PatientList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewModel = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#000814] min-h-screen text-white p-4">
        <h1 className="text-2xl font-bold text-[#18BCFC] mb-6 text-center mt-[80px]">
          Patient List
        </h1>

        <div className="flex flex-col lg:flex-row items-center justify-between bg-[#C5B8FE] p-4 lg:px-20 rounded-md">
          <div className="mb-4 lg:mb-0">
            <h2 className="text-[#FA6A28] text-2xl lg:text-3xl font-bold">
              Hello
            </h2>
          </div>
          <div className="image-container">
            <img
              src={Patientlist}
              alt="Patient List Pic"
              className="image w-32 sm:w-40 lg:w-48 h-auto transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
        </div>
        <div className="mt-6 flex items-center gap-2">
          <input
            type="text"
            placeholder="Search patients..."
            className="flex-grow p-2 rounded border border-[#18BCFC] bg-[#000814] text-white focus:outline-none focus:ring-2 focus:ring-[#18BCFC]"
          />
          <button className="p-2 bg-[#18BCFC] text-black rounded hover:bg-[#0f92cc] focus:outline-none">
            Search
          </button>
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full table-auto text-left bg-[#000814] text-white rounded-md border border-[#18BCFC]">
            <thead className="bg-[#000814] text-white border-b border-[#18BCFC]">
              <tr>
                <th className="px-2 sm:px-4 py-2">Ref.No.</th>
                <th className="px-2 sm:px-4 py-2">Name</th>
                <th className="px-2 sm:px-4 py-2">Address</th>
                <th className="px-2 sm:px-4 py-2">Complain</th>
                <th className="px-2 sm:px-4 py-2">Prescription</th>
                <th className="px-2 sm:px-4 py-2">Date</th>
                <th className="px-2 sm:px-4 py-2">Medicine</th>
                <th className="px-2 sm:px-4 py-2">Course</th>
                <th className="px-2 sm:px-4 py-2">Days</th>
                <th className="px-2 sm:px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#18BCFC]">
                <td className="px-2 sm:px-4 py-2">001</td>
                <td className="px-2 sm:px-4 py-2">John Doe</td>
                <td className="px-2 sm:px-4 py-2">123 Main St</td>
                <td className="px-2 sm:px-4 py-2">Fever</td>
                <td className="px-2 sm:px-4 py-2">Paracetamol</td>
                <td className="px-2 sm:px-4 py-2">2024-12-07</td>
                <td className="px-2 sm:px-4 py-2">Tablet</td>
                <td className="px-2 sm:px-4 py-2">1-0-1</td>
                <td className="px-2 sm:px-4 py-2">7</td>
                <td className="px-2 sm:px-4 py-2 flex gap-2">
                  <button className="bg-[#18BCFC] text-black px-3 py-1 rounded hover:bg-[#0f92cc]">
                    <FaListOl onClick={handleViewModel} />
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700">
                    <RiDeleteBin3Fill />
                  </button>
                  <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700">
                    <FaCloudDownloadAlt />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Open a model on view button */}

      {isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-[#000814] text-white rounded-lg p-6 w-[90vw] max-w-6xl max-h-[80vh] overflow-auto border border-[#0F92CC]">
      <h2 className="text-2xl font-bold mb-6 text-center">Patient Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex items-center border border-[#0F92CC] p-2">
          <span className="font-bold w-1/3">Ref.No:</span>
          <span className="text-white ml-10">001</span>
        </div>
        <div className="flex items-center border border-[#0F92CC] p-2">
          <span className="font-bold w-1/3">Name:</span>
          <span className="text-white ml-10">John Doe</span>
        </div>
        <div className="flex items-center border border-[#0F92CC] p-2">
          <span className="font-bold w-1/3">Address:</span>
          <span className="text-white ml-10">123 Main St</span>
        </div>
        <div className="flex items-center border border-[#0F92CC] p-2">
          <span className="font-bold w-1/3">Thir:</span>
          <span className="text-white ml-10">-</span>
        </div>
        <div className="flex items-center border border-[#0F92CC] p-2">
          <span className="font-bold w-1/3">App:</span>
          <span className="text-white ml-10">Checkup</span>
        </div>
        <div className="flex items-center border border-[#0F92CC] p-2">
          <span className="font-bold w-1/3">Gender:</span>
          <span className="text-white ml-10">Male</span>
        </div>
        <div className="flex items-center border border-[#0F92CC] p-2">
          <span className="font-bold w-1/3">Religion:</span>
          <span className="text-white ml-10">Christian</span>
        </div>
        <div className="flex items-center border border-[#0F92CC] p-2">
          <span className="font-bold w-1/3">Age:</span>
          <span className="text-white ml-10">35</span>
        </div>
        <div className="flex items-center border border-[#0F92CC] p-2">
          <span className="font-bold w-1/3">Height:</span>
          <span className="text-white ml-10">5'8"</span>
        </div>
        <div className="flex items-center border border-[#0F92CC] p-2">
          <span className="font-bold w-1/3">Mind:</span>
          <span className="text-white ml-10">Stable</span>
        </div>
        <div className="flex items-center border border-[#0F92CC] p-2">
          <span className="font-bold w-1/3">Date:</span>
          <span className="text-white ml-10">2024-12-07</span>
        </div>
        <div className="flex items-center border border-[#0F92CC] p-2">
          <span className="font-bold w-1/3">Desire:</span>
          <span className="text-white ml-10">Healthy</span>
        </div>
        <div className="flex items-center border border-[#0F92CC] p-2">
          <span className="font-bold w-1/3">Weight:</span>
          <span className="text-white ml-10">75 kg</span>
        </div>
        <div className="flex items-center border border-[#0F92CC] p-2">
          <span className="font-bold w-1/3">Adct:</span>
          <span className="text-white ml-10">None</span>
        </div>
        <div className="flex items-center border border-[#0F92CC] p-2">
          <span className="font-bold w-1/3">Swt:</span>
          <span className="text-white ml-10">Normal</span>
        </div>
        <div className="flex items-center border border-[#0F92CC] p-2">
          <span className="font-bold w-1/3">Tng:</span>
          <span className="text-white ml-10">Clean</span>
        </div>
        <div className="flex items-center border border-[#0F92CC] p-2">
          <span className="font-bold w-1/3">NGl:</span>
          <span className="text-white ml-10">Normal</span>
        </div>
        <div className="flex items-center border border-[#0F92CC] p-2">
          <span className="font-bold w-1/3">BP:</span>
          <span className="text-white ml-10">120/80</span>
        </div>
        <div className="flex items-center border border-[#0F92CC] p-2">
          <span className="font-bold w-1/3">Prt:</span>
          <span className="text-white ml-10">Good</span>
        </div>
        <div className="flex items-center border border-[#0F92CC] p-2">
          <span className="font-bold w-1/3">Hc:</span>
          <span className="text-white ml-10">Normal</span>
        </div>
        <div className="flex items-center border border-[#0F92CC] p-2">
          <span className="font-bold w-1/3">Chest:</span>
          <span className="text-white ml-10">Clear</span>
        </div>
        <div className="flex items-center border border-[#0F92CC] p-2">
          <span className="font-bold w-1/3">Ph:</span>
          <span className="text-white ml-10">7.4</span>
        </div>
        <div className="flex items-center border border-[#0F92CC] p-2">
          <span className="font-bold w-1/3">Fh:</span>
          <span className="text-white ml-10">Normal</span>
        </div>
        <div className="flex items-center border border-[#0F92CC] p-2">
          <span className="font-bold w-1/3">Complain:</span>
          <span className="text-white ml-10">Headache</span>
        </div>
        <div className="flex items-center border border-[#0F92CC] p-2">
          <span className="font-bold w-1/3">Prescription Date:</span>
          <span className="text-white ml-10">2024-12-07</span>
        </div>
        <div className="flex items-center border border-[#0F92CC] p-2">
          <span className="font-bold w-1/3">Follow-Up:</span>
          <span className="text-white ml-10">2024-12-14</span>
        </div>
        <div className="flex items-center border border-[#0F92CC] p-2">
          <span className="font-bold w-1/3">Rx:</span>
          <span className="text-white ml-10">Paracetamol</span>
        </div>
        <div className="flex items-center border border-[#0F92CC] p-2">
          <span className="font-bold w-1/3">Medicine Course:</span>
          <span className="text-white ml-10">1-0-1</span>
        </div>
        <div className="flex items-center border border-[#0F92CC] p-2">
          <span className="font-bold w-1/3">Days:</span>
          <span className="text-white ml-10">7</span>
        </div>
      </div>
      <button
        onClick={handleCloseModal}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
      >
        Close
      </button>
    </div>
  </div>
)}



    </>
  );
};

export default PatientList;
