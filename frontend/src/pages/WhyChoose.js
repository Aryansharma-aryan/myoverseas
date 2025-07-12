import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import whyImage from "../assets/banner.png"; // keep the image same

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const flipIn = {
  hidden: { rotateY: -90, opacity: 0 },
  visible: {
    rotateY: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
  },
};

export default function WhyChooseVertex() {
  return (
    <section className="relative py-20 px-6 md:px-20 text-white overflow-hidden bg-gradient-to-br from-[#101b2d] via-[#0f172a] to-[#1c1e29]">
      {/* Blurred glow blobs */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-orange-500 opacity-20 blur-[120px] rounded-full z-0" />
      <div className="absolute -bottom-20 -right-10 w-80 h-80 bg-blue-500 opacity-20 blur-[100px] rounded-full z-0" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto z-10 relative"
      >
        {/* Left Content */}
        <motion.div className="flex-1 z-10" variants={fadeInUp} custom={1}>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6 drop-shadow-lg"
            variants={fadeInUp}
            custom={1}
          >
            Why Choose{" "}
            <span className="text-orange-400">Vertex Study Overseas?</span>
          </motion.h2>

          <motion.p
            className="text-lg mb-6 leading-relaxed text-gray-200"
            variants={fadeInUp}
            custom={2}
          >
            At Vertex Study Overseas, we turn dreams into reality by providing expert guidance and reliable visa consultation services. With years of experience, thousands of successful applications, and a personalized approach, we ensure a smooth and confident journey to your study abroad goals.
          </motion.p>

          <motion.ul className="space-y-4 text-lg text-gray-100">
            {[
              "10+ Years of Expertise in global student migration",
              "5000+ Visas Processed with high client satisfaction",
              "High Success Rate due to expert guidance and document review",
              "End-to-End Assistance for universities, SOPs, and interviews",
              "Personalized Counseling tailored to your background & goals",
            ].map((text, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3"
                variants={fadeInUp}
                custom={index + 3}
              >
                <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                <span>{text}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.button
            className="mt-10 bg-gradient-to-r from-yellow-400 to-orange-300 hover:from-yellow-300 hover:to-orange-200 text-black font-semibold px-8 py-3 rounded-md shadow-lg shadow-yellow-400/30 transition duration-300"
            variants={fadeInUp}
            custom={8}
          >
            KNOW MORE
          </motion.button>
        </motion.div>

        {/* Right: Image with flip effect */}
        <motion.div
          className="flex-1 relative group rounded-2xl overflow-hidden shadow-2xl"
          variants={flipIn}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent z-10" />
          <img
            src={whyImage}
            alt="Why Vertex Study Overseas"
            className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute -inset-1 rounded-2xl border border-yellow-400/20 blur-md opacity-30 group-hover:opacity-60 transition duration-700" />
        </motion.div>
      </motion.div>
    </section>
  );
}
