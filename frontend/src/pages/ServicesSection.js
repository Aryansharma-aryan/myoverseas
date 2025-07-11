import React, { useState, useEffect } from "react";
import {
  FaPlane,
  FaMapMarkedAlt,
  FaHome,
  FaChalkboardTeacher,
  FaBriefcase,
  FaFileAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Images
import studyVisaImg from "../assets/study.jpg";
import touristVisaImg from "../assets/Touristt.jpg";
import prVisaImg from "../assets/pr.avif";
import ieltsImg from "../assets/Ielts.avif";
import workVisaImg from "../assets/workVisa.webp";

const baseServices = [
  {
    title: "Study Visa",
    short: "Expert guidance for student visas to Canada, Australia, UK, and more.",
    icon: <FaPlane className="text-3xl text-yellow-300" />,
    image: studyVisaImg,
  },
  {
    title: "Tourist Visa",
    short: "We assist with travel visa documentation and embassy appointments.",
    icon: <FaMapMarkedAlt className="text-3xl text-blue-400" />,
    image: touristVisaImg,
  },
  {
    title: "Permanent Residency (PR)",
    short: "Explore PR pathways for countries like Canada and Australia.",
    icon: <FaHome className="text-3xl text-emerald-400" />,
    image: prVisaImg,
  },
  {
    title: "IELTS/PTE Coaching",
    short: "Boost your fluency, confidence, and exam strategies.",
    icon: <FaChalkboardTeacher className="text-3xl text-pink-400" />,
    image: ieltsImg,
  },
  {
    title: "Work Visa",
    short: "Professional visa solutions tailored for your career goals.",
    icon: <FaBriefcase className="text-3xl text-purple-400" />,
    image: workVisaImg,
  },
  {
    title: "Document Assistance",
    short: "We help prepare all required documents for your visa journey.",
    icon: <FaFileAlt className="text-3xl text-amber-300" />,
    image: touristVisaImg,
  },
];

const ServicesSection = () => {
  const [expanded, setExpanded] = useState({});
  const [services, setServices] = useState(baseServices);

  useEffect(() => {
    fetch("/data/servicesContent.json")
      .then((res) => res.json())
      .then((data) => {
        const enriched = baseServices.map((service) => {
          const fullEntry = data.find((d) => d.title === service.title);
          return {
            ...service,
            full: fullEntry?.full || service.short,
          };
        });
        setServices(enriched);
      })
      .catch(() => {
        setServices(baseServices);
      });
  }, []);

  const toggleExpand = (index) =>
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] relative">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
          ✨ Our Premium Services
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          End-to-end support for Study, Travel, Work, PR, and Language Coaching.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 p-6 text-white shadow-[0_8px_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_#f472b6] transition-all duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover rounded-xl mb-5 shadow-lg"
            />
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-white/10 rounded-full shadow-inner">
                {service.icon}
              </div>
            </div>
            <h3 className="text-center text-2xl font-bold text-yellow-300 mb-2 drop-shadow-md">
              {service.title}
            </h3>
            <p className="text-center text-sm text-gray-300 leading-relaxed mb-4">
              {expanded[index] ? service.full : service.short}
            </p>
            <div className="text-center">
              <button
                onClick={() => toggleExpand(index)}
                className="text-pink-400 hover:text-pink-300 font-semibold text-sm transition hover:scale-105"
              >
                {expanded[index] ? "Show Less ▲" : "Read More ▼"}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
