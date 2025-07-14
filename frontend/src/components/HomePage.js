import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Dashboard from "../pages/Dashboard"

import {
  FaFacebookF,
  
  FaInstagram,
  
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

// Assets
import logo from "../assets/vertexlogo.png";
import hero from "../assets/heroo.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";

// Section Components
import AboutSection from "../pages/AboutSection";
import WhyChooseVertex from "../pages/WhyChoose";
import ServicesSection from "../pages/ServicesSection";
import FounderSection from "../pages/Founder";
import GuidanceSection from "../pages/GuidanceSection";
import CountriesWeServe from "../pages/Countries";
import TestPreparation from "../pages/TestPrepration";
import SuccessStory from "../pages/SuccessStory";
import ConsultationSection from "../pages/Faq";
import Team from "../pages/Team";
import { TfiDashboard } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";

const socialIcons = [
  {
    Icon: FaFacebookF,
    color: "#1877F2",
    name: "Facebook",
    link: "https://www.facebook.com/share/1AnvUeVz2P/"
  },
  {
    Icon: FaInstagram,
    color: "#E4405F",
    name: "Instagram",
    link: "https://www.instagram.com/vertex_study_visa_kkr?igsh=eWdvZHdzemFnMjBs"
  },
  {
    Icon: FaWhatsapp,
    color: "#25D366",
    name: "WhatsApp",
    link: "https://wa.me/919996140555"
  }
];

export default function HomePage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Add custom styles for animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
      }
      @keyframes float-delayed {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-15px) rotate(-180deg); }
      }
      @keyframes float-slow {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-10px) rotate(90deg); }
      }
      @keyframes float-fast {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-25px) rotate(-90deg); }
      }
      @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      @keyframes shimmer-reverse {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
      @keyframes shimmer-vertical {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(100%); }
      }
      @keyframes shimmer-vertical-reverse {
        0% { transform: translateY(100%); }
        100% { transform: translateY(-100%); }
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      .animate-float-delayed {
        animation: float-delayed 4s ease-in-out infinite 1s;
      }
      .animate-float-slow {
        animation: float-slow 8s ease-in-out infinite 2s;
      }
      .animate-float-fast {
        animation: float-fast 3s ease-in-out infinite 0.5s;
      }
      .animate-shimmer {
        animation: shimmer 3s ease-in-out infinite;
      }
      .animate-shimmer-reverse {
        animation: shimmer-reverse 3s ease-in-out infinite 1s;
      }
      .animate-shimmer-vertical {
        animation: shimmer-vertical 4s ease-in-out infinite 0.5s;
      }
      .animate-shimmer-vertical-reverse {
        animation: shimmer-vertical-reverse 4s ease-in-out infinite 1.5s;
      }
      .perspective-1000 {
        perspective: 1000px;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  const typewriterWords = [
    "Vertex Study Visa",
    "Study in Canada 🇨🇦",
    "Australia Admissions 🇦🇺",
    "USA, UK & Europe ",
    "Visa Experts & PR Guidance",
  ];

  const [typewriterKey, setTypewriterKey] = useState(0);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
  }, [isSidebarOpen]);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    setIsAdmin(!!token); // Set admin state based on token presence
  }, []);

  const backgroundImages = [hero, hero2, hero3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    backgroundImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/test-preparation", label: "Test Preparation" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/Faq", label: "FAQ" },
    { path: "/team", label: "Team" },
    {path: "/admin/dashboard", label: "Dashboard"},
    { path: "/admin/login", label: "Login" },
  ];

  return (
<div className="font-sans text-white isolate overflow-x-hidden max-w-screen">
    <div className="relative min-h-screen overflow-hidden bg-[#000000]">
      <AnimatePresence>
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.5)",
            }}
          />
        </motion.div>
      </AnimatePresence>
