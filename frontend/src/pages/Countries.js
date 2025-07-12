import React, { useState } from 'react';
import {
  FaCanadianMapleLeaf,
  FaFlagUsa,
} from "react-icons/fa";
import { GiAustralia } from "react-icons/gi";
import { TfiFlagAlt } from "react-icons/tfi";
import { FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";

const countries = [
  {
    name: "Canada",
    Icon: FaCanadianMapleLeaf,
    color: "bg-gradient-to-r from-[#ff0000] to-[#990000]",
    iconColor: "#ffffff",
    shortDescription: "Leading study destination with top universities, work permits, and strong PR pathways.",
    detailedContent: `Canada offers exceptional opportunities for international students with world-renowned universities like University of Toronto, McGill, and UBC. Students can work up to 24 hours per week during studies and are eligible for Post-Graduation Work Permits (PGWP) up to 3 years after graduation. The Express Entry system provides clear pathways to permanent residence through programs like Canadian Experience Class (CEC) and Provincial Nominee Programs (PNP). With excellent healthcare, multicultural environment, and high quality of life, Canada remains a top choice for international education and immigration.`
  },
  {
    name: "Australia",
    Icon: GiAustralia,
    color: "bg-gradient-to-r from-[#002984] to-[#1976d2]",
    iconColor: "#ffffff",
    shortDescription: "Leading study destination with top universities, work permits, and strong PR pathways.",
    detailedContent: `Australia hosts world-class universities including University of Melbourne, Australian National University, and University of Sydney. International students can work 48 hours per fortnight during studies and unlimited hours during breaks. The Temporary Graduate visa (subclass 485) allows graduates to work for 2-4 years post-graduation. Australia offers multiple pathways to permanent residence through skilled migration programs, state nominations, and employer sponsorship. With excellent weather, diverse culture, and strong economy, Australia provides outstanding education and career opportunities for international students.`
  },
  {
    name: "UK",
    Icon: TfiFlagAlt,
    color: "bg-gradient-to-r from-[#00247d] to-[#cf142b]",
    iconColor: "#ffffff",
    shortDescription: "Leading study destination with top universities, work permits, and strong PR pathways.",
    detailedContent: `The UK features prestigious institutions like Oxford, Cambridge, Imperial College, and London School of Economics. Students can work 20 hours per week during term time and full-time during holidays. The Graduate Route visa allows international graduates to stay and work for 2 years (3 years for PhD graduates) after completing their studies. The UK offers pathways to permanent residence through skilled worker routes, global talent visas, and innovative programs. With rich history, cultural diversity, and proximity to Europe, the UK provides world-class education and excellent career prospects.`
  },
  {
    name: "USA",
    Icon: FaFlagUsa,
    color: "bg-gradient-to-r from-[#3c3b6e] to-[#b22234]",
    iconColor: "#ffffff",
    shortDescription: "Leading study destination with top universities, work permits, and strong PR pathways.",
    detailedContent: `The USA hosts top-ranked universities including Harvard, MIT, Stanford, and Ivy League institutions. Students on F-1 visa can work on-campus and through CPT/OPT programs. STEM graduates receive 36 months of Optional Practical Training (OPT), while other graduates get 12 months. The H-1B visa program provides pathways to permanent residence through employer sponsorship. With cutting-edge research facilities, diverse academic programs, and strong industry connections, the USA offers unparalleled opportunities for academic excellence and career advancement in the global market.`
  },
];

const CountriesWeServe = () => {
  const [expandedCountry, setExpandedCountry] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleReadMore = (countryName) => {
    setExpandedCountry(countryName);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setExpandedCountry(null);
  };

  const currentCountry = countries.find(country => country.name === expandedCountry);

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1f2937] text-white font-[Poppins] relative overflow-hidden">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-yellow-400 animate-pulse">
          🌍 Countries We Serve
        </h2>
        <p className="text-lg md:text-xl text-gray-300">
          Explore top global destinations with unmatched guidance and success rates.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
        {countries.map(({ name, Icon, color, iconColor, shortDescription }, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 shadow-xl hover:scale-105 transition-all duration-300 ${color} transform hover:shadow-2xl`}
          >
            <div className="flex flex-col items-center text-center gap-4">
              <Icon size={48} style={{ color: iconColor }} />
              <h3 className="text-2xl font-bold uppercase">{name}</h3>
              <p className="text-sm text-gray-100 leading-relaxed mb-4">
                {shortDescription}
              </p>
              <button
                onClick={() => handleReadMore(name)}
                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 text-sm font-semibold backdrop-blur-sm"
              >
                Read More <FaChevronDown size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Scrolling Text */}
      <div className="mt-20 overflow-hidden">
        <div className="animate-scroll whitespace-nowrap text-yellow-300 font-semibold text-lg uppercase tracking-wider">
          🇨🇦 Canada &nbsp;&nbsp;&nbsp; 🇦🇺 Australia &nbsp;&nbsp;&nbsp; 🇬🇧 UK &nbsp;&nbsp;&nbsp; 🇺🇸 USA &nbsp;&nbsp;&nbsp; – Study Abroad With Vertex Study Visa – &nbsp;&nbsp;&nbsp;
          🇨🇦 Canada &nbsp;&nbsp;&nbsp; 🇦🇺 Australia &nbsp;&nbsp;&nbsp; 🇬🇧 UK &nbsp;&nbsp;&nbsp; 🇺🇸 USA &nbsp;&nbsp;&nbsp; – Study Abroad With Vertex Study Visa – &nbsp;&nbsp;&nbsp;
        </div>
      </div>

      {/* Modal */}
      {showModal && currentCountry && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-[#1e293b] to-[#334155] rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <FaTimes size={24} />
            </button>

            {/* Modal Content */}
            <div className="flex flex-col items-center text-center gap-6">
              <div className={`p-4 rounded-full ${currentCountry.color}`}>
                <currentCountry.Icon size={60} style={{ color: currentCountry.iconColor }} />
              </div>
              
              <h3 className="text-3xl font-bold text-yellow-400 uppercase">
                Study in {currentCountry.name}
              </h3>
              
              <div className="text-gray-300 leading-relaxed text-justify">
                <p>{currentCountry.detailedContent}</p>
              </div>

              {/* CTA Section */}
              <div className="mt-6 p-4 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-lg border border-yellow-400/30">
                <p className="text-yellow-300 font-semibold mb-2">
                  Ready to start your journey to {currentCountry.name}?
                </p>
                <p className="text-gray-300 text-sm">
                  Contact Vertex Study Visa today for expert guidance and personalized consultation.
                </p>
              </div>

              <button
                onClick={closeModal}
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300"
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS for scrolling animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default CountriesWeServe;