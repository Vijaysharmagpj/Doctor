import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import BookAppointmentListimg from "../../src/assets/bookappointmentlist.gif";
import axios from "axios";

const BookAppointmentList = () => {
  const [appointmentDataList, setAppointmentDataList] = useState([]);

  useEffect(() => {
    const fetchBookAppointmentDetail = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/doctor/getBookAppointment"
        );
        if (res.data.success) {
          const validAppointments = res.data.data.filter((appointment) => {
            const today = new Date();
            const [hours, minutes] = appointment.time.split(":");
            const appointmentDateTime = new Date(appointment.date);
            appointmentDateTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);

            return appointmentDateTime >= today;
          });

          setAppointmentDataList(validAppointments);
        }
      } catch (error) {
        console.log("Error occur in get book appointment", error);
      }
    };

    fetchBookAppointmentDetail();
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-6 min-h-screen" style={{ backgroundColor: "#171C26" }}>
        <h2
          className="text-3xl font-bold text-center mb-6 mt-[70px]"
          style={{ color: "#E2B609" }}
        >
          Book Appointment List
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Image Section */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={BookAppointmentListimg}
              alt="bookappointmentlist"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Table Section */}
          <div className="w-full overflow-x-auto">
            <table
              className="table-auto w-full rounded-lg shadow-md text-gray-300"
              style={{ backgroundColor: "#171C26" }}
            >
              <thead className="bg-gray-700 text-gray-300 uppercase text-sm">
                <tr>
                  <th className="p-3 border-b border-gray-600">Name</th>
                  <th className="p-3 border-b border-gray-600">Email</th>
                  <th className="p-3 border-b border-gray-600">Phone</th>
                  <th className="p-3 border-b border-gray-600">Date</th>
                  <th className="p-3 border-b border-gray-600">Time</th>
                  <th className="p-3 border-b border-gray-600">Doctor</th>
                  <th className="p-3 border-b border-gray-600">Disease</th>
                </tr>
              </thead>
              <tbody>
                {appointmentDataList.map((appointmentList, index) => (
                  <tr key={index} className="hover:bg-gray-800">
                    <td className="p-3 border-b border-gray-600 text-center">
                      {appointmentList.name}
                    </td>
                    <td className="p-3 border-b border-gray-600 text-center">
                      {appointmentList.email}
                    </td>
                    <td className="p-3 border-b border-gray-600 text-center">
                      {appointmentList.phoneNumber}
                    </td>
                    <td className="p-3 border-b border-gray-600 text-center">
                      {new Date(appointmentList.date).toLocaleDateString("en-GB")}
                    </td>
                    <td className="p-3 border-b border-gray-600 text-center">
                      {appointmentList.time}
                    </td>
                    <td className="p-3 border-b border-gray-600 text-center">
                      {appointmentList.doctor}
                    </td>
                    <td className="p-3 border-b border-gray-600 text-center">
                      {appointmentList.Disease}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookAppointmentList;
