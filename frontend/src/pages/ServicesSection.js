import React, { useState } from "react";
import {
  FaPlane,
  FaMapMarkedAlt,
  FaHome,
  FaChalkboardTeacher,
  FaBriefcase,
  FaFileAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    title: "Study Visa",
    short: "Expert guidance for student visas to Canada, Australia, UK, and more.",
    icon: <FaPlane className="text-3xl text-yellow-300" />,
    image: "https://images.ctfassets.net/uwf0n1j71a7j/7ph8Zc00ZTzkzIpbEJOjy/979181c9b475f93ff185d49bc61f2260/student-visa.png?w=1920&q=75",
    full: "Vertex Study Visa provides comprehensive student visa services for top destinations including Canada, Australia, UK, USA, and New Zealand. Our expert consultants guide you through the entire application process, from university selection to visa approval. We assist with document preparation, application forms, financial documentation, and interview preparation. Our services include course selection guidance, university applications, scholarship assistance, and pre-departure orientation. With our extensive knowledge of visa requirements and immigration policies, we ensure your application meets all criteria. We maintain partnerships with over 500+ universities worldwide and have achieved a 98% success rate in student visa approvals. Our team provides personalized support throughout your journey, including post-arrival assistance and academic guidance. Choose Vertex Study Visa for seamless study abroad experience with expert consultation and guaranteed results."
  },
  {
    title: "Tourist Visa",
    short: "We assist with travel visa documentation and embassy appointments.",
    icon: <FaMapMarkedAlt className="text-3xl text-blue-400" />,
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    full: "Experience hassle-free travel with Vertex Study Visa's comprehensive tourist visa services. We specialize in processing visitor visas for popular destinations including Canada, Australia, UK, USA, Europe, and Asia. Our experienced team handles all documentation requirements, including passport verification, financial statements, travel itineraries, and accommodation bookings. We provide complete guidance on visa application forms, embassy appointments, and interview preparation. Our services include travel insurance assistance, flight booking support, and destination-specific travel advice. We ensure all documents meet embassy requirements and are properly formatted for submission. With our extensive network of travel partners and deep understanding of visa regulations, we guarantee smooth processing and timely approvals. Our post-approval services include pre-departure briefings and 24/7 travel support. Trust Vertex Study Visa for memorable travel experiences with complete peace of mind and professional assistance."
  },
  {
    title: "Permanent Residency (PR)",
    short: "Explore PR pathways for countries like Canada and Australia.",
    icon: <FaHome className="text-3xl text-emerald-400" />,
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
    full: "Secure your future with Vertex Study Visa's expert Permanent Residency services. We specialize in PR applications for Canada (Express Entry, Provincial Nominee Program), Australia (SkillSelect, State Nomination), and other immigration-friendly countries. Our certified immigration consultants provide comprehensive assessment of your eligibility, points calculation, and strategic planning for successful applications. We handle all documentation including educational credential assessment, language test preparation, work experience verification, and police clearance certificates. Our services include profile optimization, job search assistance, and settlement planning. We guide you through complex immigration processes including Federal Skilled Worker, Canadian Experience Class, and Provincial Nominee Programs. With our proven track record of successful PR applications and in-depth knowledge of immigration policies, we ensure maximum chances of approval. Our post-landing services include settlement assistance, job placement support, and community integration guidance for smooth transition to your new country."
  },
  {
    title: "IELTS/PTE Coaching",
    short: "Boost your fluency, confidence, and exam strategies.",
    icon: <FaChalkboardTeacher className="text-3xl text-pink-400" />,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    full: "Excel in English proficiency tests with Vertex Study Visa's comprehensive IELTS and PTE coaching programs. Our certified trainers provide personalized instruction for all four modules: Reading, Writing, Listening, and Speaking. We offer flexible batch timings, one-on-one sessions, and online classes to suit your schedule. Our proven methodology includes mock tests, practice sessions, and individual feedback to improve your scores. We provide extensive study materials, practice tests, and computer-based training for PTE Academic. Our coaching programs focus on test-taking strategies, time management, and confidence building. With our expert guidance, students consistently achieve their target scores for visa and immigration requirements. We offer specialized coaching for different score requirements including university admissions, work permits, and PR applications. Our success rate exceeds 95% with students achieving desired bands. Choose Vertex Study Visa for guaranteed score improvement and successful English proficiency certification with expert coaching and personalized attention."
  },
  {
    title: "Work Visa",
    short: "Professional visa solutions tailored for your career goals.",
    icon: <FaBriefcase className="text-3xl text-purple-400" />,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    full: "Advance your career internationally with Vertex Study Visa's specialized work visa services. We provide comprehensive assistance for various work visa categories including skilled worker visas, intra-company transfers, and employer-sponsored programs for Canada, Australia, UK, USA, and Europe. Our expert consultants help identify suitable job opportunities, prepare application documents, and navigate complex immigration procedures. We assist with Labor Market Impact Assessment (LMIA) applications, employer sponsorship processes, and work permit extensions. Our services include resume optimization, interview preparation, and job search strategies. We maintain strong relationships with international employers and recruitment agencies to facilitate job placements. Our team provides guidance on visa conditions, work rights, and pathways to permanent residency. With our extensive experience in employment-based immigration, we ensure smooth processing and successful outcomes. Our post-arrival services include workplace integration support and career development guidance. Trust Vertex Study Visa for professional work visa solutions and successful international career opportunities."
  },
  {
    title: "Document Assistance",
    short: "We help prepare all required documents for your visa journey.",
    icon: <FaFileAlt className="text-3xl text-amber-300" />,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    full: "Ensure visa success with Vertex Study Visa's comprehensive document assistance services. We provide end-to-end support for all visa documentation requirements including educational certificates, financial statements, employment letters, and personal documents. Our certified document specialists ensure all paperwork meets embassy and immigration standards. We assist with document translation, notarization, apostille services, and authentication procedures. Our services include Statement of Purpose (SOP) writing, Letter of Recommendation preparation, and financial documentation guidance. We help organize documents chronologically and provide checklists for different visa categories. Our team reviews all documentation for accuracy, completeness, and compliance with specific country requirements. We offer secure document storage and retrieval services for ongoing applications. With our meticulous attention to detail and thorough understanding of documentation requirements, we minimize the risk of application rejection. Our quality assurance process ensures error-free submissions and timely processing. Choose Vertex Study Visa for professional document assistance and increased chances of visa approval with expert guidance and comprehensive support."
  },
];

