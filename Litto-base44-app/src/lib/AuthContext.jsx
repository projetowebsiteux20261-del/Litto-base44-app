import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "./firebase";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUsuario(user);
      setCarregando(false);
    });
    return unsub;
  }, []);

  // Cadastro com e-mail + senha + nome
  async function cadastrar(email, senha, nome) {
    const credencial = await createUserWithEmailAndPassword(auth, email, senha);
    if (nome) {
      await updateProfile(credencial.user, { displayName: nome });
    }
    return credencial;
  }

  // Login com e-mail + senha
  function entrar(email, senha) {
    return signInWithEmailAndPassword(auth, email, senha);
  }

  // Login com Google
  function entrarComGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }

  // Sair
  function sair() {
    return signOut(auth);
  }

  // Recuperar senha
  function recuperarSenha(email) {
    return sendPasswordResetEmail(auth, email);
  }

  return (
    <AuthContext.Provider
      value={{ usuario, carregando, cadastrar, entrar, entrarComGoogle, sair, recuperarSenha }}
    >
      {!carregando && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth deve ser usado dentro de <AuthProvider>");
  return ctx;
}