import React, { useState } from "react";
import {
  FaPlane,
  FaMapMarkedAlt,
  FaHome,
  FaChalkboardTeacher,
  FaBriefcase,
  FaFileAlt,
  FaGraduationCap,
  FaPassport,
  FaUsers,
  FaLanguage,
  FaLaptop,
  FaClipboardList,
} from "react-icons/fa";

const enhancedServices = [
  {
    title: "Study Visa",
    short: "Expert guidance for student visas to Canada, Australia, UK, and more.",
    full: "Comprehensive study visa assistance for top destinations including Canada, Australia, UK, USA, and Europe. Our expert consultants provide end-to-end support from university selection to visa approval. We handle Provincial Attestation Letters (PAL) for Canada, Confirmation of Enrolment (CoE) for Australia, and Student Route visas for UK. Services include course selection, application preparation, documentation review, financial planning guidance, and visa interview preparation. We maintain partnerships with over 500+ universities worldwide and have achieved 95% visa success rate. Our team stays updated with latest immigration policies and requirements to ensure smooth processing within 3-6 weeks.",
    icon: <FaPlane className="text-3xl text-yellow-300" />,
    features: ["University Selection", "Document Preparation", "Visa Interview Prep", "Scholarship Guidance"],
    countries: ["Canada", "Australia", "UK", "USA", "Germany", "New Zealand"]
  },
  {
    title: "Tourist Visa",
    short: "We assist with travel visa documentation and embassy appointments.",
    full: "Professional tourist visa services for leisure travel, family visits, and business trips worldwide. We specialize in visa applications for popular destinations including Europe (Schengen), USA (B1/B2), UK, Canada, Australia, and Asian countries. Our services include complete documentation assistance, embassy appointment booking, travel itinerary planning, and visa interview preparation. We handle tourist visas, visitor visas, transit visas, and multiple-entry visas. Our experienced team ensures all documents meet embassy requirements and provides personalized guidance based on your travel purpose, duration, and destination. We maintain strong relationships with embassy officials and visa processing centers for faster approvals.",
    icon: <FaMapMarkedAlt className="text-3xl text-blue-400" />,
    features: ["Embassy Appointments", "Travel Itinerary", "Document Review", "Quick Processing"],
    countries: ["Europe", "USA", "UK", "Canada", "Australia", "Singapore"]
  },
  {
    title: "Permanent Residency (PR)",
    short: "Explore PR pathways for countries like Canada and Australia.",
    full: "Comprehensive permanent residency solutions for skilled professionals seeking global opportunities. We specialize in Express Entry (Canada), SkillSelect (Australia), and skilled migration programs for New Zealand and other countries. Our services include eligibility assessment, points calculation, NOC/ANZSCO code selection, language test preparation, Educational Credential Assessment (ECA), and complete application processing. We handle Federal Skilled Worker Program, Canadian Experience Class, Provincial Nominee Programs (PNP), and Australian state nominations. Our certified immigration consultants provide personalized strategies to maximize your PR chances and guide you through the entire immigration journey from initial assessment to landing.",
    icon: <FaHome className="text-3xl text-emerald-400" />,
    features: ["Express Entry", "Points Assessment", "PNP Applications", "State Nominations"],
    countries: ["Canada", "Australia", "New Zealand", "Germany"]
  },
  {
    title: "IELTS/PTE Coaching",
    short: "Boost your fluency, confidence, and exam strategies.",
    full: "Professional English language training for IELTS, PTE, TOEFL, and other international English proficiency tests. Our certified trainers with 10+ years experience provide comprehensive coaching covering all four modules: Reading, Writing, Listening, and Speaking. We offer personalized study plans, mock tests, one-on-one sessions, and group classes. Our proven methodology includes test-taking strategies, time management techniques, and regular progress assessments. We provide extensive practice materials, computer-based test simulations, and speaking practice sessions. With our coaching, students achieve their target scores within 4-8 weeks. We also offer specialized coaching for nursing (OET), teaching (CELPIP), and other profession-specific English tests.",
    icon: <FaChalkboardTeacher className="text-3xl text-pink-400" />,
    features: ["Mock Tests", "One-on-One Sessions", "Speaking Practice", "Score Guarantee"],
    tests: ["IELTS", "PTE", "TOEFL", "OET", "CELPIP"]
  },
  {
    title: "Work Visa",
    short: "Professional visa solutions tailored for your career goals.",
    full: "Specialized work visa services for skilled professionals, temporary workers, and intra-company transfers. We handle various work permit categories including skilled worker visas, temporary foreign worker programs, employer-sponsored visas, and professional mobility agreements. Our services cover Labour Market Impact Assessment (LMIA) for Canada, Temporary Skill Shortage (TSS) visas for Australia, Skilled Worker Route for UK, and H1B/L1 visas for USA. We provide job search assistance, employer matching, contract review, and post-arrival settlement services. Our team works closely with employers and immigration lawyers to ensure compliance with labor laws and immigration regulations. We maintain a database of 1000+ employers across various industries.",
    icon: <FaBriefcase className="text-3xl text-purple-400" />,
    features: ["Job Matching", "LMIA Support", "Employer Liaison", "Contract Review"],
    visaTypes: ["Skilled Worker", "Temporary Worker", "Intra-Company Transfer", "Professional Mobility"]
  },
  {
    title: "Document Assistance",
    short: "We help prepare all required documents for your visa journey.",
    full: "Complete document preparation and verification services for all visa categories. Our document specialists ensure all paperwork meets embassy and immigration standards. Services include apostille and attestation, document translation, notarization, and courier services. We handle educational documents (transcripts, degrees), employment documents (experience letters, contracts), financial documents (bank statements, tax returns), and personal documents (birth certificates, marriage certificates). Our team verifies authenticity, formats documents according to specific requirements, and provides document checklists. We offer digital document storage, tracking services, and emergency document assistance. Our network includes certified translators, notaries, and attestation agencies across India.",
    icon: <FaFileAlt className="text-3xl text-amber-300" />,
    features: ["Apostille Services", "Document Translation", "Notarization", "Digital Storage"],
    documents: ["Educational", "Employment", "Financial", "Personal", "Medical"]
  }
];

