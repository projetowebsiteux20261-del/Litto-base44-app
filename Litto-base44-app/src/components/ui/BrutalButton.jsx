import React from "react";
import { Link } from "react-router-dom";

export default function BrutalButton({
  children,
  variant = "primary",
  to,
  onClick,
  className = "",
  type = "button",
  fullWidth = false,
}) {
  const variants = {
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    accent: "bg-accent text-accent-foreground",
    outline: "bg-card text-foreground",
  };

  const baseClass = `brutal-btn inline-flex items-center justify-center gap-2 px-6 py-3 font-poppins font-bold text-sm uppercase border-2 border-foreground shadow-brutal rounded-sm transition-all duration-75 ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`;

  if (to) {
    return (
      <Link to={to} className={baseClass}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClass}>
      {children}
    </button>
  );
}