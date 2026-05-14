import React, { useState } from "react";
import { motion } from "framer-motion";
import BrutalCard from "../components/ui/BrutalCard";
import BrutalButton from "../components/ui/BrutalButton";
import MaterialIcon from "../components/ui/MaterialIcon";
import { useAuth } from "@/lib/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Perfil() {

  const { sair } = useAuth();
  const navigate = useNavigate();

  const [tab, setTab] = useState("lidos");

  const stats = [
    { label: "Livros Lidos", value: 47, icon: "menu_book" },
    { label: "Avaliações", value: 12, icon: "rate_review" },
    { label: "Recomendações", value: 8, icon: "recommend" },
    { label: "Quero Ler", value: 23, icon: "bookmark" },
  ];

  const shelf = {
    lidos: [
      { icon: "auto_stories", title: "Fundação e Império", author: "Isaac Asimov" },
      { icon: "memory", title: "Neuromancer", author: "William Gibson" },
      { icon: "menu_book", title: "O Fim da Infância", author: "Arthur C. Clarke" },
      { icon: "psychology", title: "1984", author: "George Orwell" },
    ],
    queroLer: [
      { icon: "rocket_launch", title: "Duna Messias", author: "Frank Herbert" },
      { icon: "castle", title: "O Silmarillion", author: "J.R.R. Tolkien" },
      { icon: "local_fire_department", title: "It - A Coisa", author: "Stephen King" },
    ],
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      {/* Header */}
      <section className="bg-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-accent rounded-sm border-4 border-secondary shadow-brutal mx-auto mb-4 flex items-center justify-center">
            <MaterialIcon name="person" size={40} className="text-white" />
          </div>
          <h1 className="font-poppins font-black text-3xl text-white mb-1">Leitor Litto</h1>
          <p className="font-poppins text-sm text-white/60">leitor@litto.com</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <BrutalCard className="p-5 text-center">
                  <MaterialIcon name={stat.icon} size={24} className="text-primary mx-auto mb-2" />
                  <div className="font-poppins font-black text-2xl text-foreground">{stat.value}</div>
                  <div className="font-poppins text-xs text-muted-foreground font-medium">{stat.label}</div>
                </BrutalCard>
              </motion.div>
            ))}
          </div>

          {/* Shelf */}
          <div className="flex items-center gap-2 mb-6">
            <MaterialIcon name="book_4" size={24} className="text-accent" />
            <h2 className="font-poppins font-black text-2xl text-foreground">Minha Estante</h2>
          </div>

          <div className="flex gap-3 mb-6">
            <button
              onClick={() => setTab("lidos")}
              className={`brutal-btn px-4 py-2 font-poppins font-bold text-xs uppercase border-2 border-foreground rounded-sm
                ${tab === "lidos" ? "bg-primary text-white shadow-brutal-sm" : "bg-card text-foreground shadow-brutal-sm"}`}
            >
              Lidos
            </button>
            <button
              onClick={() => setTab("queroLer")}
              className={`brutal-btn px-4 py-2 font-poppins font-bold text-xs uppercase border-2 border-foreground rounded-sm
                ${tab === "queroLer" ? "bg-secondary text-foreground shadow-brutal-sm" : "bg-card text-foreground shadow-brutal-sm"}`}
            >
              Quero Ler
            </button>
          </div>

          <div className="space-y-3">
            {shelf[tab].map((book) => (
              <BrutalCard key={book.title} className="p-4 flex items-center gap-4">
                <div className="bg-muted w-10 h-10 flex items-center justify-center border-2 border-foreground rounded-sm shrink-0">
                  <MaterialIcon name={book.icon} size={20} className="text-foreground" />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-sm text-foreground">{book.title}</h4>
                  <p className="font-poppins text-xs text-muted-foreground">{book.author}</p>
                </div>
              </BrutalCard>
            ))}
          </div>

          {/* Logout */}
          <div className="mt-8">
            <BrutalButton
              variant="outline"
              onClick={async () => {
                await sair();
                navigate("/");
              }}
            >
              <MaterialIcon name="logout" size={16} />
              Sair
            </BrutalButton>
          </div>
        </div>
      </section>
    </div>
  );
}