import React from "react";
import founderImage from "../assets/gurbaaz.png";

const FounderSection = () => {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-[#1b1b1f] via-[#131418] to-[#0f0f11] overflow-hidden">
      {/* Glowing Background Blobs */}
      <div className="absolute -top-16 -left-20 w-80 h-80 bg-amber-400 opacity-20 blur-[120px] rounded-full z-0" />
      <div className="absolute -bottom-24 -right-16 w-96 h-96 bg-rose-500 opacity-20 blur-[120px] rounded-full z-0" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Founder Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl shadow-amber-400/20 transition-transform hover:scale-[1.02] duration-500">
          <img
            src={founderImage}
            alt="Founder Gurbaj Singh"
            className="w-full h-auto object-cover rounded-2xl border-4 border-amber-300/30 mb-6 shadow-lg"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Gurbaj Singh Sarpanch
          </h2>
          <p className="text-sm text-amber-400 font-medium mb-4">
            Founder, Vertex Study Overseas
          </p>
          <p className="text-gray-300 leading-relaxed text-[16px] mb-4">
            With over <strong>16+ years of global experience</strong> in visa consultation and education strategy, Gurbaj has built Vertex into a brand of trust, transparency, and results. Now based in the UK, he’s helped thousands achieve their study abroad dreams.
          </p>
          <p className="text-gray-400 text-sm italic">
            “Every student has a unique path. My mission is to help them walk it with confidence and clarity.”
          </p>
        </div>

        {/* Right Side - Title & CTA */}
        <div className="text-white text-center md:text-left">
          <h3 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-amber-400 via-rose-400 to-fuchsia-500 bg-clip-text text-transparent animate-gradient-x drop-shadow-md">
            👨‍🎓 Driven by Purpose.
          </h3>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            Meet the visionary behind Vertex — dedicated to making international education accessible, ethical, and impactful.
          </p>
          <button className="bg-gradient-to-r from-amber-400 to-rose-500 hover:from-amber-500 hover:to-pink-400 text-black font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
