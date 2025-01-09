import React, { useState } from "react";
import forgetpassword from "../assets/Forgot password.gif";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [FormData, setFormData] = useState({
    email: "",
  });

  const handleOnchange = (e) => {
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate=useNavigate();

  const handleSendEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!FormData.email.trim()) {
      toast.error("Email is required!");
    } else if (!emailRegex.test(FormData.email)) {
      toast.error("Please enter a valid email address!");
    } else {
      toast.success("Email Sent Successfully");
      setFormData({ email: "" });
      navigate("/otp");
    }
  };

  return (
    <div className="bg-[#000814] text-[#FFC107] min-h-screen flex flex-col justify-center items-center p-4">
      <h1 className="text-2xl md:text-4xl font-bold mb-4">Forget Your Password?</h1>
      <img
        src={forgetpassword}
        alt="Forget Password"
        className="w-full max-w-[200px] md:max-w-[300px] mb-6"
      />
      <p className="text-center mb-4">
        Don't worry! It happens. Please enter your email address associated with your account.
      </p>
      <input
        type="email"
        name="email"
        placeholder="Enter Email Address"
        value={FormData.email}
        onChange={handleOnchange}
        className="w-full max-w-md p-2 mb-4 border-2 border-[#FFC107] rounded-md bg-[#000814] text-gray-300 focus:outline-none"
        required
      />
      <div className="flex flex-col items-center space-y-4">
        <Link
          to="/"
          className="text-[#FFC107] underline hover:text-[#FFD54F] transition duration-300"
        >
          Back To Login
        </Link>
        <button
          className="px-6 py-2 bg-[#FFC107] text-[#000814] font-semibold rounded-md hover:bg-[#FFD54F] transition duration-300"
          onClick={handleSendEmail}
        >
          Send Email
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
