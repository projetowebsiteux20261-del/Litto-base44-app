import React from "react";
import { motion } from "framer-motion";
import BrutalCard from "../ui/BrutalCard";
import MaterialIcon from "../ui/MaterialIcon";

export default function CommunitySection() {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 justify-center mb-4">
          <MaterialIcon name="trending_up" className="text-primary" size={28} />
          <h2 className="font-poppins font-black text-3xl sm:text-4xl text-foreground">
            Tendências da Comunidade
          </h2>
        </div>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 border border-foreground" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main discussion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <BrutalCard className="p-6 h-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary text-white text-xs font-poppins font-bold uppercase border-2 border-foreground rounded-sm">
                  <MaterialIcon name="forum" size={14} />
                  Debate do Mês
                </span>
              </div>
              <h3 className="font-poppins font-bold text-xl text-foreground mb-3">
                Capitu traiu Bentinho?
              </h3>
              <p className="font-poppins text-sm text-muted-foreground leading-relaxed mb-6">
                Junte-se a mais de 2.000 leitores nesta discussão clássica sobre
                a obra-prima de Machado de Assis.
              </p>
              <button className="brutal-btn px-5 py-2.5 bg-accent text-white font-poppins font-bold text-xs uppercase border-2 border-foreground shadow-brutal-sm rounded-sm">
                Participar
              </button>
            </BrutalCard>
          </motion.div>

          {/* Side items */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            className="space-y-4"
          >
            <BrutalCard className="p-5 flex items-center gap-4">
              <div className="bg-primary w-12 h-12 flex items-center justify-center border-2 border-foreground shadow-brutal-sm rounded-sm shrink-0">
                <MaterialIcon name="skull" size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-poppins font-bold text-sm text-foreground">
                  Clube do Terror
                </h4>
                <p className="font-poppins text-xs text-muted-foreground">
                  +450 membros ativos
                </p>
              </div>
            </BrutalCard>

            <BrutalCard className="p-5 flex items-center gap-4">
              <div className="bg-secondary w-12 h-12 flex items-center justify-center border-2 border-foreground shadow-brutal-sm rounded-sm shrink-0">
                <MaterialIcon name="star_half" size={24} className="text-foreground" />
              </div>
              <div>
                <h4 className="font-poppins font-bold text-sm text-foreground">
                  Novos Críticos
                </h4>
                <p className="font-poppins text-xs text-muted-foreground">
                  Compartilhe suas avaliações
                </p>
              </div>
            </BrutalCard>

            <BrutalCard className="p-5 flex items-center gap-4">
              <div className="bg-accent w-12 h-12 flex items-center justify-center border-2 border-foreground shadow-brutal-sm rounded-sm shrink-0">
                <MaterialIcon name="workspace_premium" size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-poppins font-bold text-sm text-foreground">
                  Top Listas
                </h4>
                <p className="font-poppins text-xs text-muted-foreground">
                  As melhores curadoria da comunidade
                </p>
              </div>
            </BrutalCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}