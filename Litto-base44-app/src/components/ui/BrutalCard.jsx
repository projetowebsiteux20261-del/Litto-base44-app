import React from "react";

export default function BrutalCard({ children, className = "", hover = true }) {
  return (
    <div
      className={`bg-card border-2 border-foreground shadow-brutal rounded-sm ${hover ? "brutal-card" : ""} ${className}`}
    >
      {children}
    </div>
  );
}