const ServicesSection = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) =>
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] relative">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
          ✨ Our Premium Services
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          End-to-end support for Study, Travel, Work, PR, and Language Coaching.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 p-6 text-white shadow-[0_8px_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_#f472b6] transition-all duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover rounded-xl mb-5 shadow-lg"
            />
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-white/10 rounded-full shadow-inner">
                {service.icon}
              </div>
            </div>
            <h3 className="text-center text-2xl font-bold text-yellow-300 mb-2 drop-shadow-md">
              {service.title}
            </h3>
            <div className="text-center text-sm text-gray-300 leading-relaxed mb-4">
              {expanded[index] ? (
                <div className="space-y-3 text-justify">
                  <p>{service.full}</p>
                  <div className="mt-4 p-3 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-lg border border-yellow-400/20">
                    <p className="text-yellow-300 font-semibold text-xs">
                      🌟 Choose Vertex Study Visa for guaranteed success!
                    </p>
                  </div>
                </div>
              ) : (
                <p>{service.short}</p>
              )}
            </div>
            <div className="text-center">
              <button
                onClick={() => toggleExpand(index)}
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {expanded[index] ? "Show Less ▲" : "Read More ▼"}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <div className="bg-gradient-to-r from-yellow-400/20 to-pink-500/20 backdrop-blur-xl rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-yellow-300 mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-gray-300 mb-6 text-lg">
            Contact Vertex Study Visa today for expert consultation and personalized guidance.
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 text-black px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl">
            Get Free Consultation
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;