import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../"

const AllConsultants = () => {
  const [consultants, setConsultants] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchConsultants = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const res = await axios.get("https://mine-vertex.onrender.com/api/consultants", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setConsultants(res.data);
    } catch (error) {
      console.error("Error fetching consultants:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConsultants();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-orange-400">
          📋 All Consultation Submissions
        </h1>

        {loading ? (
          <p className="text-white/70">Loading data...</p>
        ) : consultants.length === 0 ? (
          <p className="text-white/70">No submissions found.</p>
        ) : (
          <div className="overflow-x-auto bg-gray-800 rounded-2xl shadow-lg">
            <table className="min-w-full table-auto text-sm md:text-base">
              <thead className="bg-orange-600 text-white text-left">
                <tr>
                  <th className="py-3 px-4">#</th>
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">Phone</th>
                  <th className="py-3 px-4">Interest</th>
                  <th className="py-3 px-4">Message</th>
                  <th className="py-3 px-4">Submitted At</th>
                </tr>
              </thead>
              <tbody>
                {consultants.map((c, index) => (
                  <tr
                    key={c._id}
                    className="border-b border-gray-700 hover:bg-gray-700/50 transition duration-200"
                  >
                    <td className="py-2 px-4">{index + 1}</td>
                    <td className="py-2 px-4">{c.name}</td>
                    <td className="py-2 px-4">{c.email}</td>
                    <td className="py-2 px-4">{c.phone}</td>
                    <td className="py-2 px-4">{c.interest}</td>
                    <td className="py-2 px-4">
                      {c.message ? c.message : <span className="text-gray-400 italic">None</span>}
                    </td>
                    <td className="py-2 px-4">
                      {new Date(c.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllConsultants;
