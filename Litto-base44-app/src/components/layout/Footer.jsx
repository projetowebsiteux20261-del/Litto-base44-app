import React from "react";
import { Link } from "react-router-dom";

const footerLinks = {
  Navegação: [
    { label: "Início", path: "/" },
    { label: "Explorar", path: "/explorar" },
    { label: "Bibliotecas", path: "/bibliotecas" },
    { label: "Comunidade", path: "/comunidade" },
  ],
  Recursos: [
    { label: "Livros", path: "/explorar" },
    { label: "Filmes & Séries", path: "/explorar" },
    { label: "Clubes de Leitura", path: "/comunidade" },
    { label: "Mapa", path: "/bibliotecas" },
  ],
  Sobre: [
    { label: "Quem Somos", path: "/" },
    { label: "Contato", path: "/" },
    { label: "Termos de Uso", path: "/" },
    { label: "Privacidade", path: "/" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-secondary border-t-4 border-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="inline-block bg-primary px-4 py-2 border-2 border-foreground shadow-brutal-sm mb-4">
              <span className="text-white font-poppins font-black text-2xl tracking-tight">
                Litto
              </span>
            </div>
            <p className="font-poppins text-sm text-foreground leading-relaxed mt-4">
              Onde a literatura se encontra com o cinema e o streaming. Descubra histórias que conectam páginas e telas.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-poppins font-bold text-sm uppercase tracking-wider mb-4 border-b-2 border-foreground pb-2 inline-block">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="font-poppins text-sm text-foreground hover:text-accent transition-colors font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div
  className="
    flex items-center
    w-full sm:w-auto
    border-2 border-foreground
    bg-card
    shadow-brutal-sm
    overflow-hidden
  "
>
  <input
    type="email"
    placeholder="seu@email.com"
    className="
      flex-1
      min-w-0
      sm:w-64
      px-4
      py-3
      bg-transparent
      font-poppins
      text-sm
      focus:outline-none
      placeholder:text-muted-foreground
    "
  />

  <button
    className="
      px-4
      self-stretch
      bg-primary
      text-primary-foreground
      border-l-2 border-foreground
      font-poppins
      font-bold
      text-sm
      uppercase
      flex items-center justify-center
      shrink-0
      transition-all
      hover:brightness-95
    "
  >
    Assinar
  </button>
</div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t-2 border-foreground/20 text-center">
          <p className="font-poppins text-xs text-foreground/70">
            © 2026 Litto. Todos os direitos reservados. Feito com paixão por histórias.
          </p>
        </div>
      </div>
    </footer>
  );
}