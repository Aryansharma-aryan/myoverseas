import React, { useState, useEffect, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { TfiDashboard } from "react-icons/tfi";
import { Typewriter } from "react-simple-typewriter";

// Static assets
import logo from "../assets/vertexlogo.png";
import hero from "../assets/heroo.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import canadaImg from "../assets/karanpal.jpeg";
import australiaImg from "../assets/anchal.jpg";
import ukEuImg from "../assets/ukconsult.jpg";

// Lazy-loaded sections
const AboutSection = lazy(() => import("../pages/AboutSection"));
const WhyChooseVertex = lazy(() => import("../pages/WhyChoose"));
const ServicesSection = lazy(() => import("../pages/ServicesSection"));
const FounderSection = lazy(() => import("../pages/Founder"));
const GuidanceSection = lazy(() => import("../pages/GuidanceSection"));
const CountriesWeServe = lazy(() => import("../pages/Countries"));
const TestPreparation = lazy(() => import("../pages/TestPrepration"));
const Team = lazy(() => import("../pages/Team"));
const SuccessStory = lazy(() => import("../pages/SuccessStory"));
const ConsultationSection = lazy(() => import("../pages/Faq"));
const Dashboard = lazy(() => import("../pages/Dashboard"));

// Constants
const navLinks = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/test-preparation", label: "Test Preparation" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/Faq", label: "FAQ" },
  { path: "/team", label: "Team" },
  { path: "/admin/dashboard", label: "Dashboard" },
  { path: "/admin/login", label: "Login" },
];

const backgroundImages = [hero, hero2, hero3];

const typewriterWords = [
  "Vertex Study Visa",
  "Study in Canada 🇨🇦",
  "Australia Admissions 🇦🇺",
  "USA, UK & Europe ",
  "Visa Experts & PR Guidance",
];

const typewriterImages = [
  null,
  canadaImg,
  australiaImg,
  ukEuImg,
  null,
];

const socialIcons = [
  {
    Icon: FaFacebookF,
    color: "#1877F2",
    name: "Facebook",
    link: "https://www.facebook.com/share/1AnvUeVz2P/",
  },
  {
    Icon: FaInstagram,
    color: "#E4405F",
    name: "Instagram",
    link: "https://www.instagram.com/vertex_study_visa_kkr?igsh=eWdvZHdzemFnMjBs",
  },
];

export default function HomePage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typewriterKey, setTypewriterKey] = useState(0);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
  }, [isSidebarOpen]);

  useEffect(() => {
    setIsAdmin(!!localStorage.getItem("adminToken"));
  }, []);

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

  useEffect(() => {
    const totalCycleTime = 3000;
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % typewriterWords.length);
    }, totalCycleTime);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans text-white isolate overflow-x-hidden max-w-screen">
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

      <div className="relative z-10 min-h-screen backdrop-blur-sm bg-black/30">
        <header className="flex justify-between p-4 items-center">
          <motion.img src={logo} alt="Logo" className="w-32" whileHover={{ scale: 1.05 }} />
          <FaBars className="text-3xl text-orange-400 cursor-pointer" onClick={toggleSidebar} />
        </header>

        {/* Lazy Sidebar */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-64 h-full bg-[#121e2d] text-white z-50 p-6 shadow-xl"
            >
              <div className="flex justify-between items-center mb-4">
                <img src={logo} alt="Logo" className="w-24" />
                <FaTimes className="text-2xl cursor-pointer" onClick={toggleSidebar} />
              </div>

              <nav className="flex flex-col gap-4">
                {navLinks.map(({ path, label }, i) => (
                  <Link
                    key={i}
                    to={path}
                    onClick={toggleSidebar}
                    className="text-white font-semibold hover:text-orange-400"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </motion.aside>
          )}
        </AnimatePresence>

        <section className="flex flex-col items-center justify-center text-center px-4 py-8">
          <h2 className="text-[20px] sm:text-[26px] md:text-[32px] lg:text-[38px] xl:text-[42px] font-extrabold mb-4 text-center drop-shadow-lg">
            Achieve Your Dream to Study Abroad with
            <span className="ml-2 bg-gradient-to-r from-orange-400 via-yellow-400 to-pink-500 bg-clip-text text-transparent animate-pulse font-extrabold">
              Vertex Study Visa
            </span>
          </h2>

          <h1 className="text-[40px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[96px] leading-tight font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FFA500] via-[#FF7F50] to-white">
            <AnimatePresence mode="wait">
              <motion.span
                key={typewriterKey}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                <Typewriter
                  words={typewriterWords}
                  loop={Infinity}
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={40}
                  delaySpeed={1000}
                  onLoopDone={() => setTypewriterKey((prev) => prev + 1)}
                />
              </motion.span>
            </AnimatePresence>
          </h1>

          {typewriterImages[currentWordIndex] && (
            <motion.img
              key={currentWordIndex}
              src={typewriterImages[currentWordIndex]}
              alt="Country"
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover rounded-2xl shadow-2xl mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          )}
        </section>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 py-4">
          {socialIcons.map(({ Icon, color, link }, i) => (
            <motion.a
              key={i}
              whileHover={{ scale: 1.2 }}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color }}
              className="text-xl"
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        {/* Lazy-loaded sections */}
        <Suspense fallback={<div className="text-center text-white py-10">Loading Sections...</div>}>
          {[AboutSection, WhyChooseVertex, ServicesSection, FounderSection, GuidanceSection, CountriesWeServe, TestPreparation, Team, SuccessStory, Dashboard, ConsultationSection].map((Section, i) => (
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
        </Suspense>
      </div>
    </div>
  );
}
