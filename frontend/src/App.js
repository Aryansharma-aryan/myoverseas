import React, { useEffect, lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Fallback loader for lazy loading
import Loader from './pages/Loader';
import VisitCounter from './pages/Visit';

// Lazy-loaded pages/components
const Footer = lazy(() => import('./components/Footer'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
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
const Login = lazy(() => import('./pages/Login'));
const AllConsultants = lazy(() => import('./pages/AllConsultants'));
const ProtectedRoute = lazy(() => import('./components/ProtectedRoute'));

function AppWrapper() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen font-[Poppins]"
    >
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route element={<Layout />}>
            <Route path="/about" element={<AboutSection />} />
            <Route path="/services" element={<ServicesSection />} />
            <Route path="/visit-stats" element={<VisitCounter />} />
            <Route path="/test-preparation" element={<TestPreparation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quote" element={<GetQuote />} />
            <Route path="/consultant" element={<GetConsultant />} />
            <Route path="/faq" element={<ConsultationSection />} />
            <Route path="/team" element={<Team />} />

            {/* Protected Admin Routes */}
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/consultants"
              element={
                <ProtectedRoute>
                  <AllConsultants />
                </ProtectedRoute>
              }
            />
          </Route>

          {/* Admin Login (No Layout) */}
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
