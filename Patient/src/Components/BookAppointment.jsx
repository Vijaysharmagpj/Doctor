import React, { useState } from "react";
import bookappointment from "../../src/assets/bookappointment.gif";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    doctor: "",
    disease: "",
  });

  const navigate=useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast('Your Appointment Book Successfully', {
        icon: '👏',
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        doctor: "",
        disease: "",
      });
      navigate("/bookappointmentlist")
  };

  return (
    <>
    <Navbar/>
    <div className="bg-[#000814] min-h-screen flex flex-col items-center justify-center p-6 md:p-12">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-8xl mt-[70px]">
      <h1 className="text-2xl font-bold text-center text-[#FFD60A] mb-6">
            Book Your Appointment
          </h1>
        <div className="w-full md:w-1/2">
          <img
            src={bookappointment}
            alt="Book Appointment"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <div className="w-full bg-[#1E293B] p-6 rounded-lg shadow-lg text-gray-200">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-[#FFD60A]">
                Name
              </label>
              <input
                type="text"
                required
                placeholder="Enter Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-[#0F172A] text-gray-300 border border-gray-600 focus:ring-2 focus:ring-[#18BCFC] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#FFD60A]">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="Enter Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-[#0F172A] text-gray-300 border border-gray-600 focus:ring-2 focus:ring-[#18BCFC] focus:outline-none"
              />
            </div>

            <div className="flex gap-4">
              <div className="w-full">
                <label className="block text-sm font-medium text-[#FFD60A]">
                  Phone Number
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter Your Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-[#0F172A] text-gray-300 border border-gray-600 focus:ring-2 focus:ring-[#18BCFC] focus:outline-none"
                />
              </div>

              <div className="w-full">
                <label className="block text-sm font-medium text-[#FFD60A]">
                  Doctor
                </label>
                <select
                  name="doctor"
                  required
                  value={formData.doctor}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-[#0F172A] text-gray-300 border border-gray-600 focus:ring-2 focus:ring-[#18BCFC] focus:outline-none"
                >
                  <option value="" disabled>
                    Select Doctor
                  </option>
                  <option>Dr. Smith</option>
                  <option>Dr. John</option>
                  <option>Dr. Emily</option>
                  <option>Dr. Rose</option>
                  <option>Dr. Mark</option>
                </select>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-full">
                <label className="block text-sm font-medium text-[#FFD60A]">
                  Time
                </label>
                <input
                  type="time"
                  required
                  placeholder="Enter Your time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-[#0F172A] text-gray-300 border border-gray-600 focus:ring-2 focus:ring-[#18BCFC] focus:outline-none"
                />
              </div>

              <div className="w-full">
                <label className="block text-sm font-medium text-[#FFD60A]">
                  Date
                </label>
                <input
                  type="date"
                  required
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-[#0F172A] text-gray-300 border border-gray-600 focus:ring-2 focus:ring-[#18BCFC] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#FFD60A]">
                Disease
              </label>
              <textarea
                rows={2}
                required
                placeholder="Enter Your Disease"
                name="disease"
                value={formData.disease}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-[#0F172A] text-gray-300 border border-gray-600 focus:ring-2 focus:ring-[#18BCFC] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#FFD60A] text-[#1E293B] font-semibold rounded-lg shadow-md hover:bg-[#FFC107] transition"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default BookAppointment;
