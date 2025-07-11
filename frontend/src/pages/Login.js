import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrMsg("");
    setSuccessMsg("");

    try {
      const res = await axios.post("https://myoverseas.onrender.com/api/login", {
        email,
        password,
      });

      const { token, admin } = res.data;

      if (token) {
        localStorage.setItem("adminToken", token);
        localStorage.setItem("adminEmail", admin?.email || email);
        setSuccessMsg("Login successful! Redirecting...");
        setTimeout(() => navigate("/admin/consultants"), 1500);
      } else {
        setErrMsg("Unexpected response from server.");
      }
    } catch (err) {
      setErrMsg("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0f172a] via-[#1e293b] to-[#0f172a] flex items-center justify-center px-4">
      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl p-8 shadow-2xl">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white">Admin Login</h2>
          <p className="text-sm text-gray-300 mt-1">Welcome back to Vertex Admin Panel</p>
        </div>

        {errMsg && <div className="text-red-400 text-sm text-center mb-4">{errMsg}</div>}
        {successMsg && <div className="text-green-400 text-sm text-center mb-4">{successMsg}</div>}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm text-gray-200">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="admin@vertex.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-200">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold text-white transition transform duration-300 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 hover:scale-105"
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Logging in...</span>
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <p className="text-xs text-center text-gray-400 mt-6 border-t border-white/20 pt-4">
          &copy; {new Date().getFullYear()} Vertex Study Visa. All rights reserved.
        </p>
      </div>
    </div>
  );
}
