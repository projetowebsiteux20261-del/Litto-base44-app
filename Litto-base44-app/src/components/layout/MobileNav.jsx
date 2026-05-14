import React from "react";
import { Link, useLocation } from "react-router-dom";

const mobileLinks = [
  { label: "Início", path: "/", icon: "home" },
  { label: "Explorar", path: "/explorar", icon: "explore" },
  { label: "Mapa", path: "/bibliotecas", icon: "map" },
  { label: "Perfil", path: "/perfil", icon: "person" },
];

export default function MobileNav() {
  const location = useLocation();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card border-t-4 border-foreground">
      <div className="flex items-center justify-around py-2">
        {mobileLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-sm transition-all
                ${isActive 
                  ? "text-primary" 
                  : "text-foreground/60 hover:text-foreground"
                }`}
            >
              <span className="material-symbols-outlined text-xl">{link.icon}</span>
              <span className="font-poppins text-[10px] font-semibold">{link.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}