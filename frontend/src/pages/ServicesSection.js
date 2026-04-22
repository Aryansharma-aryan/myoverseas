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
    full: "Comprehensive study visa assistance for top destinations including Canada, Australia, UK, USA, and Europe. Our expert consultants provide end-to-end support from university selection to visa approval. We handle Provincial Attestation Letters (PAL) for Canada, Confirmation of Enrolment (CoE) for Australia, and Student Route visas for UK. Services include course selection, application preparation, documentation review, financial planning guidance, and visa interview preparation. We maintain partnerships with over 500 universities worldwide and have achieved a strong visa success rate through careful case handling.",
    icon: <FaPlane className="text-3xl text-yellow-300" />,
    features: [
      "University Selection",
      "Document Preparation",
      "Visa Interview Prep",
      "Scholarship Guidance",
    ],
    countries: ["Canada", "Australia", "UK", "USA", "Germany", "New Zealand"],
  },
  {
    title: "Tourist Visa",
    short: "We assist with travel visa documentation and embassy appointments.",
    full: "Professional tourist visa services for leisure travel, family visits, and business trips worldwide. We support applications for Europe (Schengen), USA, UK, Canada, Australia, and key Asian destinations. Our services include documentation assistance, embassy appointment support, travel planning guidance, and interview preparation tailored to your travel purpose and destination.",
    icon: <FaMapMarkedAlt className="text-3xl text-blue-400" />,
    features: [
      "Embassy Appointments",
      "Travel Itinerary",
      "Document Review",
      "Quick Processing",
    ],
    countries: ["Europe", "USA", "UK", "Canada", "Australia", "Singapore"],
  },
  {
    title: "Permanent Residency (PR)",
    short: "Explore PR pathways for countries like Canada and Australia.",
    full: "Comprehensive permanent residency support for skilled professionals seeking long-term migration options. We assist with profile evaluation, points assessment, occupation selection, documentation, language test planning, and complete application guidance for major PR programs including Canada and Australia.",
    icon: <FaHome className="text-3xl text-emerald-400" />,
    features: [
      "Express Entry",
      "Points Assessment",
      "PNP Applications",
      "State Nominations",
    ],
    countries: ["Canada", "Australia", "New Zealand", "Germany"],
  },
  {
    title: "IELTS/PTE Coaching",
    short: "Boost your fluency, confidence, and exam strategies.",
    full: "Professional English language coaching for IELTS, PTE, TOEFL, and related tests. Our training covers all four modules with mock tests, guided practice, strategy sessions, and personal feedback to help students reach target scores with confidence.",
    icon: <FaChalkboardTeacher className="text-3xl text-pink-400" />,
    features: [
      "Mock Tests",
      "One-on-One Sessions",
      "Speaking Practice",
      "Score Strategy",
    ],
    tests: ["IELTS", "PTE", "TOEFL", "OET", "CELPIP"],
  },
  {
    title: "Work Visa",
    short: "Professional visa solutions tailored for your career goals.",
    full: "Specialized work visa support for skilled professionals, temporary workers, and employer-sponsored applications. We help with eligibility checks, employer coordination, required documentation, and application preparation for common international work permit routes.",
    icon: <FaBriefcase className="text-3xl text-purple-400" />,
    features: [
      "Job Matching",
      "LMIA Support",
      "Employer Liaison",
      "Contract Review",
    ],
    visaTypes: [
      "Skilled Worker",
      "Temporary Worker",
      "Intra-Company Transfer",
      "Professional Mobility",
    ],
  },
  {
    title: "Document Assistance",
    short: "We help prepare all required documents for your visa journey.",
    full: "Complete document preparation and verification support for study, travel, work, and PR cases. We assist with translations, notarization guidance, document checklists, formatting, and overall document readiness so files match visa and immigration requirements.",
    icon: <FaFileAlt className="text-3xl text-amber-300" />,
    features: [
      "Apostille Services",
      "Document Translation",
      "Notarization",
      "Digital Storage",
    ],
    documents: ["Educational", "Employment", "Financial", "Personal", "Medical"],
  },
];

