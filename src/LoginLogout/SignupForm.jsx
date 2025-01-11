import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import signupimg from "../../src/assets/signup.gif";
import axios from "axios";

const SignupForm = () => {
  const navigate = useNavigate();
  const [showCreatePass, setShowCreatePass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandler = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    } else {
      try {
        const url = "http://localhost:3000/api/doctor/signup";
        const response = await axios.post(url, formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        toast.success("Account Created");
        navigate("/");
      } catch (error) {
        toast.error("Error creating account");
      }
    }
  };
  

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-[#000814] text-gray-200 px-4 lg:px-16">
    <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#FFD60A]">
          Signup
        </h1>
        <p className="text-lg text-gray-300 mt-2">
          Create an account to access our features and enjoy seamless experiences.
        </p>
      </div>
      {/* Image Section */}
      <div className="flex justify-center items-center lg:w-1/2">
        <img
          src={signupimg}
          alt="Signup Illustration"
          className="w-full max-w-md h-auto object-cover"
        />
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
        <form
          onSubmit={submitHandler}
          className="bg-[#1E293B] p-8 rounded-lg shadow-lg max-w-lg mx-auto space-y-6"
        >
          <h2 className="text-2xl font-bold text-center text-[#FFD60A]">
            Create an Account
          </h2>

          {/* First Name and Last Name */}
          <div className="flex flex-col sm:flex-row gap-4">
            <label className="w-full">
              <p className="text-sm mb-2">
                First Name <sup className="text-red-500">*</sup>
              </p>
              <input
                type="text"
                required
                placeholder="Enter First Name"
                name="firstName"
                value={formData.firstName}
                onChange={changeHandler}
                className="w-full bg-[#0F172A] text-gray-300 rounded-lg p-3 border border-gray-600 focus:ring-2 focus:ring-[#18BCFC] focus:outline-none"
              />
            </label>
            <label className="w-full">
              <p className="text-sm mb-2">
                Last Name <sup className="text-red-500">*</sup>
              </p>
              <input
                type="text"
                required
                placeholder="Enter Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={changeHandler}
                className="w-full bg-[#0F172A] text-gray-300 rounded-lg p-3 border border-gray-600 focus:ring-2 focus:ring-[#18BCFC] focus:outline-none"
              />
            </label>
          </div>

          {/* Email */}
          <label className="w-full">
            <p className="text-sm mb-2">
              Email Address <sup className="text-red-500">*</sup>
            </p>
            <input
              type="email"
              required
              placeholder="Enter your email address"
              name="email"
              value={formData.email}
              onChange={changeHandler}
              className="w-full bg-[#0F172A] text-gray-300 rounded-lg p-3 border border-gray-600 focus:ring-2 focus:ring-[#18BCFC] focus:outline-none"
            />
          </label>

          {/* Password and Confirm Password */}
          <div className="flex flex-col sm:flex-row gap-4">
            <label className="w-full relative">
              <p className="text-sm mb-2">
                Create Password <sup className="text-red-500">*</sup>
              </p>
              <input
                type={showCreatePass ? "text" : "password"}
                required
                placeholder="Enter Password"
                name="password"
                value={formData.password}
                onChange={changeHandler}
                className="w-full bg-[#0F172A] text-gray-300 rounded-lg p-3 border border-gray-600 focus:ring-2 focus:ring-[#18BCFC] focus:outline-none"
              />
              <span
                onClick={() => setShowCreatePass(!showCreatePass)}
                className="absolute right-3 top-1/2 mt-[12px] transform -translate-y-1/2 cursor-pointer text-gray-400"
              >
                {showCreatePass ? (
                  <AiOutlineEyeInvisible fontSize={24} />
                ) : (
                  <AiOutlineEye fontSize={24} />
                )}
              </span>
            </label>
            <label className="w-full relative">
              <p className="text-sm mb-2">
                Confirm Password <sup className="text-red-500">*</sup>
              </p>
              <input
                type={showConfirmPass ? "text" : "password"}
                required
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={changeHandler}
                className="w-full bg-[#0F172A] text-gray-300 rounded-lg p-3 border border-gray-600 focus:ring-2 focus:ring-[#18BCFC] focus:outline-none"
              />
              <span
                onClick={() => setShowConfirmPass(!showConfirmPass)}
                className="absolute right-3 top-1/2 mt-[12px] transform -translate-y-1/2 cursor-pointer text-gray-400"
              >
                {showConfirmPass ? (
                  <AiOutlineEyeInvisible fontSize={24} />
                ) : (
                  <AiOutlineEye fontSize={24} />
                )}
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#FFD60A] text-[#1E293B] font-semibold rounded-lg shadow-md hover:bg-[#FFC107] transition"
          >
            Create Account
          </button>
          <p className="text-center">Already have an account? <span className="text-[#FFD60A] cursor-pointer underline font-semibold" onClick={()=>navigate("/")}>Login</span></p>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
