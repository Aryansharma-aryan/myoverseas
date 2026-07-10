import React, { useState } from "react";
import { motion } from "framer-motion";
import team1 from "../assets/karanpal.jpeg";
import ukConsult from "../assets/jagdeepuk.jpeg";
import team2 from "../assets/vasundha.jpeg";
import team3 from "../assets/supreet.jpeg";
import Australia from "../assets/anchal.jpg";

import jashanpreet from "../assets/jashanpreet.jpg"

import { 
  FaGraduationCap, 
  FaPassport, 
  FaGlobe, 
  FaUserTie, 
  FaAward, 
  FaLanguage,
  FaMapMarkedAlt,
  FaUsers,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";

// TeamCard3D Component
const TeamCard3D = ({ name, role, image, experience, specialties, achievements, languages, description, isExpanded, onToggle }) => {
  return (
    <div className="w-80 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-white shadow-2xl hover:shadow-[0_0_40px_rgba(244,114,182,0.3)] transition-all duration-500 group">
      {/* Profile Image */}
      <div className="relative mb-6">
<div className="w-42 h-33 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-yellow-400 to-pink-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-pink-500 text-black px-3 py-1 rounded-full text-xs font-bold">
          {experience}
        </div>
      </div>

      {/* Name and Role */}
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-yellow-300 mb-1">{name}</h3>
        <p className="text-sm text-gray-300">{role}</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-white/5 rounded-lg p-2 text-center">
          <FaUsers className="text-blue-400 mx-auto mb-1" />
          <p className="text-xs text-gray-300">Success Rate</p>
          <p className="text-sm font-bold text-white">{achievements.successRate}</p>
        </div>
        <div className="bg-white/5 rounded-lg p-2 text-center">
          <FaGlobe className="text-green-400 mx-auto mb-1" />
          <p className="text-xs text-gray-300">Countries</p>
          <p className="text-sm font-bold text-white">{specialties.length}</p>
        </div>
      </div>

      {/* Specialties */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-pink-300 mb-2 flex items-center gap-1">
          <FaMapMarkedAlt className="text-xs" /> Specialties:
        </h4>
        <div className="flex flex-wrap gap-1">
          {specialties.map((specialty, i) => (
            <span key={i} className="text-xs bg-blue-500/20 px-2 py-1 rounded-full text-blue-200">
              {specialty}
            </span>
          ))}
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="space-y-3"
        >
          <div>
            <h4 className="text-sm font-semibold text-amber-300 mb-2 flex items-center gap-1">
              <FaAward className="text-xs" /> Achievements:
            </h4>
            <ul className="text-xs text-gray-300 space-y-1">
              {achievements.details.map((achievement, i) => (
                <li key={i} className="flex items-start gap-1">
                  <span className="text-yellow-400 mt-1">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-green-300 mb-2 flex items-center gap-1">
              <FaLanguage className="text-xs" /> Languages:
            </h4>
            <div className="flex flex-wrap gap-1">
              {languages.map((lang, i) => (
                <span key={i} className="text-xs bg-green-500/20 px-2 py-1 rounded-full text-green-200">
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs text-gray-300 leading-relaxed">
              {typeof description === 'string' && description.includes('✅ Key Responsibilities') ? (
                <div dangerouslySetInnerHTML={{ __html: description }} />
              ) : (
                <p className="italic">"{description}"</p>
              )}
            </div>
          </div>
        </motion.div>
      )}

      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className="w-full mt-4 flex items-center justify-center gap-2 text-pink-400 hover:text-pink-300 font-semibold text-sm transition-colors"
      >
        {isExpanded ? (
          <>Show Less <FaChevronUp /></>
        ) : (
          <>View Details <FaChevronDown /></>
        )}
      </button>
    </div>
  );
};

const members = [
  {
    name: "Mr. Karanpal Singh",
    role: "Senior Consultant - Global Tourist Visa Operations",
    image: team1,
    experience: "8+ Years",
    specialties: ["Tourist Visa", "Europe Schengen", "USA B1/B2", "UK Visitor", "Canada TRV"],
    achievements: {
      successRate: "96%",
      details: [
        "Processed 2000+ tourist visa applications",
        "Expert in complex visa refusal cases",
        "Maintains strong embassy relationships",
        "Specialized in group and family applications"
      ]
    },
    languages: ["English", "Hindi", "Punjabi"],
    description: "With extensive experience in tourist visa operations, Karanpal has helped thousands of families reunite and explore the world. His expertise in handling complex cases and embassy relations makes him invaluable for challenging applications."
  },
  {
    name: "Jagdeep Kaur",
    role: "Senior Uk Counsellor - UK Study Visa",
    image: ukConsult,
    experience: "5+ Years",
    specialties: ["UK Student Route", "CAS Processing", "Tier 4 Visa", "Graduate Route"],
    achievements: {
      successRate: "99%",
      details: [
        "Successfully secured UK Study Visas for applicants with 2–3 prior refusals.",
        "Helped candidates with long education gaps (5+ years) obtain study visas.",
        "Delivered positive visa outcomes for high-risk cases where others had failed.",
        "Converted challenging profiles into success stories – including those trying for 5+ years.",
        "Maintained high visa success rate by personalized SOPs, strong documentation, and close follow-up."
      ]
    },
    languages: ["English", "Hindi", "Punjabi"],
    description: `
<div class="space-y-4">
  <div class="text-green-400 font-semibold text-base">✅ Key Responsibilities</div>
  
  <ul class="text-xs text-gray-300 space-y-1 list-disc list-inside">
    <li>Counseling students for UK study visas and guiding them throughout the admission and visa process.</li>
    <li>Filing UK student visa applications independently (UKVI portal).</li>
    <li>Managing payments including tuition fees, IHS, and visa fees.</li>
    <li>Coordinating with universities, students, and B2B agents.</li>
    <li>Handling student recruitment, enrollment, and screening for UK universities.</li>
    <li>Managing team operations, assigning tasks, and ensuring smooth workflow.</li>
    <li>Responding to student and partner queries via email, calls, and WhatsApp.</li>
    <li>Taking care of documentation: CAS, SOPs, financials, TB reports, etc.</li>
    <li>Maintaining office records, follow-ups, and operational reporting.</li>
    <li>Supporting marketing campaigns, content creation, and outreach.</li>
  </ul>

  <div class="text-yellow-400 font-semibold text-sm">🎓 Education</div>
  <ul class="text-xs text-gray-300 space-y-1 list-disc list-inside">
    <li><strong>Bachelor in Architecture</strong>, B•P•S Mahila Vishavidyalaya, Sonipat (2014) – 72%</li>
  </ul>

  <div class="text-blue-400 font-semibold text-sm">💻 Skills</div>
  <ul class="text-xs text-gray-300 space-y-1 list-disc list-inside">
    <li>UK Student Visa Filing & Counseling</li>
    <li>Student Recruitment & Enrollment</li>
    <li>Payment & Financial Handling</li>
    <li>Email & Client Communication</li>
    <li>Team Management & Task Delegation</li>
    <li>B2B Coordination</li>
    <li>MS Office & WhatsApp CRM</li>
    <li>Operations & Documentation Handling</li>
  </ul>
</div>
`
  },
  {
    name: "Ms. Vasudha",
    role: "Senior Consultant - Canada Study Visa",
    image: team2,
    experience: "6+ Years",
    specialties: ["Canada Study Visa", "Provincial Attestation", "SDS Program", "University Applications"],
    achievements: {
      successRate: "94%",
      details: [
        "Successfully processed 1500+ Canadian student visas",
        "Expert in SDS (Student Direct Stream) applications",
        "Partnerships with 100+ Canadian institutions",
        "Specialized in post-graduation work permits"
      ]
    },
    languages: ["English", "Hindi", "Gujarati"],
    description: "Vasudha's deep understanding of Canadian immigration policies and strong university partnerships have made her the go-to consultant for students aspiring to study in Canada."
  },
  {
    name: "Ms. Jashanpreet Kaur",
    role: "Administrative Head & Operations Manager",
    image: jashanpreet,
    experience: "5+ Years",
    specialties: ["Operations Management", "Client Relations", "Process Optimization", "Team Coordination"],
    achievements: {
      successRate: "99%",
      details: [
        "Streamlined operations reducing processing time by 30%",
        "Implemented digital tracking systems",
        "Managed 5000+ client files annually",
        "Developed quality assurance protocols"
      ]
    },
    languages: ["English", "Hindi", "Punjabi"],
    description: "Jashanpreet ensures smooth operations and exceptional client service. Her organizational skills and attention to detail keep the entire team functioning at peak efficiency."
  },
  {
    name: "Ms. Anchal Rana",
    role: "Senior Consultant - Australia Study Visa",
    image: Australia,
    experience: "6+ Years",
    specialties: ["Australia Student Visa", "CoE Processing", "State Nominations", "Post-Study Work Rights"],
    achievements: {
      successRate: "95%",
      details: [
        "Processed 1800+ Australian student visas",
        "Expert in Genuine Temporary Entrant (GTE) statements",
        "Strong relationships with Australian universities",
        "Specialized in pathway programs and transfers"
      ]
    },
    languages: ["English", "Hindi", "Punjabi"],
    description: "Anchal's expertise in Australian immigration law and education system has made her instrumental in helping students navigate the complex Australian visa process."
  },
  {
    name: "Mr. Supreet Dhamija",
    role: "Senior Consultant - USA Study Visa",
    image: team3,
    experience: "7+ Years",
    specialties: ["USA F1 Visa", "University Selection", "Visa Interview Prep", "Scholarship Guidance"],
    achievements: {
      successRate: "92%",
      details: [
        "Guided 1200+ students to US universities",
        "Expert in F1 visa interview preparation",
        "Secured $2M+ in scholarships for students",
        "Specialized in STEM program applications"
      ]
    },
    languages: ["English", "Hindi", "Punjabi"],
    description: "Supreet's comprehensive knowledge of the US education system and visa processes has helped countless students achieve their American dream."
  }
];

const Team = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-96 h-96 bg-pink-500/20 rounded-full blur-[120px] absolute -top-24 left-10" />
        <div className="w-96 h-96 bg-yellow-400/20 rounded-full blur-[120px] absolute -bottom-24 right-10" />
        <div className="w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
          🌍 Meet Our Expert Team
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Dedicated professionals with proven track records in making your global dreams a reality
        </p>
        <div className="mt-6 flex justify-center items-center gap-6 text-sm text-gray-400">
          <span className="flex items-center gap-1">
            <FaUsers className="text-yellow-300" /> 50+ Years Combined Experience
          </span>
          <span className="flex items-center gap-1">
            <FaAward className="text-green-400" /> 10,000+ Successful Cases
          </span>
          <span className="flex items-center gap-1">
            <FaGlobe className="text-blue-400" /> 15+ Countries Expertise
          </span>
        </div>
      </motion.div>

      {/* Team Cards Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          hidden: { opacity: 0 },
        }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto justify-items-center"
      >
        {members.map((member, i) => (
          <motion.div
            key={i}
            variants={{
              visible: { opacity: 1, y: 0, scale: 1 },
              hidden: { opacity: 0, y: 30, scale: 0.9 }
            }}
            transition={{ duration: 0.6 }}
          >
            <TeamCard3D 
              {...member} 
              isExpanded={expandedCards[i]}
              onToggle={() => toggleCard(i)}
            />
            
            
          </motion.div>
        ))}
        
      </motion.div>
      

      {/* Company Values Section */}
      <div className="flex flex-col lg:flex-row mt-24 relative z-10 gap-6 max-w-7xl mx-auto">
        {/* Left Panel */}
        <div className="lg:w-1/2 relative overflow-hidden rounded-3xl border border-white/10 shadow-lg backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-pink-500/20 rounded-3xl" />
          <div className="relative z-10 p-10 text-white space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg font-semibold text-yellow-400 flex items-center gap-2"
            >
              <FaUserTie /> Expert Guidance That Delivers
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
              className="text-gray-300 text-sm lg:text-base leading-relaxed"
            >
              At <span className="text-white font-bold">Vertex Study Visa</span>,
              we believe every student and traveler deserves a trusted partner
              on their international journey. Our team combines years of experience
              with personalized attention to ensure your success.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-400 text-black font-semibold py-3 px-8 rounded-xl shadow-lg transition-all duration-300"
            >
              GET FREE CONSULTATION
            </motion.button>
          </div>
        </div>

        {/* Right Panel */}
        <div className="lg:w-1/2 bg-white/5 backdrop-blur-lg border border-white/10 text-white p-10 rounded-3xl shadow-2xl flex flex-col justify-center space-y-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-yellow-400"
          >
            ✅ Why Choose Our Team?
          </motion.h3>
          <p className="text-base text-gray-300 leading-relaxed">
            Our success is built on trust, expertise, and unwavering commitment to your goals.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-green-400">
                <FaAward className="text-sm" />
                <span className="text-sm font-semibold">95%+ Success Rate</span>
              </div>
              <div className="flex items-center gap-2 text-blue-400">
                <FaGlobe className="text-sm" />
                <span className="text-sm font-semibold">15+ Countries</span>
              </div>
              <div className="flex items-center gap-2 text-pink-400">
                <FaUsers className="text-sm" />
                <span className="text-sm font-semibold">10,000+ Happy Clients</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-purple-400">
                <FaPassport className="text-sm" />
                <span className="text-sm font-semibold">Expert Visa Knowledge</span>
              </div>
              <div className="flex items-center gap-2 text-amber-400">
                <FaGraduationCap className="text-sm" />
                <span className="text-sm font-semibold">University Partnerships</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-400">
                <FaLanguage className="text-sm" />
                <span className="text-sm font-semibold">Multilingual Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
