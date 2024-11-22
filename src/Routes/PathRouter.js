import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import Doctor from "../Components/Doctor";
import Diet from "../Components/Diet";
import First_aid from "../Components/Firstaid";
import Contact from "../Components/Contact";
import Treatment from "../Components/Treatment";
import LoginForm from "../LoginLogout/LoginForm"
import SignupForm from "../LoginLogout/SignupForm";


const PathRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/treatment" element={<Treatment />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/firstaid" element={<First_aid />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/" element={<LoginForm/>} />
        <Route path="/signup" element={<SignupForm/>} />
      </Routes>
    </>
  );
};

export default PathRouter;
