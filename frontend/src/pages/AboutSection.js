import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaPlaneDeparture,
  FaUserGraduate,
  FaUniversity,
  FaGlobe,
} from "react-icons/fa";

// Single Stat Card
const StatCard = ({ icon: Icon, end, suffix, label }) => (
  <motion.div
    whileHover={{ scale: 1.07, rotate: 1 }}
    className="w-full h-44 p-6 rounded-2xl bg-gradient-to-br from-[#1e1e2f]/60 to-[#2e2e3f]/40 border border-white/10 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.3)] text-white flex flex-col items-center justify-center transition-all duration-300"
  >
    <div className="bg-white/10 p-4 rounded-full mb-3 shadow-inner shadow-white/20">
      <Icon className="text-4xl text-yellow-300 drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]" />
    </div>
    <h4 className="text-3xl font-extrabold tracking-wide font-[Poppins] drop-shadow-md">
      <CountUp
        end={end}
        duration={2.5}
        suffix={suffix}
        enableScrollSpy
        scrollSpyDelay={200}
      />
    </h4>
    <p className="text-center text-sm mt-1 font-medium font-[Poppins] opacity-90">
      {label}
    </p>
  </motion.div>
);

// Main About Section
export default function AboutSection() {
  return (
    <section className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 py-20 px-4 sm:px-8 md:px-16 text-white font-[Poppins] relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">

        {/* LEFT Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white text-black p-8 sm:p-10 rounded-3xl shadow-2xl w-full md:w-1/2"
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-orange-600 uppercase tracking-wider">
            About Us
          </h3>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-snug text-[#0a1f3c] font-[Poppins] drop-shadow-[0_3px_5px_rgba(0,0,0,0.3)]">
            Your Global Education Partner – Vertex Study Visa
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed font-[Poppins]">
            At Vertex Study Visa, we are passionate about helping students and professionals achieve their global ambitions. With years of experience and a highly qualified team, we provide personalized visa consultation, documentation support, and language training. We believe in transparent service, ethical guidance, and long-term success for our clients.
          </p>
          <button className="bg-[#0a1f3c] text-white px-6 py-3 rounded-xl hover:bg-[#132b47] transition-all duration-300 shadow-lg font-[Poppins]">
            START YOUR VISA JOURNEY TODAY
          </button>
        </motion.div>

        {/* RIGHT Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:w-1/2">
          <StatCard
            icon={FaPlaneDeparture}
            end={12000}
            suffix="+"
            label="Study Visas Approved Globally"
          />
          <StatCard
            icon={FaGlobe}
            end={16}
            suffix="+"
            label="Years of Expertise in Visa Consultation"
          />
          <StatCard
            icon={FaUserGraduate}
            end={1000}
            suffix="+"
            label="Successful Tourist & Visitor Visa Cases"
          />
          <StatCard
            icon={FaUniversity}
            end={50}
            suffix="+"
            label="Partnered Colleges & Universities Worldwide"
          />
        </div>
      </div>
    </section>
  );
}
