import React from "react";
import { motion } from "framer-motion";
import BrutalCard from "../ui/BrutalCard";
import BrutalButton from "../ui/BrutalButton";
import MaterialIcon from "../ui/MaterialIcon";

export default function FeaturedBookSection({ heroImage }) {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className="border-4 border-foreground shadow-brutal rounded-sm overflow-hidden bg-card">
              <div className="flex items-center gap-2 px-4 py-2 border-b-2 border-foreground bg-secondary">
                <MaterialIcon name="auto_stories" size={18} />
                <span className="font-poppins font-bold text-xs uppercase text-foreground">
                  Destaque
                </span>
              </div>
              <img
                src={heroImage}
                alt="Imagem de livros em destaque"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <MaterialIcon name="castle" className="text-accent" size={20} />
              <span className="font-poppins font-bold text-xs uppercase text-accent border-2 border-accent px-2 py-0.5 rounded-sm">
                Você Sabia?
              </span>
            </div>

            <h2 className="font-poppins font-black text-3xl sm:text-4xl text-foreground mb-4 leading-tight">
              O Senhor dos Anéis
            </h2>

            <p className="font-poppins text-base text-muted-foreground leading-relaxed mb-8">
              J.R.R. Tolkien escreveu a trilogia como uma única obra gigante. A
              adaptação de Peter Jackson é considerada uma das mais fiéis da
              literatura para o cinema.
            </p>

            <div className="flex flex-wrap gap-4">
              <BrutalButton variant="accent">
                <MaterialIcon name="menu_book" size={18} />
                Ver Bibliotecas
              </BrutalButton>
              <BrutalButton variant="secondary">
                Criar Conta
              </BrutalButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}