import React from "react";
import { DoctorData } from "../Data/DoctorData";

const DoctorList = () => {
  return (
    <>
      <h1>Our Teams</h1>
      <div className="container">
        {
          DoctorData.map((data, index) => (
            <div key={index}>
              <img src={data.image} alt="image" />
              <p>{data.name}</p>
              <p>{data.qualification}</p>
              <p>{data.location}</p>
              <p>{data.specialist}</p>
              <p>{data.name}</p>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default DoctorList;
