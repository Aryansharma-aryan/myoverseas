import React from "react";
import TeamCard3D from "./TeamCard3d";
import team1 from "../assets/karanpal.jpeg";
import team2 from "../assets/vasundha.jpeg";
import team3 from "../assets/supreet.jpeg";
import businessMeeting from "../assets/meeting.png";
import { motion } from "framer-motion";

const members = [
  {
    name: "Mr. Karanpal Singh",
    role: "Senior Consultant - Global Tourist Visa Operations",
    image: team1,
  },
  {
    name: "Ms. Vasudha",
    role: "Senior Consultant - Canada Study Visa",
    image: team2,
  },
  {
    name: "Mr. Supreet Dhamija",
    role: "Senior Consultant - USA Study Visa",
    image: team3,
  },
];

const Team = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] relative overflow-hidden">
      {/* Gradient Glow Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-96 h-96 bg-pink-500/20 rounded-full blur-[120px] absolute -top-24 left-10" />
        <div className="w-96 h-96 bg-yellow-400/20 rounded-full blur-[120px] absolute -bottom-24 right-10" />
      </div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-4xl sm:text-5xl lg:text-6xl text-center font-extrabold mb-16 bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x"
      >
        🌍 Meet Our Expert Team
      </motion.h2>

      {/* Team Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          hidden: { opacity: 0 },
        }}
        className="relative z-10 flex flex-wrap justify-center gap-10"
      >
        {members.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl shadow-2xl shadow-yellow-500/10 transition-transform hover:scale-[1.02] duration-500"
          >
            <TeamCard3D {...member} />
          </motion.div>
        ))}
      </motion.div>

      {/* Expertise + Values Section */}
      <div className="flex flex-col lg:flex-row mt-24 relative z-10 gap-6">
        {/* Left Panel with Frosted Glass */}
        <div className="lg:w-1/2 relative overflow-hidden rounded-3xl border border-white/10 shadow-lg backdrop-blur-xl">
          <img
            src={businessMeeting}
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

        {/* Right Panel */}
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
