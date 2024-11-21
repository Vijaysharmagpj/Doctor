import React from "react";
import { useState } from "react";
import {
  MdOutlineFirstPage,
  MdOutlineNavigateNext,
  MdLastPage,
  MdDeleteSweep,
} from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { IoIosCreate } from "react-icons/io";
import { CiSaveDown1 } from "react-icons/ci";
import { RiFileEditLine } from "react-icons/ri";
import { IoBagAddSharp } from "react-icons/io5";

const Treatment = () => {
  const [formData, setFormData] = useState({
    refNo: "",
    name: "",
    address: "",
    thir: "",
    app: "",
    gender: "",
    religion: "",
    age: "",
    height: "",
    mind: "",
    date: "",
    desire: "",
    weight: "",
    adct: "",
    swt: "",
    tng: "",
    nGl: "",
    bp: "",
    prt: "",
    hc: "",
    chest: "",
    ph: "",
    fh: "",
    complain: "",
    prescriptionDate: "",
    followUp: "",
    rx: "",
    medicineCourse: "",
    days: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Form Data Saved:", formData);
    // Here you can save the form data to a server or local storage if needed
  };

  return (
    <div className="main__wrapper">
      <div className="container-fluid">
        <div className="header">
          <h1 className="heading">SHARMA HOMEO CLINIC</h1>
        </div>

        <div className="form-section">
          <div className="form-column">
            <div className="form-card">
              <div className="form-inputs">
                <div className="form-group">
                  <label className="form-label">Ref.No.</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Ref.No"
                    name="refNo"
                    value={formData.refNo}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Address</label>
                  <textarea
                    className="form-control"
                    placeholder="Enter Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label className="form-label">Thir</label>
                  <select
                    className="form-select"
                    name="thir"
                    value={formData.thir}
                    onChange={handleChange}
                  >
                    <option disabled selected>
                      Thir
                    </option>
                    <option>+</option>
                    <option>++</option>
                    <option>+++</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">App</label>
                  <select
                    className="form-select"
                    name="app"
                    value={formData.app}
                    onChange={handleChange}
                  >
                    <option disabled selected>
                      App
                    </option>
                    <option>Less</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Gender</label>
                  <select
                    className="form-select"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option disabled selected>
                      Gender
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Transgender</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Religion</label>
                  <select
                    className="form-select"
                    name="religion"
                    value={formData.religion}
                    onChange={handleChange}
                  >
                    <option disabled selected>
                      Religion
                    </option>
                    <option>Hinduism</option>
                    <option>Islam</option>
                    <option>Sikhism</option>
                    <option>Christianity</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Age</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Height</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Height"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Mind</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Mind"
                    name="mind"
                    value={formData.mind}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Desire</label>
                  <textarea
                    className="form-control"
                    placeholder="Enter Desire"
                    name="desire"
                    value={formData.desire}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="form-column">
            <div className="form-card">
              <div className="form-inputs">
                <div className="form-group">
                  <label className="form-label">Weight</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Weight"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Adct</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Adct"
                    name="adct"
                    value={formData.adct}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Swt</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Swt"
                    name="swt"
                    value={formData.swt}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Tng</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Tng"
                    name="tng"
                    value={formData.tng}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">N.Gl.</label>
                  <select
                    className="form-select"
                    name="nGl"
                    value={formData.nGl}
                    onChange={handleChange}
                  >
                    <option disabled selected>
                      N.Gl.
                    </option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">B.P.</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter B.P."
                    name="bp"
                    value={formData.bp}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">P.R/T.</label>
                  <select
                    className="form-select"
                    name="prt"
                    value={formData.prt}
                    onChange={handleChange}
                  >
                    <option disabled selected>
                      P.R/T.
                    </option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">HC</label>
                  <select
                    className="form-select"
                    name="hc"
                    value={formData.hc}
                    onChange={handleChange}
                  >
                    <option disabled selected>
                      HC
                    </option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Chest</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Chest"
                    name="chest"
                    value={formData.chest}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">P/H</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter P/H"
                    name="ph"
                    value={formData.ph}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">F/H</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter F/H"
                    name="fh"
                    value={formData.fh}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="complain-section">
        <div className="complain-group">
          <label htmlFor="complain" className="form-label">
            Complain
          </label>
          <textarea
            id="complain"
            className="form-control"
            rows="5"
            placeholder="Enter Complain"
            name="complain"
            value={formData.complain}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* PrescriptionDetail */}
        <div className="wrap">
          <div className="prescriptionDetails">
            <label>
              Date
              <input
                type="date"
                name="prescriptionDate"
                value={formData.prescriptionDate}
                onChange={handleChange}
              />
            </label>
            <label>
              Follow Up
              <input
                type="text"
                placeholder="Enter Follow Up"
                name="followUp"
                value={formData.followUp}
                onChange={handleChange}
              />
            </label>
            <label>
              Rx.
              <textarea
                placeholder="Rx."
                name="rx"
                value={formData.rx}
                onChange={handleChange}
              ></textarea>
            </label>
            <label>
              Medicine Course
              <input
                type="text"
                placeholder="Medicine Course"
                name="medicineCourse"
                value={formData.medicineCourse}
                onChange={handleChange}
              />
            </label>
            <label>
              Days
              <input
                type="text"
                placeholder="Days"
                name="days"
                value={formData.days}
                onChange={handleChange}
              />
            </label>
            <div className="button">
              <IoBagAddSharp />
            </div>
          </div>
        </div>

        <div className="button-group">
          <button className="btn">
            <MdOutlineFirstPage />
          </button>
          <button className="btn">
            <GrFormPrevious />
          </button>
          <button className="btn">
            <MdOutlineNavigateNext />
          </button>
          <button className="btn">
            <MdLastPage />
          </button>
          <button className="btn">
            <IoIosCreate />
          </button>
          <button className="btn" onClick={handleSave}>
            <CiSaveDown1 />
          </button>
          <button className="btn">
            <RiFileEditLine />
          </button>
          <button className="btn">
            <MdDeleteSweep />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
