import React from "react";
import DoctorCard from "../Card Component/DoctorCard";
import TopServices from "../Card Component/TopServices";
import { FaUserDoctor } from "react-icons/fa6";
import { GrFormAdd } from "react-icons/gr";
import Whychooseus from "./Whychooseus";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import caredoctor from "../../src/assets/care doctor.jpg";

const Home = () => {
  const navigate = useNavigate();

  const navigatebookappointment = () => {
    navigate("/bookappointment");
  };

  const navigateSpecialDoctor = () => {
    navigate("/doctor");
  };
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12 space-y-16 bg-[#000814] text-gray-300 ">
        {/* Meet Our Expert Homeopathic Doctor Section */}
        <div className="our-doctor flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 mt-[50px]">
          <div className="doctor-text lg:w-1/2 space-y-4 text-center lg:text-left">
            <h1 className="text-4xl font-bold text-[#18BCFC]">
              Meet Our Expert Homeopathic Doctor
            </h1>
            <p className="text-lg text-gray-400">
              Discover holistic healing with care and precision. Our doctor is
              dedicated to addressing the root cause of your health concerns,
              offering personalized treatments that ensure safe and effective
              results for a healthier you.
            </p>
            <button
              onClick={navigatebookappointment}
              className="bg-[#FFD60A] text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#E2B609] transition-all duration-300"
            >
              Book Appointment
            </button>
          </div>
          <div className="doctor-pic lg:w-1/2">
            <img
              src=""
              alt="Main doctor pic"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Top Rated Doctor Section */}
        <div className="toprateddoctor text-center">
          <FaUserDoctor className="text-4xl text-[#FA6A28] mx-auto" />
          <h1 className="text-3xl font-semibold text-[#18BCFC] mt-4">
            Top Rated Doctor
          </h1>
          <DoctorCard />
        </div>

        {/* Top Services Section */}
        <div className="text-center">
          <GrFormAdd className="text-4xl text-[#FA6A28] mx-auto" />
          <h1 className="text-3xl font-semibold text-[#18BCFC] mt-4">
            Top Services
          </h1>
          <TopServices />
        </div>

        {/* Find Care Doctor And Hospital At Your Fingertips Section */}
        <div className="img-container flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 bg-[#001223] p-8 rounded-lg shadow-lg">
          <div className="img lg:w-1/2">
            <img
              src={caredoctor}
              alt="find care"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
          <div className="care-text lg:w-1/2 space-y-6 ml-[5px]">
            <h1 className="text-3xl font-bold text-[#18BCFC]">
              Find Care Doctor And Hospital At Your Fingertips.
            </h1>
            <p className="text-lg text-gray-400">
              At our clinic, we are dedicated to providing holistic and
              personalized care through homeopathy. Our experienced homeopaths
              offer remedies designed to treat a wide range of health concerns
              naturally. Whether you need a consultation for an acute condition
              or chronic health issues, we are here to guide you toward better
              health.
            </p>
            <div className="point-container flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
              <div className="point1 bg-[#001223] p-6 rounded-lg shadow-xl text-center text-gray-300 space-y-4">
                <FaUserDoctor className="text-3xl text-[#FA6A28] mx-auto" />
                <p className="text-xl font-semibold">Find Special Doctor</p>
                <button
                  onClick={navigateSpecialDoctor}
                  className="bg-[#FFD60A] text-black px-6 py-2 rounded-lg"
                >
                  Doctor
                </button>
              </div>
              <div className="point2 bg-[#001223] p-6 rounded-lg shadow-xl text-center text-gray-300 space-y-4">
                <FaUserDoctor className="text-3xl text-[#FA6A28] mx-auto" />
                <p className="text-xl font-semibold">Consult Online</p>
                <p className="text-gray-400">
                  24/7 for quick advice, or book in-person consultations from 4
                  PM to 8 PM daily.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <Whychooseus />
      </div>
      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Home;
