import React, { useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../assets/vertexlogo.png";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/test-preparation", label: "Test Preparation" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/faq", label: "FAQ" },
  { path: "/team", label: "Team" },
];

const Layout = () => {
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const isHome = location.pathname === "/";
  const [isAdmin] = useState(
    localStorage.getItem("adminToken") ? true : false
  );

  const navLinkClassName = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-semibold tracking-wide transition ${
      isActive
        ? "bg-[#d7b26d] text-[#14263b] shadow-[0_10px_24px_rgba(215,178,109,0.28)]"
        : "text-slate-200 hover:bg-white/10 hover:text-[#f1d19a]"
    }`;

  const mobileNavLinkClassName = ({ isActive }) =>
    `block rounded-xl px-4 py-3 text-sm font-semibold transition ${
      isActive
        ? "bg-[#d7b26d] text-[#14263b] shadow-[0_10px_24px_rgba(215,178,109,0.22)]"
        : "text-slate-100 hover:bg-white/10 hover:text-[#f1d19a]"
    }`;

  return (
    <div className="min-h-screen bg-[#eef3f7] font-sans text-white">
      <div
        className={`flex flex-wrap items-center justify-between border-b border-white/10 px-4 py-2 text-[15px] md:text-base ${
          isHome ? "bg-transparent" : "bg-[#14263b]"
        }`}
      >
        <div className="flex flex-wrap gap-6 font-medium tracking-wide text-slate-100">
          <span>
            <strong className="text-[#d7b26d]">Phone:</strong>{" "}
            <a
              href="tel:+918053555546"
              className="font-bold text-white transition duration-200 hover:text-[#f5dfb1]"
            >
              8053555546
            </a>
            <span className="mx-2 font-bold text-[#8aa0b8]">|</span>
            <a
              href="tel:+919996140555"
              className="font-bold text-white transition duration-200 hover:text-[#f5dfb1]"
            >
              9996140555
            </a>
          </span>

          <span>
            <strong className="text-[#d7b26d]">Email:</strong>{" "}
            <a
              href="mailto:vertexstudyvisa@gmail.com"
              className="font-bold text-white transition duration-200 hover:text-[#f5dfb1]"
            >
              vertexstudyvisa@gmail.com
            </a>
          </span>
        </div>

        <div className="flex gap-3 text-xl">
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
            (Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-white/10 p-1.5 text-[#f1d19a] transition"
              >
                <Icon className="cursor-pointer" />
              </motion.div>
            )
          )}
        </div>
      </div>

      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, duration: 0.6 }}
        className={`flex items-center justify-between px-4 py-2 ${
          isHome ? "absolute top-0 z-30 w-full bg-transparent" : "bg-[#14263b]"
        }`}
      >
        <motion.img
          src={logo}
          alt="Vertex Logo"
          className="w-16 object-contain sm:w-20 md:w-24"
          whileHover={{ scale: 1.1 }}
        />

        <motion.nav className="hidden items-center gap-3 md:flex">
          {[
            ...navItems,
            ...(isAdmin ? [{ path: "/admin/dashboard", label: "Dashboard" }] : []),
          ].map(({ path, label }) => (
            <NavLink
              key={label}
              to={path}
              className={({ isActive }) =>
                label === "Dashboard"
                  ? `rounded-full border px-4 py-2 text-sm font-semibold transition ${
                      isActive
                        ? "border-[#d7b26d] bg-[#d7b26d] text-[#14263b]"
                        : "border-[#6c8aa6] bg-[#1d344d] text-[#dce8f2] hover:border-[#d7b26d] hover:text-[#f1d19a]"
                    }`
                  : navLinkClassName({ isActive })
              }
            >
              {label}
            </NavLink>
          ))}
        </motion.nav>

        <motion.div className="hidden md:block">
          <Link to="/quote">
            <button className="rounded-full bg-[#d7b26d] px-5 py-2 text-xs font-semibold text-[#14263b] shadow-md shadow-[#d7b26d]/30 transition duration-200 hover:bg-[#e4c17f]">
              GET A QUOTE
            </button>
          </Link>
        </motion.div>

        <div
          className="cursor-pointer text-xl text-[#f1d19a] md:hidden"
          onClick={toggleSidebar}
        >
          <FaBars />
        </div>
      </motion.header>

      <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 z-50 flex h-full w-60 flex-col gap-4 bg-[#14263b] p-5 shadow-lg"
          >
            <div className="mb-3 flex items-center justify-between">
              <img src={logo} alt="logo" className="h-10 w-10" />
              <FaTimes
                onClick={toggleSidebar}
                className="cursor-pointer text-xl text-white"
              />
            </div>
            {[
              ...navItems,
              ...(isAdmin
                ? [{ path: "/admin/dashboard", label: "Dashboard" }]
                : []),
            ].map(({ path, label }) => (
              <NavLink
                key={label}
                to={path}
                onClick={toggleSidebar}
                className={({ isActive }) =>
                  label === "Dashboard"
                    ? `block rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                        isActive
                          ? "border-[#d7b26d] bg-[#d7b26d] text-[#14263b]"
                          : "border-[#6c8aa6] bg-[#1d344d] text-[#dce8f2] hover:border-[#d7b26d] hover:text-[#f1d19a]"
                      }`
                    : mobileNavLinkClassName({ isActive })
                }
              >
                {label}
              </NavLink>
            ))}
            <Link to="/quote" onClick={toggleSidebar}>
              <button className="mt-2 rounded-full bg-[#d7b26d] px-4 py-2 text-sm font-semibold text-[#14263b] shadow-md shadow-[#d7b26d]/30 transition hover:bg-[#e4c17f]">
                Get A Quote
              </button>
            </Link>
          </motion.aside>
        )}
      </AnimatePresence>

      <main className="text-slate-900">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
