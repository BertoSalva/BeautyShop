import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode"; // Import jwt-decode (default export)

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
    password: "", // Optional: for password updates
  });
  // State to hold the new file and its preview URL.
  const [profilePictureFile, setProfilePictureFile] = useState(null);
  const [filePreviewUrl, setFilePreviewUrl] = useState("");
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
      const decodedToken = jwtDecode(token);
      console.log("Decoded Token:", decodedToken);
      // Extract user ID from token (check for 'nameid' or 'sub')
      const userId = decodedToken.nameid || decodedToken.sub;
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
      console.log("Fetched User Data:", data);
      setUser(data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfilePictureFile(file);
      // Create a preview URL so the user sees the selected image immediately.
      setFilePreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Create a FormData object to send multipart/form-data.
    const formData = new FormData();
    formData.append("fullName", user.fullName);
    formData.append("phoneNumber", user.phoneNumber);
    formData.append("languagePreference", user.languagePreference);
    formData.append("location", user.location);
    // Append password if provided.
    if (user.password) {
      formData.append("password", user.password);
    }
    // Append the current profile picture URL as fallback.
    formData.append("profilePictureUrl", user.profilePictureUrl);
    // Append new file if one was selected.
    if (profilePictureFile) {
      formData.append("ProfilePictureFile", profilePictureFile);
    }

    console.log("Updating user with FormData...");

    try {
      const response = await fetch(`${API_BASE_URL}/auth/update/${user.id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          // Do not set "Content-Type" header; the browser sets it automatically.
        },
        body: formData,
      });
      const result = await response.json();
      if (!response.ok) {
        console.error("Update failed:", result);
        throw new Error(result.message || "Failed to update account");
      }
      setMessage("Account updated successfully!");
      // Optionally, update the user state with new data if returned.
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-[#f273f2] shadow-lg rounded-2xl p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          Manage Account
        </h2>
        {message && (
          <p className="text-center text-sm mb-4 text-white">{message}</p>
        )}

        {/* Display image preview if a new file is selected, otherwise use the stored SAS URL */}
        <div className="flex justify-center mb-4">
          {filePreviewUrl ? (
            <img
              src={filePreviewUrl}
              alt="New Profile Preview"
              className="rounded-full"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
          ) : user.profilePictureUrl ? (
            <img
              src={user.profilePictureUrl}
              alt="Profile"
              className="rounded-full"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
          ) : (
            <div
              className="rounded-full bg-gray-400 flex items-center justify-center"
              style={{ width: "150px", height: "150px" }}
            >
              <span className="text-white">No Image</span>
            </div>
          )}
        </div>

        <form
          onSubmit={handleUpdate}
          className="flex flex-col"
          encType="multipart/form-data"
        >
          <label className="mb-2 font-semibold text-white">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={user.fullName}
            onChange={handleChange}
            className="border p-2 rounded-full mb-4 focus:outline-none focus:ring-2 focus:ring-white"
            required
          />

          <label className="mb-2 font-semibold text-white">
            Email (Cannot be changed)
          </label>
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

          <label className="mb-2 font-semibold text-white">
            Upload New Profile Picture
          </label>
          <input
            type="file"
            name="ProfilePictureFile"
            onChange={handleFileChange}
            className="border p-2 rounded-full mb-4 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <label className="mb-2 font-semibold text-white">
            Language Preference
          </label>
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

          <label className="mb-2 font-semibold text-white">
            Role (Cannot be changed)
          </label>
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
