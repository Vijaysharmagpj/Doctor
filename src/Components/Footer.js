import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { PiCopyrightBold } from "react-icons/pi";

const Footer=()=>{
    const currentYear = new Date().getFullYear();
    return(
        <>
        <div className="container">
            <div className="address">
            <p>Address</p>
            <p>Jadopur Road, Gopalganj Pincode:841428</p>
            <FaFacebookF/>
            <FaLinkedinIn/>
            <FaInstagram/>
            <FaXTwitter/>
            </div>
            <div className="moreservices">
            <ul>
            <Link to="/about">About</Link>
            <Link to="/doctor">Doctor</Link>
            <Link to="/diet">Diet</Link>
            <Link to="/contact">Contact</Link>
            </ul>
            </div>
            <div className="popular-doctor">
            <div className="doctor">
                <img src="" alt="popular-doctor"/>
                <p>Dr.Pramod Kumar Sharma</p>
                <p>MBBS</p>
            </div>
            </div>
            <div>
            <PiCopyrightBold/>
            <p>Copyright {currentYear}  Fdoctor  All Rights Reserved.</p>
            </div>
        </div>
        </>
    )
}
export default Footer;