import { useState } from "react";
import { FaCheckCircle, FaMinus, FaPlus, FaTimesCircle } from "react-icons/fa";
import { api } from "../api";

const faqData = [
  {
    question: "How long does visa processing usually take?",
    answer: "Typically 2-8 weeks depending on the destination and document completeness.",
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

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const ConsultationSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const showToast = (type, message) => {
    setToast({ type, message });
    window.setTimeout(() => setToast(null), 3500);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    try {
      await api.post("/api/consultants", {
        ...formData,
        interest: "FAQ Consultation",
      });

      setFormData(initialFormData);
      showToast("success", "Request sent. Our team will contact you shortly.");
    } catch (error) {
      const message =
        error.response?.data?.error ||
        error.response?.data?.message ||
        "Could not submit your request. Please try again.";
      showToast("error", message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black via-[#0f172a] to-black px-6 py-24 font-[Poppins] text-white">
      {toast && (
        <div
          className={`fixed right-4 top-5 z-[100] flex max-w-sm items-center gap-3 rounded-xl border px-4 py-3 text-sm font-semibold shadow-2xl backdrop-blur-md ${
            toast.type === "success"
              ? "border-emerald-400/40 bg-emerald-500/15 text-emerald-100"
              : "border-red-400/40 bg-red-500/15 text-red-100"
          }`}
        >
          {toast.type === "success" ? (
            <FaCheckCircle className="shrink-0 text-emerald-300" />
          ) : (
            <FaTimesCircle className="shrink-0 text-red-300" />
          )}
          <span>{toast.message}</span>
        </div>
      )}

      <div className="mb-16 text-center">
        <h2 className="mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
          Free Consultation & FAQ
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-300">
          Get answers to your queries and connect with our expert team for guidance.
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2">
        <div className="space-y-6">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-xl border border-white/10 bg-[#1a1a1a] transition-all duration-300 ${
                  isOpen ? "ring-2 ring-cyan-400/40 shadow-cyan-500/30" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition duration-300 hover:bg-white/5"
                >
                  <span
                    className={`text-lg font-semibold transition duration-300 ${
                      isOpen ? "text-cyan-400" : "text-white"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-cyan-400">
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>
                <div
                  className={`px-6 pb-5 text-base text-gray-300 transition-all duration-500 ease-in-out ${
                    isOpen ? "block animate-fade-in" : "hidden"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl border border-cyan-400/10 bg-white/5 p-6 shadow-xl backdrop-blur-lg transition hover:shadow-cyan-500/30 sm:p-8">
          <h3 className="mb-6 text-center text-2xl font-bold text-cyan-400">
            Request Free Consultation
          </h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-600 bg-black/30 px-4 py-3 text-white shadow-md placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-600 bg-black/30 px-4 py-3 text-white shadow-md placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-600 bg-black/30 px-4 py-3 text-white shadow-md placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <textarea
              rows="4"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full resize-none rounded-xl border border-gray-600 bg-black/30 px-4 py-3 text-white shadow-md placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 py-3 font-semibold text-white shadow-lg transition duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? "Submitting..." : "Submit Request"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
