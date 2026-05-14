import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/lib/AuthContext";

export default function RecuperarSenha() {
  const { recuperarSenha } = useAuth();
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setCarregando(true);
    setErro("");
    setMensagem("");
    try {
      await recuperarSenha(email);
      setMensagem("E-mail de recuperação enviado! Verifique sua caixa de entrada.");
    } catch (err) {
      if (err.code === "auth/user-not-found" || err.code === "auth/invalid-email") {
        setErro("Nenhuma conta encontrada com este e-mail.");
      } else {
        setErro("Erro ao enviar e-mail. Tente novamente.");
      }
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <h1 className="text-4xl font-black tracking-tighter text-white">
              litto<span className="text-[#f5a623]">.</span>
            </h1>
          </Link>
          <p className="mt-2 text-sm text-gray-400">Recupere o acesso à sua conta</p>
        </div>

        <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 shadow-xl">
          <h2 className="text-xl font-bold text-white mb-2">Recuperar senha</h2>
          <p className="text-sm text-gray-400 mb-6">
            Informe seu e-mail e enviaremos um link para redefinir sua senha.
          </p>

          {mensagem && (
            <div className="mb-4 p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
              {mensagem}
            </div>
          )}

          {erro && (
            <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
              {erro}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">E-mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#f5a623]/60 focus:ring-1 focus:ring-[#f5a623]/30 transition"
              />
            </div>

            <button
              type="submit"
              disabled={carregando}
              className="w-full bg-[#f5a623] hover:bg-[#e09516] text-black font-bold py-3 rounded-xl text-sm transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {carregando ? "Enviando..." : "Enviar e-mail de recuperação"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Lembrou a senha?{" "}
            <Link to="/entrar" className="text-[#f5a623] hover:underline font-medium">
              Voltar para o login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}