import React from "react";
import Navbar from "./Navbar";
import BookAppointmentListimg from "../../src/assets/bookappointmentlist.gif";

const BookAppointmentList = () => {
  return (
    <>
      <Navbar />
      <div className="p-6 min-h-screen" style={{ backgroundColor: "#171C26" }}>
        <h2 className="text-3xl font-bold text-center mb-6 mt-[40px]" style={{ color: "#E2B609" }}>
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
                <tr className="hover:bg-gray-800">
                  <td className="p-3 border-b border-gray-600 text-center">1</td>
                  <td className="p-3 border-b border-gray-600 text-center">John Doe</td>
                  <td className="p-3 border-b border-gray-600 text-center">John Doe</td>
                  <td className="p-3 border-b border-gray-600 text-center">2024-11-24</td>
                  <td className="p-3 border-b border-gray-600 text-center text-green-500">
                    Confirmed
                  </td>
                  <td className="p-3 border-b border-gray-600 text-center text-green-500">
                    Confirmed
                  </td>
                  <td className="p-3 border-b border-gray-600 text-center text-green-500">
                    Confirmed
                  </td>
                </tr>
                <tr className="hover:bg-gray-800">
                  <td className="p-3 border-b border-gray-600 text-center">2</td>
                  <td className="p-3 border-b border-gray-600 text-center">Jane Smith</td>
                  <td className="p-3 border-b border-gray-600 text-center">Jane Smith</td>
                  <td className="p-3 border-b border-gray-600 text-center">2024-11-25</td>
                  <td className="p-3 border-b border-gray-600 text-center text-yellow-500">
                    Pending
                  </td>
                  <td className="p-3 border-b border-gray-600 text-center text-yellow-500">
                    Pending
                  </td>
                  <td className="p-3 border-b border-gray-600 text-center text-yellow-500">
                    Pending
                  </td>
                </tr>
                <tr className="hover:bg-gray-800">
                  <td className="p-3 border-b border-gray-600 text-center">3</td>
                  <td className="p-3 border-b border-gray-600 text-center">Michael Brown</td>
                  <td className="p-3 border-b border-gray-600 text-center">Michael Brown</td>
                  <td className="p-3 border-b border-gray-600 text-center">2024-11-26</td>
                  <td className="p-3 border-b border-gray-600 text-center text-red-500">
                    Cancelled
                  </td>
                  <td className="p-3 border-b border-gray-600 text-center text-red-500">
                    Cancelled
                  </td>
                  <td className="p-3 border-b border-gray-600 text-center text-red-500">
                    Cancelled
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookAppointmentList;
