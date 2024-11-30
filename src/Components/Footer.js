import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { PiCopyrightBold } from "react-icons/pi";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-[#161D29] text-white p-8">
      <div className="container mx-auto flex flex-wrap justify-between gap-8">
        {/* Address Section */}
        <div className="flex-1 min-w-[200px]">
          <p className="text-lg font-bold mb-2">Address</p>
          <p className="mb-4">Jadopur Road, Gopalganj Pincode: 841428</p>
          <div className="flex space-x-4 text-xl">
            <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />
            <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
            <FaInstagram className="hover:text-gray-300 cursor-pointer" />
            <FaXTwitter className="hover:text-gray-300 cursor-pointer" />
          </div>
        </div>

        {/* More Services Section */}
        <div className="flex-1 min-w-[200px]">
          <p className="text-lg font-bold mb-2">More Services</p>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/doctor" className="hover:text-gray-300">
                Doctor
              </Link>
            </li>
            <li>
              <Link to="/diet" className="hover:text-gray-300">
                Diet
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Popular Doctor Section */}
        <div className="flex-1 min-w-[200px]">
          <p className="text-lg font-bold mb-2">Popular Doctor</p>
          <div className="flex items-center space-x-4">
            <img
              src=""
              alt="popular-doctor"
              className="w-16 h-16 rounded-full bg-gray-500"
            />
            <div>
              <p>Dr. Pramod Kumar Sharma</p>
              <p className="text-sm text-gray-400">MBBS</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm flex flex-col items-center">
        <PiCopyrightBold className="text-xl mb-2" />
        <p>Copyright {currentYear} Fdoctor. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
