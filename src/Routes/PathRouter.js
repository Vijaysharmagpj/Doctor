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
import BookAppointment from "../Components/BookAppointment";
import Error404 from "../Components/Error404";
import BookAppointmentList from "../Components/BookAppointmentList";
import PatientList from "../Components/PatientList";
import ForgetPassword from "../LoginLogout/ForgetPassword";
import OTP from "../LoginLogout/OTP";


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
        <Route path="/bookappointment" element={<BookAppointment/>}/>
        <Route path="/404page" element={<Error404/>}/>
        <Route path="/bookappointmentlist" element={<BookAppointmentList/>}/>
        <Route path="/patientlist" element={<PatientList/>}/>
        <Route path="/forgetpassword" element={<ForgetPassword/>}/>
        <Route path="/otp" element={<OTP/>}/>

        <Route path="/" element={<LoginForm/>} />
        <Route path="/signup" element={<SignupForm/>} />
      </Routes>
    </>
  );
};

export default PathRouter;
