import React from "react";

const fontWeights = {
  R: "font-normal",
  M: "font-medium",
  S: "font-semibold",
  B: "font-bold",
};

const fontSizes = {
  12: "text-xs",
  14: "text-sm",
  16: "text-base",
  18: "text-lg",
  20: "text-xl",
  22: "text-2xl",
  24: "text-3xl",
  26: "text-3xl",
  28: "text-4xl",
  30: "text-4xl",
  32: "text-5xl",
  34: "text-5xl",
  35: "text-6xl",
  36: "text-6xl",
  40: "text-7xl",
  46: "text-7xl",
  66: "text-8xl",
};

const CText = ({ type = "R14", align, color = "text-gray-800", children, className = "" }) => {
  const weight = fontWeights[type.charAt(0).toUpperCase()] || "font-normal";
  const size = fontSizes[type.slice(1)] || "text-sm";

  return (
    <span className={`${weight} ${size} ${color} ${align ? `text-${align}` : ""} ${className}`}>
      {children}
    </span>
  );
};

export default React.memo(CText);
