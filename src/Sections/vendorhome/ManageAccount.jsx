import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // ✅ Import jwt-decode

const ManageAccount = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    id: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    profilePictureUrl: "",
    languagePreference: "",
    location: "",
    role: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      // ✅ Decode the token
      const decodedToken = jwtDecode(token);
      console.log("Decoded Token:", decodedToken); // ✅ Log token data

      // ✅ Extract user ID from token
      const userId = decodedToken.nameid || decodedToken.sub; // Check which key your token uses

      if (userId) {
        fetchUserDetails(userId);
      }
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  }, [token, navigate]);

  const fetchUserDetails = async (userId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/user/${userId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) throw new Error("Failed to fetch user data");
  
      const data = await response.json();
      console.log("Fetched User Data:", data); // ✅ Debug user data
  
      setUser(data); // ✅ Pre-fill form with user details
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };
  

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
  
    // ✅ Create a filtered object (omit empty PasswordHash)
    const updatedUser = { ...user };
    if (!updatedUser.passwordHash || updatedUser.passwordHash.trim() === "") {
      delete updatedUser.passwordHash;
    }
  
    console.log("Updating User:", updatedUser); // ✅ Log request payload
  
    try {
      const response = await fetch(`${API_BASE_URL}/auth/update/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedUser), // ✅ Send cleaned object
      });
  
      const result = await response.json();
      
      if (!response.ok) {
        console.error("Update failed:", result);
        throw new Error(result.message || "Failed to update account");
      }
  
      setMessage("Account updated successfully!");
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-[#f273f2] shadow-lg rounded-2xl p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">Manage Account</h2>

        {message && <p className="text-center text-sm mb-4 text-white">{message}</p>}

        <form onSubmit={handleUpdate} className="flex flex-col">
          <label className="mb-2 font-semibold text-white">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={user.fullName}
            onChange={handleChange}
            className="border p-2 rounded-full mb-4 focus:outline-none focus:ring-2 focus:ring-white"
            required
          />

          <label className="mb-2 font-semibold text-white">Email (Cannot be changed)</label>
          <input
            type="email"
            value={user.email}
            disabled
            className="border p-2 rounded-full mb-4 bg-gray-300"
          />

          <label className="mb-2 font-semibold text-white">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={user.phoneNumber}
            onChange={handleChange}
            className="border p-2 rounded-full mb-4 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <label className="mb-2 font-semibold text-white">Profile Picture URL</label>
          <input
            type="text"
            name="profilePictureUrl"
            value={user.profilePictureUrl}
            onChange={handleChange}
            className="border p-2 rounded-full mb-4 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <label className="mb-2 font-semibold text-white">Language Preference</label>
          <input
            type="text"
            name="languagePreference"
            value={user.languagePreference}
            onChange={handleChange}
            className="border p-2 rounded-full mb-4 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <label className="mb-2 font-semibold text-white">Location</label>
          <input
            type="text"
            name="location"
            value={user.location}
            onChange={handleChange}
            className="border p-2 rounded-full mb-4 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <label className="mb-2 font-semibold text-white">Role (Cannot be changed)</label>
          <input
            type="text"
            value={user.role}
            disabled
            className="border p-2 rounded-full mb-4 bg-gray-300"
          />

          <button
            type="submit"
            className="bg-[#fbd0fb] px-6 py-3 rounded-full text-black hover:bg-white hover:text-black font-bold transform hover:scale-110 transition-transform duration-300 cursor-pointer"
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Account"}
          </button>
        </form>

        <button
          onClick={() => navigate("/vendor-home")}
          className="mt-4 text-center text-white underline"
        >
          Back to Vendor Home
        </button>
      </div>
    </div>
  );
};

export default ManageAccount;
