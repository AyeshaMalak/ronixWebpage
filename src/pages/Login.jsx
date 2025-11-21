// pages/Login.jsx
import React, { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // For now, allow any username/password
    console.log("Logging in:", username, password);
    navigate("/home"); // Redirect to home page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#E3F7FD] to-[#FFFFFF] px-4">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-10">
        {/* Top Icon */}
        <div className="flex justify-center mb-6">
          <MdLogin className="text-6xl text-[#28a0f0]" />
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Welcome Back
        </h2>

        <form className="space-y-6" onSubmit={handleLogin}>
         
          <div className="flex items-center border-b-2 border-gray-200 focus-within:border-[#28a0f0] transition-colors py-3 px-3 rounded-md bg-gray-50">
            <FaUserAlt className="text-gray-400 mr-3 text-lg" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full outline-none text-gray-700 placeholder-gray-400 bg-gray-50"
            />
          </div>

          <div className="flex items-center border-b-2 border-gray-200 focus-within:border-[#28a0f0] transition-colors py-3 px-3 rounded-md bg-gray-50">
            <FaLock className="text-gray-400 mr-3 text-lg" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full outline-none text-gray-700 placeholder-gray-400 bg-gray-50"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-full text-white font-semibold bg-gradient-to-b from-[#A4E6F8] to-[#28a0f0] hover:from-[#28a0f0] hover:to-[#A4E6F8] transition-all flex justify-center items-center gap-2 text-lg shadow-md"
          >
            <MdLogin /> Login
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-500 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
