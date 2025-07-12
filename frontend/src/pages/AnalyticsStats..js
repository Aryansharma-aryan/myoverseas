import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

const AnalyticsStats = () => {
  const [analytics, setAnalytics] = useState({
    today: null,
    last7days: null,
    last30days: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/analytics");
        setAnalytics(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching analytics:", err);
        setError("❌ Failed to fetch analytics data.");
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  const chartData = [
    { name: "Today", Users: parseInt(analytics.today || 0) },
    { name: "Last 7 Days", Users: parseInt(analytics.last7days || 0) },
    { name: "Last 30 Days", Users: parseInt(analytics.last30days || 0) },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8 rounded-xl shadow-2xl max-w-2xl mx-auto mt-10 border-2 border-yellow-500">
      <h2 className="text-3xl font-extrabold mb-6 text-yellow-400 text-center tracking-wide">
        📊 Website Visitors Analytics
      </h2>

      {loading ? (
        <p className="text-gray-300 text-center">Loading analytics...</p>
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-8">
            <div className="bg-gray-800 p-5 rounded-lg shadow border border-green-500">
              <p className="text-lg">👁️ <strong>Today</strong></p>
              <p className="text-2xl font-bold text-green-400">{analytics.today}</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg shadow border border-blue-500">
              <p className="text-lg">📆 <strong>Last 7 Days</strong></p>
              <p className="text-2xl font-bold text-blue-400">{analytics.last7days}</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg shadow border border-pink-500">
              <p className="text-lg">🗓️ <strong>Last 30 Days</strong></p>
              <p className="text-2xl font-bold text-pink-400">{analytics.last30days}</p>
            </div>
          </div>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="name" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Legend />
                <Bar dataKey="Users" fill="#facc15" barSize={50} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
};

export default AnalyticsStats;
