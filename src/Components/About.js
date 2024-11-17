import React from "react";
import DoctorList from "../Card Component/DoctorList";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="text">
            <h2>About Us</h2>
            <button>Let's Connect</button>
          </div>
          <div className="photo">
            <img src="" alt="doctor photo" />
          </div>
        </div>
        <div className="story">
          <div className="text-heading">
            <h1>Our Story</h1>
            <p>
              From the beginning, we committed ourselves to excellence in every
              aspect of care. With consultations available from 4 PM to 8 PM
              daily, our clinic became a trusted partner in health for
              individuals and families alike. We pride ourselves on listening to
              our patients, understanding their unique health journeys, and
              crafting personalized remedies tailored to their specific needs.
            </p>
          </div>
        </div>
        <div className="main_doctor">
        <h1>Meet Our Chief Homeopath</h1>
          <div className="image">
            <img src="" alt="image" />
          </div>
          <div className="text">
            <p>Dr.Pramod Kumar Sharma</p>
            <p>MBBS</p>
            <p>General Physician</p>
          </div>
        </div>
        <DoctorList />
        <Footer/>
      </div>
    </>
  );
};
export default About;
