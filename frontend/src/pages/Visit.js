import React, { useEffect, useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import { motion } from "framer-motion";
import { api } from "../api";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const emptyStats = {
  visits: 0,
  last24h: 0,
  last7d: 0,
  last30d: 0,
  clicks: 0,
  clicks24h: 0,
  clicks7d: 0,
  clicks30d: 0,
};

const VisitCounter = () => {
  const [data, setData] = useState(emptyStats);
  const [displayedVisits, setDisplayedVisits] = useState(0);

  useEffect(() => {
    api
      .get("/api/public-visit-count-only")
      .then((res) => {
        setData({ ...emptyStats, ...res.data });
        animateCounter(0, res.data.visits || 0);
      })
      .catch((err) => console.error("Visit fetch error:", err.message));
  }, []);

  const animateCounter = (start, end) => {
    let current = start;
    const increment = Math.max(1, Math.ceil((end - start) / 40));
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
        backgroundColor: ["#06b6d4", "#f3f4f6"],
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
        backgroundColor: ["#e11d48", "#f97316", "#10b981"],
        borderRadius: 10,
        barThickness: 30,
      },
    ],
  };

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-12 md:grid-cols-3">
      <div className="relative col-span-1 overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#1e3a8a] p-8 text-white shadow-2xl">
        <div className="mb-6 flex items-center gap-4">
          <span className="text-3xl text-cyan-400">Views</span>
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

        <div className="mt-8 space-y-2 text-base font-medium">
          <p><span className="font-semibold text-cyan-300">Last 24 Hours:</span> {data.last24h}</p>
          <p><span className="font-semibold text-cyan-300">Last 7 Days:</span> {data.last7d}</p>
          <p><span className="font-semibold text-cyan-300">Last 30 Days:</span> {data.last30d}</p>
          <p><span className="font-semibold text-cyan-300">Total Clicks:</span> {data.clicks}</p>
        </div>
      </div>

      <div className="col-span-1 flex flex-col justify-center rounded-3xl bg-white p-8 shadow-xl">
        <h3 className="mb-6 text-center text-2xl font-semibold text-gray-800">Weekly Visit Trend</h3>
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
                },
              },
            }}
          />
        </div>
      </div>

      <div className="col-span-1 flex flex-col items-center justify-center rounded-3xl bg-white p-8 shadow-xl">
        <h3 className="mb-6 text-2xl font-semibold text-gray-800">Goal Progress (1000 Visits)</h3>
        <div className="relative h-36 w-36">
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
        <div className="mt-5 text-center text-sm font-semibold text-gray-600">
          Clicks 24H / 7D / 30D: {data.clicks24h} / {data.clicks7d} / {data.clicks30d}
        </div>
      </div>
    </div>
  );
};

export default VisitCounter;
