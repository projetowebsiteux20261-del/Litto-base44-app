import React from "react";
import { motion } from "framer-motion";
import BrutalCard from "../ui/BrutalCard";
import MaterialIcon from "../ui/MaterialIcon";

const media = [
  {
    type: "FILME",
    icon: "theaters",
    title: "O Senhor dos Anéis",
    description: "Uma jornada épica pela Terra Média.",
    color: "bg-accent",
  },
  {
    type: "SÉRIE",
    icon: "live_tv",
    title: "Succession",
    description: "A luta pelo poder em uma dinastia de mídia.",
    color: "bg-primary",
  },
  {
    type: "FILME",
    icon: "confirmation_number",
    title: "Pulp Fiction",
    description: "Vidas de criminosos se entrelaçam em histórias.",
    color: "bg-secondary",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export default function MoviesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 justify-center mb-4">
          <MaterialIcon name="movie" className="text-accent" size={28} />
          <h2 className="font-poppins font-black text-3xl sm:text-4xl text-foreground">
            Filmes & Séries
          </h2>
        </div>
        <div className="w-16 h-1 bg-accent mx-auto mb-12 border border-foreground" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {media.map((m) => (
            <motion.div key={m.title} variants={item}>
              <BrutalCard className="overflow-hidden h-full flex flex-col">
                {/* Badge */}
                <div className="px-5 pt-5 pb-0">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 ${m.color} text-xs font-poppins font-bold uppercase border-2 border-foreground rounded-sm`}>
                    <MaterialIcon name={m.icon} size={14} className={m.color === "bg-accent" ? "text-white" : "text-foreground"} />
                    <span className={m.color === "bg-accent" ? "text-white" : "text-foreground"}>{m.type}</span>
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex-1">
                  <h3 className="font-poppins font-bold text-lg text-foreground mb-2">
                    {m.title}
                  </h3>
                  <p className="font-poppins text-sm text-muted-foreground leading-relaxed">
                    {m.description}
                  </p>
                </div>

                {/* Action */}
                <button className="brutal-btn w-full py-3 bg-accent text-white font-poppins font-bold text-xs uppercase border-t-2 border-foreground">
                  Saiba Mais
                </button>
              </BrutalCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}