import React, { useCallback, useEffect, useState } from "react";
import { api } from "../api";

const getAuthHeaders = () => ({
  Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
});

const AllConsultants = () => {
  const [consultants, setConsultants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionId, setActionId] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const fetchConsultants = useCallback(async () => {
    try {
      setErrorMsg("");
      const res = await api.get("/api/consultants", {
        headers: getAuthHeaders(),
      });
      setConsultants(res.data);
    } catch (error) {
      console.error("Error fetching consultants:", error.message);
      setErrorMsg("Could not load consultations. Please login again.");
    } finally {
      setLoading(false);
    }
  }, []);

  const updateCompleted = async (id, completed) => {
    try {
      setActionId(id);
      setErrorMsg("");
      const res = await api.patch(
        `/api/consultants/${id}`,
        { completed },
        { headers: getAuthHeaders() }
      );

      setConsultants((current) =>
        current.map((consultant) =>
          consultant._id === id ? res.data : consultant
        )
      );
    } catch (error) {
      console.error("Error updating consultant:", error.message);
      setErrorMsg("Could not update this consultation.");
    } finally {
      setActionId("");
    }
  };

  const deleteConsultant = async (id) => {
    const shouldDelete = window.confirm("Delete this consultation permanently?");
    if (!shouldDelete) return;

    try {
      setActionId(id);
      setErrorMsg("");
      await api.delete(`/api/consultants/${id}`, {
        headers: getAuthHeaders(),
      });

      setConsultants((current) =>
        current.filter((consultant) => consultant._id !== id)
      );
    } catch (error) {
      console.error("Error deleting consultant:", error.message);
      setErrorMsg("Could not delete this consultation.");
    } finally {
      setActionId("");
    }
  };

  useEffect(() => {
    fetchConsultants();
  }, [fetchConsultants]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-3xl font-bold text-orange-400 md:text-4xl">
          All Consultation Submissions
        </h1>

        {errorMsg && (
          <div className="mb-5 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {errorMsg}
          </div>
        )}

        {loading ? (
          <p className="text-white/70">Loading data...</p>
        ) : consultants.length === 0 ? (
          <p className="text-white/70">No submissions found.</p>
        ) : (
          <div className="overflow-x-auto rounded-2xl bg-gray-800 shadow-lg">
            <table className="min-w-full table-auto text-sm md:text-base">
              <thead className="bg-orange-600 text-left text-white">
                <tr>
                  <th className="px-4 py-3">#</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Phone</th>
                  <th className="px-4 py-3">Interest</th>
                  <th className="px-4 py-3">Message</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Submitted At</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {consultants.map((c, index) => (
                  <tr
                    key={c._id}
                    className={`border-b border-gray-700 transition duration-200 hover:bg-gray-700/50 ${
                      c.completed ? "bg-emerald-950/30 text-white/70" : ""
                    }`}
                  >
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className={`px-4 py-2 ${c.completed ? "line-through" : ""}`}>
                      {c.name}
                    </td>
                    <td className="px-4 py-2">{c.email}</td>
                    <td className="px-4 py-2">{c.phone}</td>
                    <td className="px-4 py-2">{c.interest}</td>
                    <td className="px-4 py-2">
                      {c.message ? (
                        c.message
                      ) : (
                        <span className="text-gray-400 italic">None</span>
                      )}
                    </td>
                    <td className="px-4 py-2">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                          c.completed
                            ? "bg-emerald-500/15 text-emerald-300"
                            : "bg-amber-500/15 text-amber-300"
                        }`}
                      >
                        {c.completed ? "Completed" : "Pending"}
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      {new Date(c.createdAt).toLocaleString()}
                    </td>
                    <td className="px-4 py-2">
                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          disabled={actionId === c._id}
                          onClick={() => updateCompleted(c._id, !c.completed)}
                          className={`rounded-md px-3 py-1.5 text-xs font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-60 ${
                            c.completed
                              ? "bg-slate-600 hover:bg-slate-500"
                              : "bg-emerald-600 hover:bg-emerald-500"
                          }`}
                        >
                          {c.completed ? "Undo" : "Complete"}
                        </button>
                        <button
                          type="button"
                          disabled={actionId === c._id}
                          onClick={() => deleteConsultant(c._id)}
                          className="rounded-md bg-red-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          Delete
                        </button>
                      </div>
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
