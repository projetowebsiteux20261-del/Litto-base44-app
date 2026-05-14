import React, { useState } from "react";
import { motion } from "framer-motion";
import BrutalCard from "../components/ui/BrutalCard";
import MaterialIcon from "../components/ui/MaterialIcon";

const libraries = [
  { name: "Biblioteca Mário de Andrade", address: "R. da Consolação, 94 – República", lat: -23.545, lng: -46.642 },
  { name: "Biblioteca de São Paulo", address: "Av. Cruzeiro do Sul, 2630 – Santana", lat: -23.510, lng: -46.627 },
  { name: "Centro Cultural São Paulo", address: "R. Vergueiro, 1000 – Paraíso", lat: -23.571, lng: -46.637 },
  { name: "Biblioteca Alceu Amoroso Lima", address: "R. Henrique Schaumann, 777 – Pinheiros", lat: -23.563, lng: -46.690 },
  { name: "Biblioteca Viriato Corrêa", address: "R. Sena Madureira, 298 – Vila Mariana", lat: -23.588, lng: -46.637 },
];

const digitalLibs = [
  { icon: "auto_stories", name: "Project Gutenberg", desc: "Mais de 70.000 e-books gratuitos de domínio público." },
  { icon: "menu_book", name: "Open Library", desc: "Milhões de títulos para empréstimo digital." },
  { icon: "museum", name: "Europeana", desc: "Patrimônio cultural europeu com milhões de itens." },
  { icon: "account_balance", name: "Library of Congress", desc: "A maior biblioteca do mundo." },
];

export default function Bibliotecas() {
  const [tab, setTab] = useState("presencial");

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      {/* Header */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-poppins font-black text-4xl sm:text-5xl text-white mb-4" style={{ textShadow: "3px 3px 0 #1a1b24" }}>
            Bibliotecas
          </h1>
          <p className="font-poppins text-sm text-white/80 font-medium">
            Encontre o lugar perfeito para sua próxima leitura.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 mb-8 justify-center">
            <button
              onClick={() => setTab("presencial")}
              className={`brutal-btn px-5 py-2.5 font-poppins font-bold text-xs uppercase border-2 border-foreground rounded-sm flex items-center gap-2
                ${tab === "presencial" ? "bg-primary text-white shadow-brutal-sm" : "bg-card text-foreground shadow-brutal-sm"}`}
            >
              <MaterialIcon name="map" size={16} />
              Presencial
            </button>
            <button
              onClick={() => setTab("digital")}
              className={`brutal-btn px-5 py-2.5 font-poppins font-bold text-xs uppercase border-2 border-foreground rounded-sm flex items-center gap-2
                ${tab === "digital" ? "bg-accent text-white shadow-brutal-sm" : "bg-card text-foreground shadow-brutal-sm"}`}
            >
              <MaterialIcon name="computer" size={16} />
              Digitais
            </button>
          </div>

          {tab === "presencial" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {libraries.map((lib) => (
                <BrutalCard key={lib.name} className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-secondary w-10 h-10 flex items-center justify-center border-2 border-foreground rounded-sm shrink-0">
                      <MaterialIcon name="menu_book" size={20} />
                    </div>
                    <div>
                      <h3 className="font-poppins font-bold text-sm text-foreground mb-1">
                        {lib.name}
                      </h3>
                      <p className="font-poppins text-xs text-muted-foreground">
                        {lib.address}
                      </p>
                    </div>
                  </div>
                </BrutalCard>
              ))}
            </motion.div>
          )}

          {tab === "digital" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {digitalLibs.map((lib) => (
                <BrutalCard key={lib.name} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent w-12 h-12 flex items-center justify-center border-2 border-foreground shadow-brutal-sm rounded-sm shrink-0">
                      <MaterialIcon name={lib.icon} size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-poppins font-bold text-base text-foreground mb-1">
                        {lib.name}
                      </h3>
                      <p className="font-poppins text-sm text-muted-foreground leading-relaxed">
                        {lib.desc}
                      </p>
                    </div>
                  </div>
                </BrutalCard>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Public Domain Info */}
      <section className="py-12 bg-muted">
        <div className="max-w-3xl mx-auto px-4">
          <BrutalCard className="p-8" hover={false}>
            <h3 className="font-poppins font-bold text-lg text-foreground mb-3">
              O que é Domínio Público?
            </h3>
            <p className="font-poppins text-sm text-muted-foreground leading-relaxed mb-6">
              São obras cujos direitos autorais expiraram ou foram renunciados. No Brasil, ocorre 70 anos após o falecimento do autor.
            </p>
            <div className="space-y-2">
              {["Uso Educacional", "Adaptações Criativas", "Distribuição Livre"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <MaterialIcon name="check_circle" size={18} className="text-primary" />
                  <span className="font-poppins text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </BrutalCard>
        </div>
      </section>
    </div>
  );
}