import React, { useState, useEffect, lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigationType,
} from 'react-router-dom';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Loader from './pages/Loader';
import Footer from './components/Footer';

// Lazy-loaded components
const HomePage = lazy(() => import('./components/HomePage'));
const Layout = lazy(() => import('./components/Layout'));
const AboutSection = lazy(() => import('./pages/AboutSection'));
const ServicesSection = lazy(() => import('./pages/ServicesSection'));
const TestPreparation = lazy(() => import('./pages/TestPrepration'));
const Contact = lazy(() => import('./pages/Contact'));
const GetQuote = lazy(() => import('./pages/GetQuote'));
const GetConsultant = lazy(() => import('./pages/GetConsultant'));
const ConsultationSection = lazy(() => import('./pages/Faq'));
const Team = lazy(() => import('./pages/Team'));

// Admin
const Login = lazy(() => import('./pages/Login'));
const AllConsultants = lazy(() => import('./pages/AllConsultants'));
const ProtectedRoute = lazy(() => import('./components/ProtectedRoute'));

function AppWrapper() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const [routeLoading, setRouteLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    if (navigationType === 'PUSH' || navigationType === 'POP') {
      setRouteLoading(true);
      const timer = setTimeout(() => {
        setRouteLoading(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [location]);

  if (routeLoading) return <Loader />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen font-[Poppins]"
    >
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<HomePage />} />
          <Route element={<Layout />}>
            <Route path="/about" element={<AboutSection />} />
            <Route path="/services" element={<ServicesSection />} />
            <Route path="/test-preparation" element={<TestPreparation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quote" element={<GetQuote />} />
            <Route path="/consultant" element={<GetConsultant />} />
            <Route path="/faq" element={<ConsultationSection />} />
            <Route path="/team" element={<Team />} />

            {/* Admin route WITH layout */}
            <Route
              path="/admin/consultants"
              element={
                <ProtectedRoute>
                  <AllConsultants />
                </ProtectedRoute>
              }
            />
          </Route>

          {/* Admin login WITHOUT layout */}
          <Route path="/admin/login" element={<Login />} />
        </Routes>

        <Footer />
      </Suspense>
    </motion.div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
