import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AuthInput from "../components/auth/AuthInput";
import MaterialIcon from "../components/ui/MaterialIcon";

export default function Cadastro() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ nome: "", email: "", senha: "", confirmarSenha: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };
  
  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  if (!form.nome || !form.email || !form.senha || !form.confirmarSenha) {
    setError("Preencha todos os campos.");
    return;
  }

  if (form.senha.length < 6) {
    setError("A senha deve ter pelo menos 6 caracteres.");
    return;
  }

  if (form.senha !== form.confirmarSenha) {
    setError("As senhas não coincidem.");
    return;
  }

  try {
    setLoading(true);

    await createUserWithEmailAndPassword(
      auth,
      form.email,
      form.senha
    );

    navigate("/");

  } catch (error) {

    switch (error.code) {
      case "auth/email-already-in-use":
        setError("Este e-mail já está em uso.");
        break;

      case "auth/invalid-email":
        setError("E-mail inválido.");
        break;

      case "auth/weak-password":
        setError("Senha muito fraca.");
        break;

      default:
        setError("Erro ao criar conta.");
    }

  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="w-full max-w-md"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-6">
            <div className="bg-primary px-6 py-2 border-2 border-foreground shadow-brutal rounded-sm">
              <span className="text-white font-poppins font-black text-2xl italic">Litto</span>
            </div>
          </Link>
          <h1 className="font-poppins font-black text-3xl text-foreground">Crie sua conta</h1>
          <p className="font-poppins text-sm text-muted-foreground mt-2">Junte-se à comunidade Litto.</p>
        </div>

        {/* Card */}
        <div className="bg-card border-4 border-foreground shadow-brutal rounded-sm overflow-hidden">
          <div className="bg-accent px-6 py-3 border-b-2 border-foreground flex items-center gap-2">
            <MaterialIcon name="person_add" size={18} className="text-white" />
            <span className="font-poppins font-bold text-xs uppercase text-white">Nova conta</span>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            <AuthInput
              label="Nome completo"
              name="nome"
              type="text"
              placeholder="Seu nome"
              value={form.nome}
              onChange={handleChange}
              icon="person"
            />
            <AuthInput
              label="E-mail"
              name="email"
              type="email"
              placeholder="seu@email.com"
              value={form.email}
              onChange={handleChange}
              icon="mail"
            />
            <AuthInput
              label="Senha"
              name="senha"
              type="password"
              placeholder="Mínimo 6 caracteres"
              value={form.senha}
              onChange={handleChange}
              icon="lock"
            />
            <AuthInput
              label="Confirmar senha"
              name="confirmarSenha"
              type="password"
              placeholder="Repita a senha"
              value={form.confirmarSenha}
              onChange={handleChange}
              icon="lock_check"
            />

            {error && (
              <div className="flex items-center gap-2 px-3 py-2 bg-destructive/10 border-2 border-destructive rounded-sm">
                <MaterialIcon name="error" size={16} className="text-destructive" />
                <span className="font-poppins text-xs font-medium text-destructive">{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="brutal-btn w-full py-3.5 bg-accent text-white font-poppins font-bold text-sm uppercase border-2 border-foreground shadow-brutal rounded-sm disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <MaterialIcon name="person_add" size={18} />
                  Criar Conta
                </>
              )}
            </button>
          </form>

          <div className="px-6 py-4 border-t-2 border-foreground bg-muted text-center">
            <span className="font-poppins text-sm text-muted-foreground">Já tem conta? </span>
            <Link to="/login" className="font-poppins text-sm font-bold text-primary underline underline-offset-2 hover:text-primary/80">
              Entrar
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}