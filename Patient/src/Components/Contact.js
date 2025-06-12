import React, { useState } from "react";
import { MdWifiCalling3, MdMarkEmailRead } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import contactus from "../../src/assets/contactus.jpg";
import Navbar from "./Navbar";
import toast from "react-hot-toast";
import Footer from "./Footer";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    yourName: "",
    yourEmail: "",
    yourMessage: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      const res = await axios.post(
        "http://localhost:4000/api/doctor/contactus",
        formData
      );
      e.preventDefault();
      if (res.data.data) {
        toast.success("Request Sent successfully!");
        setFormData({
          yourName: "",
          yourEmail: "",
          yourMessage: "",
        });
      }
    } catch (error) {
      console.log("Error occurred in contact us", error);
      toast.error("Failed to send request. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#000814] text-gray-300 p-8">
        <div className="container mx-auto space-y-12 mt-[60px]">
          {/* Contact Us Section */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 ">
            <div className="text-center md:text-left space-y-4 md:w-1/2">
              <h2 className="text-4xl font-bold text-[#18BCFC]">Contact Us</h2>
              <p className="text-xl max-w-3xl mx-auto">
                We are here to help you. If you have any questions or need
                assistance, feel free to reach out to us.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src={contactus}
                alt="doctor"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#1A2632] p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-[#18BCFC]">
                Our Frequency
              </h3>
              <p>
                We provide the best emergency contact services to ensure you
                receive prompt and reliable assistance.
              </p>
              <div className="flex space-x-4 mt-4">
                <MdWifiCalling3 className="text-[#FFD60A]" />
                <p>+91 8271779635</p>
              </div>
              <div className="flex space-x-4 mt-2">
                <MdMarkEmailRead className="text-[#FFD60A]" />
                <p>vijaysharmagpj65@gmail.com</p>
              </div>
              <div className="flex space-x-4 mt-2">
                <HiOutlineLocationMarker className="text-[#FFD60A]" />
                <p>Jadopur Road, Gopalganj Pincode: 841428</p>
              </div>
              <div className="flex space-x-4 mt-4 text-[#FFD60A]">
                <FaLinkedinIn />
                <FaFacebookF />
                <LuInstagram />
              </div>
            </div>

            <div className="bg-[#1A2632] p-6 rounded-lg text-center">
              <p className="text-2xl font-semibold text-white">
                Have Any Query? Feel Free to Contact
              </p>
              <IoCallOutline className="text-4xl text-[#FFD60A] mx-auto my-4" />
              <p className="text-xl text-white">
                Our Call Service: +91 8271779635
              </p>
            </div>
          </div>

          <div className="bg-[#000814] p-6 rounded-lg space-y-6">
            <h1 className="text-4xl font-bold text-[#18BCFC] text-center">
              Get In Touch
            </h1>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 max-w-lg mx-auto"
            >
              <div className="space-y-2">
                <label className="text-[#FA6A28]">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter Your Name"
                  name="yourName"
                  value={formData.yourName}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#1a2632] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD60A]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[#FA6A28]">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="Enter Your Email"
                  name="yourEmail"
                  value={formData.yourEmail}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#1a2632] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD60A]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[#FA6A28]">Your Message</label>
                <textarea
                  placeholder="Write Your Message"
                  required
                  name="yourMessage"
                  value={formData.yourMessage}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#1a2632] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD60A] h-32"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#FFD60A] text-black rounded-md font-semibold hover:bg-[#FFC300] transition duration-300"
              >
                Send Your Request
              </button>
            </form>
            <p className="text-center text-gray-400 mt-4">
              Call us 24/7 or fill out the form below to receive a free
              response.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
