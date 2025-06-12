import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Login = ({ onLogin }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("Client");
  const [fullName, setFullName] = useState("");
  const [profilePictureFile, setProfilePictureFile] = useState(null);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleLogin = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Login failed");

      localStorage.setItem("token", data.token);
      const decodedToken = jwtDecode(data.token);

      navigate("/dashboard");
      onLogin();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("role", role);
      formData.append("fullName", fullName);
      if (profilePictureFile) {
        formData.append("profilePictureFile", profilePictureFile);
      }

      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        body: formData,
      });

      const text = await response.text();
      const data = text ? JSON.parse(text) : {};

      if (!response.ok) {
        throw new Error(data?.message || "Signup failed");
      }

      alert("Signup successful. You can now log in.");
      setIsSignup(false);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isSignup ? handleSignup() : handleLogin();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className={`bg-[#f273f2] shadow-lg rounded-2xl p-8 ${isSignup ? "max-w-xl" : "max-w-md"} w-full`}>
        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          {isSignup ? "Sign Up" : "Login"}
        </h2>

        {error && <p className="text-red-400 text-sm mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" className="border p-3 rounded-full" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password" className="border p-3 rounded-full" />

          {isSignup && (
            <>
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required placeholder="Confirm Password" className="border p-3 rounded-full" />
              <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} className="border p-3 rounded-full" />
              <select value={role} onChange={(e) => setRole(e.target.value)} className="border p-3 rounded-full bg-white text-gray-700">
                <option value="Client">Client</option>
                <option value="Barber">Barber</option>
                <option value="NailTech">Nail-Tech</option>
                <option value="HairStylist">Hair Stylist</option>
                <option value="MakeupArtist">Make-up Artist</option>
              </select>
            </>
          )}

          <button type="submit" className="bg-[#fbd0fb] px-10 py-4 rounded-full text-black font-bold hover:bg-white transform hover:scale-105 transition">
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-white">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button onClick={() => { setIsSignup(!isSignup); setError(""); }} className="text-black hover:text-white hover:underline font-bold">
            {isSignup ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
