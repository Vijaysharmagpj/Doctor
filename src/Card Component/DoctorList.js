import React, { useState } from "react";
import { DoctorData } from "../Data/DoctorData";

const DoctorList = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleViewProfile = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleCloseModal = () => {
    setSelectedDoctor(null);
  };

  return (
    <div className="bg-[#000814] text-gray-300 py-10">
      <h1 className="text-center text-4xl font-bold text-[#18BCFC] mb-8">
        Our Teams
      </h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {DoctorData.map((data, index) => (
          <div
            key={index}
            className="bg-[#001D3D] p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={data.image}
              alt={`${data.name}`}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-[#FA6A28] mb-2">
              {data.name}
            </h2>
            <p className="text-sm italic mb-1">{data.qualification}</p>
            <p className="text-sm mb-1">{data.location}</p>
            <p className="text-sm font-semibold mb-4">{data.specialist}</p>
            <button
              onClick={() => handleViewProfile(data)}
              className="bg-[#FFD60A] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#FFC300] transition"
            >
              View Profile
            </button>
          </div>
        ))}
      </div>

      {selectedDoctor && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-[#001D3D] w-96 p-6 rounded-lg shadow-lg text-center relative"
            style={{
              boxShadow: "0 4px 20px rgba(255, 214, 10, 0.5)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-red-800 text-2xl"
              onClick={handleCloseModal}
            >
              ×
            </button>
            <h2 className="text-2xl font-semibold text-white mb-4">
              {selectedDoctor.name}
            </h2>
            <img
              src={selectedDoctor.image}
              alt={selectedDoctor.name}
              className="w-32 h-32 object-cover rounded-full mb-4 mx-auto"
            />
            <p className="text-sm font-semibold text-white mb-2">
              Qualification: {selectedDoctor.qualification}
            </p>
            <p className="text-sm font-semibold text-white mb-2">
              Location: {selectedDoctor.location}
            </p>
            <p className="text-sm font-semibold text-white mb-4">
              Specialization: {selectedDoctor.specialist}
            </p>
            <p className="text-sm text-white mb-4">{selectedDoctor.bio}</p>
            <p className="text-sm text-white mb-4">
              {selectedDoctor.additionalInfo}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorList;
