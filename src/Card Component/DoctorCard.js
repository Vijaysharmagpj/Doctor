import React from "react";
import { DoctorData } from "../Data/DoctorData";

const DoctorCard = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          {DoctorData.map((data, index) => (
            <div key={index}>
              <div>
              <p>{data.specialist}</p>
                <p>{data.name}</p>
                <p>{data.qualification}</p>
                <p>{data.location}</p>
                <button>Book Appointment</button>
              </div>
              <div>
                <img src="" alt="Doctor card"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default DoctorCard;
