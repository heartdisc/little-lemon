import React from "react";

// Custom offline-friendly Avatar component using initials and style colors
export default function Avatar({ color, text }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      style={{ width: 50, height: 50, borderRadius: "50%", minWidth: 50 }}
    >
      <rect width="100" height="100" fill={color} />
      <text 
        x="50%" 
        y="50%" 
        dominantBaseline="central" 
        textAnchor="middle" 
        fill="#ffffff" 
        fontSize="36" 
        fontFamily="Karla" 
        fontWeight="bold"
      >
        {text}
      </text>
    </svg>
  );
}
