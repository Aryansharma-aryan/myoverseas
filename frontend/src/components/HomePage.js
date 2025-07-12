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
// 🖼 Destination images that should appear below the heading
import canadaImg from "../assets/karanpal.jpeg";      // add this file
import australiaImg from "../assets/anchal.jpg"; // add this file
import ukEuImg from "../assets/ukconsult.jpg";       // add this file

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

  const typewriterImages = [
    null,           // Vertex Study Visa → no image
    canadaImg,      // Canada → karanpal image
    australiaImg,   // Australia → anchal image
    ukEuImg,        // UK/Europe → ukconsult image
    null,           // Visa Experts → no image
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
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

  // Track typewriter word changes with more precise timing
  useEffect(() => {
    const totalCycleTime = 3000; // Approximate time for each word cycle
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => {
        const next = (prev + 1) % typewriterWords.length;
        console.log('Word index changed to:', next, 'Word:', typewriterWords[next]); // Debug log
        return next;
      });
    }, totalCycleTime);
    return () => clearInterval(interval);
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
<div className="relative z-10 flex flex-col min-h-screen bg-black/30 backdrop-blur-sm">
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
            <h2 className="text-[20px] sm:text-[26px] md:text-[32px] font-bold mb-4 text-white">
              Achieve Your Dream to Study Abroad with <span className="text-[#ff5a00]">Vertex Study Visa</span>
            </h2>
            
            {/* Main content container with flex layout */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-7xl">
              {/* Left side - Typewriter text */}
              <div className="flex-1 flex flex-col items-center lg:items-start">
<h1 className="text-[32px] sm:text-[44px] md:text-[64px] lg:text-[80px] xl:text-[96px] leading-tight font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-emerald-400 text-center lg:text-left">
                  <Typewriter
                    key={typewriterKey}
                    words={typewriterWords}
                    loop={Infinity}
                    cursor
                    cursorStyle="|"
                    typeSpeed={50}
                    deleteSpeed={40}
                    delaySpeed={800}
                    onLoopDone={() => {
                      setCurrentWordIndex((prev) => (prev + 1) % typewriterWords.length);
                    }}
                    onType={(count, index) => {
                      // Update word index when typing starts for a new word
                      if (index !== undefined) {
                        setCurrentWordIndex(index);
                      }
                    }}
                  />
                </h1>
              </div>
              
              {/* Right side - Image card */}
             <div className="flex-1 flex justify-center lg:justify-end">
  <AnimatePresence mode="wait">
    {typewriterImages[currentWordIndex] && (
      <motion.div
        key={currentWordIndex}
        initial={{ opacity: 0, x: 100, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: -100, scale: 0.8 }}
        transition={{ duration: 0.6, ease: "easeInOut", type: "spring", stiffness: 100, damping: 20 }}
        className="relative"
      >
        {/* Floating Image Card */}
        <div className="relative group">
          {/* Thin Animated glow background */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 via-green-400/20 to-red-500/30 rounded-2xl blur-lg scale-105 animate-pulse group-hover:blur-xl transition-all duration-700"></div>

          {/* Floating orbs in 3-theme only */}
          <div className="absolute -top-2 -left-2 w-3 h-3 bg-yellow-400 rounded-full animate-float opacity-80"></div>
          <div className="absolute -top-1 -right-3 w-2.5 h-2.5 bg-red-400 rounded-full animate-float-delayed opacity-70"></div>
          <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-green-400 rounded-full animate-float-slow opacity-60"></div>
          <div className="absolute -bottom-1 -left-3 w-2 h-2 bg-yellow-400 rounded-full animate-float-fast opacity-50"></div>

          {/* Main glass card */}
          <motion.div
            whileHover={{ scale: 1.05, rotateY: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gradient-to-br from-white/10 via-white/5 to-transparent"
            style={{
              background: `linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))`,
              boxShadow: `0 20px 40px -10px rgba(0,0,0,0.4), 0 0 20px rgba(255,200,0,0.1), inset 0 1px 0 rgba(255,255,255,0.05)`,
            }}
          >
            {/* Thin Shimmer border lines */}
            <div className="absolute inset-0 rounded-2xl">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-shimmer"></div>
              <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-400 to-transparent animate-shimmer-reverse"></div>
              <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-green-400 to-transparent animate-shimmer-vertical"></div>
              <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-yellow-400 to-transparent animate-shimmer-vertical-reverse"></div>
            </div>

            {/* Inner content */}
            <div className="relative p-4 h-full">
              <div className="relative w-full h-full">
                {/* Glow background */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-green-400/10 to-red-500/10 rounded-xl blur-md animate-pulse"></div>

                {/* Image */}
                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm h-full">
                  <motion.img
                    src={typewriterImages[currentWordIndex]}
                    alt={`${typewriterWords[currentWordIndex]} representative`}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Subtle overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-red-500/5"></div>

                  {/* Glow sparks */}
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
                  <div className="absolute bottom-3 left-3 w-1 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 left-2 w-0.5 h-0.5 bg-green-400 rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</div>

            </div>
            
            <p className="text-white/80 text-lg max-w-2xl mb-10 leading-relaxed font-bold mt-6">
              We specialize in <span className="text-orange-400">Study Visas</span>, <span className="text-yellow-300">Tourist Visas</span>, and <span className="text-pink-400">Permanent Residency (PR)</span> guidance.
            </p>
            
            <Link to="/consultant">
              <button className="relative px-8 py-4 text-white font-semibold text-lg rounded-xl overflow-hidden transition duration-300 hover:scale-105 backdrop-blur-md border border-transparent">
                <span className="absolute inset-0 rounded-xl p-[2px] bg-[linear-gradient(to_right,_orange_70%,_tomato_85%,_pink)] z-0"></span>
                <span className="absolute inset-[2px] rounded-[0.75rem] bg-[rgba(255,99,71,0.3)] backdrop-blur-md z-10 shadow-[0_0_10px_2px_rgba(255,99,71,0.5)]"></span>
                <span className="relative z-20">GET FREE CONSULTATION</span>
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