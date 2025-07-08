import React from "react";
import DoctorList from "../Card Component/DoctorList";
import Footer from "./Footer";
import aboutus from "../../src/assets/about us.jpg"
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import cheifdoctor from "../assets/dr.pk sharma.jpg"

const About = () => {
  const navigate=useNavigate();
  const navigateletConnect=()=>{
    navigate("/contact")
  }
  return (
    <>
     <Navbar />
      <div className="container mx-auto px-4 py-12 space-y-16 bg-[#000814] text-gray-300">
  {/* About Us Section */}
  <div className="wrapper flex flex-col lg:flex-row items-center lg:space-x-12 space-y-8 lg:space-y-0 mt-[50px]">
    <div className="text lg:w-1/2 space-y-6">
      <h2 className="text-4xl font-bold text-[#18BCFC]">About Us</h2>
      <button
      onClick={navigateletConnect}
       className="bg-[#FFD60A] text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#E2B609] transition-all duration-300">
        Let's Connect
      </button>
    </div>
    <div className="photo lg:w-1/2">
      <img
        src={aboutus}
        alt="doctor photo"
        className="w-full rounded-lg shadow-xl"
      />
    </div>
  </div>

  {/* Our Story Section */}
  <div className="story bg-[#001223] p-8 rounded-lg shadow-lg">
    <div className="text-heading text-center space-y-6">
      <h1 className="text-4xl font-bold text-[#FA6A28]">Our Story</h1>
      <p className="leading-relaxed text-lg">
        From the beginning, we committed ourselves to excellence in every aspect
        of care. With consultations available from 4 PM to 8 PM daily, our
        clinic became a trusted partner in health for individuals and families
        alike. We pride ourselves on listening to our patients, understanding
        their unique health journeys, and crafting personalized remedies
        tailored to their specific needs.
      </p>
    </div>
  </div>

  {/* Main Doctor Section */}
  <div className="main_doctor text-center space-y-12">
    <h1 className="text-4xl font-bold text-[#18BCFC]">Meet Our Chief Homeopath</h1>
    <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-8 lg:space-y-0">
      <div className="image lg:w-1/3">
        <img
          src={cheifdoctor}
          alt="chief doctor"
          className="w-full rounded-lg shadow-xl"
        />
      </div>
      <div className="text lg:w-2/3 space-y-4 text-gray-300">
        <p className="text-2xl font-semibold">Dr. Pramod Kumar Sharma</p>
        <p className="text-lg text-gray-400">BHMS</p>
        <p className="text-lg text-gray-400">General Physician</p>
      </div>
    </div>
  </div>
        <DoctorList />

      </div>
      <Footer/>
    </>
  );
};
export default About;
