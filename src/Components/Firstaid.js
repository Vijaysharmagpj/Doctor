import React, { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import Footer from "./Footer";

const Firstaid = () => {
  // State to manage both search and add medicine
  const [formData, setFormData] = useState({
    search: "",
    disease: "",
    medicine: "",
  });

  // Handle input changes and update the state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submit (for adding medicine)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Added Medicine: ", formData);
    // You can handle the submission logic here
  };

  return (
    <>
      <div className="container">
        {/* Search Section */}
        <div className="search">
          <p>Search Medicine According To Disease</p>
          <input
            type="text"
            placeholder="Search..."
            name="search"
          />
          <MdOutlineSearch />
        </div>

        {/* Add Medicine Section */}
        <form className="add_medicine" onSubmit={handleSubmit}>
          <p>Add Medicine According To Disease</p>
          <input
            type="text"
            placeholder="Enter Disease"
            name="disease"
            value={formData.disease}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Enter Medicine"
            name="medicine"
            value={formData.medicine}
            onChange={handleInputChange}
          />
          <button type="submit">Add Medicine</button>
        </form>
        <Footer/>
      </div>
    </>
  );
};

export default Firstaid;
