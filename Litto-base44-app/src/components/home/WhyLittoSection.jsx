import React from "react";
import { motion } from "framer-motion";
import BrutalCard from "../ui/BrutalCard";
import MaterialIcon from "../ui/MaterialIcon";

const features = [
  {
    icon: "movie",
    title: "Das Telas para as Páginas",
    description: "Conectamos os sucessos do cinema e das séries com as obras literárias que os inspiraram.",
    color: "bg-primary",
  },
  {
    icon: "menu_book",
    title: "Curadoria Especializada",
    description: "Nossa equipe seleciona títulos que dialogam com a cultura pop atual.",
    color: "bg-secondary",
  },
  {
    icon: "diversity_3",
    title: "Clube de Comunidade",
    description: "Participe de discussões profundas com leitores apaixonados por histórias.",
    color: "bg-accent",
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

export default function WhyLittoSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-poppins font-black text-3xl sm:text-4xl text-foreground text-center mb-4">
          Por que ler com a Litto?
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 border border-foreground" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={item}>
              <BrutalCard className="p-8 h-full flex flex-col">
                <div className={`${feature.color} w-14 h-14 flex items-center justify-center border-2 border-foreground shadow-brutal-sm rounded-sm mb-6`}>
                  <MaterialIcon
                    name={feature.icon}
                    size={28}
                    className={feature.color === "bg-accent" ? "text-white" : "text-foreground"}
                  />
                </div>
                <h3 className="font-poppins font-bold text-lg text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="font-poppins text-sm text-muted-foreground leading-relaxed flex-1">
                  {feature.description}
                </p>
              </BrutalCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}