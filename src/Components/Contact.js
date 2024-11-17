import React, { useState } from "react";
import { MdWifiCalling3 } from "react-icons/md";
import { MdMarkEmailRead } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { MdNotificationsActive } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

const Contact = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change and update state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted with Data:", formData);
    // Here you can handle your form submission logic, like sending data to a server.
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="text">
            <h2>Contact Us</h2>
          </div>
          <div className="photo">
            <img src="" alt="doctor photo" />
          </div>
        </div>

        <div className="container">
          <div className="OurFrequency">
            <p>Our Frequency</p>
            <p>We provide Best Contact Emergency service.</p>
            <p>
              We provide the best emergency contact services to ensure you
              receive prompt and reliable assistance when you need it the most.
            </p>
            <p>
              In case of emergencies, our dedicated team is just a call away.
              Trust us to provide the best care in your time of need.
            </p>
            <p>
              Our 24/7 emergency service ensures immediate help in critical
              situations, providing peace of mind to you and your loved ones.
            </p>
            <MdWifiCalling3 /> +91 8271779635
            <MdMarkEmailRead /> vijaysharmagpj65@gmail.com
            <HiOutlineLocationMarker /> Jadopur Road, Gopalganj Pincode: 841428
            <div className="icons">
              <FaLinkedinIn />
              <FaFacebookF />
              <LuInstagram />
              <MdNotificationsActive />
            </div>
          </div>
          <div className="contact_us_card">
            <p>Have Any Query? Feel Free to Contact</p>
            <IoCallOutline />
            <p>Our Call Service!</p>
            <p>+91 8271779635</p>
          </div>
        </div>

        <div className="getintouch">
          <h1>Get In Touch</h1>
          <form onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <label>Your Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <label>Your Message</label>
            <textarea
              placeholder="Write Your Message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            />
            <button type="submit">Send Your Request</button>
          </form>
          <p>Call us 24/7 or fill out the form below to receive a free response.</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