const ServicesSection = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) =>
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.1),transparent)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.1),transparent)] pointer-events-none"></div>
      
      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
          ✨ Our Premium Services
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          End-to-end support for Study, Travel, Work, PR, and Language Coaching with proven expertise and personalized guidance.
        </p>
        <div className="mt-6 flex justify-center items-center gap-4 text-sm text-gray-400">
          <span className="flex items-center gap-1">
            <FaUsers className="text-yellow-300" /> 10,000+ Happy Clients
          </span>
          <span className="flex items-center gap-1">
            <FaPassport className="text-blue-400" /> 95% Success Rate
          </span>
          <span className="flex items-center gap-1">
            <FaGraduationCap className="text-green-400" /> 500+ University Partners
          </span>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
        {enhancedServices.map((service, index) => (
          <div
            key={index}
            className="group rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 p-6 text-white shadow-[0_8px_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(244,114,182,0.3)] transition-all duration-500 hover:scale-[1.02] hover:border-pink-500/20"
          >
            {/* Service Icon */}
            <div className="flex justify-center mb-5">
              <div className="p-4 bg-gradient-to-br from-white/20 to-white/5 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
            </div>

            {/* Service Title */}
            <h3 className="text-center text-2xl font-bold text-yellow-300 mb-3 drop-shadow-md group-hover:text-yellow-200 transition-colors">
              {service.title}
            </h3>

            {/* Service Content */}
            <div className="space-y-4">
              <p className="text-center text-sm text-gray-300 leading-relaxed">
                {expanded[index] ? service.full : service.short}
              </p>

              {/* Additional Details when expanded */}
              {expanded[index] && (
                <div className="space-y-3 animate-in slide-in-from-top-2 duration-300">
                  {service.features && (
                    <div>
                      <h4 className="text-xs font-semibold text-pink-300 mb-2 flex items-center gap-1">
                        <FaClipboardList className="text-xs" /> Key Features:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {service.features.map((feature, i) => (
                          <span key={i} className="text-xs bg-white/10 px-2 py-1 rounded-full text-gray-300">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {service.countries && (
                    <div>
                      <h4 className="text-xs font-semibold text-blue-300 mb-2 flex items-center gap-1">
                        <FaMapMarkedAlt className="text-xs" /> Popular Destinations:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {service.countries.map((country, i) => (
                          <span key={i} className="text-xs bg-blue-500/20 px-2 py-1 rounded-full text-blue-200">
                            {country}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {service.tests && (
                    <div>
                      <h4 className="text-xs font-semibold text-green-300 mb-2 flex items-center gap-1">
                        <FaLanguage className="text-xs" /> Available Tests:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {service.tests.map((test, i) => (
                          <span key={i} className="text-xs bg-green-500/20 px-2 py-1 rounded-full text-green-200">
                            {test}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {service.visaTypes && (
                    <div>
                      <h4 className="text-xs font-semibold text-purple-300 mb-2 flex items-center gap-1">
                        <FaBriefcase className="text-xs" /> Visa Categories:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {service.visaTypes.map((type, i) => (
                          <span key={i} className="text-xs bg-purple-500/20 px-2 py-1 rounded-full text-purple-200">
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {service.documents && (
                    <div>
                      <h4 className="text-xs font-semibold text-amber-300 mb-2 flex items-center gap-1">
                        <FaFileAlt className="text-xs" /> Document Types:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {service.documents.map((doc, i) => (
                          <span key={i} className="text-xs bg-amber-500/20 px-2 py-1 rounded-full text-amber-200">
                            {doc}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Read More Button */}
            <div className="text-center mt-6">
              <button
                onClick={() => toggleExpand(index)}
                className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 font-semibold text-sm transition-all duration-300 hover:scale-105 hover:gap-3 group"
              >
                <span>{expanded[index] ? "Show Less" : "Read More"}</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                  {expanded[index] ? "▲" : "▼"}
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16 relative z-10">
        <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
          <FaLaptop className="text-blue-400" />
          <span>Ready to start your journey?</span>
          <button className="text-pink-400 hover:text-pink-300 font-semibold ml-2 transition-colors">
            Get Free Consultation →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;