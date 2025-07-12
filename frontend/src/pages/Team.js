import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGlobe,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

// Importing images from src/assets
import karanpal from "../assets/karanpal.jpeg";
import vasundha from "../assets/vasundha.jpeg";
import supreet from "../assets/supreet.jpeg";
import meeting from "../assets/meeting.png";

const members = [
  {
    name: "Mr. Karanpal Singh",
    role: "Senior Consultant - Global Tourist Visa Operations",
    image: karanpal,
    experience: "8+ Years",
    specialty: "Tourist & Business Visas",
    achievements: [
      "1000+ Successful Applications",
      "Multi-Country Expertise",
      "Embassy Relations Specialist",
    ],
    description:
      "Mr. Karanpal Singh is a seasoned visa consultant with over 8 years of specialized experience in global tourist visa operations...",
  },
  {
    name: "Ms. Vasudha",
    role: "Senior Consultant - Canada Study Visa",
    image: vasundha,
    experience: "10+ Years",
    specialty: "Canada Immigration & Study Permits",
    achievements: [
      "RCIC Certified",
      "98% Success Rate",
      "University Partnership Expert",
    ],
    description:
      "Ms. Vasudha is a highly qualified immigration consultant specializing in Canadian study visa applications and immigration pathways...",
  },
  {
    name: "Mr. Supreet Dhamija",
    role: "Senior Consultant - USA Study Visa",
    image: supreet,
    experience: "12+ Years",
    specialty: "USA F-1 & M-1 Visas",
    achievements: [
      "USCIS Authorized",
      "Interview Success Expert",
      "Ivy League Connections",
    ],
    description:
      "Mr. Supreet Dhamija is a distinguished USA study visa consultant with over 12 years of extensive experience in American immigration processes...",
  },
];

const TeamCard3D = ({
  name,
  role,
  image,
  experience,
  specialty,
  achievements,
  description,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative w-80 h-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 group">
      <div className="relative mb-6">
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-yellow-400 to-pink-500 p-1">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-pink-500 text-black px-3 py-1 rounded-full text-xs font-bold">
          {experience}
        </div>
      </div>

      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-yellow-300 mb-2">{name}</h3>
        <p className="text-sm text-gray-300 mb-2">{role}</p>
        <div className="flex items-center justify-center gap-2 text-xs text-pink-400">
          <FaGlobe />
          <span>{specialty}</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {achievements.map((achievement, index) => (
            <span
              key={index}
              className="bg-white/10 text-xs px-2 py-1 rounded-full text-gray-300 border border-white/20"
            >
              {achievement}
            </span>
          ))}
        </div>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-300 leading-relaxed mb-4">
          {isExpanded ? description : `${description.substring(0, 120)}...`}
        </p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto"
        >
          {isExpanded ? (
            <>
              Show Less <FaChevronUp />
            </>
          ) : (
            <>
              Read More <FaChevronDown />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-96 h-96 bg-pink-500/20 rounded-full blur-[120px] absolute -top-24 left-10" />
        <div className="w-96 h-96 bg-yellow-400/20 rounded-full blur-[120px] absolute -bottom-24 right-10" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-4xl sm:text-5xl lg:text-6xl text-center font-extrabold mb-16 bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse"
      >
        🌍 Meet Our Expert Team
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          hidden: { opacity: 0 },
        }}
        className="relative z-10 flex flex-wrap justify-center gap-10 mb-16"
      >
        {members.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="transition-transform hover:scale-[1.02] duration-500"
          >
            <TeamCard3D {...member} />
          </motion.div>
        ))}
      </motion.div>

      <div className="flex flex-col lg:flex-row mt-24 relative z-10 gap-6">
        <div className="lg:w-1/2 relative overflow-hidden rounded-3xl border border-white/10 shadow-lg backdrop-blur-xl">
          <img
            src={meeting}
            alt="Business Meeting"
            className="absolute inset-0 w-full h-full object-cover rounded-3xl opacity-30"
          />
          <div className="absolute inset-0 bg-black/60 rounded-3xl" />
          <div className="relative z-10 p-10 text-white space-y-6 max-w-xl">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg font-semibold text-yellow-400"
            >
              🎯 Get Expert Guidance That Delivers.
            </motion.h3>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl lg:text-4xl font-extrabold leading-snug"
            >
              Not just a consultancy — your global career partner.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-sm lg:text-base"
            >
              At <span className="text-white font-bold">Vertex Study Visa</span>,
              we believe every student and traveler deserves a trusted partner
              on their international journey.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-400 text-black font-semibold py-2 px-6 rounded-xl shadow-md transition-all"
            >
              GET IN TOUCH
            </motion.button>
          </div>
        </div>

        <div className="lg:w-1/2 bg-white/5 backdrop-blur-lg border border-white/10 text-white p-10 rounded-3xl shadow-2xl shadow-yellow-400/10 flex flex-col justify-center space-y-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-yellow-400"
          >
            ✅ Ethical & Transparent Process
          </motion.h3>
          <p className="text-base text-gray-300 leading-relaxed">
            We provide 100% honest advice — no shortcuts, no fake promises.
          </p>
          <ul className="text-base space-y-3 font-medium text-white">
            <li>🕒 Timely Application Handling</li>
            <li>💼 Modern, Digitally-Enabled Services</li>
            <li>🌐 Updated Visa Rules Knowledge</li>
            <li>🎓 Experts with Global Experience</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Team;
