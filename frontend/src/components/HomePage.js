import React, { useState, useEffect, useMemo } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaInstagram, FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

import logo from "../assets/vertexlogo.png";
import hero from "../assets/heroo.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";

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

const socialIcons = [
  {
    Icon: FaFacebookF,
    color: "#f58220",
    name: "Facebook",
    link: "https://www.facebook.com/share/1AnvUeVz2P/",
  },
  {
    Icon: FaInstagram,
    color: "#f1d19a",
    name: "Instagram",
    link: "https://www.instagram.com/vertex_study_visa_kkr?igsh=eWdvZHdzemFnMjBs",
  },
  {
    Icon: FaWhatsapp,
    color: "#dbe7f1",
    name: "WhatsApp",
    link: "https://wa.me/919996140555",
  },
];

export default function HomePage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [typewriterKey, setTypewriterKey] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const sidebarNavLinkClassName = ({ isActive }) =>
    `rounded-xl px-4 py-3 text-base font-semibold transition ${
      isActive
        ? "bg-[#d7b26d] text-[#14263b] shadow-[0_10px_24px_rgba(215,178,109,0.24)]"
        : "text-slate-100 hover:bg-white/10 hover:text-[#f1d19a]"
    }`;

  useEffect(() => {
    const style = document.createElement("style");
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
    "Study in Canada",
    "Australia Admissions",
    "USA, UK & Europe",
    "Visa Experts & PR Guidance",
  ];

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
  }, [isSidebarOpen]);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    setIsAdmin(!!token);
  }, []);

  const backgroundImages = useMemo(() => [hero, hero2, hero3], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  useEffect(() => {
    backgroundImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [backgroundImages]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/test-preparation", label: "Test Preparation" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/faq", label: "FAQ" },
    { path: "/team", label: "Team" },
    { path: "/admin/dashboard", label: "Dashboard" },
    { path: "/admin/login", label: "Login" },
    { path: "/visit-stats", label: "Visit Count" },
  ];

  return (
    <div className="isolate max-w-screen overflow-x-hidden font-sans text-white">
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
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(0.45)",
              }}
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 flex min-h-screen flex-col bg-[#0f2236]/35 backdrop-blur-[3px]">
          <div className="flex flex-col gap-2 border-b border-white/10 bg-[#10263a]/95 px-4 py-2 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:text-base">
            <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
              <div className="flex flex-wrap items-center gap-1 text-sm sm:gap-2 sm:text-base">
                <span className="font-semibold text-[#d7b26d]">Phone:</span>
                <a
                  href="tel:+918053555546"
                  className="font-bold text-white transition hover:text-[#f5dfb1]"
                >
                  8053555546
                </a>
                <span className="mx-1 hidden font-bold text-[#8aa0b8] sm:inline">
                  |
                </span>
                <a
                  href="tel:+919996140555"
                  className="font-bold text-white transition hover:text-[#f5dfb1]"
                >
                  9996140555
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-1 text-sm sm:gap-2 sm:text-base">
                <span className="font-semibold text-[#d7b26d]">Email:</span>
                <a
                  href="mailto:vertexstudyvisa@gmail.com"
                  className="break-all font-semibold text-white transition hover:text-[#f5dfb1] sm:break-normal"
                >
                  vertexstudyvisa@gmail.com
                </a>
              </div>
            </div>

            <div className="flex justify-center gap-4 pt-2 text-xl sm:justify-end sm:pt-0">
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

          <header className="flex items-center justify-between p-4">
            <motion.img
              src={logo}
              alt="Vertex Logo"
              className="w-32 object-contain sm:w-39"
              whileHover={{ scale: 1.05 }}
            />
            <div
              onClick={toggleSidebar}
              className="cursor-pointer text-3xl text-[#f1d19a]"
            >
              <FaBars />
            </div>
          </header>

          <AnimatePresence>
            {isSidebarOpen && (
              <motion.aside
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 right-0 z-50 flex h-full w-64 flex-col gap-6 overflow-y-auto bg-[#14263b] p-6 text-white shadow-xl"
              >
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <img
                      src={logo}
                      alt="Vertex Logo"
                      className="w-24 object-contain"
                    />
                    <FaTimes
                      onClick={toggleSidebar}
                      className="cursor-pointer text-2xl text-white transition hover:text-[#f1d19a]"
                    />
                  </div>

                  <nav className="flex flex-col gap-4">
                    {navLinks.map(({ path, label }, i) => {
                      if (label === "Login") {
                        return isAdmin ? (
                          <React.Fragment key="admin-controls">
                            <NavLink
                              to="/admin/consultants"
                              onClick={toggleSidebar}
                              className={sidebarNavLinkClassName}
                            >
                              Client Enquiries
                            </NavLink>
                            <button
                              key="logout"
                              onClick={() => {
                                localStorage.removeItem("adminToken");
                                setIsAdmin(false);
                                toggleSidebar();
                                window.location.reload();
                              }}
                              className="mt-2 rounded-xl bg-[#d7b26d] px-5 py-3 font-semibold text-[#14263b] transition hover:bg-[#e4c17f]"
                            >
                              Logout
                            </button>
                          </React.Fragment>
                        ) : (
                          <NavLink
                            key={i}
                            to={path}
                            onClick={toggleSidebar}
                            className={({ isActive }) =>
                              isActive
                                ? "rounded-xl bg-[#d7b26d] px-5 py-3 font-semibold text-[#14263b] shadow-[0_10px_24px_rgba(215,178,109,0.24)]"
                                : "rounded-xl bg-[#1f3b57] px-5 py-3 font-semibold text-slate-100 transition hover:bg-[#294967] hover:text-[#f1d19a]"
                            }
                          >
                            {label}
                          </NavLink>
                        );
                      }

                      if (label === "Dashboard") {
                        return (
                          <NavLink
                            key={i}
                            to={path}
                            onClick={toggleSidebar}
                            className={({ isActive }) =>
                              isActive
                                ? "rounded-xl border border-[#d7b26d] bg-[#d7b26d] px-5 py-3 font-semibold text-[#14263b]"
                                : "rounded-xl border border-[#6c8aa6] bg-[#1f3b57] px-5 py-3 font-semibold text-slate-100 transition hover:border-[#d7b26d] hover:text-[#f1d19a]"
                            }
                          >
                            {label}
                          </NavLink>
                        );
                      }

                      return (
                        <NavLink
                          key={i}
                          to={path}
                          onClick={toggleSidebar}
                          className={sidebarNavLinkClassName}
                        >
                          {label}
                        </NavLink>
                      );
                    })}
                    <Link to="/quote" onClick={toggleSidebar}>
                      <button className="mt-4 w-full rounded-xl bg-[#d7b26d] px-5 py-3 font-semibold text-[#14263b] transition hover:bg-[#e4c17f]">
                        Get A Quote
                      </button>
                    </Link>
                  </nav>
                </div>

                <div className="mt-8 space-y-2 border-t border-white/20 pt-4 text-sm">
                  <p>
                    Phone:{" "}
                    <span className="font-bold text-[#f5dfb1]">8053555546</span>
                  </p>
                  <p>
                    Phone:{" "}
                    <span className="font-bold text-[#f5dfb1]">9996140555</span>
                  </p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:vertexstudyvisa@gmail.com"
                      className="font-semibold text-[#f5dfb1]"
                    >
                      vertexstudyvisa@gmail.com
                    </a>
                  </p>
                </div>
              </motion.aside>
            )}
          </AnimatePresence>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-1 flex-col items-center justify-center px-4 py-8 text-center"
          >
            <h2 className="mb-4 text-center text-[20px] font-extrabold leading-snug drop-shadow-[2px_2px_5px_rgba(0,0,0,0.6)] sm:text-[26px] md:text-[32px] lg:text-[38px] xl:text-[42px]">
              Achieve Your Dream to Study Abroad with
              <span className="ml-2 inline-block text-[#f58220] drop-shadow-[0_0_18px_rgba(245,130,32,0.35)]">
                Vertex Study Visa
              </span>
            </h2>

            <div className="mx-auto mb-8 w-full max-w-4xl">
              <h1 className="bg-gradient-to-r from-[#f58220] via-[#ff8c2f] to-[#ffe6d1] bg-clip-text text-center text-[40px] font-extrabold leading-tight tracking-tight text-transparent sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={typewriterKey}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.25, 0.8, 0.25, 1],
                    }}
                    className="inline-flex min-h-[3rem] items-center justify-center sm:min-h-[4rem] md:min-h-[5rem] lg:min-h-[6rem] xl:min-h-[7rem]"
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
            </div>

            <p className="mb-10 max-w-2xl text-lg font-bold leading-relaxed text-white drop-shadow-[2px_2px_3px_rgba(0,0,0,0.8)]">
              We specialize in{" "}
              <span className="font-extrabold text-[#ff9b45]">Study Visas</span>,{" "}
              <span className="font-extrabold text-[#f58220]">Tourist Visas</span>,
              and{" "}
              <span className="font-extrabold text-[#dbe7f1]">
                Permanent Residency (PR)
              </span>{" "}
              guidance.
            </p>

            <Link to="/consultant">
              <button className="group relative overflow-hidden rounded-xl border border-[#ff9b45] px-8 py-4 text-lg font-semibold text-white shadow-[0_10px_30px_rgba(245,130,32,0.35)] transition duration-300 hover:scale-105">
                <span className="absolute inset-0 bg-gradient-to-r from-[#ef6c00] via-[#f58220] to-[#ff9b45] transition duration-300 group-hover:from-[#f58220] group-hover:via-[#ff8c2f] group-hover:to-[#ffb15e]" />
                <span className="absolute inset-[2px] rounded-[0.65rem] border border-white/20" />
                <span className="relative z-20">GET FREE CONSULTATION</span>
              </button>
            </Link>
          </motion.section>
        </div>
      </div>

      {[
        AboutSection,
        WhyChooseVertex,
        ServicesSection,
        FounderSection,
        GuidanceSection,
        CountriesWeServe,
        TestPreparation,
        Team,
        SuccessStory,
        ConsultationSection,
      ].map((Section, i) => (
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
