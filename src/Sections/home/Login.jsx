import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [isSignup, setIsSignup] = useState(false); // Toggle between Login & Signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // For Signup
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
      // ✅ Perform Signup Logic (e.g., API call)
      console.log("Signup Successful:", { email, password });
    } else {
      // ✅ Perform Login Logic (e.g., API call)
      console.log("Login Successful:", { email, password });
      onLogin();
      navigate("/");
    }
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

          {!isSignup && (
            <div className="flex justify-end text-sm mb-4">
              <a href="#" className="text-white hover:underline">
                Forgot password?
              </a>
            </div>
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
