import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { MdNotificationsActive } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    navigate('/');
  };

  const handleNotification = () => {
    navigate("/bookappointmentlist");
  };

  const handleButtonToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div className="flex justify-between w-full items-center p-4 bg-[#171C26] text-white fixed navbar z-50">
        <div className="flex space-x-6">
          <nav className="hidden md:flex space-x-6">
            <Link to="/home" className="hover:text-gray-300">Home</Link>
            <Link to="/about" className="hover:text-gray-300">About</Link>
            <Link to="/treatment" className="hover:text-gray-300">Treatment</Link>
            <Link to="/patientlist" className="hover:text-gray-300">Patient List</Link>
            <Link to="/doctor" className="hover:text-gray-300">Doctor</Link>
            <Link to="/diet" className="hover:text-gray-300">Diet</Link>
            <Link to="/firstaid" className="hover:text-gray-300">First Aid</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          </nav>

          <div className="md:hidden">
            <button className="text-white" onClick={handleButtonToggle}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-6 ml-[5px]">
          <div className="flex space-x-4 text-xl">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-300 cursor-pointer"
            >
              <FaFacebookF />
            </a>
            <a
            href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-300 cursor-pointer"
            >
              <LuInstagram />
            </a>
              <MdNotificationsActive 
                onClick={handleNotification}
              className="hover:text-gray-300 cursor-pointer"
              />
          </div>

          <div className="flex items-center text-sm">
            <IoCallOutline className="text-xl" />
            <span>+91 8271779635</span>
          </div>
          <div className="hover:text-gray-300 cursor-pointer text-2xl">
          <IoMdLogOut
            onClick={handleLogout}
            className="text-xl"
          />
          </div>
        </div>
      </div>

      {showMenu && (
        <div className="md:hidden fixed top-20 left-0 w-full bg-[#171C26] text-white z-50 p-4 shadow-lg flex items-center justify-center">
          <nav className="flex flex-col space-y-4">
            <Link to="/home" className="hover:text-gray-300">Home</Link>
            <Link to="/about" className="hover:text-gray-300">About</Link>
            <Link to="/treatment" className="hover:text-gray-300">Treatment</Link>
            <Link to="/patientlist" className="hover:text-gray-300">Patient List</Link>
            <Link to="/doctor" className="hover:text-gray-300">Doctor</Link>
            <Link to="/diet" className="hover:text-gray-300">Diet</Link>
            <Link to="/firstaid" className="hover:text-gray-300">First Aid</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
