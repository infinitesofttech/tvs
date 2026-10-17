import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailsPage from './pages/ServiceDetailsPage';
import ContactPage from './pages/ContactPage';
import AppointmentPage from './pages/AppointmentPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TeamPage from './pages/TeamPage';
import TestimonialsPage from './pages/TestimonialsPage';
import PricingPage from './pages/PricingPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/about-us.html" element={<Navigate to="/about-us" replace />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services-1" element={<Navigate to="/services" replace />} />
          <Route path="/services-1.html" element={<Navigate to="/services" replace />} />
          <Route path="/service-details" element={<ServiceDetailsPage />} />
          <Route path="/service-details.html" element={<Navigate to="/service-details" replace />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/contact-us.html" element={<Navigate to="/contact-us" replace />} />
          <Route path="/book-an-appointment" element={<AppointmentPage />} />
          <Route path="/book-an-appointment.html" element={<Navigate to="/book-an-appointment" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login.html" element={<Navigate to="/login" replace />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/register.html" element={<Navigate to="/register" replace />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/team.html" element={<Navigate to="/team" replace />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/testimonials.html" element={<Navigate to="/testimonials" replace />} />
          <Route path="/pricing-plan" element={<PricingPage />} />
          <Route path="/pricing-plan.html" element={<Navigate to="/pricing-plan" replace />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/privacy-policy.html" element={<Navigate to="/privacy-policy" replace />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/terms-of-service.html" element={<Navigate to="/terms-of-service" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
