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
    <>
      {/* this is for left side  */}
      <div className="container">
        <div className="navbar_Items">
          <nav className="items">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/treatment">Treatment</Link>
            <Link to="/doctor">Doctor</Link>
            <Link to="/diet">Diet</Link>
            <Link to="/firstaid">First Aid</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
        {/* This is for right side */}
        <div className="navbar_Icons">
        <div className="icons">
        <FaLinkedinIn/>
        <FaFacebookF/>
        <LuInstagram/>
        <MdNotificationsActive/>
        <IoMdLogOut/>
        </div>
        <div className="contact">
          <IoCallOutline/> Call Our Service +91 8271779635
        </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
