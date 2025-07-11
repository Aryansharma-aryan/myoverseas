import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
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

const Layout = () => {
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const isHome = location.pathname === "/";

  return (
    <div className="font-sans text-white bg-[#0a1f3c] min-h-screen">
      {/* Top Contact Bar */}
      <div
        className={`flex flex-wrap items-center justify-between px-4 py-2 border-b border-gray-700 text-[15px] md:text-base ${
          isHome ? "bg-transparent" : "bg-[#0a1f3c]"
        }`}
      >
        <div className="flex gap-6 flex-wrap font-medium tracking-wide text-white">
  <span>
    <strong className="text-orange-500">📞 Phone:</strong>{" "}
    <a
      href="tel:+918053555546"
      className="text-yellow-300 font-bold hover:text-white shadow-[0_0_8px_rgba(255,193,7,0.7)] transition duration-200"
    >
      8053555546
    </a>
    <span className="mx-2 text-orange-400 font-bold">|</span>
    <a
      href="tel:+919996140555"
      className="text-yellow-300 font-bold hover:text-white shadow-[0_0_8px_rgba(255,193,7,0.7)] transition duration-200"
    >
      9996140555
    </a>
  </span>

  <span>
    <strong className="text-orange-500">📧 Email:</strong>{" "}
    <a
      href="mailto:vertexstudyvisa@gmail.com"
      className="text-yellow-300 font-bold hover:text-white shadow-[0_0_8px_rgba(255,193,7,0.7)] transition duration-200"
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
                className="p-1.5 rounded-full bg-white/10 backdrop-blur-sm text-orange-400 shadow-[0_0_10px_rgba(255,90,0,0.4)] transition"
              >
                <Icon className="cursor-pointer" />
              </motion.div>
            )
          )}
        </div>
      </div>

      {/* Navbar */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, duration: 0.6 }}
        className={`flex items-center justify-between px-4 py-2 ${
          isHome ? "bg-transparent absolute w-full top-0 z-30" : "bg-[#0a1f3c]"
        }`}
      >
        <motion.img
          src={logo}
          alt="Vertex Logo"
          className="w-16 sm:w-20 md:w-24 object-contain"
          whileHover={{ scale: 1.1 }}
        />

<motion.nav className="hidden md:flex gap-6 text-lg font-semibold tracking-wide">
          {["/", "/services", "/test-preparation", "/about", "/contact", "/Faq", "/team"].map(
            (path, i) => (
              <Link
                key={i}
                to={path}
                className="hover:text-orange-400 transition"
              >
                {path === "/"
                  ? "Home"
                  : path === "/Faq"
                  ? "FAQ"
                  : path
                      .slice(1)
                      .replace("-", " ")
                      .replace(/\b\w/g, (c) => c.toUpperCase())}
              </Link>
            )
          )}
        </motion.nav>

        <motion.div className="hidden md:block">
          <Link to="/quote">
            <button className="bg-orange-500 text-white font-semibold px-5 py-2 rounded-md hover:bg-orange-600 text-xs shadow-md shadow-orange-500/40 transition duration-200">
              GET A QUOTE
            </button>
          </Link>
        </motion.div>

        {/* Mobile menu button */}
        <div
          className="md:hidden text-xl text-orange-400 cursor-pointer"
          onClick={toggleSidebar}
        >
          <FaBars />
        </div>
      </motion.header>

      {/* Sidebar for mobile */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-60 h-full bg-[#0a1f3c] z-50 shadow-lg flex flex-col p-5 gap-4"
          >
            <div className="flex justify-between items-center mb-3">
              <img src={logo} alt="logo" className="w-10 h-10" />
              <FaTimes
                onClick={toggleSidebar}
                className="text-white text-xl cursor-pointer"
              />
            </div>
            {["/", "/services", "/test-preparation", "/about", "/contact", "/Faq", "/team"].map(
              (path, i) => (
                <Link key={i} to={path} onClick={toggleSidebar}>
                  {path === "/"
                    ? "Home"
                    : path.slice(1).replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                </Link>
              )
            )}
            <Link to="/quote" onClick={toggleSidebar}>
              <button className="mt-2 bg-orange-500 text-white px-4 py-1.5 rounded hover:bg-orange-600 font-semibold text-sm shadow-md shadow-orange-500/40">
                Get A Quote
              </button>
            </Link>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Page Content */}
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
