import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Loginimg from "../../src/assets/login.gif";

const LoginForm = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(e) {
    e.preventDefault();
    toast.success("Login Successfully");
    navigate("/home");
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen items-center justify-center bg-[#000814] px-4 py-8 lg:px-16 gap-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#FFD60A]">Login</h1>
        <p className="text-lg text-gray-300 mt-2">
          Welcome back! Please log in to access your account and enjoy our
          features.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center w-full lg:w-1/2">
        <img
          src={Loginimg}
          alt="Login Page Image"
          className="max-w-full h-auto lg:max-w-md"
        />
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <form
          onSubmit={submitHandler}
          className="flex flex-col w-full max-w-[400px] gap-y-6 bg-[#1E293B] p-6 lg:p-8 rounded-lg shadow-lg text-gray-200"
        >
          <h2 className="text-2xl font-bold text-center text-[#FFD60A]">
            Welcome Back!
          </h2>

          {/* Email Input */}
          <label className="w-full">
            <p className="text-sm font-medium mb-2 text-[#FFD60A]">
              Email Address <sup className="text-red-500">*</sup>
            </p>
            <input
              type="email"
              required
              value={formData.email}
              placeholder="Enter your email address"
              onChange={changeHandler}
              name="email"
              className="w-full p-3 rounded-md bg-[#0F172A] text-gray-300 border border-gray-600 focus:ring-2 focus:ring-[#18BCFC] focus:outline-none"
            />
          </label>

          {/* Password Input */}
          <label className="w-full relative">
            <p className="text-sm font-medium mb-2 text-[#FFD60A]">
              Password <sup className="text-red-500">*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              required
              value={formData.password}
              placeholder="Enter Password"
              onChange={changeHandler}
              name="password"
              className="w-full p-3 rounded-md bg-[#0F172A] text-gray-300 border border-gray-600 focus:ring-2 focus:ring-[#18BCFC] focus:outline-none"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-[38px] cursor-pointer text-gray-400"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} />
              ) : (
                <AiOutlineEye fontSize={24} />
              )}
            </span>
          </label>

          {/* Forgot Password */}
          <Link
            to="/forgetpassword"
            className="text-sm text-[#18BCFC] hover:underline text-right"
          >
            Forgot Password?
          </Link>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#FFD60A] text-[#1E293B] font-semibold rounded-lg shadow-md hover:bg-[#FFC107] transition"
          >
            Sign in
          </button>

          {/* Register Section */}
          <p className="text-center">Don't have an account? <span className="text-[#FFD60A] cursor-pointer underline font-semibold" onClick={()=>navigate("/signup")}>Register Now</span></p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
