import React from "react";

export default function MaterialIcon({ name, className = "", size = 24 }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{ fontSize: size }}
    >
      {name}
    </span>
  );
}