import React, { useEffect, useState } from "react";
import axios from "axios";
import CountUp from "react-countup";
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
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip as ChartTooltip,
  Legend as ChartLegend,
} from "chart.js";

ChartJS.register(ArcElement, ChartTooltip, ChartLegend);

const AnalyticsStats = () => {
  const [analytics, setAnalytics] = useState({
    today: 0,
    last7days: 0,
    last30days: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchAnalytics = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get("https://myoverseas.onrender.com/api/analytics");
      setAnalytics(response.data);
    } catch (err) {
      console.error("Error fetching analytics:", err);
      setError("❌ Failed to fetch analytics data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const chartData = [
    { name: "Today", Users: parseInt(analytics.today || 0) },
    { name: "Last 7 Days", Users: parseInt(analytics.last7days || 0) },
    { name: "Last 30 Days", Users: parseInt(analytics.last30days || 0) },
  ];

  const doughnutData = {
    labels: ["Today", "Last 7 Days", "Last 30 Days"],
    datasets: [
      {
        label: "Visitors",
        data: [
          parseInt(analytics.today || 0),
          parseInt(analytics.last7days || 0),
          parseInt(analytics.last30days || 0),
        ],
        backgroundColor: ["#facc15", "#ef4444", "#22c55e"], // yellow, red, green
        borderColor: "#0f172a",
        borderWidth: 1,
        cutout: "80%", // Thin ring
      },
    ],
  };

  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white p-10 rounded-3xl shadow-2xl max-w-[95%] xl:max-w-7xl mx-auto mt-10 border border-yellow-400">
      <h2 className="text-4xl font-extrabold mb-8 text-yellow-400 text-center tracking-wide">
        📊 Overall Google Search
      </h2>

      <div className="flex justify-center mb-8">
        <button
          onClick={fetchAnalytics}
          className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-2 rounded-full shadow-md transition-all duration-300"
        >
          🔁 Refresh
        </button>
      </div>

      {loading ? (
        <p className="text-center text-gray-300">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <>
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-10">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-yellow-400">
              <p className="text-lg mb-2">👁️ <strong>Today</strong></p>
              <p className="text-3xl font-extrabold text-yellow-300">
                <CountUp end={parseInt(analytics.today)} duration={1.2} separator="," />
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-red-500">
              <p className="text-lg mb-2">📆 <strong>Last 7 Days</strong></p>
              <p className="text-3xl font-extrabold text-red-400">
                <CountUp end={parseInt(analytics.last7days)} duration={1.4} separator="," />
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-green-500">
              <p className="text-lg mb-2">🗓️ <strong>Last 30 Days</strong></p>
              <p className="text-3xl font-extrabold text-green-400">
                <CountUp end={parseInt(analytics.last30days)} duration={1.6} separator="," />
              </p>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Thin Doughnut Chart */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-center text-white">Visitors Distribution</h3>
              <div className="w-full sm:w-4/5 mx-auto">
                <Doughnut data={doughnutData} />
              </div>
            </div>

            {/* Bar Chart */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-center text-white">Bar Chart Overview</h3>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                  <XAxis dataKey="name" stroke="#cbd5e1" />
                  <YAxis stroke="#cbd5e1" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Users" fill="#facc15" barSize={40} radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AnalyticsStats;
