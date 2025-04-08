import { useState, useEffect, useMemo, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navigation } from "./components/Navigation";
import { LanguageProvider } from "./contexts/LanguageContext";

// Lazy Load Pages
const Index = lazy(() => import("./pages/Index"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const About = lazy(() => import("./pages/About"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contact = lazy(() => import("./pages/Contact"));
const HowToInvest = lazy(() => import("./pages/HowToInvest"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const DepositPlans = lazy(() => import("./pages/DepositPlans"));
const DepositConfirm = lazy(() => import("./pages/DepositConfirm"));
const AccountSettings = lazy(() => import("./pages/AccountSettings"));

const queryClient = new QueryClient();

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const token = localStorage.getItem("token");
    const expiryDate = localStorage.getItem("expiryDate");
    return token && expiryDate && new Date().getTime() < parseInt(expiryDate);
  });

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      const expiryDate = localStorage.getItem("expiryDate");
      if (token && expiryDate && new Date().getTime() < parseInt(expiryDate)) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        localStorage.removeItem("token");
        localStorage.removeItem("expiryDate");
      }
    };
    checkAuth();
  }, []);

  return { isAuthenticated, setIsAuthenticated };
};

const App = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const memoizedQueryClient = useMemo(() => queryClient, []);

  return (
    <QueryClientProvider client={memoizedQueryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <BrowserRouter>
            <Toaster />
            <Sonner />
            <AppLayout isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

const AppLayout = ({ isAuthenticated, setIsAuthenticated }) => {
  const location = useLocation();
  const hideNavOnDashboard = location.pathname.startsWith("/investor") || location.pathname.startsWith("/admin")  

  return (
    <>
      {!hideNavOnDashboard && <Navigation isAuthenticated={isAuthenticated} />}
      <Suspense fallback={<div>Loading...</div>}>
        <AppRoutes isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      </Suspense>
    </>
  );
};

const ProtectedRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const AppRoutes = ({ isAuthenticated, setIsAuthenticated }) => {
  return (
    <Routes>
      <Route path="/" element={<Index isAuthenticated={isAuthenticated} />} />
      <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact isAuthenticated={isAuthenticated} />} />
      <Route path="/how-to-invest" element={<HowToInvest />} />

      <Route path="/investor/dashboard" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Dashboard setIsAuthenticated={setIsAuthenticated} /></ProtectedRoute>} />
      <Route path="/admin/dashboard" element={<ProtectedRoute isAuthenticated={isAuthenticated}><AdminDashboard setIsAuthenticated={setIsAuthenticated} /></ProtectedRoute>} />
      <Route path="/admin/investor/:id" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Dashboard setIsAuthenticated={setIsAuthenticated} /></ProtectedRoute>} />
      <Route path="/investor/dashboard/deposit-plans" element={<ProtectedRoute isAuthenticated={isAuthenticated}><DepositPlans setIsAuthenticated={setIsAuthenticated} /></ProtectedRoute>} />
      <Route path="/investor/dashboard/deposit-confirm" element={<ProtectedRoute isAuthenticated={isAuthenticated}><DepositConfirm /></ProtectedRoute>} />
      <Route path="/investor/dashboard/account-settings" element={<ProtectedRoute isAuthenticated={isAuthenticated}><AccountSettings /></ProtectedRoute>} />
    </Routes>
  );
};

export default App;
