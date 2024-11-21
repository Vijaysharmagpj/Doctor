import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { MdNotificationsActive } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-[#171C26] text-white">
      {/* Left side of the Navbar */}
      <div className="flex space-x-6">
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/treatment" className="hover:text-gray-300">Treatment</Link>
          <Link to="/doctor" className="hover:text-gray-300">Doctor</Link>
          <Link to="/diet" className="hover:text-gray-300">Diet</Link>
          <Link to="/firstaid" className="hover:text-gray-300">First Aid</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white">☰</button> {/* You can replace this with a hamburger icon */}
        </div>
      </div>

      {/* Right side of the Navbar */}
      <div className="flex items-center space-x-6">
        {/* Social Media Icons */}
        <div className="flex space-x-4 text-xl">
        <a href="https://www.linkedin.com/feed/"
        target="_blank"
        className="hover:text-gray-300 cursor-pointer">
        <FaLinkedinIn />
        </a>
          <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
          <LuInstagram className="hover:text-gray-300 cursor-pointer" />
          <MdNotificationsActive className="hover:text-gray-300 cursor-pointer" />
        </div>

        {/* Contact */}
        <div className="flex items-center space-x-2 text-sm">
          <IoCallOutline className="text-lg" />
          <span>Call Our Service +91 8271779635</span>
        </div>
        <IoMdLogOut className="hover:text-gray-300 cursor-pointer text-xl" />
      </div>
    </div>
  );
};

export default Navbar;
