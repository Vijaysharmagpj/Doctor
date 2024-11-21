import React from "react";
import { DoctorData } from "../Data/DoctorData";

const DoctorList = () => {
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
            <button className="bg-[#FFD60A] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#FFC300]">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
