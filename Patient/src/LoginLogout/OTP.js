import React, { useState, useEffect } from "react";
import EnterOTP from "../assets/Enter OTP.gif";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const OTP = () => {
  const [resendTimer, setResendTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [formData, setFormData] = useState({
    otp: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setCanResend(true);
    }
  }, [resendTimer]);

  const handleResendOTP = () => {
    setCanResend(false);
    setResendTimer(30);
    toast.success("OTP has been resent to your email!");
  };

  const handleChangePassword = () => {
    if (!formData.otp || !formData.password || !formData.confirmPassword) {
      toast.error("All fields are required!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    toast.success("Password successfully changed!");
    navigate("/");
  };

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="bg-[#000814] text-[#FFC107] min-h-screen flex flex-col justify-center items-center p-4 md:flex-row md:justify-evenly">
      <div className="flex justify-center items-center mb-6 md:mb-0">
        <img
          src={EnterOTP}
          alt="OTP"
          className="w-full max-w-xs md:max-w-sm rounded-md"
        />
      </div>

      <div className="flex flex-col justify-center items-center w-full max-w-md">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">Update Password</h1>
        <p className="text-center mb-6">
          Please enter the OTP sent to your registered email address, and update
          your password. Ensure that your new password is secure and matches the
          confirmation.
        </p>
        <div className="w-full space-y-4">
          <input
            required
            type="text"
            placeholder="Enter Your OTP"
            name="otp"
            value={formData.otp}
            onChange={handleFormData}
            className="w-full p-2 border-2 border-[#FFC107] rounded-md bg-[#000814] text-[#FFC107] focus:outline-none"
          />
          <input
            required
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleFormData}
            className="w-full p-2 border-2 border-[#FFC107] rounded-md bg-[#000814] text-[#FFC107] focus:outline-none"
          />
          <input
            required
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleFormData}
            className="w-full p-2 border-2 border-[#FFC107] rounded-md bg-[#000814] text-[#FFC107] focus:outline-none"
          />
        </div>
        <div className="mt-4">
          {canResend ? (
            <button
              onClick={handleResendOTP}
              className="text-[#FFC107] underline hover:text-[#FFD54F] transition duration-300"
            >
              Resend OTP
            </button>
          ) : (
            <p>
              Resend Code In <span className="font-bold">{resendTimer}s</span>
            </p>
          )}
        </div>
        <button
          onClick={handleChangePassword}
          className="mt-6 px-6 py-2 bg-[#FFC107] text-[#000814] font-semibold rounded-md hover:bg-[#FFD54F] transition duration-300"
        >
          Change Password
        </button>
      </div>
    </div>
  );
};

export default OTP;