<div className="relative z-10 flex flex-col min-h-screen bg-white/10 backdrop-blur-[2px]">
          {/* Topbar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-4 sm:px-6 py-2 border-b border-gray-700 bg-[#0a0a0a] text-sm sm:text-base">
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 w-full">
              {/* Phone Info */}
              <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base">
                <span className="text-lg">📞</span>
                <span className="text-[#00c97d] font-semibold">Phone:</span>
                <a href="tel:+918053555546" className="text-[#ffd3a3] font-bold">8053555546</a>

                {/* Divider only for sm and up */}
                <span className="hidden sm:inline mx-1 text-[#00c97d] font-bold">|</span>

                <a href="tel:+919996140555" className="text-[#ffd3a3] font-bold">9996140555</a>
              </div>

              {/* Email Info */}
              <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base">
                <span>📧</span>
                <span className="text-orange-400 font-semibold">Email:</span>
                <a 
                  href="mailto:vertexstudyvisa@gmail.com" 
                  className="text-yellow-300 font-semibold break-all sm:break-normal"
                >
                  vertexstudyvisa@gmail.com
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center sm:justify-end gap-4 text-xl pt-2 sm:pt-0">
              {socialIcons.map(({ Icon, color, name, link }, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                  style={{ color }}
                  aria-label={name}
                  title={name}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Header */}
          <header className="flex items-center justify-between p-4">
            <motion.img
              src={logo}
              alt="Vertex Logo"
              className="w-32 sm:w-39 object-contain"
              whileHover={{ scale: 1.05 }}
            />
            <div onClick={toggleSidebar} className="text-3xl text-orange-400 cursor-pointer">
              <FaBars />
            </div>
          </header>

          {/* Sidebar */}
          <AnimatePresence>
            {isSidebarOpen && (
              <motion.aside
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 right-0 w-64 h-full overflow-y-auto bg-[#121e2d] text-white z-50 shadow-xl flex flex-col p-6 gap-6"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <img src={logo} alt="Vertex Logo" className="w-24 object-contain" />
                    <FaTimes
                      onClick={toggleSidebar}
                      className="text-2xl text-white cursor-pointer hover:text-red-400 transition"
                    />
                  </div>
                  

                   <nav className="flex flex-col gap-4">
                    {navLinks.map(({ path, label }, i) => {
                      if (label === "Login") {
                        return isAdmin ? (
                          <>
                            <Link
                              key="admin-link"
                              to="/admin/consultants"
                              onClick={toggleSidebar}
                              className="text-white font-bold hover:text-orange-400 text-lg transition"
                            >
                              Client Enquiries
                            </Link>
                            <button
                              key="logout"
                              onClick={() => {
                                localStorage.removeItem("adminToken");
                                setIsAdmin(false);
                                toggleSidebar();
                                window.location.reload(); // optional for hard reset
                              }}
                              className="mt-2 px-5 py-3 bg-[tomato] text-white rounded-lg font-semibold hover:bg-red-600 transition"
                            >
                              Logout
                            </button>
                          </>
                        ) : (
                          <Link
                            key={i}
                            to={path}
                            onClick={toggleSidebar}
                            className="px-5 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition"
                          >
                            {label}
                          </Link>
                          
                        );
                      }
                      if (label === "Dashboard") {
    return (
      <Link
        key={i}
        to={path}
        onClick={toggleSidebar}
        className="px-5 py-3 bg-cyan-900 text-cyan-300 border border-cyan-400 rounded-lg font-semibold hover:bg-cyan-800 transition animate-pulse"
      >
        {label}
      </Link>
    );
  }

                      return (
                        <Link
                          key={i}
                          to={path}
                          onClick={toggleSidebar}
                          className="text-white font-bold hover:text-orange-400 text-lg transition"
                        >
                          {label}
                        </Link>
                      );
                    })}
                    <Link to="/quote" onClick={toggleSidebar}>
                      <button className="mt-4 w-full px-5 py-3 text-white font-semibold bg-orange-500 hover:bg-orange-600 rounded-lg transition">
                        Get A Quote
                      </button>
                    </Link>
                  </nav>
                </div>

                <div className="text-sm mt-8 border-t pt-4 border-white/20 space-y-2">
                  <p>📞 <span className="text-[#ffd3a3] font-bold">8053555546</span></p>
                  <p>📞 <span className="text-[#ffd3a3] font-bold">9996140555</span></p>
                  <p>📧 <a href="mailto:vertexstudyvisa@gmail.com" className="text-yellow-300 font-semibold">vertexstudyvisa@gmail.com</a></p>
                </div>
              </motion.aside>
            )}
          </AnimatePresence>
          
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center flex-1 px-4 py-8 text-center relative"
          >
            <h2 className="text-[20px] sm:text-[26px] md:text-[32px] lg:text-[38px] xl:text-[42px] font-extrabold mb-4 text-center leading-snug drop-shadow-[2px_2px_5px_rgba(0,0,0,0.6)]">
              Achieve Your Dream to Study Abroad with
              <span
                className="
                  ml-2 inline-block
                  bg-gradient-to-r from-orange-400 via-yellow-400 to-pink-500
                  bg-[length:200%_200%] bg-clip-text text-transparent
                  animate-colorShift animate-pulseGlow font-extrabold
                "
              >
                Vertex Study Visa
              </span>
            </h2>

            {/* Centered Typewriter text */}
            <div className="w-full max-w-4xl mx-auto mb-8">
              <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-tight font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FFA500] via-[#FF7F50] to-white text-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={typewriterKey}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.25, 0.8, 0.25, 1], // elegant ease
                    }}
                    className="inline-block min-h-[3rem] sm:min-h-[4rem] md:min-h-[5rem] lg:min-h-[6rem] xl:min-h-[7rem] flex items-center justify-center"
                  >
                    <Typewriter
                      words={typewriterWords}
                      loop={Infinity}
                      cursor
                      cursorStyle="|"
                      typeSpeed={50}
                      deleteSpeed={40}
                      delaySpeed={1000}
                      onLoopDone={() => setTypewriterKey(prev => prev + 1)}
                    />
                  </motion.span>
                </AnimatePresence>
              </h1>
            </div>

            <p className="text-white text-lg max-w-2xl mb-10 leading-relaxed font-bold drop-shadow-[2px_2px_3px_rgba(0,0,0,0.8)]">
              We specialize in <span className="text-[#FF6B00] font-extrabold">Study Visas</span>, 
              <span className="text-[#EAAA00] font-extrabold"> Tourist Visas</span>, and 
              <span className="text-[#C71585] font-extrabold"> Permanent Residency (PR)</span> guidance.
            </p>

            <Link to="/consultant">
             <button className="relative px-8 py-4 text-white font-semibold text-lg rounded-xl overflow-hidden transition duration-300 hover:scale-105 backdrop-blur-md border border-transparent group">
  
  {/* Outer gradient border with subtle animated glow */}
  <span className="absolute inset-0 rounded-xl p-[2px] bg-[linear-gradient(to_right,_orange_70%,_tomato_85%,_pink)] z-0 animate-pulse"></span>
  
  {/* Inner background with smooth glow effect on hover */}
  <span className="absolute inset-[2px] rounded-[0.75rem] bg-[rgba(255,99,71,0.3)] backdrop-blur-md z-10 shadow-[0_0_10px_2px_rgba(255,99,71,0.5)] group-hover:shadow-[0_0_20px_5px_rgba(255,99,71,0.7)] transition-all duration-300"></span>
  
  {/* Text animation on hover */}
  <span className="relative z-20 transition-transform duration-300 group-hover:scale-110 group-hover:text-yellow-300">GET FREE CONSULTATION</span>
</button>

            </Link>
          </motion.section>
        </div>
      </div>

      {/* Section Stack */}
      {[AboutSection, WhyChooseVertex, ServicesSection, FounderSection, GuidanceSection, CountriesWeServe, TestPreparation, Team, SuccessStory,Dashboard, ConsultationSection].map((Section, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
        >
          <Section />
        </motion.div>
      ))}
    </div>
  );
}
