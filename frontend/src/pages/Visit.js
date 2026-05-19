import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const VisitCounter = () => {
  const [data, setData] = useState({
    visits: 0,
    last24h: 0,
    last7d: 0,
    last30d: 0,
  });
  const [displayedVisits, setDisplayedVisits] = useState(0);

  useEffect(() => {
    const lastVisit = localStorage.getItem("lastVisitTime");
    const now = Date.now();

    if (!lastVisit || now - parseInt(lastVisit) > 2 * 60 * 60 * 1000) {
      localStorage.setItem("lastVisitTime", now);
      axios.get("https://myoverseas-jqx6.onrender.com/api/public-visit")
        .then(res => {
          setData(res.data);
          animateCounter(0, res.data.visits);
        })
        .catch(err => console.error("Visit counter error:", err.message));
    } else {
      axios.get("https://myoverseas-jqx6.onrender.com/api/public-visit-count-only")
        .then(res => {
          setData(res.data);
          animateCounter(0, res.data.visits);
        })
        .catch(err => console.error("Visit fetch error:", err.message));
    }
  }, []);

  const animateCounter = (start, end) => {
    let current = start;
    const increment = Math.ceil((end - start) / 40);
    const interval = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(interval);
      }
      setDisplayedVisits(current);
    }, 30);
  };

  const doughnutData = {
    labels: ["Visits", "Remaining to 1000"],
    datasets: [
      {
        data: [data.visits, Math.max(0, 1000 - data.visits)],
        backgroundColor: ["#06b6d4", "#f3f4f6"], // Cyan + Light gray
        borderColor: "#ffffff",
        borderWidth: 2,
        cutout: "75%",
      },
    ],
  };

  const barData = {
    labels: ["24H", "7D", "30D"],
    datasets: [
      {
        label: "Visits",
        data: [data.last24h, data.last7d, data.last30d],
        backgroundColor: ["#e11d48", "#f97316", "#10b981"], // Red-rose, orange, emerald
        borderRadius: 10,
        barThickness: 30,
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Total Visitors */}
      <div className="col-span-1 bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#1e3a8a] p-8 rounded-3xl shadow-2xl text-white relative overflow-hidden">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-cyan-400 text-3xl">👁️</span>
          <h2 className="text-2xl font-semibold tracking-wide">Total Website Visitors</h2>
        </div>
        <motion.h1
          className="text-6xl font-extrabold tracking-widest drop-shadow-2xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {displayedVisits}
        </motion.h1>

        <div className="mt-8 text-base space-y-2 font-medium">
          <p><span className="text-cyan-300 font-semibold">Last 24 Hours:</span> {data.last24h}</p>
          <p><span className="text-cyan-300 font-semibold">Last 7 Days:</span> {data.last7d}</p>
          <p><span className="text-cyan-300 font-semibold">Last 30 Days:</span> {data.last30d}</p>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="col-span-1 bg-white rounded-3xl shadow-xl p-8 flex flex-col justify-center">
        <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">📊 Weekly Visit Trend</h3>
        <div className="h-48">
          <Bar
            data={barData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { display: false } },
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: { stepSize: 1, color: "#6b7280" },
                  grid: { color: "#f3f4f6" },
                },
                x: {
                  ticks: { color: "#6b7280" },
                  grid: { display: false },
                }
              },
            }}
          />
        </div>
      </div>

      {/* Doughnut Chart */}
      <div className="col-span-1 bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center justify-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">🎯 Goal Progress (1000 Visits)</h3>
        <div className="w-36 h-36 relative">
          <Doughnut
            data={doughnutData}
            options={{
              plugins: { legend: { display: false } },
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-bold text-gray-700">{data.visits}/1000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitCounter;
