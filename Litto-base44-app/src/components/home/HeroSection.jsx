import React, { useState } from "react";
import { motion } from "framer-motion";
import MaterialIcon from "../ui/MaterialIcon";

export default function HeroSection() {
  const [query, setQuery] = useState("");

  return (
    <section className="relative bg-accent overflow-hidden min-h-[85vh] flex items-center">
      {/* Decorative shapes */}
      <div className="absolute top-16 left-[-30px] w-28 h-28 bg-secondary rounded-full border-4 border-foreground animate-float opacity-90" />
      <div className="absolute top-32 right-16 w-20 h-20 bg-accent border-4 border-foreground rotate-45 animate-float-reverse opacity-80" />
      <div className="absolute bottom-20 right-[-20px] w-32 h-32 bg-primary border-4 border-foreground rotate-12 animate-float opacity-90" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
                    <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-poppins font-black italic text-7xl sm:text-8xl md:text-9xl text-white tracking-tight mb-6"
            style={{ textShadow: "4px 4px 0 #1a1b24" }}
          >
            Litto
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-poppins font-bold text-xl sm:text-2xl md:text-3xl text-secondary mb-10 max-w-2xl"
          >
            Descubra sua próxima história favorita.
          </motion.h2>

{/* Search Bar */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.3 }}
  className="w-full max-w-xl"
>
  <div
    className="
      flex items-center
      w-full
      border-4 border-foreground
      bg-card
      shadow-brutal-sm
      overflow-hidden
    "
  >
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Qual história você quer viver hoje?"
      className="
        flex-1
        min-w-0
        px-4
        py-4
        bg-transparent
        text-foreground
        font-poppins
        text-sm
        placeholder:text-muted-foreground
        focus:outline-none
      "
    />

    <button
      className="
        w-14
        self-stretch
        bg-primary
        text-white
        border-l-4 border-foreground
        flex items-center justify-center
        shrink-0
        transition-all
        hover:brightness-95
      "
    >
      <MaterialIcon name="search" size={20} />
    </button>
  </div>
</motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="font-poppins text-sm text-white/80 mt-6 font-medium"
          >
            Onde a literatura se encontra com o cinema e o streaming.
          </motion.p>
        </div>
      </div>
    </section>
  );
}