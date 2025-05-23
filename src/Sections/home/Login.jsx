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
  const [phoneNumber, setPhoneNumber] = useState("");
  const [languagePreference, setLanguagePreference] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [availableWorkingHours, setAvailableWorkingHours] = useState("");
  const [travelRadius, setTravelRadius] = useState("");
  const [businessLocation, setBusinessLocation] = useState("");
  const [cancellationPolicy, setCancellationPolicy] = useState("");
  const [paymentDetails, setPaymentDetails] = useState("");
  const [certifications, setCertifications] = useState("");
  const [profilePictureFile, setProfilePictureFile] = useState(null);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // ✅ LOGIN
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
      console.log("Decoded Token:", decodedToken);

      // Navigate based on role
      if (decodedToken.role.toLowerCase() === "client") {
        navigate("/dashboard");
      } else {
        navigate("/dashboard");
      }

      onLogin();
    } catch (err) {
      setError(err.message);
    }
  };

  // ✅ SIGNUP
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
      formData.append("phoneNumber", phoneNumber);
      formData.append("languagePreference", languagePreference);
      formData.append("location", location);
      formData.append("bio", bio);
      formData.append("yearsOfExperience", yearsOfExperience);
      formData.append("portfolioUrl", portfolioUrl);
      formData.append("availableWorkingHours", availableWorkingHours);
      formData.append("travelRadius", travelRadius);
      formData.append("businessLocation", businessLocation);
      formData.append("cancellationPolicy", cancellationPolicy);
      formData.append("paymentDetails", paymentDetails);
      formData.append("certifications", certifications);
  
      if (profilePictureFile) {
        formData.append("profilePictureFile", profilePictureFile);
      }
  
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        body: formData,
      });
  
      // ✅ Fix: only parse JSON if there's content
      let data;
      const text = await response.text();
      if (text) {
        data = JSON.parse(text);
      }
  
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
 <div className={`bg-[#f273f2] shadow-lg rounded-2xl p-8 ${isSignup ? "max-w-7xl" : "max-w-md"} w-full`}>

    <h2 className="text-3xl font-bold text-center mb-6 text-white">
      {isSignup ? "Sign Up" : "Login"}
    </h2>

    {error && <p className="text-red-400 text-sm mb-4 text-center">{error}</p>}

    <form onSubmit={handleSubmit} className={`${isSignup ? "grid grid-cols-1 md:grid-cols-3 gap-6" : "flex flex-col"}`}>

      
      {/* COL 1 */}
      <div className="flex flex-col space-y-4">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" className="border p-3 rounded-full" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password" className="border p-3 rounded-full" />
        {isSignup && (
          <>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required placeholder="Confirm Password" className="border p-3 rounded-full" />
            <select value={role} onChange={(e) => setRole(e.target.value)} className="border p-3 rounded-full bg-white text-gray-700">
              <option value="Client">Client</option>
              <option value="Barber">Barber</option>
              <option value="NailTech">Nail-Tech</option>
              <option value="HairStylist">Hair Stylist</option>
              <option value="MakeupArtist">Make-up Artist</option>
            </select>

            <label className="flex items-center border p-3 rounded-full bg-white text-gray-700 cursor-pointer">
              <span className="flex-1">
                {profilePictureFile ? profilePictureFile.name : "Select Image"}
              </span>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setProfilePictureFile(e.target.files[0])}
                className="hidden"
              />
            </label>


            <input type="text" placeholder="Certifications" value={certifications} onChange={(e) => setCertifications(e.target.value)} className="border p-3 rounded-full" />
          </>
        )}
      </div>

      {/* COL 2 */}
      {isSignup && (
        <div className="flex flex-col space-y-4">
          <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} className="border p-3 rounded-full" />
          <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="border p-3 rounded-full" />
          <select
            value={languagePreference}
            onChange={(e) => setLanguagePreference(e.target.value)}
            className="border p-3 rounded-full bg-white text-gray-700"
          >
            <option value="">Select Language</option>
            <option value="English">English</option>
            <option value="Afrikaans">Afrikaans</option>
            <option value="isiZulu">isiZulu</option>
            <option value="isiXhosa">isiXhosa</option>
            <option value="Sesotho">Sesotho</option>
            <option value="Setswana">Setswana</option>
            <option value="Xitsonga">Xitsonga</option>
            <option value="Tshivenda">Tshivenda</option>
            <option value="Sepedi">Sepedi</option>
            <option value="Other">Other</option>
          </select>
          <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} className="border p-3 rounded-full" />
          <input type="text" placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)} className="border p-3 rounded-full" />
          <input type="text" placeholder="Payment Details" value={paymentDetails} onChange={(e) => setPaymentDetails(e.target.value)} className="border p-3 rounded-full" />
        </div>
      )}

      {/* COL 3 */}
      {isSignup && (
        <div className="flex flex-col space-y-4">
          <input
            type="number"
            placeholder="Years of Experience"
            value={yearsOfExperience}
            min="0"
            onChange={(e) => {
              const value = e.target.value;
              setYearsOfExperience(value < 0 ? 0 : value);
            }}
            className="border p-3 rounded-full"
          />

          

          <input type="text" placeholder="Portfolio URL" value={portfolioUrl} onChange={(e) => setPortfolioUrl(e.target.value)} className="border p-3 rounded-full" />
          <input type="text" placeholder="Available Working Hours" value={availableWorkingHours} onChange={(e) => setAvailableWorkingHours(e.target.value)} className="border p-3 rounded-full" />
          <input type="number" placeholder="Travel Radius" value={travelRadius} onChange={(e) => setTravelRadius(e.target.value)} className="border p-3 rounded-full" />
          <input type="text" placeholder="Business Location" value={businessLocation} onChange={(e) => setBusinessLocation(e.target.value)} className="border p-3 rounded-full" />
          <input type="text" placeholder="Cancellation Policy" value={cancellationPolicy} onChange={(e) => setCancellationPolicy(e.target.value)} className="border p-3 rounded-full" />
        </div>
      )}

      {/* SUBMIT BUTTON */}
      <div className="col-span-1 md:col-span-3 flex justify-center mt-6">
        <button type="submit" className="bg-[#fbd0fb] px-10 py-4 rounded-full text-black font-bold hover:bg-white transform hover:scale-105 transition">
          {isSignup ? "Sign Up" : "Login"}
        </button>
      </div>
    </form>

    {/* Switch between signup/login */}
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
