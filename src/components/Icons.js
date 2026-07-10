import React from "react";

// Reusable Bicycle SVG Icon
export function BikeIcon(props) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      width={props.width || "20"} 
      height={props.height || "20"}
      className={props.className || ""}
      {...props}
    >
      <path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5S3.1 13.5 5 13.5s3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm14-8.5c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm-9.3-5.2h2.2l1.6-3.1 1.9 2.5c.3-.3.6-.5 1-.6L16.2 9c.4-.5.4-1.2-.1-1.7l-2.6-2.6c-.3-.3-.8-.4-1.2-.3l-3.3 1.1c-.5.2-.9.7-1 1.3L7.3 10h2.1l.6-2.6 1.8-.6L10.3 10.3c-.3.7-.1 1.5.5 2z"/>
    </svg>
  );
}

// Reusable Delivery Truck SVG Icon
export function DeliveryIcon(props) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      width={props.width || "20"} 
      height={props.height || "20"} 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={props.className || ""}
      {...props}
    >
      <rect x="1" y="3" width="15" height="13" rx="2" ry="2"></rect>
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
      <circle cx="5.5" cy="18.5" r="2.5"></circle>
      <circle cx="18.5" cy="18.5" r="2.5"></circle>
    </svg>
  );
}

// Reusable Back Arrow SVG Icon
export function BackIcon(props) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      width={props.width || "22"} 
      height={props.height || "22"} 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={props.className || ""}
      {...props}
    >
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 5 5 12 12 19"></polyline>
    </svg>
  );
}
