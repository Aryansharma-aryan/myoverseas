import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "How long does visa processing usually take?",
    answer: "Typically 2–8 weeks depending on the destination and document completeness.",
  },
  {
    question: "Do you help with SOP & LOR writing?",
    answer: "Yes, we provide expert-crafted SOPs, LORs, and full documentation support.",
  },
  {
    question: "Can I reapply after a visa refusal?",
    answer: "Absolutely. Our experts can guide you with proper rectification and stronger reapplication.",
  },
  {
    question: "Which country has the best PR pathways?",
    answer: "Canada and Australia are top choices due to well-defined immigration programs.",
  },
];

const ConsultationSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-black via-[#0f172a] to-black text-white font-[Poppins] relative overflow-hidden">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-pulse mb-4">
          💬 Free Consultation & FAQ
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Get answers to your queries and connect with our expert team for guidance.
        </p>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* FAQ Accordion */}
        <div className="space-y-6">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-xl border border-white/10 bg-[#1a1a1a] transition-all duration-300 ${
                  isOpen ? "ring-2 ring-cyan-400/40 shadow-cyan-500/30" : ""
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left group hover:bg-white/5 transition duration-300"
                >
                  <span
                    className={`text-lg font-semibold transition duration-300 ${
                      isOpen ? "text-cyan-400" : "text-white"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span className="text-cyan-400">
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>
                <div
                  className={`px-6 pb-5 text-gray-300 text-base transition-all duration-500 ease-in-out ${
                    isOpen ? "block animate-fade-in" : "hidden"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-cyan-400/10 hover:shadow-cyan-500/30 transition">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
            Request Free Consultation
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full text-white bg-black/30 px-4 py-3 rounded-xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-md placeholder-white/70"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full text-white bg-black/30 px-4 py-3 rounded-xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-md placeholder-white/70"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full text-white bg-black/30 px-4 py-3 rounded-xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-md placeholder-white/70"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full text-white bg-black/30 px-4 py-3 rounded-xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-md resize-none placeholder-white/70"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:scale-105 transition duration-300 shadow-lg"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