const ServicesSection = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] px-6 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.1),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.1),transparent)]" />

      <div className="relative z-10 mb-16 text-center">
        <h2 className="bg-gradient-to-r from-yellow-300 via-pink-500 to-red-500 bg-clip-text text-4xl font-extrabold text-transparent drop-shadow-lg sm:text-5xl lg:text-6xl">
          Our Premium Services
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
          End-to-end support for Study, Travel, Work, PR, and Language
          Coaching with personalized guidance.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
          <span className="flex items-center gap-1">
            <FaUsers className="text-yellow-300" /> 10,000+ Happy Clients
          </span>
          <span className="flex items-center gap-1">
            <FaPassport className="text-blue-400" /> High Success Guidance
          </span>
          <span className="flex items-center gap-1">
            <FaGraduationCap className="text-green-400" /> University Support
          </span>
        </div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {enhancedServices.map((service, index) => (
          <div
            key={service.title}
            className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 text-white shadow-[0_8px_30px_rgba(255,255,255,0.05)] backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:border-pink-500/20 hover:shadow-[0_0_40px_rgba(244,114,182,0.3)]"
          >
            <div className="mb-5 flex justify-center">
              <div className="rounded-full bg-gradient-to-br from-white/20 to-white/5 p-4 shadow-lg transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
            </div>

            <h3 className="mb-3 text-center text-2xl font-bold text-yellow-300 drop-shadow-md transition-colors group-hover:text-yellow-200">
              {service.title}
            </h3>

            <div className="space-y-4">
              <p className="text-center text-sm leading-relaxed text-gray-300">
                {expanded[index] ? service.full : service.short}
              </p>

              {expanded[index] && (
                <div className="space-y-3">
                  {service.features && (
                    <div>
                      <h4 className="mb-2 flex items-center gap-1 text-xs font-semibold text-pink-300">
                        <FaClipboardList className="text-xs" /> Key Features
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {service.features.map((feature) => (
                          <span
                            key={feature}
                            className="rounded-full bg-white/10 px-2 py-1 text-xs text-gray-300"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {service.countries && (
                    <div>
                      <h4 className="mb-2 flex items-center gap-1 text-xs font-semibold text-blue-300">
                        <FaMapMarkedAlt className="text-xs" /> Popular
                        Destinations
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {service.countries.map((country) => (
                          <span
                            key={country}
                            className="rounded-full bg-blue-500/20 px-2 py-1 text-xs text-blue-200"
                          >
                            {country}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {service.tests && (
                    <div>
                      <h4 className="mb-2 flex items-center gap-1 text-xs font-semibold text-green-300">
                        <FaLanguage className="text-xs" /> Available Tests
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {service.tests.map((test) => (
                          <span
                            key={test}
                            className="rounded-full bg-green-500/20 px-2 py-1 text-xs text-green-200"
                          >
                            {test}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {service.visaTypes && (
                    <div>
                      <h4 className="mb-2 flex items-center gap-1 text-xs font-semibold text-purple-300">
                        <FaBriefcase className="text-xs" /> Visa Categories
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {service.visaTypes.map((type) => (
                          <span
                            key={type}
                            className="rounded-full bg-purple-500/20 px-2 py-1 text-xs text-purple-200"
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {service.documents && (
                    <div>
                      <h4 className="mb-2 flex items-center gap-1 text-xs font-semibold text-amber-300">
                        <FaFileAlt className="text-xs" /> Document Types
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {service.documents.map((doc) => (
                          <span
                            key={doc}
                            className="rounded-full bg-amber-500/20 px-2 py-1 text-xs text-amber-200"
                          >
                            {doc}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => toggleExpand(index)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-pink-400 transition-all duration-300 hover:scale-105 hover:gap-3 hover:text-pink-300"
              >
                <span>{expanded[index] ? "Show Less" : "Read More"}</span>
                <span>{expanded[index] ? "▲" : "▼"}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-16 text-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-2 text-sm text-gray-400">
          <FaLaptop className="text-blue-400" />
          <span>Ready to start your journey?</span>
          <span className="font-semibold text-pink-400">Get Free Consultation</span>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
