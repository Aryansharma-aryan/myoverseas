import React, { useState } from "react";
import { Award, CheckCircle, X, ExternalLink, Shield, Sparkles } from "lucide-react";
import founderImage from "../assets/gurbaaz.png";
import certificate from "../assets/certificate.jpg";

const FounderSection = () => {
  const [showCertificate, setShowCertificate] = useState(false);

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-[#1b1b1f] via-[#131418] to-[#0f0f11] overflow-hidden">
      {/* Glowing Background Blobs */}
      <div className="absolute -top-16 -left-20 w-80 h-80 bg-amber-400 opacity-20 blur-[120px] rounded-full z-0" />
      <div className="absolute -bottom-24 -right-16 w-96 h-96 bg-rose-500 opacity-20 blur-[120px] rounded-full z-0" />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500 opacity-10 blur-[100px] rounded-full z-0" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start relative z-10">
        {/* Left Side - Founder Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl shadow-amber-400/20 transition-transform hover:scale-[1.02] duration-500">
          <img
            src={founderImage}
            alt="Founder Gurbaj Singh"
            className="w-full h-auto object-cover rounded-2xl border-4 border-amber-300/30 mb-6 shadow-lg"
          />
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Gurbaj Singh Sarpanch
          </h2>
          <p className="text-sm text-amber-400 font-medium mb-6 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Founder & Visionary Leader, Vertex Study Overseas
          </p>
          
          <div className="space-y-4 mb-6">
            <p className="text-gray-300 leading-relaxed text-[16px]">
              With an illustrious <strong className="text-amber-400">16+ years of global experience</strong> in visa consultation and education strategy, Gurbaj has transformed Vertex into a beacon of trust, transparency, and exceptional results.
            </p>
            <p className="text-gray-300 leading-relaxed text-[16px]">
              Now based in the <strong className="text-amber-400">United Kingdom</strong>, he has empowered thousands of students to turn their study abroad dreams into reality, guiding them with expertise and genuine care.
            </p>
          </div>

          <div className="bg-gradient-to-r from-amber-500/10 to-rose-500/10 border border-amber-400/20 rounded-xl p-4 mb-6">
            <p className="text-gray-300 text-sm italic leading-relaxed">
              <span className="text-amber-400 text-2xl">"</span>
              Every student has a unique path. My mission is to help them walk it with confidence, clarity, and unwavering support.
              <span className="text-amber-400 text-2xl">"</span>
            </p>
          </div>

          {/* Key Highlights */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-300 bg-white/5 rounded-lg p-3 border border-white/10">
              <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <span className="font-medium">16+ Years Global Experience</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 bg-white/5 rounded-lg p-3 border border-white/10">
              <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <span className="font-medium">UK-Based Expert Consultant</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 bg-white/5 rounded-lg p-3 border border-white/10">
              <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <span className="font-medium">Certified in Ethical Recruitment</span>
            </div>
          </div>
        </div>

        {/* Right Side - Certificate Display & Info */}
        <div className="text-white">
          {/* Title Section */}
          <div className="text-center lg:text-left mb-8">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-amber-400 via-rose-400 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-2xl leading-tight">
              👨‍🎓 Driven by Purpose.
            </h3>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
              Meet the visionary behind Vertex — a leader dedicated to making international education accessible, ethical, and truly impactful.
            </p>
            <p className="text-base text-gray-400 leading-relaxed">
              With unwavering commitment to excellence and student success, Gurbaj continues to set new standards in the education consultancy industry.
            </p>
          </div>

          {/* Certified Badge */}
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
            <div className="flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-rose-500/20 border border-amber-400/40 rounded-full px-4 py-2 shadow-lg">
              <Shield className="w-5 h-5 text-amber-400" />
              <p className="text-amber-400 text-sm font-bold tracking-wide">CERTIFIED BY TRAINHUB ORIGINALS</p>
            </div>
          </div>

          {/* Certificate Display Card */}
          <div className="relative group mb-8">
            {/* Animated Glow Effect */}
            <div className="absolute -inset-3 bg-gradient-to-r from-amber-400 via-rose-400 to-purple-500 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition duration-700 animate-pulse"></div>
            
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-6 border-2 border-amber-400/60 shadow-2xl">
              {/* Certificate Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl p-3 shadow-xl">
                    <Award className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Professional Certification</h4>
                    <p className="text-amber-300 text-sm">Verified & Accredited</p>
                  </div>
                </div>
              </div>

              {/* Certificate Image */}
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl mb-4 border-4 border-white/20">
                <img 
                  src={certificate}
                  alt="Certificate of Completion - Ethical Business Practices"
                  className="w-full h-auto"
                />
              </div>

              {/* Certificate Title */}
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-4 mb-4 border border-blue-400/30">
                <h5 className="text-white font-bold text-center text-base leading-snug">
                  Ethical Business Practices in International Student Recruitment
                </h5>
              </div>
              
              {/* Certificate Details Grid */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-black/40 rounded-xl p-4 border border-amber-400/30 text-center">
                  <p className="text-amber-400 font-semibold text-sm mb-1">Issue Date</p>
                  <p className="text-white font-bold text-lg">04/11/2025</p>
                </div>
                <div className="bg-black/40 rounded-xl p-4 border border-amber-400/30 text-center">
                  <p className="text-amber-400 font-semibold text-sm mb-1">Valid Until</p>
                  <p className="text-white font-bold text-lg">04/11/2026</p>
                </div>
              </div>

              {/* View Larger Button */}
              <button
                onClick={() => setShowCertificate(true)}
                className="w-full bg-gradient-to-r from-amber-400 via-amber-500 to-rose-500 hover:from-amber-500 hover:to-rose-600 text-black font-bold py-4 px-6 rounded-xl shadow-xl hover:shadow-amber-400/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                View Full Certificate
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center lg:text-left">
            <button className="bg-gradient-to-r from-amber-400 to-rose-500 hover:from-amber-500 hover:to-pink-600 text-black font-bold py-4 px-10 rounded-full shadow-2xl hover:shadow-amber-400/50 transition-all duration-300 hover:scale-110 transform">
              Learn More About Our Founder
            </button>
          </div>
        </div>
      </div>

      {/* Certificate Modal - Enlarged View */}
      {showCertificate && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4 animate-fadeIn overflow-y-auto" 
          onClick={() => setShowCertificate(false)}
        >
          <div 
            className="relative w-full max-w-3xl my-8" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mega Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 via-rose-400 to-purple-500 rounded-3xl blur-3xl opacity-60 animate-pulse"></div>
            
            <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl shadow-2xl border-2 border-amber-400/60 overflow-hidden">
              {/* Close Button - More Visible */}
              <button
                onClick={() => setShowCertificate(false)}
                className="absolute top-6 right-6 bg-gradient-to-r from-amber-400 to-rose-500 hover:from-rose-500 hover:to-amber-400 rounded-full p-3 transition-all duration-300 z-20 shadow-2xl hover:scale-125 group border-2 border-white"
              >
                <X className="w-6 h-6 text-black font-bold group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Modal Header */}
              <div className="bg-gradient-to-r from-amber-500/20 via-rose-500/20 to-purple-500/20 border-b-2 border-amber-400/40 px-8 py-6">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl p-4 shadow-2xl">
                    <Award className="w-10 h-10 text-black" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-1">Professional Certification</h3>
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-amber-400" />
                      <p className="text-amber-300 font-bold text-base">Certified by TrainHub Originals</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certificate Image - Full Size */}
              <div className="p-8 bg-gradient-to-br from-white to-gray-100">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 via-rose-400 to-purple-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-300"></div>
                  <img 
                    src={certificate}
                    alt="Certificate of Completion - Ethical Business Practices in International Student Recruitment"
                    className="relative w-full h-auto rounded-2xl shadow-2xl border-4 border-white"
                  />
                </div>
              </div>
              
              {/* Footer with Verification Details */}
              <div className="px-8 pb-8 bg-gradient-to-br from-gray-900 via-black to-gray-900">
                <div className="bg-gradient-to-r from-amber-400/10 via-rose-400/10 to-purple-400/10 rounded-2xl p-6 border-2 border-amber-400/40 shadow-2xl">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <p className="text-amber-400 font-bold mb-2 text-sm">Issue Date</p>
                      <p className="text-white font-bold text-xl">04/11/2025</p>
                    </div>
                    <div>
                      <p className="text-amber-400 font-bold mb-2 text-sm">Valid Until</p>
                      <p className="text-white font-bold text-xl">04/11/2026</p>
                    </div>
                    <div>
                      <p className="text-amber-400 font-bold mb-2 text-xs">Verification Code</p>
                      <p className="text-gray-300 font-mono text-[9px] break-all bg-black/50 rounded-lg p-2 border border-amber-400/20">
                        cae46ab1-8296-42b7-bafd-bfd672414996
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FounderSection;
