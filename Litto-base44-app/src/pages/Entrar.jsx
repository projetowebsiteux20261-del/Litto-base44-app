import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

import { auth } from "@/lib/firebase";

import AuthInput from "../components/auth/AuthInput";
import MaterialIcon from "../components/ui/MaterialIcon";

export default function Entrar() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", senha: "" });
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErro("");
  }

  async function handleSubmit(e) {
  e.preventDefault();

  setCarregando(true);

  try {

    await signInWithEmailAndPassword(
      auth,
      form.email,
      form.senha
    );

    navigate("/");

  } catch (err) {

    switch (err.code) {

      case "auth/user-not-found":
      case "auth/wrong-password":
      case "auth/invalid-credential":
        setErro("E-mail ou senha incorretos.");
        break;

      case "auth/invalid-email":
        setErro("E-mail inválido.");
        break;

      default:
        setErro("Erro ao entrar.");
    }

  } finally {
    setCarregando(false);
  }
}
async function handleGoogle() {

  try {

    const provider = new GoogleAuthProvider();

    provider.setCustomParameters({
        prompt: "select_account",
    });

    await signInWithPopup(auth, provider);

    navigate("/");

  } catch (error) {

    console.error(error);

    setErro(error.message);
  }
}

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
            <span className="text-white font-poppins font-black text-2xl italic">
              Litto
            </span>
          </div>
        </Link>

        <h1 className="font-poppins font-black text-3xl text-foreground">
          Entrar
        </h1>

        <p className="font-poppins text-sm text-muted-foreground mt-2">
          Bem-vindo de volta ao Litto.
        </p>
      </div>

      {/* Card */}
      <div className="bg-card border-4 border-foreground shadow-brutal rounded-sm overflow-hidden">

        {/* Top bar */}
        <div className="bg-primary px-6 py-3 border-b-2 border-foreground flex items-center gap-2">
          <MaterialIcon
            name="login"
            size={18}
            className="text-white"
          />

          <span className="font-poppins font-bold text-xs uppercase text-white">
            Acessar conta
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">

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
            placeholder="Sua senha"
            value={form.senha}
            onChange={handleChange}
            icon="lock"
          />

          {erro && (
            <div className="flex items-center gap-2 px-3 py-2 bg-destructive/10 border-2 border-destructive rounded-sm">
              <MaterialIcon
                name="error"
                size={16}
                className="text-destructive"
              />

              <span className="font-poppins text-xs font-medium text-destructive">
                {erro}
              </span>
            </div>
          )}

          <button
            type="submit"
            disabled={carregando}
            className="brutal-btn w-full py-3.5 bg-primary text-white font-poppins font-bold text-sm uppercase border-2 border-foreground shadow-brutal rounded-sm disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {carregando ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <MaterialIcon name="login" size={18} />
                Entrar
              </>
            )}
          </button>

          {/* Google */}
          <button
            type="button"
            onClick={handleGoogle}
            disabled={carregando}
            className="brutal-btn w-full py-3.5 bg-card text-foreground font-poppins font-bold text-sm uppercase border-2 border-foreground shadow-brutal rounded-sm flex items-center justify-center gap-3"
          >
            <svg width="18" height="18" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.6 20H24v8h11.3C33.6 33.1 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.1-4z"/>
              <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.5 18.9 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.5 29.3 4 24 4 16.3 4 9.7 8.4 6.3 14.7z"/>
              <path fill="#4CAF50" d="M24 44c5.2 0 9.9-1.9 13.5-5l-6.2-5.2C29.4 35.6 26.8 36 24 36c-5.2 0-9.6-2.9-11.3-7l-6.6 5C9.7 39.7 16.3 44 24 44z"/>
              <path fill="#1976D2" d="M43.6 20H24v8h11.3c-.9 2.5-2.6 4.6-4.8 6l6.2 5.2C40.7 35.7 44 30.3 44 24c0-1.3-.1-2.7-.4-4z"/>
            </svg>

            Continuar com Google
          </button>
        </form>

        {/* Footer */}
        <div className="px-6 py-4 border-t-2 border-foreground bg-muted text-center">
          <span className="font-poppins text-sm text-muted-foreground">
            Não tem conta?
          </span>{" "}

          <Link
            to="/cadastro"
            className="font-poppins text-sm font-bold text-primary underline underline-offset-2 hover:text-primary/80"
          >
            Criar conta
          </Link>
        </div>
      </div>
    </motion.div>
  </div>
);
}