import React from "react";
import { motion } from "framer-motion";
import BrutalCard from "../components/ui/BrutalCard";
import MaterialIcon from "../components/ui/MaterialIcon";

const discussions = [
  { title: "Capitu traiu Bentinho?", members: "2.000+", icon: "forum", color: "bg-primary" },
  { title: "Qual o melhor livro de ficção científica?", members: "1.200+", icon: "rocket_launch", color: "bg-accent" },
  { title: "Adaptações que superaram os livros", members: "800+", icon: "movie", color: "bg-secondary" },
];

const reviews = [
  {
    initials: "AM",
    name: "Arthur M.",
    date: "Outubro 2023",
    book: "Fundação",
    rating: 5,
    text: "Uma obra-prima absoluta. A forma como Asimov constrói o conceito de psico-história é fascinante e ainda parece muito atual.",
    likes: 42,
  },
  {
    initials: "CL",
    name: "Clara Lima",
    date: "Janeiro 2024",
    book: "Fundação",
    rating: 5,
    text: "A leitura é bem rápida porque os contos são dinâmicos. No começo achei estranho os saltos temporais, mas depois você entende.",
    likes: 18,
  },
  {
    initials: "RF",
    name: "Rafael F.",
    date: "Março 2024",
    book: "Duna",
    rating: 4,
    text: "Um universo incrível e complexo. A construção política e ecológica de Arrakis é impressionante.",
    likes: 31,
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } } };

export default function Comunidade() {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      {/* Header */}
      <section className="bg-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-poppins font-black text-4xl sm:text-5xl text-foreground mb-4">
            Comunidade Litto
          </h1>
          <p className="font-poppins text-sm text-foreground/70 font-medium">
            Conexões entre páginas e telas. Junte-se à conversa.
          </p>
        </div>
      </section>

      {/* Discussions */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-poppins font-black text-2xl text-foreground mb-6 flex items-center gap-2">
            <MaterialIcon name="forum" size={24} className="text-primary" />
            Discussões Ativas
          </h2>

          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {discussions.map((d) => (
              <motion.div key={d.title} variants={item}>
                <BrutalCard className="p-6 h-full flex flex-col">
                  <div className={`${d.color} w-12 h-12 flex items-center justify-center border-2 border-foreground shadow-brutal-sm rounded-sm mb-4`}>
                    <MaterialIcon name={d.icon} size={24} className={d.color === "bg-accent" || d.color === "bg-primary" ? "text-white" : "text-foreground"} />
                  </div>
                  <h3 className="font-poppins font-bold text-base text-foreground mb-2">{d.title}</h3>
                  <p className="font-poppins text-xs text-muted-foreground mb-4">{d.members} participantes</p>
                  <button className="brutal-btn mt-auto px-4 py-2 bg-accent text-white font-poppins font-bold text-xs uppercase border-2 border-foreground shadow-brutal-sm rounded-sm">
                    Participar
                  </button>
                </BrutalCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Reviews */}
          <h2 className="font-poppins font-black text-2xl text-foreground mb-6 flex items-center gap-2">
            <MaterialIcon name="rate_review" size={24} className="text-accent" />
            Comentários da Comunidade
          </h2>

          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4">
            {reviews.map((review) => (
              <motion.div key={review.name} variants={item}>
                <BrutalCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent flex items-center justify-center border-2 border-foreground rounded-sm shrink-0">
                      <span className="font-poppins font-bold text-xs text-white">{review.initials}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="font-poppins font-bold text-sm text-foreground">{review.name}</span>
                        <span className="font-poppins text-xs text-muted-foreground">• Lido em {review.date}</span>
                      </div>
                      <div className="flex items-center gap-0.5 mb-2">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <MaterialIcon key={i} name="star" size={14} className="text-secondary" />
                        ))}
                      </div>
                      <p className="font-poppins text-sm text-muted-foreground leading-relaxed mb-3">
                        "{review.text}"
                      </p>
                      <button className="flex items-center gap-1 text-xs font-poppins font-medium text-muted-foreground hover:text-foreground transition-colors">
                        <MaterialIcon name="thumb_up" size={14} />
                        Útil ({review.likes})
                      </button>
                    </div>
                  </div>
                </BrutalCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}