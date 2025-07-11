import { FaBookReader, FaHeadphones, FaClipboardCheck } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";

// Import images
import ieltsImage from "../assets/Ielts.avif";
import toeflImage from "../assets/Toefl.avif";
import pteImage from "../assets/Pte.avif";
import pardeepImage from "../assets/pardeep.jpg"; // Updated image

// Test data
const tests = [
  {
    name: "IELTS",
    Icon: FaBookReader,
    color: "from-yellow-500 to-yellow-700",
    image: ieltsImage,
    description:
      "IELTS is one of the most popular English proficiency tests. Our training includes detailed sessions on Listening, Reading, Writing, and Speaking with mock tests and Band 8+ strategies.",
  },
  {
    name: "TOEFL",
    Icon: FaHeadphones,
    color: "from-green-500 to-green-700",
    image: toeflImage,
    description:
      "TOEFL is accepted worldwide. Our coaching covers iBT format, live practice, and adaptive training to strengthen grammar, listening, and speaking skills.",
  },
  {
    name: "PTE",
    Icon: FaClipboardCheck,
    color: "from-purple-500 to-purple-700",
    image: pteImage,
    description:
      "PTE is fast and AI-based. Get AI-scored drills, time management techniques, and full simulations for a real test environment.",
  },
];

// Typewriter animation hook
const useTypewriter = (text, speed = 50) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return displayed;
};

const TestPreparation = () => {
  const typewriterText = useTypewriter("🎓 Test Preparation");

  return (
    <section className="py-24 px-6 bg-gray-900 text-white font-[Poppins] relative overflow-hidden">
      {/* Flex Container for Image and Text */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* Left: Image Card */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl w-full md:w-1/2 max-w-md">
          <img
            src={pardeepImage}
            alt="Mr. Pardeep Kumar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Description */}
        <div className="flex-1 text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            🎓 Meet <span className="text-blue-400">Mr. Pardeep Kumar</span>
          </h2>
          <p className="text-lg text-white/90 mb-4">
            <strong>Academic Head, Vertex Study Visa</strong><br />
            With over <strong>15 years of teaching experience</strong>, Mr. Pardeep Kumar is the academic backbone of Vertex Study Visa. As a highly respected mentor in the field of <strong>IELTS and PTE training</strong>, he has helped thousands of students achieve their goals and unlock international opportunities.
          </p>
          <p className="text-white/90 mb-4">
            His teaching blends <strong>deep subject knowledge, exam-focused strategies, and personal attention</strong>. Known for being engaging and result-oriented, he ensures each student gains the confidence and skills to succeed — whether beginner or advanced.
          </p>

          {/* Core Strengths */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-300 mb-2">His Core Strengths:</h3>
            <ul className="list-disc pl-6 text-white/80 leading-relaxed">
              <li>15+ Years of Teaching Experience</li>
              <li>Certified IELTS & PTE Trainer</li>
              <li>Personalized Coaching Techniques</li>
              <li>Track Record of 1000+ High-Scoring Students</li>
              <li>Deep Knowledge of Exam Evaluation Criteria</li>
            </ul>
          </div>

          <blockquote className="italic text-white/80 mt-4 border-l-4 border-blue-400 pl-4">
            “Every student has potential — they just need the right direction. My goal is not just to teach, but to transform results.”<br />
            — <span className="font-semibold text-white">Mr. Pardeep Kumar</span>
          </blockquote>
        </div>
      </div>

      {/* Title Section */}
      <div className="text-center my-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-lime-300 to-green-500 animate-shine">
          {typewriterText}
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-medium animate-fade-in">
          Our expert-led coaching programs help you excel in global tests with structured learning, smart techniques, and full support.
        </p>
      </div>

      {/* Marquee Cards */}
      <Marquee
        direction="right"
        speed={50}
        pauseOnHover
        gradient={true}
        gradientColor={[17, 24, 39]}
        className="mb-20"
      >
        <div className="flex gap-10 px-4">
          {tests.map(({ name, Icon, color, image, description }, index) => (
            <div
              key={index}
              className={`w-[340px] rounded-3xl p-4 bg-gradient-to-br ${color} shadow-2xl ring-2 ring-white/10 hover:ring-white/30 transition-all duration-500 transform hover:scale-[1.05] relative overflow-hidden group`}
            >
              {/* Shine Effect */}
              <div className="absolute top-0 left-[-75%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 group-hover:animate-shimmer z-10"></div>

              {/* Icon + Title */}
              <div className="text-center mb-4 z-20 relative">
                <div className="bg-white/20 p-4 rounded-full shadow-lg backdrop-blur-md animate-pulse mx-auto mb-2">
                  <Icon size={40} className="text-white drop-shadow-lg" />
                </div>
                <h3 className="text-xl font-extrabold uppercase tracking-wide">{name}</h3>
              </div>

              {/* Image */}
              <div className="relative z-20 mb-4">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-52 object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Description */}
              <div className="relative z-20">
                <p className="text-sm text-white/90 leading-relaxed font-medium">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default TestPreparation;
