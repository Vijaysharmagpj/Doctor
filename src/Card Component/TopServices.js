import React from "react";
import { Topservices } from "../Data/Topservices";

const TopServices = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-[#000814] text-gray-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Topservices.map((data, index) => (
          <div
            key={index}
            className="service-card bg-[#001223] p-6 rounded-lg shadow-xl text-center space-y-4"
          >
            <h3 className="text-2xl font-semibold text-[#1CB0FE]">{data.services}</h3>
            <p className="text-gray-400">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopServices;
