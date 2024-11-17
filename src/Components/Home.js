import React from "react";
import DoctorCard from "../Card Component/DoctorCard";
import TopServices from "../Card Component/TopServices";
import { FaUserDoctor } from "react-icons/fa6";
import { GrFormAdd } from "react-icons/gr";
import Whychooseus from "./Whychooseus";
import Footer from "./Footer";

const Home=()=>{
    return(
        <>
        <div className="container">
            <div className="our-doctor">
                <div className="doctor-text">
                    <h1>Meet Our Expert Homeopathic Doctor</h1>
                    <p>Discover holistic healing with care and precision. Our doctor is dedicated to addressing the root cause of your health concerns, offering personalized treatments that ensure safe and effective results for a healthier you.</p>
                    <button>Book Appointment</button>
                </div>
                <div className="doctor-pic">
                    <img src="" alt="Main doctor pic"/>
                </div>
            </div>
            <div className="toprateddoctor">
            <FaUserDoctor/>
            <h1>Top Rated Doctor</h1>
            <DoctorCard/>
            </div>
            <div>
            <GrFormAdd/>
            <h1>Top Services</h1>
            <TopServices/>
            </div>

            {/* Find Care Doctor AndHospital At Your Fingertips. */}
            <div>
                <div className="img-container">
                    <div className="img">
                        <img src="" alt="find care"/>
                    </div>
                    <div className="care-text">
                        <h1>Find Care Doctor AndHospital At Your Fingertips.</h1>
                        <p>At our clinic, we are dedicated to providing holistic and personalized care through homeopathy. Our experienced homeopaths offer remedies designed to treat a wide range of health concerns naturally. Whether you need a consultation for an acute condition or chronic health issues, we are here to guide you toward better health.</p>
                        <div className="point-container">
                            <div className="point1">
                            <FaUserDoctor/>
                                <p>
                                Find Special Doctor
                                </p>
                                <button>Doctor</button>
                            </div>
                            <div className="point2">
                            <FaUserDoctor/>
                                <p>
                                Consult Online
                                </p>
                                <p>24/7 for quick advice, or book in-person consultations from 4 PM to 8 PM daily.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Whychooseus/>
            <Footer/>
        </div>
        </>
    )
}
export default Home;