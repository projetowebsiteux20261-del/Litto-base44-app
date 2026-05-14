import React, { useState } from "react";
import { motion } from "framer-motion";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

import BrutalCard from "../ui/BrutalCard";
import BrutalButton from "../ui/BrutalButton";

export default function FeedbackSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
  try {
    await addDoc(collection(db, "feedbacks"), {
      nomeCompleto: form.name,
      email: form.email,
      mensagem: form.message,
      createdAt: new Date()
    });

    alert("Feedback enviado com sucesso!");

    setForm({
      name: "",
      email: "",
      message: ""
    });
  } catch (error) {
    console.error("Erro ao enviar feedback:", error);
    alert("Erro ao enviar feedback");
  }
};

  return (
    <section className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <h2 className="font-poppins font-black text-3xl sm:text-4xl text-foreground text-center mb-4">
            Sugestões ou Feedback?
          </h2>
          <p className="font-poppins text-sm text-muted-foreground text-center mb-10 max-w-lg mx-auto">
            Ajude-nos a conectar melhor as histórias que você lê com as que você assiste.
          </p>

          <BrutalCard className="p-8" hover={false}>
            <form className="space-y-5">
              <div>
                <label className="font-poppins font-bold text-sm text-foreground block mb-2">
                  Nome Completo
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-foreground bg-card font-poppins text-sm rounded-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="font-poppins font-bold text-sm text-foreground block mb-2">
                  E-mail
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-foreground bg-card font-poppins text-sm rounded-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="font-poppins font-bold text-sm text-foreground block mb-2">
                  Sua Mensagem
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-foreground bg-card font-poppins text-sm rounded-sm resize-none focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                  placeholder="Escreva sua sugestão ou feedback..."
                />
              </div>
              <BrutalButton
                variant="primary"
                type="button"
                fullWidth
                onClick={handleSubmit}
              >
                Enviar Feedback
              </BrutalButton>
            </form>
          </BrutalCard>
        </motion.div>
      </div>
    </section>
  );
}