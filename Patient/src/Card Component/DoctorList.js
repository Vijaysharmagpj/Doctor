import React from "react";
import { DoctorData } from "../Data/DoctorData";

const DoctorList = () => {
  return (
    <div className=" text-gray-300 py-10 mt-[80px]">
      <h1 className="text-center text-4xl font-bold text-[#18BCFC] mb-8">
        Our Teams
      </h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {DoctorData.map((data, index) => (
          <div key={index} className="group h-96 w-full [perspective:1000px]">
            <div className=" h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/*image sction  */}
              <div className="absolute inset-0 h-full w-full bg-[#001D3D] rounded-xl p-6 [backface-visibility:hidden] flex flex-col items-center justify-center">
                <img
                  src={data.img}
                  alt={data.name}
                  className="w-32 h-32 object-cover rounded-full mb-4"
                />
                <h2 className="text-xl font-semibold text-[#FA6A28]">
                  {data.name}
                </h2>
                <p className="text-xl font-semibold text-[#18BCFC]">
                  {data.specialist}
                </p>
                <p className="text-lg font-semibold text-gray-400">
                  {data.qualification}
                </p>
                <p className="text-md font-semibold text-gray-500">
                  {data.location}
                </p>
              </div>
              {/* text section here */}
              <div className="absolute inset-0 h-full w-full bg-[#171C26] border border-gray-500 rounded-xl text-slate-200 px-6 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h2 className="text-2xl font-bold mb-4">{data.name}</h2>
                  <p className="text-sm italic mb-1">{data.qualification}</p>
                  <p className="text-sm mb-1">{data.location}</p>
                  <p className="text-sm font-semibold mb-4">
                    {data.specialist}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
