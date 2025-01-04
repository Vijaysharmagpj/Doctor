import React from "react";
import DoctorCard from "../Card Component/DoctorCard";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Doctor = () => {
  return (
    <>
     <Navbar />
      <DoctorCard/>
      <Footer/>
    </>
  );
};
export default Doctor;
