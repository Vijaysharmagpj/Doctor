import React, { useState } from "react";
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
import Navbar from "./Navbar";
import axios from "axios";
import { toast } from "react-hot-toast";

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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    let newError={}
    
    if(!formData.refNo.trim()){
      newError.refNo = "Ref.No is required";
    }

    if(!formData.name.trim()){
      newError.name="Name is required";
    }

    if(!formData.address.trim()){
      newError.address="Address is required";
    }

    if(!formData.gender.trim()){
      newError.address="Address is required";
    }

    if(!formData.age.trim()){
      newError.age="Age is required";
    }

    if(!formData.desire.trim()){
      newError.desire="Desire is required"
    }

    if(!formData.weight.trim()){
      newError.weight="Weight is required"
    }

    if(!formData.bp.trim()){
      newError.bp="BP is required"
    }

    if(!formData.complain.trim()){
      newError.complain="Complain is required"
    }

    if(!formData.prescriptionDate.trim()){
      newError.prescriptionDate="Prescription Date is required";
    }

    if(!formData.followUp.trim()){
      newError.followUp="Follow up is required";
    }

    if(!formData.rx.trim()){
      newError.rx="Rx is required";
    }

    if(!formData.medicineCourse.trim()){
      newError.medicineCourse="Medicine Course is required";
    }

    if(!formData.days.trim()){
      newError.days="Days is required";
    }

    if (Object.keys(newError).length > 0) {
      setErrors(newError);
      toast.error("Please fill all required fields");
      return;
    }
    console.log("Form Data Saved:", formData);
    try {
      const url = "http://localhost:4000/api/doctor/treatment";
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("Report Add Successfully");
      setFormData({
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
      setErrors({});
    } catch (error) {
      toast.error("Add Report Again");
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-4 space-y-8 bg-[#171C26] text-white">
        <div className="text-center mt-[50px]">
          <h1 className="text-2xl font-bold">SHARMA HOMEO CLINIC</h1>
        </div>

        <div className="space-y-4">
          {/* First Section */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block font-medium">Ref.No.</label>
                <input
                  type="text"
                  placeholder="Enter Ref.No"
                  name="refNo"
                  value={formData.refNo}
                  required
                  onChange={handleChange}
                  className="w-full p-2 bg-[#1a2632] text-white border rounded-md bg-lightblue-100 text-white-800 border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
                {errors.refNo && <p className="text-red-500 text-sm">{errors.refNo}</p>}
              </div>
              <div className="space-y-2 ">
                <label className="block font-medium">Search by Ref.No.</label>
                <input
                  type="text"
                  placeholder="Search Ref.No"
                  // value={searchRefNo}
                  // onChange={handleSearchRefNoChange}
                  className="w-full bg-[#1a2632] text-white p-2 border rounded-md bg-lightblue-100 text-white-800 border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div className="space-y-2">
                <label className="block font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 bg-[#1a2632] text-white border rounded-md bg-lightblue-100 text-white-800 border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div className="space-y-2 ">
                <label className="block font-medium">Search by Name</label>
                <input
                  type="text"
                  placeholder="Search Name"
                  // value={searchName}
                  // onChange={handleSearchNameChange}
                  className="w-full p-2 bg-[#1a2632] text-white border rounded-md bg-lightblue-100 text-white-800 border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block font-medium">Address</label>
              <textarea
                className="w-full bg-[#1a2632] text-white p-2 border rounded-md bg-lightblue-100 text-white-800 border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                placeholder="Enter Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              ></textarea>
              {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block font-medium">Thir</label>
                <select
                  className="w-full bg-[#1a2632] text-white p-2 border rounded-md bg-lightblue-100 text-white-800 border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  name="thir"
                  value={formData.thir}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Thir
                  </option>
                  <option>+</option>
                  <option>++</option>
                  <option>+++</option>
                  <option>++++</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block font-medium">App</label>
                <select
                  className="w-full bg-[#1a2632] text-white p-2 border rounded-md bg-lightblue-100 text-white-800 border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  name="app"
                  value={formData.app}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    App
                  </option>
                  <option>Ok</option>
                  <option>Less</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block font-medium">Gender</label>
                <select
                  className="w-full bg-[#1a2632] text-white p-2 border rounded-md bg-lightblue-100 text-white-800 border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Gender
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Transgender</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block font-medium">Religion</label>
                <select
                  className="w-full bg-[#1a2632] text-white p-2 border rounded-md bg-lightblue-100 text-white-800 border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  name="religion"
                  value={formData.religion}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Religion
                  </option>
                  <option>Hinduism</option>
                  <option>Islam</option>
                  <option>Sikhism</option>
                  <option>Christianity</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block font-medium">Age</label>
                <input
                  type="text"
                  placeholder="Enter Age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full bg-[#1a2632] text-white p-2 border rounded-md bg-lightblue-100 text-white-800 border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
                {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
              </div>
              <div className="space-y-2">
                <label className="block font-medium">Height</label>
                <input
                  type="number"
                  placeholder="Enter Height"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  className="w-full bg-[#1a2632] text-white p-2 border rounded-md bg-lightblue-100 text-white-800 border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block font-medium">Mind</label>
                <input
                  type="text"
                  placeholder="Enter Mind"
                  name="mind"
                  value={formData.mind}
                  onChange={handleChange}
                  className="w-full bg-[#1a2632] text-white p-2 border rounded-md bg-lightblue-100 text-white-800 border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div className="space-y-2">
                <label className="block font-medium">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-[#1a2632] text-white p-2 border rounded-md bg-lightblue-100 text-white-800 border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block font-medium">Desire</label>
              <textarea
                className="w-full bg-[#1a2632] text-white p-2 border rounded-md bg-lightblue-100 text-white-800 border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                placeholder="Enter Desire"
                name="desire"
                value={formData.desire}
                onChange={handleChange}
              ></textarea>
              {errors.desire && <p className="text-red-500 text-sm">{errors.desire}</p>}
            </div>
          </div>

          {/* Second Section */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block font-medium">Weight</label>
                <input
                  type="text"
                  placeholder="Enter Weight"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  className="w-full bg-[#1a2632] text-white p-2 border rounded-md bg-lightblue-100 text-white-800 border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
                {errors.weight && <p className="text-red-500 text-sm">{errors.weight}</p>}
              </div>
              <div className="space-y-2">
                <label className="block font-medium">Adct</label>
                <input
                  type="text"
                  placeholder="Enter Adct"
                  name="adct"
                  value={formData.adct}
                  onChange={handleChange}
                  className="w-full bg-[#1a2632] text-white p-2 border rounded-md bg-lightblue-100 text-white-800 border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block font-medium">Swt</label>
                <input
                  type="text"
                  placeholder="Enter Swt"
                  name="swt"
                  value={formData.swt}
                  onChange={handleChange}
                  className="w-full bg-[#1a2632] text-white p-2 border rounded-md bg-lightblue-100 text-white-800 border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div className="space-y-2">
                <label className="block font-medium">Tng</label>
                <input
                  type="text"
                  placeholder="Enter Tng"
                  name="tng"
                  value={formData.tng}
                  onChange={handleChange}
                  className="w-full bg-[#1a2632] text-white p-2 border rounded-md bg-lightblue-100 text-white-800 border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block font-medium">NGl</label>
                <input
                  type="text"
                  placeholder="Enter NGl"
                  name="nGl"
                  value={formData.nGl}
                  onChange={handleChange}
                  className="w-full bg-[#1a2632] text-white p-2 border rounded-md bg-lightblue-100 text-white-800 border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div className="space-y-2">
                <label className="block font-medium">BP</label>
                <input
                  type="text"
                  placeholder="Enter BP"
                  name="bp"
                  value={formData.bp}
                  onChange={handleChange}
                  className="w-full bg-[#1a2632] text-white p-2 border rounded-md bg-lightblue-100 text-white-800 border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
                {errors.bp && <p className="text-red-500 text-sm">{errors.bp}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block font-medium">Prt</label>
                <input
                  type="text"
                  placeholder="Enter Prt"
                  name="prt"
                  value={formData.prt}
                  onChange={handleChange}
                  className="w-full bg-[#1a2632] text-white p-2 border rounded-md bg-lightblue-100 text-white-800 border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div className="space-y-2">
                <label className="block font-medium">Hc</label>
                <input
                  type="text"
                  placeholder="Enter Hc"
                  name="hc"
                  value={formData.hc}
                  onChange={handleChange}
                  className="w-full bg-[#1a2632] text-white p-2 border rounded-md bg-lightblue-100 text-white-800 border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block font-medium">Chest</label>
                <input
                  type="text"
                  placeholder="Enter Chest"
                  name="chest"
                  value={formData.chest}
                  onChange={handleChange}
                  className="w-full bg-[#1a2632] text-white p-2 border rounded-md bg-lightblue-100 text-white-800 border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div className="space-y-2">
                <label className="block font-medium">Ph</label>
                <input
                  type="text"
                  placeholder="Enter Ph"
                  name="ph"
                  value={formData.ph}
                  onChange={handleChange}
                  className="w-full bg-[#1a2632] text-white p-2 border rounded-md bg-lightblue-100 text-white-800 border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block font-medium">Fh</label>
                <input
                  type="text"
                  placeholder="Enter Fh "
                  name="fh"
                  value={formData.fh}
                  onChange={handleChange}
                  className="w-full bg-[#1a2632] text-white p-2 border rounded-md bg-lightblue-100 text-white-800 border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
            </div>
            <br />
            <div className="space-y-2">
              <label className="block font-medium">Complain</label>
              <textarea
                id="complain"
                className="w-full bg-[#1a2632] text-white p-2 border rounded-md bg-lightblue-100 text-white-800 border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                rows="5"
                placeholder="Enter Complain"
                name="complain"
                value={formData.complain}
                onChange={handleChange}
              ></textarea>
              {errors.complain && <p  className="text-red-500 text-sm">{errors.complain}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block font-medium">Prescription Date</label>
                <input
                  type="date"
                  name="prescriptionDate"
                  value={formData.prescriptionDate}
                  onChange={handleChange}
                  className="w-full bg-[#1a2632] text-white p-2 border rounded-md bg-lightblue-100 text-white-800 border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
                {errors.prescriptionDate && <p className="text-red-500 text-sm">{errors.prescriptionDate}</p>}
              </div>
              <div className="space-y-2">
                <label className="block font-medium">Follow-Up</label>
                <input
                  type="text"
                  placeholder="Enter Follow-Up"
                  name="followUp"
                  value={formData.followUp}
                  onChange={handleChange}
                  className="w-full bg-[#1a2632] text-white p-2 border rounded-md bg-lightblue-100 text-white-800 border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
                {errors.followUp && <p className="text-red-500 text-sm">{errors.followUp}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block font-medium">Rx</label>
              <textarea
                placeholder="Enter Rx"
                name="rx"
                value={formData.rx}
                onChange={handleChange}
                className="w-full bg-[#1a2632] text-white p-2 border rounded-md bg-lightblue-100 text-white-800 border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                rows="5" 
              ></textarea>
              {errors.rx && <p className="text-red-500 text-sm">{errors.rx}</p>}
            </div>

            <div className="space-y-2">
              <label className="block font-medium">Medicine Course</label>
              <input
                type="text"
                placeholder="Enter Medicine Course"
                name="medicineCourse"
                value={formData.medicineCourse}
                onChange={handleChange}
                className="w-full bg-[#1a2632] text-white p-2 border rounded-md bg-lightblue-100 text-white-800 border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              {errors.medicineCourse && <p className="text-red-500 text-sm">{errors.medicineCourse}</p>}
            </div>

            <div className="space-y-2">
              <label className="block font-medium">Days</label>
              <input
                type="text"
                placeholder="Enter Days"
                name="days"
                value={formData.days}
                onChange={handleChange}
                className="w-full bg-[#1a2632] text-white p-2 border rounded-md bg-lightblue-100 text-white-800 border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              {errors.days && <p className="text-red-500 text-sm">{errors.days}</p>}
            </div>

            {/* Button Section */}
            <div className="flex justify-center space-x-4 mt-8">
              <button className="flex items-center bg-[#8C031C] text-white p-2 md:p-4 rounded-lg">
                <MdOutlineFirstPage />
              </button>
              <button className="flex items-center bg-[#8C031C] text-white p-2 md:p-4 rounded-lg">
                <GrFormPrevious />
              </button>
              <button className="flex items-center bg-[#8C031C] text-white p-2 md:p-4 rounded-lg">
                <MdOutlineNavigateNext />
              </button>
              <button className="flex items-center bg-[#8C031C] text-white p-2 md:p-4 rounded-lg">
                <MdLastPage />
              </button>
              <button className="flex items-center bg-yellow-500 text-white p-2 md:p-4 rounded-lg">
                <IoIosCreate />
              </button>
              <button
                className="flex items-center bg-green-800 text-white p-2 md:p-4 rounded-lg"
                onClick={handleSave}
              >
                <CiSaveDown1 />
              </button>
              <button className="flex items-center bg-[#FB2E01] text-white p-2 md:p-4 rounded-lg">
                <RiFileEditLine />
              </button>
              <button className="flex items-center bg-red-600 text-white p-2 md:p-4 rounded-lg">
                <MdDeleteSweep />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Treatment;
