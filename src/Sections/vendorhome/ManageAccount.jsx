import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Toast = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed top-4 right-4 px-6 py-3 rounded-lg text-white shadow-lg z-50 ${type === "success" ? "bg-green-500" : "bg-red-500"}`}>
      {message}
    </div>
  );
};

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
    bio: "",
    yearsOfExperience: "",
    portfolioUrl: "",
    availableWorkingHours: "",
    travelRadius: "",
    businessLocation: "",
    serviceCost: "",
    cancellationPolicy: "",
    paymentDetails: "",
    certifications: ""
  });

  const [profilePictureFile, setProfilePictureFile] = useState(null);
  const [filePreviewUrl, setFilePreviewUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "success" });

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return navigate("/login");

    try {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.nameid || decodedToken.sub;
      if (userId) fetchUserDetails(userId);
    } catch (err) {
      console.error("Token decode error:", err);
      navigate("/login");
    }
  }, [token]);

  const fetchUserDetails = async (userId) => {
    try {
      const res = await fetch(`${API_BASE_URL}/auth/user/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to fetch user");
      const data = await res.json();
      setUser(data);
    } catch (err) {
      console.error("Fetch error:", err);
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
    setToast({ show: false, message: "", type: "success" });

    const formData = new FormData();
    formData.append("fullName", user.fullName);
    formData.append("phoneNumber", user.phoneNumber);
    formData.append("languagePreference", user.languagePreference);
    formData.append("location", user.location);
    if (profilePictureFile) formData.append("ProfilePictureFile", profilePictureFile);
    formData.append("bio", user.bio);
    formData.append("yearsOfExperience", user.yearsOfExperience);
    formData.append("portfolioUrl", user.portfolioUrl);
    formData.append("availableWorkingHours", user.availableWorkingHours);
    formData.append("travelRadius", user.travelRadius);
    formData.append("businessLocation", user.businessLocation);
    formData.append("serviceCost", user.serviceCost);
    formData.append("cancellationPolicy", user.cancellationPolicy);
    formData.append("paymentDetails", user.paymentDetails);
    formData.append("certifications", user.certifications);

    try {
      const response = await fetch(`${API_BASE_URL}/auth/update/${user.id}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Update failed");
      setToast({ show: true, message: "Account updated successfully!", type: "success" });
    } catch (err) {
      setToast({ show: true, message: err.message, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
<div className="min-h-screen bg-[#f273f2] p-10">
{toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ ...toast, show: false })}
        />
      )}

      <div className="bg-[#f273f2] shadow-lg rounded-2xl p-8 max-w-7xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">Manage Account</h2>

        <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-3 gap-6" encType="multipart/form-data">
          {/* Profile Picture */}
          <div className="col-span-full flex justify-center">
            {filePreviewUrl || user.profilePictureUrl ? (
              <img src={filePreviewUrl || user.profilePictureUrl} alt="Profile" className="rounded-full w-40 h-40 object-cover" />
            ) : (
              <div className="w-40 h-40 bg-gray-400 rounded-full flex items-center justify-center text-white">No Image</div>
            )}
          </div>
          <input type="file" name="ProfilePictureFile" onChange={handleFileChange} className="col-span-full border p-2 rounded-full bg-white" />

          {/* Section: Personal Info */}
          <div className="col-span-full">
            <h3 className="text-white text-xl font-semibold mb-2">🧑‍💼 Personal Info</h3>
          </div>
          <input name="fullName" value={user.fullName} onChange={handleChange} required placeholder="Full Name" className="border p-3 rounded-full" />
          <input type="email" value={user.email} disabled placeholder="Email" className="border p-3 rounded-full bg-gray-300" />
          <input name="phoneNumber" value={user.phoneNumber} onChange={handleChange} placeholder="Phone Number" className="border p-3 rounded-full" />
          <input name="languagePreference" value={user.languagePreference} onChange={handleChange} placeholder="Language Preference" className="border p-3 rounded-full" />

          {/* Section: Professional Info */}
          <div className="col-span-full mt-4">
            <h3 className="text-white text-xl font-semibold mb-2">💼 Professional Info</h3>
          </div>
          <input name="bio" value={user.bio} onChange={handleChange} placeholder="Bio" className="border p-3 rounded-full" />
          <input type="number" name="yearsOfExperience" value={user.yearsOfExperience} onChange={handleChange} placeholder="Years of Experience" className="border p-3 rounded-full" />
          <input name="portfolioUrl" value={user.portfolioUrl} onChange={handleChange} placeholder="Portfolio URL" className="border p-3 rounded-full" />
          <input name="availableWorkingHours" value={user.availableWorkingHours} onChange={handleChange} placeholder="Available Working Hours" className="border p-3 rounded-full" />
          <input name="certifications" value={user.certifications} onChange={handleChange} placeholder="Certifications" className="border p-3 rounded-full" />

          {/* Section: Business Info */}
          <div className="col-span-full mt-4">
            <h3 className="text-white text-xl font-semibold mb-2">💳 Business Info</h3>
          </div>
          <input type="number" name="travelRadius" value={user.travelRadius} onChange={handleChange} placeholder="Travel Radius (km)" className="border p-3 rounded-full" />
          <input name="businessLocation" value={user.businessLocation} onChange={handleChange} placeholder="Business Location" className="border p-3 rounded-full" />
          <input type="number" name="serviceCost" value={user.serviceCost} onChange={handleChange} placeholder="Service Cost" className="border p-3 rounded-full" />
          <input name="cancellationPolicy" value={user.cancellationPolicy} onChange={handleChange} placeholder="Cancellation Policy" className="border p-3 rounded-full" />
          <input name="paymentDetails" value={user.paymentDetails} onChange={handleChange} placeholder="Payment Details" className="border p-3 rounded-full" />

          {/* Submit */}
          <div className="col-span-full flex justify-center mt-6">
            <button type="submit" disabled={loading} className="bg-[#fbd0fb] px-10 py-4 rounded-full text-black font-bold hover:bg-white transform hover:scale-105 transition">
              {loading ? "Updating..." : "Update Account"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManageAccount;
