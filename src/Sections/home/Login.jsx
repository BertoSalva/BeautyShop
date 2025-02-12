import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode"; // Install with `npm install jwt-decode`

const Login = ({ onLogin }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // ✅ Handle Login
  const handleLogin = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }
  
      // ✅ Store the token in local storage
      localStorage.setItem("token", data.token);
  
      // ✅ Console log the token
      console.log("JWT Token:", data.token);
  
      // ✅ Decode the token and console log the payload
      const decodedToken = jwtDecode(data.token);
      console.log("Decoded Token:", decodedToken);
  
      // ✅ Redirect based on role
      if (decodedToken.role == "client") {
        navigate("/stylist"); // Redirect to vendor page
      } else {
        navigate("/stylist"); // Redirect to home page
      }
  
      onLogin();
    } catch (err) {
      setError(err.message);
    }
  };
  

  // ✅ Handle Signup
  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      alert("Signup successful. You can now log in.");
      setIsSignup(false);
    } catch (err) {
      setError(err.message);
    }
  };

  // ✅ Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    isSignup ? handleSignup() : handleLogin();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-[#f273f2] shadow-lg rounded-2xl p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          {isSignup ? "Sign Up" : "Login"}
        </h2>

        {error && <p className="text-red-400 text-sm mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="mb-2 font-semibold text-white">Email</label>
          <input
            type="email"
            className="border p-2 rounded-full mb-4 focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="mb-2 font-semibold text-white">Password</label>
          <input
            type="password"
            className="border p-2 rounded-full mb-4 focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {isSignup && (
            <>
              <label className="mb-2 font-semibold text-white">Confirm Password</label>
              <input
                type="password"
                className="border p-2 rounded-full mb-4 focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </>
          )}

          <button
            type="submit"
            className="bg-[#fbd0fb] px-6 py-3 rounded-full text-black hover:bg-white hover:text-black font-bold transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          >
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <p className="text-center text-sm mt-4 text-white">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={() => {
              setIsSignup(!isSignup);
              setError("");
            }}
            className="text-black hover:text-white hover:underline font-bold"
          >
            {isSignup ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
