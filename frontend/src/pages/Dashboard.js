import React from 'react';
import AnalyticsSection from "./AnalyticsStats";
import Visit from './Visit';

const Dashboard = () => {
  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500">
          Admin Dashboard
        </h1>

        <div className="rounded-2xl shadow-xl p-6 bg-gray-800 border border-gray-700 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 ease-in-out">
          <Visit />
          <AnalyticsSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
