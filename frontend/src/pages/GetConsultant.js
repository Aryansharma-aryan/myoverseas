import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function GetConsultant() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleNext = () => step < 3 && setStep(step + 1);
  const handleBack = () => step > 1 && setStep(step - 1);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://myoverseas.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Submission failed");
        alert("Failed to submit. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const progress = `${(step / 3) * 100}%`;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0a1f3c] via-[#0a1f3c] to-[#141e30] text-white font-sans overflow-hidden">
      {/* Gradient Background Blobs */}
      <div className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-orange-500 rounded-full mix-blend-screen blur-3xl opacity-20 animate-ping"></div>
      <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] bg-yellow-400 rounded-full mix-blend-overlay blur-3xl opacity-10 animate-pulse"></div>

      {/* Hero Section */}
      <motion.div
        className="flex flex-col items-center justify-center py-20 text-center relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-400 mb-2 drop-shadow-lg">
          Free Expert Consultation
        </h1>
        <p className="text-lg text-white/90 max-w-xl px-4">
          <Typewriter
            words={[
              "Start your study abroad journey...",
              "We'll help you choose the right country.",
              "PR, Visas, Test Prep — we guide it all.",
            ]}
            loop={0}
            cursor
            typeSpeed={40}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </p>
      </motion.div>

      {/* Form Card */}
      <div className="relative z-10 max-w-xl mx-auto px-6 pb-20">
        {/* Step Indicator */}
        <div className="flex justify-center mb-6 gap-2">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`w-8 h-8 rounded-full text-sm flex items-center justify-center font-bold transition-all duration-300 ${
                step === s
                  ? "bg-orange-400 text-white shadow-lg scale-110"
                  : "bg-white/20 text-white"
              }`}
            >
              {s}
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden mb-6">
          <motion.div
            className="bg-orange-400 h-full"
            style={{ width: progress }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 && (
                  <>
                    <div>
                      <label className="block mb-1 text-sm">Full Name</label>
                      <input
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-sm">Email</label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none"
                        placeholder="your@email.com"
                      />
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div>
                      <label className="block mb-1 text-sm">Phone</label>
                      <input
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none"
                        placeholder="e.g. +91 9876543210"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-sm">Interested In</label>
                      <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-xl bg-white/20 text-black border border-white/30 focus:outline-none"
                      >
                        <option value="">-- Choose --</option>
                        <option>Study Visa</option>
                        <option>Tourist Visa</option>
                        <option>Permanent Residency</option>
                        <option>Test Preparation</option>
                      </select>
                    </div>
                  </>
                )}

                {step === 3 && (
                  <div>
                    <label className="block mb-1 text-sm">Message (Optional)</label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none"
                      placeholder="Tell us more about your goals..."
                    ></textarea>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={step === 1}
                    className={`px-5 py-2 rounded-lg font-semibold transition ${
                      step === 1
                        ? "bg-gray-500 cursor-not-allowed"
                        : "bg-white text-black hover:scale-105"
                    }`}
                  >
                    Back
                  </button>

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg text-white font-semibold transition hover:scale-105"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={loading}
                      className={`px-6 py-2 rounded-lg font-semibold transition ${
                        loading
                          ? "bg-gray-500 cursor-not-allowed"
                          : "bg-green-500 hover:bg-green-600 text-white hover:scale-105"
                      }`}
                    >
                      {loading ? "Submitting..." : "Submit"}
                    </button>
                  )}
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-green-600/20 border border-green-500/40 rounded-xl p-8 text-center text-green-300 shadow-2xl"
            >
              <h2 className="text-2xl font-bold mb-2">🎉 Thank You!</h2>
              <p>Our consultant will reach out to you shortly.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
