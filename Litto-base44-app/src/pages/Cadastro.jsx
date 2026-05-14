import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/lib/AuthContext";
 
export default function Cadastro() {
  const navigate = useNavigate();
  const { cadastrar, entrarComGoogle } = useAuth();
 
  const [form, setForm] = useState({ nome: "", email: "", senha: "", confirmarSenha: "" });
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);
 
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErro("");
  }
 
  async function handleSubmit(e) {
    e.preventDefault();
    if (form.senha !== form.confirmarSenha) {
      setErro("As senhas não coincidem.");
      return;
    }
    if (form.senha.length < 6) {
      setErro("A senha deve ter pelo menos 6 caracteres.");
      return;
    }
    setCarregando(true);
    try {
      await cadastrar(form.email, form.senha, form.nome);
      navigate("/");
    } catch (err) {
      switch (err.code) {
        case "auth/email-already-in-use":
          setErro("Este e-mail já está em uso.");
          break;
        case "auth/invalid-email":
          setErro("E-mail inválido.");
          break;
        default:
          setErro("Erro ao criar conta. Tente novamente.");
      }
    } finally {
      setCarregando(false);
    }
  }
 
  async function handleGoogle() {
    setCarregando(true);
    try {
      await entrarComGoogle();
      navigate("/");
    } catch {
      setErro("Erro ao entrar com Google. Tente novamente.");
    } finally {
      setCarregando(false);
    }
  }
 
  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo / Título */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <h1 className="text-4xl font-black tracking-tighter text-white">
              litto<span className="text-[#f5a623]">.</span>
            </h1>
          </Link>
          <p className="mt-2 text-sm text-gray-400">Crie sua conta e explore o universo literário</p>
        </div>
 
        {/* Card */}
        <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 shadow-xl">
          <h2 className="text-xl font-bold text-white mb-6">Criar conta</h2>
 
          {erro && (
            <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
              {erro}
            </div>
          )}
 
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Nome</label>
              <input
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                placeholder="Seu nome"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#f5a623]/60 focus:ring-1 focus:ring-[#f5a623]/30 transition"
              />
            </div>
 
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">E-mail</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#f5a623]/60 focus:ring-1 focus:ring-[#f5a623]/30 transition"
              />
            </div>
 
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Senha</label>
              <input
                type="password"
                name="senha"
                value={form.senha}
                onChange={handleChange}
                placeholder="Mínimo 6 caracteres"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#f5a623]/60 focus:ring-1 focus:ring-[#f5a623]/30 transition"
              />
            </div>
 
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Confirmar senha</label>
              <input
                type="password"
                name="confirmarSenha"
                value={form.confirmarSenha}
                onChange={handleChange}
                placeholder="Repita sua senha"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#f5a623]/60 focus:ring-1 focus:ring-[#f5a623]/30 transition"
              />
            </div>
 
            <button
              type="submit"
              disabled={carregando}
              className="w-full bg-[#f5a623] hover:bg-[#e09516] text-black font-bold py-3 rounded-xl text-sm transition disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {carregando ? "Criando conta..." : "Criar conta"}
            </button>
          </form>
 
          {/* Divisor */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-xs text-gray-500">ou continue com</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>
 
          {/* Google */}
          <button
            onClick={handleGoogle}
            disabled={carregando}
            className="w-full flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium py-3 rounded-xl text-sm transition disabled:opacity-50"
          >
            <svg width="18" height="18" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.6 20H24v8h11.3C33.6 33.1 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.1-4z"/>
              <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.5 18.9 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.5 29.3 4 24 4 16.3 4 9.7 8.4 6.3 14.7z"/>
              <path fill="#4CAF50" d="M24 44c5.2 0 9.9-1.9 13.5-5l-6.2-5.2C29.4 35.6 26.8 36 24 36c-5.2 0-9.6-2.9-11.3-7l-6.6 5C9.7 39.7 16.3 44 24 44z"/>
              <path fill="#1976D2" d="M43.6 20H24v8h11.3c-.9 2.5-2.6 4.6-4.8 6l6.2 5.2C40.7 35.7 44 30.3 44 24c0-1.3-.1-2.7-.4-4z"/>
            </svg>
            Continuar com Google
          </button>
 
          <p className="mt-6 text-center text-sm text-gray-500">
            Já tem uma conta?{" "}
            <Link to="/entrar" className="text-[#f5a623] hover:underline font-medium">
              Entrar
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}