import React from "react";

const GetAQuote = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-black via-[#0f172a] to-black text-white font-[Poppins]">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-pulse">
          ✨ Get A Free Quote
        </h2>
        <p className="text-gray-400 text-center mb-10 text-lg">
          Let us help you with expert visa guidance. Fill the form below and get your personalized quote.
        </p>

        {/* Form */}
        <form className="bg-white/5 backdrop-blur-xl border border-cyan-400/10 rounded-2xl p-8 space-y-6 shadow-xl hover:shadow-cyan-500/30 transition">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full text-white px-4 py-3 rounded-xl bg-black/30 border border-gray-600 focus:ring-2 focus:ring-cyan-500 shadow-md placeholder-white/70"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full text-white px-4 py-3 rounded-xl bg-black/30 border border-gray-600 focus:ring-2 focus:ring-cyan-500 shadow-md placeholder-white/70"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full text-white px-4 py-3 rounded-xl bg-black/30 border border-gray-600 focus:ring-2 focus:ring-cyan-500 shadow-md placeholder-white/70"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              className="w-full text-white px-4 py-3 rounded-xl bg-black/30 border border-gray-600 focus:ring-2 focus:ring-cyan-500 shadow-md"
            >
              <option value="">Select Visa Type</option>
              <option>Study Visa</option>
              <option>Tourist Visa</option>
              <option>PR / Immigration</option>
              <option>Spouse Visa</option>
            </select>
            <select
              className="w-full text-white px-4 py-3 rounded-xl bg-black/30 border border-gray-600 focus:ring-2 focus:ring-cyan-500 shadow-md"
            >
              <option value="">Select Destination Country</option>
              <option>Canada</option>
              <option>Australia</option>
              <option>UK</option>
              <option>USA</option>
              <option>Germany</option>
            </select>
          </div>

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full text-white px-4 py-3 rounded-xl bg-black/30 border border-gray-600 focus:ring-2 focus:ring-cyan-500 shadow-md resize-none placeholder-white/70"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:scale-105 transition duration-300 shadow-lg"
          >
            Submit Quote Request
          </button>
        </form>

        {/* Alternate Contact */}
        <p className="text-sm text-center text-gray-400 mt-8">
          Or call us directly at{" "}
          <span className="text-cyan-400 font-semibold">+91 8053555546, 9996140555</span>
        </p>
      </div>
    </section>
  );
};

export default GetAQuote;
