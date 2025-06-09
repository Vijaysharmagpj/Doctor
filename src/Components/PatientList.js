import React, { useEffect, useState } from "react";
import Patientlist from "../../src/assets/PatientList.jpg";
import Navbar from "./Navbar";
import { FaListOl } from "react-icons/fa";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { FaCloudDownloadAlt } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PatientPDF from "../Template/PatientPDF";

const PatientList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [patientList, setPatientLists] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPatientList = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/doctor/getTreatment"
      );
      if (res.data.success) {
        setPatientLists(res.data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPatientList();
  }, []);

  const handleViewModel = (patient) => {
    setSelectedPatient(patient);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.post(
        `http://localhost:4000/api/doctor/deleteTreatment/${id}`
      );
      if (res.data.success) {
        toast.success("Patient deleted successfully!");
        fetchPatientList();
      } else {
        toast.error("Patient not found.");
      }
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Failed to delete patient.");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="bg-[#000814] min-h-screen text-white p-4">
        <h1 className="text-2xl font-bold text-[#18BCFC] mb-6 text-center mt-[80px]">
          Patient List
        </h1>

        <div className="flex flex-col lg:flex-row items-center justify-between bg-[#C5B8FE] p-4 lg:px-20 rounded-md">
          <div className="mb-4 lg:mb-0">
            <h2 className="text-[#FA6A28] text-2xl lg:text-3xl font-bold">
              Hello
            </h2>
          </div>
          <div className="image-container">
            <img
              src={Patientlist}
              alt="Patient List Pic"
              className="image w-32 sm:w-40 lg:w-48 h-auto transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
        </div>
        <div className="mt-6 flex items-center gap-2">
          <input
            type="text"
            placeholder="Search patients..."
            className="flex-grow p-2 rounded border border-[#18BCFC] bg-[#000814] text-white focus:outline-none focus:ring-2 focus:ring-[#18BCFC]"
          />
          <button className="p-2 bg-[#18BCFC] text-black rounded hover:bg-[#0f92cc] focus:outline-none">
            Search
          </button>
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full table-auto text-left bg-[#000814] text-white rounded-md border border-[#18BCFC]">
            <thead className="bg-[#000814] text-white border-b border-[#18BCFC]">
              <tr>
                <th className="px-2 sm:px-4 py-2">Ref.No.</th>
                <th className="px-2 sm:px-4 py-2">Name</th>
                <th className="px-2 sm:px-4 py-2">Address</th>
                <th className="px-2 sm:px-4 py-2">Complain</th>
                <th className="px-2 sm:px-4 py-2">Date</th>
                <th className="px-2 sm:px-4 py-2">Medicine</th>
                <th className="px-2 sm:px-4 py-2">Course</th>
                <th className="px-2 sm:px-4 py-2">Days</th>
                <th className="px-2 sm:px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {patientList.map((patient, index) => (
                <tr key={index} className="border-b border-[#18BCFC]">
                  <td className="px-2 sm:px-4 py-2">{patient.refNo}</td>
                  <td className="px-2 sm:px-4 py-2">{patient.name}</td>
                  <td className="px-2 sm:px-4 py-2">{patient.address}</td>
                  <td className="px-2 sm:px-4 py-2">{patient.complain}</td>
                  <td className="px-2 sm:px-4 py-2">
                    {new Date(patient.date).toLocaleDateString("en-GB")}
                  </td>
                  <td className="px-2 sm:px-4 py-2">{patient.rx}</td>
                  <td className="px-2 sm:px-4 py-2">
                    {patient.medicineCourse}
                  </td>
                  <td className="px-2 sm:px-4 py-2">{patient.days}</td>
                  <td className="px-2 sm:px-4 py-2 flex gap-2">
                    <button
                      className="bg-[#18BCFC] text-black px-3 py-1 rounded hover:bg-[#0f92cc]"
                      onClick={() => handleViewModel(patient)}
                    >
                      <FaListOl />
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                      onClick={() => handleDelete(patient._id)}
                    >
                      <RiDeleteBin3Fill />
                    </button>
                    <PDFDownloadLink
                      document={<PatientPDF />}
                      fileName="Patient_Details.pdf"
                    >
                      {({ loading }) =>
                        loading ? (
                          <button
                            className="bg-gray-400 text-white px-3 py-1 rounded cursor-not-allowed"
                            disabled
                          >
                            Generating...
                          </button>
                        ) : (
                          <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700 flex items-center gap-2">
                            <FaCloudDownloadAlt />
                          </button>
                        )
                      }
                    </PDFDownloadLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Open a model on view button */}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#000814] text-white rounded-lg p-6 w-[90vw] max-w-6xl max-h-[80vh] overflow-auto border border-[#0F92CC]">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Patient Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center border border-[#0F92CC] p-2">
                <span className="font-bold w-1/3">Ref.No:</span>
                <span className="text-white ml-10">
                  {selectedPatient.refNo}
                </span>
              </div>
              <div className="flex items-center border border-[#0F92CC] p-2">
                <span className="font-bold w-1/3">Name:</span>
                <span className="text-white ml-10">{selectedPatient.name}</span>
              </div>
              <div className="flex items-center border border-[#0F92CC] p-2">
                <span className="font-bold w-1/3">Address:</span>
                <span className="text-white ml-10">
                  {selectedPatient.address}
                </span>
              </div>
              <div className="flex items-center border border-[#0F92CC] p-2">
                <span className="font-bold w-1/3">Thir:</span>
                <span className="text-white ml-10">{selectedPatient.thir}</span>
              </div>
              <div className="flex items-center border border-[#0F92CC] p-2">
                <span className="font-bold w-1/3">App:</span>
                <span className="text-white ml-10">{selectedPatient.app}</span>
              </div>
              <div className="flex items-center border border-[#0F92CC] p-2">
                <span className="font-bold w-1/3">Gender:</span>
                <span className="text-white ml-10">
                  {selectedPatient.gender}
                </span>
              </div>
              <div className="flex items-center border border-[#0F92CC] p-2">
                <span className="font-bold w-1/3">Religion:</span>
                <span className="text-white ml-10">
                  {selectedPatient.religion}
                </span>
              </div>
              <div className="flex items-center border border-[#0F92CC] p-2">
                <span className="font-bold w-1/3">Age:</span>
                <span className="text-white ml-10">{selectedPatient.age}</span>
              </div>
              <div className="flex items-center border border-[#0F92CC] p-2">
                <span className="font-bold w-1/3">Height:</span>
                <span className="text-white ml-10">
                  {selectedPatient.height}
                </span>
              </div>
              <div className="flex items-center border border-[#0F92CC] p-2">
                <span className="font-bold w-1/3">Mind:</span>
                <span className="text-white ml-10">{selectedPatient.mind}</span>
              </div>
              <div className="flex items-center border border-[#0F92CC] p-2">
                <span className="font-bold w-1/3">Date:</span>
                <span className="text-white ml-10">
                  {selectedPatient?.date
                    ? new Date(selectedPatient.date).toLocaleDateString("en-GB")
                    : "-"}
                </span>
              </div>
              <div className="flex items-center border border-[#0F92CC] p-2">
                <span className="font-bold w-1/3">Desire:</span>
                <span className="text-white ml-10">
                  {selectedPatient.desire}
                </span>
              </div>
              <div className="flex items-center border border-[#0F92CC] p-2">
                <span className="font-bold w-1/3">Weight:</span>
                <span className="text-white ml-10">
                  {selectedPatient.weight}
                </span>
              </div>
              <div className="flex items-center border border-[#0F92CC] p-2">
                <span className="font-bold w-1/3">Adct:</span>
                <span className="text-white ml-10">{selectedPatient.adct}</span>
              </div>
              <div className="flex items-center border border-[#0F92CC] p-2">
                <span className="font-bold w-1/3">Swt:</span>
                <span className="text-white ml-10">{selectedPatient.swt}</span>
              </div>
              <div className="flex items-center border border-[#0F92CC] p-2">
                <span className="font-bold w-1/3">Tng:</span>
                <span className="text-white ml-10">{selectedPatient.tng}</span>
              </div>
              <div className="flex items-center border border-[#0F92CC] p-2">
                <span className="font-bold w-1/3">NGl:</span>
                <span className="text-white ml-10">{selectedPatient.ngl}</span>
              </div>
              <div className="flex items-center border border-[#0F92CC] p-2">
                <span className="font-bold w-1/3">BP:</span>
                <span className="text-white ml-10">{selectedPatient.bp}</span>
              </div>
              <div className="flex items-center border border-[#0F92CC] p-2">
                <span className="font-bold w-1/3">Prt:</span>
                <span className="text-white ml-10">{selectedPatient.prt}</span>
              </div>
              <div className="flex items-center border border-[#0F92CC] p-2">
                <span className="font-bold w-1/3">Hc:</span>
                <span className="text-white ml-10">{selectedPatient.hc}</span>
              </div>
              <div className="flex items-center border border-[#0F92CC] p-2">
                <span className="font-bold w-1/3">Chest:</span>
                <span className="text-white ml-10">
                  {selectedPatient.chest}
                </span>
              </div>
              <div className="flex items-center border border-[#0F92CC] p-2">
                <span className="font-bold w-1/3">Ph:</span>
                <span className="text-white ml-10">{selectedPatient.ph}</span>
              </div>
              <div className="flex items-center border border-[#0F92CC] p-2">
                <span className="font-bold w-1/3">Fh:</span>
                <span className="text-white ml-10">{selectedPatient.fh}</span>
              </div>
              <div className="flex items-center border border-[#0F92CC] p-2">
                <span className="font-bold w-1/3">Complain:</span>
                <span className="text-white ml-10">
                  {selectedPatient.complain}
                </span>
              </div>
              <div className="flex items-center border border-[#0F92CC] p-2">
                <span className="font-bold w-1/3">Prescription Date:</span>
                <span className="text-white ml-10">
                  {selectedPatient?.date
                    ? new Date(
                        selectedPatient.prescriptionDate
                      ).toLocaleDateString("en-GB")
                    : "-"}
                </span>
              </div>
              <div className="flex items-center border border-[#0F92CC] p-2">
                <span className="font-bold w-1/3">Follow-Up:</span>
                <span className="text-white ml-10">
                  {selectedPatient.followUp}
                </span>
              </div>
              <div className="flex items-center border border-[#0F92CC] p-2">
                <span className="font-bold w-1/3">Rx:</span>
                <span className="text-white ml-10">{selectedPatient.rx}</span>
              </div>
              <div className="flex items-center border border-[#0F92CC] p-2">
                <span className="font-bold w-1/3">Medicine Course:</span>
                <span className="text-white ml-10">
                  {selectedPatient.medicineCourse}
                </span>
              </div>
              <div className="flex items-center border border-[#0F92CC] p-2">
                <span className="font-bold w-1/3">Days:</span>
                <span className="text-white ml-10">{selectedPatient.days}</span>
              </div>
            </div>
            <button
              onClick={handleCloseModal}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PatientList;
