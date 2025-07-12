import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const interests = [
    "Study Visa",
    "Visitor Visa",
    "Tourist Visa",
    "Work Permit",
    "PR & Immigration",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);

    try {
      await axios.post("https://mine-vertex.onrender.com/api/consultants", formData);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "",
        message: "",
      });
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-24 px-6 font-[Poppins]">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4">
          📞 Book A Free Consultation
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Connect with our experts and get personalized visa guidance today.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white/5 p-8 rounded-2xl shadow-xl border border-white/10 space-y-6 backdrop-blur-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="9876543210"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Interest</label>
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-black border border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="">Select Interest</option>
              {interests.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Type your message..."
          ></textarea>
        </div>

        {submitted && (
          <motion.p
            className="text-green-400 text-center font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ✅ Thank you! Your message has been submitted successfully.
          </motion.p>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`w-full ${
            loading ? "bg-yellow-300" : "bg-yellow-400 hover:bg-yellow-300"
          } text-black py-3 rounded-lg font-semibold transition shadow-md hover:shadow-yellow-300`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
