import React, { useEffect, useState } from "react";
import axios from "axios";
import report from "../../../Patient/src/assets/report.png";

const PatientPDF = () => {
  const [patientList, setPatientLists] = useState([]);

  const fetchPatientList = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/doctor/getTreatment");
      if (res.data.success) {
        setPatientLists(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPatientList();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] to-[#ffffff] px-4 py-6 md:px-12 text-black">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-white p-6 rounded-xl shadow-lg mb-6 border border-blue-100">
        {/* Doctor Info */}
        <div className="space-y-1 text-left text-sm md:text-base">
          <p className="text-2xl font-bold text-blue-900">👨‍⚕️ Dr. P.K. Sharma</p>
          <p>B.Sc. B.H.M.S. (Hons), Kolkata</p>
          <p className="text-blue-700">Medical Officer, Sadar Hospital, Gopalganj</p>
          <p className="text-gray-700">📞 7870396996</p>
        </div>

        {/* Report Image */}
        <div className="my-4 md:my-0">
          <img
            src={report}
            alt="Report"
            className="w-28 h-auto object-contain mix-blend-multiply contrast-125"
          />
        </div>

        {/* Clinic Info */}
        <div className="text-right text-sm md:text-base space-y-1">
          <p>📍 <span className="text-blue-900 font-medium">Jadopur Road, Gopalganj</span></p>
          <p>🧾 Pincode: 841428</p>
          <p>🗓️ Mon - Sat: <strong>4 PM – 8 PM</strong></p>
          <p>🗓️ Sunday: <strong>10 AM – 6 PM</strong></p>
        </div>
      </div>

      {/* Lecturer Note */}
      <div className="bg-[#e0ecff] text-center p-3 rounded-lg shadow text-sm font-medium text-blue-800 mb-8">
        🎓 Ex-Lecturer — R.D.K Homeopathic Medical College & Hospital, Motihari
      </div>

      {/* Patient Records */}
      {patientList.length > 0 ? (
        patientList.map((patient, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md mb-8 border-l-4 border-blue-500"
          >
            <h2 className="text-xl font-semibold text-blue-700 mb-4 border-b border-blue-200 pb-2">
              📄 Patient Record #{index + 1}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm leading-6 text-gray-700">
              <p><strong>🔖 Ref. No:</strong> {patient.refNo}</p>
              <p><strong>👤 Name:</strong> {patient.name}</p>
              <p><strong>🏠 Address:</strong> {patient.address}</p>
              <p><strong>🩺 Thir:</strong> {patient.thir}</p>
              <p><strong>📅 App:</strong> {patient.app}</p>
              <p><strong>⚧️ Gender:</strong> {patient.gender}</p>
              <p><strong>🕊️ Religion:</strong> {patient.religion}</p>
              <p><strong>🎂 Age:</strong> {patient.age}</p>
              <p><strong>📏 Height:</strong> {patient.height}</p>
              <p><strong>🧠 Mind:</strong> {patient.mind}</p>
              <p><strong>🗓️ Date:</strong> {patient.date ? new Date(patient.date).toLocaleDateString("en-GB") : "-"}</p>
              <p><strong>🍽️ Desire:</strong> {patient.desire}</p>
              <p><strong>⚖️ Weight:</strong> {patient.weight}</p>
              <p><strong>🩻 Adct:</strong> {patient.adct}</p>
              <p><strong>💦 Swt:</strong> {patient.swt}</p>
              <p><strong>👅 Tng:</strong> {patient.tng}</p>
              <p><strong>🫁 NGl:</strong> {patient.ngl}</p>
              <p><strong>🩸 BP:</strong> {patient.bp}</p>
              <p><strong>🧪 Prt:</strong> {patient.prt}</p>
              <p><strong>🩹 Hc:</strong> {patient.hc}</p>
              <p><strong>📐 Chest:</strong> {patient.chest}</p>
              <p><strong>🧬 Ph:</strong> {patient.ph}</p>
              <p><strong>🧬 Fh:</strong> {patient.fh}</p>
              <p><strong>💬 Complain:</strong> {patient.complain}</p>
              <p><strong>📆 Prescription Date:</strong> {patient.prescriptionDate ? new Date(patient.prescriptionDate).toLocaleDateString("en-GB") : "-"}</p>
              <p><strong>📌 Follow-Up:</strong> {patient.followUp}</p>
              <p><strong>💊 Rx:</strong> {patient.rx}</p>
              <p><strong>🗒️ Medicine Course:</strong> {patient.medicineCourse}</p>
              <p><strong>📅 Days:</strong> {patient.days}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 mt-10">No patient data found.</p>
      )}
    </div>
  );
};

export default PatientPDF;
