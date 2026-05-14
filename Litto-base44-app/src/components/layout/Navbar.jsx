import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "@/lib/AuthContext";

const navLinks = [
  { label: "Início", path: "/" },
  { label: "Explorar", path: "/explorar" },
  { label: "Bibliotecas", path: "/bibliotecas" },
  { label: "Comunidade", path: "/comunidade" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { usuario, sair } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card border-b-4 border-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="bg-primary px-4 py-1.5 border-2 border-foreground shadow-brutal-sm brutal-btn">
              <span className="text-white font-poppins font-black text-xl tracking-tight">
                Litto
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center justify-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 font-poppins font-semibold text-sm transition-all duration-150 border-2 rounded-sm
                    ${isActive 
                      ? "border-foreground bg-accent text-accent-foreground shadow-brutal-sm" 
                      : "border-transparent text-foreground hover:border-foreground hover:shadow-brutal-sm hover:bg-card"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}

<div className="hidden md:flex items-center justify-end gap-3">

  {usuario ? (

    <>
      <Link
        to="perfil"
        className="w-11 h-11 rounded-full border-2 border-foreground overflow-hidden shadow-brutal-sm hover:scale-105 transition-transform bg-card flex items-center justify-center"
      >

        {usuario.photoURL ? (

          <img
            src={usuario.photoURL}
            alt="Perfil"
            className="w-full h-full object-cover"
          />

        ) : (

          <span className="font-poppins font-black text-sm">
           {(usuario.displayName || usuario.email)
             ?.charAt(0)
             .toUpperCase()}
           </span>

    )}

      </Link>

      <button
        onClick={sair}
        className="brutal-btn px-5 py-2 bg-destructive text-white font-poppins font-bold text-sm uppercase border-2 border-foreground shadow-brutal-sm rounded-sm"
      >
        Sair
      </button>
    </>

  ) : (

    <>
      <Link
        to="/login"
        className="brutal-btn px-5 py-2 bg-card text-foreground font-poppins font-bold text-sm uppercase border-2 border-foreground shadow-brutal-sm rounded-sm"
      >
        Entrar
      </Link>

      <Link
        to="/cadastro"
        className="brutal-btn px-5 py-2 bg-secondary text-secondary-foreground font-poppins font-bold text-sm uppercase border-2 border-foreground shadow-brutal-sm rounded-sm"
      >
        Cadastro
      </Link>
    </>

  )}

</div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden brutal-btn p-2 border-2 border-foreground shadow-brutal-sm bg-card rounded-sm"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t-2 border-foreground bg-card">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 font-poppins font-semibold text-sm border-2 rounded-sm transition-all
                    ${isActive 
                      ? "border-foreground bg-accent text-accent-foreground shadow-brutal-sm" 
                      : "border-foreground bg-card text-foreground shadow-brutal-sm"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/cadastro"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 bg-secondary text-secondary-foreground font-poppins font-bold text-sm uppercase text-center border-2 border-foreground shadow-brutal-sm rounded-sm"
            >
              Cadastro
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}