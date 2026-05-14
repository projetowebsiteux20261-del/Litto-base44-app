import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';

import AppLayout from './components/layout/AppLayout';
import Cadastro from "./pages/Cadastro";
import Entrar from "./pages/Entrar";
import Home from './pages/Home';
import Explorar from './pages/Explorar';
import Bibliotecas from './pages/Bibliotecas';
import Comunidade from './pages/Comunidade';
import Perfil from './pages/Perfil';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="bg-primary px-6 py-2 border-2 border-foreground shadow-brutal rounded-sm">
            <span className="text-white font-poppins font-black text-2xl">Litto</span>
          </div>
          <div className="w-8 h-8 border-4 border-foreground border-t-primary rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return null;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/explorar" element={<Explorar />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Entrar />} />
        <Route path="/bibliotecas" element={<Bibliotecas />} />
        <Route path="/comunidade" element={<Comunidade />} />
        <Route path="/perfil" element={<Perfil />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App