import React from 'react';

export default function CButton({
  title,
  type = "button",
  color = "white",
  onClick,
  containerStyle = "",
  textStyle = "",
  children,
  ...props
}) {
  return (
    <button
      type={type}
      className={`h-12 px-6 rounded-full flex items-center justify-center text-white font-semibold bg-blue-600 hover:bg-blue-700 transition-all ${containerStyle}`}
      onClick={onClick}
      {...props}
    >
      <span className={`text-base ${textStyle}`} style={{ color }}>
        {title}
      </span>
      {children}
    </button>
  );
}
