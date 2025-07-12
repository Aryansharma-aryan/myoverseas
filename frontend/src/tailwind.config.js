/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandDark: "#0a0f24",
        brandMid: "#111827",
        brandLight: "#1e293b",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        fade: "fade 3s ease-in-out infinite",
        spinSlow: "spin 8s linear infinite",
        bounceSlow: "bounce 3s infinite",
        blob: "blob 7s infinite",
        pulseSlow: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        textShimmer: "textShimmer 3s linear infinite",
        floatSlow: "floatSlow 6s ease-in-out infinite",
        rotateSlow: "rotateSlow 10s linear infinite",
        fadeInUp: "fadeInUp 1s ease-out forwards",
        fadeInDown: "fadeInDown 1s ease-out forwards",
        typing: "typing 3.5s steps(30, end) 1 forwards",
        blink: "blink 0.8s step-end infinite",
        zoom: "zoom 20s ease-in-out infinite", // ✅ Zoom Animation
      },
      keyframes: {
        fade: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        textShimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        rotateSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(40px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
        fadeInDown: {
          "0%": { opacity: 0, transform: "translateY(-40px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "#3b82f6" },
        },
        zoom: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
