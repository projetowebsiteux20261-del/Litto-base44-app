import React from "react";
import { motion } from "framer-motion";
import MaterialIcon from "../ui/MaterialIcon";

const categories = [
  { icon: "castle", label: "Fantasia Épica", color: "bg-accent" },
  { icon: "rocket_launch", label: "Sci-Fi Classic", color: "bg-primary" },
  { icon: "history_edu", label: "Romance Histórico", color: "bg-secondary" },
  { icon: "search", label: "Policial & Mistério", color: "bg-card" },
  { icon: "eco", label: "Natureza & Ensaio", color: "bg-secondary" },
  { icon: "psychology", label: "Filosofia Moderna", color: "bg-accent" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120 } },
};

export default function CategoriesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-poppins font-black text-3xl sm:text-4xl text-foreground text-center mb-4">
          Sugestões para sua Estante
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto mb-12 border border-foreground" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.label}
              variants={item}
              className={`brutal-btn brutal-card ${cat.color} p-6 border-2 border-foreground shadow-brutal-sm rounded-sm flex flex-col items-center gap-3 text-center`}
            >
              <MaterialIcon
                name={cat.icon}
                size={32}
                className={cat.color === "bg-accent" ? "text-white" : "text-foreground"}
              />
              <span className={`font-poppins font-bold text-xs uppercase tracking-wide ${cat.color === "bg-accent" ? "text-white" : "text-foreground"}`}>
                {cat.label}
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}