import React, { useState } from "react";
import { motion } from "framer-motion";
import BrutalCard from "../components/ui/BrutalCard";
import MaterialIcon from "../components/ui/MaterialIcon";

const tags = ["Suspense", "Sci-Fi", "Clássicos", "Fantasia", "Romance", "Terror"];

const allBooks = [
  { icon: "auto_stories", title: "Fundação", author: "Isaac Asimov", genre: "Sci-Fi", rating: 4.8, color: "bg-accent" },
  { icon: "auto_stories", title: "Dom Casmurro", author: "Machado de Assis", genre: "Clássicos", rating: 4.9, color: "bg-secondary" },
  { icon: "rocket_launch", title: "Duna", author: "Frank Herbert", genre: "Sci-Fi", rating: 4.7, color: "bg-primary" },
  { icon: "psychology", title: "1984", author: "George Orwell", genre: "Clássicos", rating: 4.9, color: "bg-card" },
  { icon: "local_fire_department", title: "O Iluminado", author: "Stephen King", genre: "Terror", rating: 4.6, color: "bg-primary" },
  { icon: "castle", title: "O Hobbit", author: "J.R.R. Tolkien", genre: "Fantasia", rating: 4.8, color: "bg-accent" },
  { icon: "favorite", title: "Orgulho e Preconceito", author: "Jane Austen", genre: "Romance", rating: 4.7, color: "bg-secondary" },
  { icon: "search", title: "O Nome da Rosa", author: "Umberto Eco", genre: "Suspense", rating: 4.5, color: "bg-card" },
  { icon: "memory", title: "Neuromancer", author: "William Gibson", genre: "Sci-Fi", rating: 4.4, color: "bg-accent" },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } } };

export default function Explorar() {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);

  const filtered = allBooks.filter((b) => {
    const matchSearch = b.title.toLowerCase().includes(search.toLowerCase()) || b.author.toLowerCase().includes(search.toLowerCase());
    const matchTag = !selectedTag || b.genre === selectedTag;
    return matchSearch && matchTag;
  });

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      {/* Header */}
      <section className="bg-accent py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-poppins font-black text-4xl sm:text-5xl text-white mb-6" style={{ textShadow: "3px 3px 0 #1a1b24" }}>
            O que vamos descobrir hoje?
          </h1>
          <div className="flex border-4 border-foreground shadow-brutal bg-card rounded-sm overflow-hidden max-w-xl mx-auto">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar livros, autores..."
              className="flex-1 px-4 py-3 font-poppins text-sm bg-transparent focus:outline-none text-foreground"
            />
            <button className="brutal-btn px-5 py-3 bg-primary text-white font-poppins font-bold text-xs uppercase border-l-4 border-foreground flex items-center gap-2">
              <MaterialIcon name="search" size={18} />
              Buscar
            </button>
          </div>
          <div className="flex flex-wrap gap-2 justify-center mt-6">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`brutal-btn px-3 py-1.5 text-xs font-poppins font-bold uppercase border-2 border-foreground rounded-sm transition-all
                  ${selectedTag === tag ? "bg-secondary text-foreground shadow-brutal-sm" : "bg-white/20 text-white hover:bg-white/30"}`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((book) => (
              <motion.div key={book.title} variants={item}>
                <BrutalCard className="overflow-hidden h-full flex flex-col">
                  <div className={`${book.color} p-6 flex items-center justify-center border-b-2 border-foreground`}>
                    <MaterialIcon name={book.icon} size={40} className={book.color === "bg-accent" ? "text-white" : "text-foreground"} />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 bg-muted text-xs font-poppins font-bold uppercase border border-foreground rounded-sm">
                        {book.genre}
                      </span>
                    </div>
                    <h3 className="font-poppins font-bold text-base text-foreground mb-1">{book.title}</h3>
                    <p className="font-poppins text-sm text-muted-foreground mb-3">{book.author}</p>
                    <div className="flex items-center gap-1 mt-auto">
                      <MaterialIcon name="star" size={14} className="text-secondary" />
                      <span className="font-poppins text-xs font-bold text-foreground">{book.rating}</span>
                    </div>
                  </div>
                  <button className="brutal-btn w-full py-3 bg-primary text-white font-poppins font-bold text-xs uppercase border-t-2 border-foreground">
                    Ver Detalhes
                  </button>
                </BrutalCard>
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <MaterialIcon name="search_off" size={48} className="text-muted-foreground mx-auto mb-4" />
              <p className="font-poppins font-bold text-lg text-muted-foreground">Nenhum resultado encontrado</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}