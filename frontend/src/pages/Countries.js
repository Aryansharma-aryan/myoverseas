import {
  FaCanadianMapleLeaf,
  FaFlagUsa,
} from "react-icons/fa";
import { GiAustralia } from "react-icons/gi";
import { TfiFlagAlt } from "react-icons/tfi"; // UK-like flag
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const countries = [
  {
    name: "Canada",
    Icon: FaCanadianMapleLeaf,
    color: "bg-gradient-to-r from-[#ff0000] to-[#990000]",
    iconColor: "#ffffff",
  },
  {
    name: "Australia",
    Icon: GiAustralia,
    color: "bg-gradient-to-r from-[#002984] to-[#1976d2]",
    iconColor: "#ffffff",
  },
  {
    name: "UK",
    Icon: TfiFlagAlt,
    color: "bg-gradient-to-r from-[#00247d] to-[#cf142b]",
    iconColor: "#ffffff",
  },
  {
    name: "USA",
    Icon: FaFlagUsa,
    color: "bg-gradient-to-r from-[#3c3b6e] to-[#b22234]",
    iconColor: "#ffffff",
  },
];

const CountriesWeServe = () => {
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

      {/* Cards Marquee */}
      <Marquee
        direction="right"
        speed={50}
        pauseOnHover
        gradient
        gradientColor={[15, 23, 42]}
      >
        <div className="flex gap-8 px-4">
          {countries.map(({ name, Icon, color, iconColor }, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              key={index}
              className={`w-[300px] rounded-2xl p-6 shadow-xl hover:scale-105 transition duration-300 ${color}`}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <Icon size={48} style={{ color: iconColor }} />
                <h3 className="text-2xl font-bold uppercase">{name}</h3>
                <p className="text-sm text-gray-100 leading-relaxed">
                  Leading study destination with top universities, work permits, and strong PR pathways.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Marquee>

      {/* Bottom Marquee */}
      <div className="mt-20">
        <Marquee
          speed={60}
          gradient
          gradientColor={[15, 23, 42]}
          className="text-yellow-300 font-semibold text-lg uppercase tracking-wider"
        >
          🇨🇦 Canada &nbsp; 🇦🇺 Australia &nbsp; 🇬🇧 UK &nbsp; 🇺🇸 USA &nbsp; – Study Abroad With Vertex Study Visa –
        </Marquee>
      </div>
    </section>
  );
};

export default CountriesWeServe;
