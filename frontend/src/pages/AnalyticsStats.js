import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Doughnut } from "react-chartjs-2";
import {
  ArcElement,
  Chart as ChartJS,
  Legend as ChartLegend,
  Tooltip as ChartTooltip,
} from "chart.js";
import { api } from "../api";

ChartJS.register(ArcElement, ChartTooltip, ChartLegend);

const emptyAnalytics = {
  today: 0,
  last7days: 0,
  last30days: 0,
  totalVisitors: 0,
  clicks: 0,
  clicks24h: 0,
  clicks7d: 0,
  clicks30d: 0,
  source: "website",
};

const AnalyticsStats = () => {
  const [analytics, setAnalytics] = useState(emptyAnalytics);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchAnalytics = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await api.get("/api/analytics");
      setAnalytics({ ...emptyAnalytics, ...response.data });
    } catch (err) {
      console.error("Error fetching analytics:", err);
      setError("Analytics data could not be loaded. Please refresh again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const chartData = [
    { name: "24 Hours", Visitors: Number(analytics.today || 0) },
    { name: "7 Days", Visitors: Number(analytics.last7days || 0) },
    { name: "30 Days", Visitors: Number(analytics.last30days || 0) },
  ];

  const doughnutData = {
    labels: ["24 Hours", "7 Days", "30 Days"],
    datasets: [
      {
        label: "Visitors",
        data: [
          Number(analytics.today || 0),
          Number(analytics.last7days || 0),
          Number(analytics.last30days || 0),
        ],
        backgroundColor: ["#facc15", "#ef4444", "#22c55e"],
        borderColor: "#0f172a",
        borderWidth: 1,
        cutout: "78%",
      },
    ],
  };

  return (
    <div className="mx-auto mt-10 max-w-[95%] rounded-3xl border border-yellow-400 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] p-6 text-white shadow-2xl xl:max-w-7xl lg:p-10">
      <h2 className="mb-3 text-center text-3xl font-extrabold tracking-wide text-yellow-400 lg:text-4xl">
        Website Analytics
      </h2>
      <p className="mb-8 text-center text-sm text-slate-300">
        Source: {analytics.source === "google" ? "Google Analytics + website tracker" : "Website tracker"}
      </p>

      <div className="mb-8 flex justify-center">
        <button
          onClick={fetchAnalytics}
          className="rounded-full bg-yellow-400 px-6 py-2 font-semibold text-black shadow-md transition-all duration-300 hover:bg-yellow-300"
        >
          Refresh
        </button>
      </div>

      {loading ? (
        <p className="text-center text-gray-300">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-400">{error}</p>
      ) : (
        <>
          <div className="mb-10 grid grid-cols-1 gap-6 text-center sm:grid-cols-3">
            <div className="rounded-xl border-l-4 border-yellow-400 bg-gray-800 p-6 shadow-lg">
              <p className="mb-2 text-lg font-semibold">Last 24 Hours</p>
              <p className="text-3xl font-extrabold text-yellow-300">
                <CountUp end={Number(analytics.today || 0)} duration={1.2} separator="," />
              </p>
            </div>
            <div className="rounded-xl border-l-4 border-red-500 bg-gray-800 p-6 shadow-lg">
              <p className="mb-2 text-lg font-semibold">Last 7 Days</p>
              <p className="text-3xl font-extrabold text-red-400">
                <CountUp end={Number(analytics.last7days || 0)} duration={1.4} separator="," />
              </p>
            </div>
            <div className="rounded-xl border-l-4 border-green-500 bg-gray-800 p-6 shadow-lg">
              <p className="mb-2 text-lg font-semibold">Last 30 Days</p>
              <p className="text-3xl font-extrabold text-green-400">
                <CountUp end={Number(analytics.last30days || 0)} duration={1.6} separator="," />
              </p>
            </div>
          </div>

          <div className="mb-10 grid grid-cols-1 gap-6 text-center sm:grid-cols-4">
            <div className="rounded-xl border border-cyan-500/30 bg-gray-800 p-5 shadow-lg">
              <p className="mb-2 text-sm text-gray-300">Total Visitors</p>
              <p className="text-2xl font-extrabold text-cyan-300">
                <CountUp end={Number(analytics.totalVisitors || 0)} duration={1.2} separator="," />
              </p>
            </div>
            <div className="rounded-xl border border-pink-500/30 bg-gray-800 p-5 shadow-lg">
              <p className="mb-2 text-sm text-gray-300">Total Clicks</p>
              <p className="text-2xl font-extrabold text-pink-300">
                <CountUp end={Number(analytics.clicks || 0)} duration={1.2} separator="," />
              </p>
            </div>
            <div className="rounded-xl border border-pink-500/30 bg-gray-800 p-5 shadow-lg">
              <p className="mb-2 text-sm text-gray-300">Clicks Last 24 Hours</p>
              <p className="text-2xl font-extrabold text-pink-300">{analytics.clicks24h || 0}</p>
            </div>
            <div className="rounded-xl border border-pink-500/30 bg-gray-800 p-5 shadow-lg">
              <p className="mb-2 text-sm text-gray-300">Clicks 7D / 30D</p>
              <p className="text-2xl font-extrabold text-pink-300">
                {analytics.clicks7d || 0} / {analytics.clicks30d || 0}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="rounded-xl border border-gray-700 bg-gray-800 p-6 shadow-lg">
              <h3 className="mb-4 text-center text-xl font-semibold text-white">Visitor Distribution</h3>
              <div className="mx-auto w-full sm:w-4/5">
                <Doughnut data={doughnutData} />
              </div>
            </div>

            <div className="rounded-xl border border-gray-700 bg-gray-800 p-6 shadow-lg">
              <h3 className="mb-4 text-center text-xl font-semibold text-white">Visitor Trend</h3>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                  <XAxis dataKey="name" stroke="#cbd5e1" />
                  <YAxis stroke="#cbd5e1" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Visitors" fill="#facc15" barSize={40} radius={[10, 10, 0, 0]} />
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
