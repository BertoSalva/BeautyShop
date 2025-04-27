import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

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
    password: "",
    bio: "",
    yearsOfExperience: "",
    portfolioUrl: "",
    availableWorkingHours: "",
    travelRadius: "",
    businessLocation: "",
    cancellationPolicy: "",
    paymentDetails: "",
    certifications: ""
  });
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
      const userId = decodedToken.nameid || decodedToken.sub;
      if (userId) {
        fetchUserDetails(userId);
      }
    } catch (error) {
      console.error("Error decoding token:", error);
      navigate("/login");
    }
  }, [token, navigate]);

  const fetchUserDetails = async (userId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/user/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error("Failed to fetch user data");
      const data = await response.json();
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
      setFilePreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("fullName", user.fullName);
    formData.append("phoneNumber", user.phoneNumber);
    formData.append("languagePreference", user.languagePreference);
    formData.append("location", user.location);
    if (user.password) formData.append("password", user.password);
    formData.append("profilePictureUrl", user.profilePictureUrl);
    if (profilePictureFile) formData.append("ProfilePictureFile", profilePictureFile);

    if (user.role !== "Client") {
      formData.append("bio", user.bio);
      formData.append("yearsOfExperience", user.yearsOfExperience);
      formData.append("portfolioUrl", user.portfolioUrl);
      formData.append("availableWorkingHours", user.availableWorkingHours);
      formData.append("travelRadius", user.travelRadius);
      formData.append("businessLocation", user.businessLocation);
      formData.append("cancellationPolicy", user.cancellationPolicy);
      formData.append("paymentDetails", user.paymentDetails);
      formData.append("certifications", user.certifications);
    }

    try {
      const response = await fetch(`${API_BASE_URL}/auth/update/${user.id}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Update failed");
      setMessage("Account updated successfully!");
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-green-600 p-4 flex items-center justify-between">
        <div className="text-white text-2xl font-bold">BeautyShop</div>
        <div className="flex items-center space-x-4">
          <span className="text-white font-semibold">{user.fullName || "User"}</span>
          {user.profilePictureUrl ? (
            <img src={user.profilePictureUrl} alt="Profile" className="w-10 h-10 rounded-full" />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
              <span>No Img</span>
            </div>
          )}
        </div>
      </nav>

      <div className="p-6 flex items-center justify-center">
        <div className="bg-[#f273f2] shadow-lg rounded-2xl p-8 max-w-md w-full">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">Manage Account</h2>
          {message && <p className="text-center text-sm mb-4 text-white">{message}</p>}

          <div className="flex justify-center mb-4">
            {filePreviewUrl ? (
              <img src={filePreviewUrl} alt="Preview" className="rounded-full" style={{ width: 150, height: 150, objectFit: "cover" }} />
            ) : user.profilePictureUrl ? (
              <img src={user.profilePictureUrl} alt="Profile" className="rounded-full" style={{ width: 150, height: 150, objectFit: "cover" }} />
            ) : (
              <div className="rounded-full bg-gray-400 flex items-center justify-center" style={{ width: 150, height: 150 }}>
                <span className="text-white">No Image</span>
              </div>
            )}
          </div>

          <form onSubmit={handleUpdate} className="flex flex-col" encType="multipart/form-data">
            <label className="mb-2 font-semibold text-white">Full Name</label>
            <input type="text" name="fullName" value={user.fullName} onChange={handleChange} className="border p-2 rounded-full mb-4" required />

            <label className="mb-2 font-semibold text-white">Email (read-only)</label>
            <input type="email" value={user.email} disabled className="border p-2 rounded-full mb-4 bg-gray-300" />

            <label className="mb-2 font-semibold text-white">Phone Number</label>
            <input type="text" name="phoneNumber" value={user.phoneNumber} onChange={handleChange} className="border p-2 rounded-full mb-4" />

            <label className="mb-2 font-semibold text-white">Upload New Profile Picture</label>
            <input type="file" name="ProfilePictureFile" onChange={handleFileChange} className="border p-2 rounded-full mb-4" />

            <label className="mb-2 font-semibold text-white">Language Preference</label>
            <input type="text" name="languagePreference" value={user.languagePreference} onChange={handleChange} className="border p-2 rounded-full mb-4" />

            <label className="mb-2 font-semibold text-white">Location</label>
            <input type="text" name="location" value={user.location} onChange={handleChange} className="border p-2 rounded-full mb-4" />

            <label className="mb-2 font-semibold text-white">Role (read-only)</label>
            <input type="text" value={user.role} disabled className="border p-2 rounded-full mb-4 bg-gray-300" />

            {user.role !== "Client" && (
              <>
                <label className="mb-2 font-semibold text-white">Bio</label>
                <input type="text" name="bio" value={user.bio} onChange={handleChange} className="border p-2 rounded-full mb-4" />

                <label className="mb-2 font-semibold text-white">Years of Experience</label>
                <input type="number" name="yearsOfExperience" value={user.yearsOfExperience} onChange={handleChange} className="border p-2 rounded-full mb-4" />

                <label className="mb-2 font-semibold text-white">Portfolio URL</label>
                <input type="text" name="portfolioUrl" value={user.portfolioUrl} onChange={handleChange} className="border p-2 rounded-full mb-4" />

                <label className="mb-2 font-semibold text-white">Available Working Hours</label>
                <input type="text" name="availableWorkingHours" value={user.availableWorkingHours} onChange={handleChange} className="border p-2 rounded-full mb-4" />

                <label className="mb-2 font-semibold text-white">Travel Radius</label>
                <input type="number" name="travelRadius" value={user.travelRadius} onChange={handleChange} className="border p-2 rounded-full mb-4" />

                <label className="mb-2 font-semibold text-white">Business Location</label>
                <input type="text" name="businessLocation" value={user.businessLocation} onChange={handleChange} className="border p-2 rounded-full mb-4" />

                <label className="mb-2 font-semibold text-white">Cancellation Policy</label>
                <input type="text" name="cancellationPolicy" value={user.cancellationPolicy} onChange={handleChange} className="border p-2 rounded-full mb-4" />

                <label className="mb-2 font-semibold text-white">Payment Details</label>
                <input type="text" name="paymentDetails" value={user.paymentDetails} onChange={handleChange} className="border p-2 rounded-full mb-4" />

                <label className="mb-2 font-semibold text-white">Certifications</label>
                <input type="text" name="certifications" value={user.certifications} onChange={handleChange} className="border p-2 rounded-full mb-4" />
              </>
            )}

            <button type="submit" className="bg-[#fbd0fb] px-6 py-3 rounded-full text-black font-bold hover:bg-white hover:text-black transition duration-300" disabled={loading}>
              {loading ? "Updating..." : "Update Account"}
            </button>
          </form>

          <button onClick={() => navigate("/vendor-home")} className="mt-4 text-center text-white underline">
            Back to Vendor Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageAccount;
