import React from "react";
import { useNavigate } from "react-router-dom";
import whychoose from "../../src/assets/Why Choose Us.avif"


const Whychooseus = () => {
  const navigate=useNavigate();
  const navigateContact=()=>{
    navigate("/contact")
  }
  return (
    <div className="container mx-auto px-4 py-12 bg-[#000814] text-gray-300">
      <div className="wrapper flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
        {/* Text Section */}
        <div className="text lg:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold text-[#18BCFC]">Why Choose Us?</h1>
          <ul className="space-y-4 text-lg">
            <li className="text-gray-400">
              Best Solutions for Health: Our holistic approach aims to treat the
              root cause of ailments, not just the symptoms.
            </li>
            <li className="text-gray-400">
              Health Laboratory: We work with top laboratories for diagnostics
              to ensure the best treatment plan.
            </li>
          </ul>
          <p className="text-xl text-[#FA6A28] font-semibold">Clinic Timings</p>
          <p className="text-gray-400">Doctor Available: 4:00 PM to 8:00 PM</p>
          <p className="text-gray-400">
            Visit our clinic during these hours to receive expert homeopathic
            care tailored to your unique needs.
          </p>
        </div>

        {/* Photo Section */}
        <div className="photo lg:w-1/2">
          <img
            src={whychoose}
            alt="Why Choose Us"
            className="w-full h-90 object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>

      {/* Button Section */}
      <div className="text-center mt-8">
        <button
        onClick={navigateContact}
         className="bg-[#FFD60A] text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#E2B609] transition-all duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Whychooseus;
