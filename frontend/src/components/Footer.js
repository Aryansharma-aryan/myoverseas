import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaAngleRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-[#0f0c29] via-[#302b63] to-[#24243e] text-white pt-16 pb-6 px-6 font-[Poppins]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-10">
        {/* Column 1 */}
        <div>
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">
            Vertex Study Visa
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Expert visa support for Canada, Australia, the UK, USA, and Europe.
            Start your journey with trusted guidance.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-xl font-semibold text-cyan-400 mb-4">
            Our Services
          </h4>
          <ul className="space-y-2">
            {[
              { name: "Home", to: "/" },
              { name: "Visa Service", to: "/services" },
              { name: "Test Preparation", to: "/test-preparation" },
              { name: "About", to: "/about" },
              { name: "Contact Us", to: "/contact" },
            ].map(({ name, to }, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition duration-200"
              >
                <FaAngleRight />
                <Link to={to}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-xl font-semibold text-cyan-400 mb-4">
            Contact Information
          </h4>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex items-start gap-3">
              <FaEnvelope className="text-cyan-400 mt-1" />
              <span>
                <strong>Mail:</strong> vertexstudyvisa@gmail.com
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaPhoneAlt className="text-cyan-400 mt-1" />
              <span>
                <strong>Phone:</strong> 8053555546, 9996140555
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-cyan-400 mt-1" />
              <span>
                <strong>Address:</strong> SCO-1, Vidhata Complex, Opposite New
                Bus Stand, Near Bikaner, Kurukshetra
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center pt-6 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Vertex Study Visa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
