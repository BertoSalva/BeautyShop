import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

export default function CHeader({ title, onPressBack, isHideBack, rightIcon }) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between px-5 py-4 bg-white shadow-md h-16 relative">
      {/* Back Button */}
      {!isHideBack && (
        <button
          onClick={onPressBack || (() => navigate(-1))}
          className="absolute left-4 bg-white p-2 rounded-full shadow-md"
        >
          <IoArrowBackOutline className="text-gray-700 text-2xl" />
        </button>
      )}

      {/* Title */}
      <h2 className="text-lg font-semibold text-center flex-grow">{title}</h2>

      {/* Right Icon (if any) */}
      {rightIcon && <div className="absolute right-4">{rightIcon}</div>}
    </div>
  );
}
