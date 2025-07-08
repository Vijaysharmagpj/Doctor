import React, { useEffect, useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import Footer from "./Footer";
import Navbar from "./Navbar";
import axios from "axios";
import toast from "react-hot-toast";

const Firstaid = () => {
  const [firstAidData, setfirstAidData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [formData, setFormData] = useState({
    search: "",
    diseaseName: "",
    medicineName: "",
    dosage: "",
    timing: "",
  });

  const [diseaseNameMaster, setdiseaseNameMaster] = useState({
    masterdiseaseName: "",
  });

  const [diseaseOptions, setDiseaseOptions] = useState([]);

  const [selectedDiseaseData, setSelectedDiseaseData] = useState(null);

  useEffect(() => {
    const fetchDisease = async () => {
      try {
        let res = await axios.get(
          "http://localhost:4000/api/doctor/getfirstAid"
        );
        const uniqueDiseases = [
          ...new Set(res.data.data.map((item) => item.diseaseName)),
        ];
        setDiseaseOptions(uniqueDiseases);
      } catch (error) {
        console.error("Error fetching diseases:", error);
      }
    };
    fetchDisease();
  }, []);

  // Handle input changes and update the state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchMedicineForDisease = async () => {
      if (!formData.diseaseName) {
        setSelectedDiseaseData(null);
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:4000/api/doctor/getfirstAid?search=${formData.diseaseName}`
        );
        if (response.data?.data?.length > 0) {
          const matched = response.data.data.find(
            (item) =>
              item.diseaseName.toLowerCase() ===
              formData.diseaseName.toLowerCase()
          );
          setSelectedDiseaseData(matched || null);
        } else {
          setSelectedDiseaseData(null);
        }
      } catch (error) {
        console.error("Error fetching medicines:", error);
      }
    };

    fetchMedicineForDisease();
  }, [formData.diseaseName]);

  // handlediseaseNameChange
  const handlediseaseNameChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setdiseaseNameMaster((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(diseaseNameMaster);
  };

  const handleDisease = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/doctor/firstAid",
        {
          diseaseName: diseaseNameMaster.masterdiseaseName,
        }
      );
      if (response.data) {
        setdiseaseNameMaster({
          diseaseNameMaster: "",
        });
        toast.success("Medicine added successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  // Handle form submit (for adding medicine)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:4000/api/doctor/updatefirstAid/${selectedDiseaseData._id}`,
        {
          medicineName: formData.medicineName,
          dosage: formData.dosage,
          timing: formData.timing,
        }
      );

      if (response.data.success) {
        toast.success("Medicine updated successfully");

        setFormData({
          search: "",
          diseaseName: "",
          medicineName: "",
          dosage: "",
          timing: "",
        });
      }
    } catch (error) {
      console.error("Update failed", error);
      toast.error("Failed to update medicine");
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const fetchFirstAidData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:4000/api/doctor/getfirstAid?search=${searchTerm}`
          );
          setfirstAidData(response.data.data);
        } catch (error) {
          console.log(error);
        }
      };

      if (searchTerm.trim() !== "") {
        fetchFirstAidData();
      } else {
        setfirstAidData([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  return (
    <>
      <Navbar />
      <div className="bg-[#000814] text-gray-300 py-12 px-4">
        <div className="container mx-auto space-y-12">
          {/* Search Section */}
          <div className="text-center mt-[50px]">
            <h1 className="text-4xl font-bold text-[#18BCFC] mb-4">
              Search Medicine
            </h1>
            <p className="text-lg mb-6">Search Medicine According To Disease</p>
            <div className="flex justify-center items-center space-x-4 bg-[#001D3D] p-4 rounded-lg shadow-lg">
              <input
                type="text"
                placeholder="Search..."
                name="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent border-2 border-[#FA6A28] text-white p-2 rounded-md focus:outline-none"
              />
              <MdOutlineSearch className="text-[#FA6A28] text-2xl" />
            </div>

            {searchTerm.trim() !== "" &&
            Array.isArray(firstAidData) &&
            firstAidData.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {firstAidData
                  .filter((item) =>
                    item.diseaseName
                      ?.toLowerCase()
                      .includes(searchTerm.trim().toLowerCase())
                  )
                  .map((item, index) => (
                    <div
                      key={index}
                      className="bg-[#003566] border border-[#FA6A28] rounded-xl shadow-lg p-4 text-white hover:scale-105 transition-transform duration-300"
                    >
                      <div>
                        <p className="text-lg font-semibold text-[#FA6A28] mb-2">
                          Medicines
                        </p>
                        {item.medications && item.medications.length > 0 ? (
                          item.medications.map((med, i) => (
                            <div
                              key={i}
                              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm text-white border-b border-[#FA6A28] pb-3 mb-3 px-2"
                            >
                              <div className="flex flex-col items-start sm:items-center sm:flex-row gap-4 w-full justify-between">
                                <div className="flex flex-col items-start">
                                  <span className="text-[#FA6A28] font-semibold">
                                    Disease
                                  </span>
                                  <span>{item.diseaseName}</span>
                                </div>
                                <div className="flex flex-col items-start">
                                  <span className="text-[#FFD60A] font-semibold">
                                    Medicine
                                  </span>
                                  <span>{med.medicineName}</span>
                                </div>
                                <div className="flex flex-col items-start">
                                  <span className="text-[#18BCFC] font-semibold">
                                    Dosage
                                  </span>
                                  <span>{med.dosage}</span>
                                </div>
                                <div className="flex flex-col items-start">
                                  <span className="text-[#FF6A3D] font-semibold">
                                    Timing
                                  </span>
                                  <span>{med.timing}</span>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="text-gray-400">No medicines found</p>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              searchTerm.trim() !== "" && (
                <p className="text-white mt-4">No results found</p>
              )
            )}
          </div>

          {/* add medicine section */}
          <div className="text-center flex flex-col lg:flex-row justify-center gap-8 items-start">
            {/* Left Column: Add Disease + List */}
            <div className="w-full lg:w-1/2 space-y-5">
              {/* Add Disease Section */}
              <h2 className="text-3xl font-bold text-[#18BCFC] mb-4">
                Medicines for Selected Disease
              </h2>
              <p className="text-lg mb-6">
                Available Medicines for the Selected Disease
              </p>
              <div className="bg-[#001D3D] p-6 rounded-lg shadow-md">
                <form onSubmit={handleDisease}>
                  <input
                    type="text"
                    name="masterdiseaseName"
                    onChange={handlediseaseNameChange}
                    value={diseaseNameMaster.masterdiseaseName}
                    placeholder="Enter Disease"
                    className="w-full bg-transparent border-2 border-[#FA6A28] text-white p-3 mb-4 rounded-md focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#FFD60A] text-black py-3 rounded-md font-semibold hover:bg-[#FFC300] transition duration-300"
                  >
                    Add Disease
                  </button>
                </form>
              </div>

              {/* List of Existing Medicine */}
              <h2 className="text-3xl font-bold text-[#18BCFC] mb-4">
                List of Medicines for Selected Disease
              </h2>
              <div className="bg-[#001D3D] border border-[#FA6A28] rounded-lg p-6 shadow-md text-white">
                {selectedDiseaseData ? (
                  selectedDiseaseData.medications.length > 0 ? (
                    selectedDiseaseData.medications.map((med, index) => (
                      <div key={index} className="mb-3">
                        <p>
                          <span className="text-[#FFD60A] font-semibold">
                            Disease:
                          </span>{" "}
                          {selectedDiseaseData.diseaseName} &nbsp;
                          <span className="text-[#FA6A28] font-semibold">
                            Medicine:
                          </span>{" "}
                          {med.medicineName} &nbsp;
                          <span className="text-[#18BCFC] font-semibold">
                            Dosage:
                          </span>{" "}
                          {med.dosage} &nbsp;
                          <span className="text-[#FF6A3D] font-semibold">
                            Timing:
                          </span>{" "}
                          {med.timing}
                        </p>
                        <hr className="border-t border-[#FA6A28] mt-2" />
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-400">
                      No medicines found for this disease.
                    </p>
                  )
                ) : (
                  <p className="text-gray-400">
                    Select a disease to view medicines.
                  </p>
                )}
              </div>
            </div>

            {/* Right Column: Add Medicine */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-[#18BCFC] mb-4">
                Add Medicine
              </h2>
              <p className="text-lg mb-6">Add Medicine According To Disease</p>
              <form
                className="bg-[#001D3D] p-8 rounded-lg shadow-lg mx-auto mb-[10px]"
                onSubmit={handleSubmit}
              >
                <select
                  name="diseaseName"
                  value={formData.diseaseName}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-[#001D3D] text-white border-2 border-[#FA6A28] p-3 mb-4 rounded-md focus:outline-none"
                >
                  <option value="" disabled className="bg-[#001D3D] text-white">
                    Select Disease
                  </option>
                  {diseaseOptions.map((disease, index) => (
                    <option
                      key={index}
                      value={disease}
                      className="bg-[#001D3D] text-white"
                    >
                      {disease}
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  required
                  placeholder="Enter Medicine"
                  name="medicineName"
                  value={formData.medicineName}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-2 border-[#FA6A28] text-white p-3 mb-6 rounded-md focus:outline-none"
                />
                <input
                  type="text"
                  required
                  placeholder="Enter Dosage"
                  name="dosage"
                  value={formData.dosage}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-2 border-[#FA6A28] text-white p-3 mb-6 rounded-md focus:outline-none"
                />
                <input
                  type="text"
                  required
                  placeholder="Enter Timing"
                  name="timing"
                  value={formData.timing}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-2 border-[#FA6A28] text-white p-3 mb-6 rounded-md focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full bg-[#FFD60A] text-black py-3 rounded-md font-semibold hover:bg-[#FFC300] transition duration-300"
                >
                  Add Medicine
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Firstaid;
