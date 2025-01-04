import React from "react";
import { DoctorData } from "../Data/DoctorData";
import { useNavigate } from "react-router-dom";

const DoctorCard = () => {
  const navigate = useNavigate();
  const navigateAppointment = () => {
    navigate("/bookappointment");
  };

  return (
    <div className="container mx-auto px-4 py-12 bg-[#000814] text-gray-300">
      <h2 className="text-4xl font-bold text-center text-[#18BCFC] mb-8 mt-[50px]">
        Our Doctors
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
        {DoctorData.map((data, index) => (
          <div
            key={index}
            className="card bg-[#001223] p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="image mb-4">
              <img
                src={data.image}
                alt="Doctor"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="text">
              <p className="text-xl font-semibold text-[#18BCFC]">{data.specialist}</p>
              <p className="text-2xl font-bold text-[#FA6A28]">{data.name}</p>
              <p className="text-lg text-gray-400">{data.qualification}</p>
              <p className="text-md text-gray-500">{data.location}</p>
              <div className="flex justify-center mt-4">
                <button
                  onClick={navigateAppointment}
                  className="bg-[#FFD60A] text-black px-6 py-2 rounded-lg text-lg font-semibold hover:bg-[#E2B609] transition-all duration-300"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorCard;
