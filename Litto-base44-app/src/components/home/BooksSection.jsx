import React from "react";
import { motion } from "framer-motion";
import BrutalCard from "../ui/BrutalCard";
import MaterialIcon from "../ui/MaterialIcon";

const books = [
  {
    icon: "auto_stories",
    title: "Dom Casmurro",
    author: "Machado de Assis",
    rating: 5,
    color: "bg-secondary",
  },
  {
    icon: "rocket_launch",
    title: "Duna",
    author: "Frank Herbert",
    rating: 5,
    color: "bg-primary",
  },
  {
    icon: "psychology",
    title: "1984",
    author: "George Orwell",
    rating: 5,
    color: "bg-accent",
  },
  {
    icon: "local_fire_department",
    title: "O Iluminado",
    author: "Stephen King",
    rating: 5,
    color: "bg-card",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export default function BooksSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 justify-center mb-4">
          <MaterialIcon name="menu_book" className="text-primary" size={28} />
          <h2 className="font-poppins font-black text-3xl sm:text-4xl text-foreground">
            Livros em Destaque
          </h2>
        </div>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 border border-foreground" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {books.map((book) => (
            <motion.div key={book.title} variants={item}>
              <BrutalCard className="overflow-hidden h-full flex flex-col">
                {/* Header */}
                <div className={`${book.color} p-6 flex items-center justify-center border-b-2 border-foreground`}>
                  <MaterialIcon
                    name={book.icon}
                    size={48}
                    className={book.color === "bg-accent" ? "text-white" : "text-foreground"}
                  />
                </div>

                {/* Body */}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-poppins font-bold text-base text-foreground mb-1">
                    {book.title}
                  </h3>
                  <p className="font-poppins text-sm text-muted-foreground mb-3">
                    {book.author}
                  </p>
                  <div className="flex items-center gap-0.5 mt-auto">
                    {Array.from({ length: book.rating }).map((_, i) => (
                      <MaterialIcon
                        key={i}
                        name="star"
                        size={16}
                        className="text-secondary"
                      />
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <button className="brutal-btn w-full py-3 bg-primary text-primary-foreground font-poppins font-bold text-xs uppercase border-t-2 border-foreground">
                  Ver Detalhes
                </button>
              </BrutalCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}