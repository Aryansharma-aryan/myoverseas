import React from "react";
import guidanceBgRight from "../assets/download.jpg";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const flipLeft = {
  hidden: { rotateY: -90, opacity: 0 },
  visible: {
    rotateY: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

const flipRight = {
  hidden: { rotateY: 90, opacity: 0 },
  visible: {
    rotateY: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

const GuidanceSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#0f0e17] via-[#1c1d2e] to-[#0a0a0f] py-24 px-4 relative overflow-hidden">
      {/* Glow blobs */}
      <div className="absolute -top-24 left-10 w-72 h-72 bg-pink-500 opacity-20 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 opacity-10 blur-[160px] rounded-full z-0" />

      {/* Heading */}
      <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-fuchsia-500 mb-20 animate-gradient-x">
        <Typewriter
          words={[" Expert Guidance That Elevates Your Journey"]}
          loop={false}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Card */}
        <motion.div
          variants={flipLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl border border-yellow-500/20 rounded-3xl p-10 shadow-lg transition-transform hover:scale-[1.015] duration-500"
        >
          <h3 className="text-yellow-400 font-semibold text-lg mb-3 uppercase tracking-wide">
            Personalized Guidance
          </h3>
          <h4 className="text-white text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            Committed to Guiding You Every Step of the Way
          </h4>
          <p className="text-gray-300 text-base leading-relaxed mb-8">
            At <strong>Vertex Study Visa KKR</strong>, we don’t just file your application—we
            walk with you through the entire process. From counseling to final
            approval, our team ensures you’re confident, informed, and visa-ready.
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-400 text-black font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
            Get Free Consultation
          </button>
        </motion.div>

        {/* Right Card */}
        <motion.div
          variants={flipRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl shadow-inner"
        >
          <img
            src={guidanceBgRight}
            alt="Visa Guidance"
            className="absolute inset-0 w-full h-full object-cover rounded-3xl opacity-30 z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 via-rose-500/30 to-fuchsia-500/30 z-0 rounded-3xl" />
          <div className="relative z-10 p-10 text-white">
            <h4 className="text-2xl font-bold mb-6 text-yellow-300">
              Why Choose Vertex?
            </h4>
            <ul className="space-y-4 text-base font-medium text-white">
              {[
                "Personalized Counseling",
                "Timely Submissions",
                "Transparent Process",
                "Updated Visa Guidelines",
                "Support After Approval",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <FaCheckCircle className="text-pink-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuidanceSection;
