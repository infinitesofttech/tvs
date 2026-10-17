import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './src/layouts/MainLayout.jsx';
import HomePage from './src/pages/HomePage.jsx';
import AboutPage from './src/pages/AboutPage.jsx';
import ServicesPage from './src/pages/ServicesPage.jsx';
import ServiceDetailsPage from './src/pages/ServiceDetailsPage.jsx';
import ContactPage from './src/pages/ContactPage.jsx';
import AppointmentPage from './src/pages/AppointmentPage.jsx';
import LoginPage from './src/pages/LoginPage.jsx';
import RegisterPage from './src/pages/RegisterPage.jsx';
import TeamPage from './src/pages/TeamPage.jsx';
import TestimonialsPage from './src/pages/TestimonialsPage.jsx';
import PricingPage from './src/pages/PricingPage.jsx';
import PrivacyPolicyPage from './src/pages/PrivacyPolicyPage.jsx';
import TermsOfServicePage from './src/pages/TermsOfServicePage.jsx';

const pages = [
  { path: '/', component: HomePage },
  { path: '/about-us', component: AboutPage },
  { path: '/services', component: ServicesPage },
  { path: '/service-details', component: ServiceDetailsPage },
  { path: '/contact-us', component: ContactPage },
  { path: '/book-an-appointment', component: AppointmentPage },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  { path: '/team', component: TeamPage },
  { path: '/testimonials', component: TestimonialsPage },
  { path: '/pricing-plan', component: PricingPage },
  { path: '/privacy-policy', component: PrivacyPolicyPage },
  { path: '/terms-of-service', component: TermsOfServicePage },
];

for (const { path, component: Comp } of pages) {
  try {
    const html = renderToString(
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path={path} element={<Comp />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
    console.log(`PASS: ${path} (length ${html.length})`);
  } catch (err) {
    console.error(`FAIL: ${path}`);
    console.error(err);
  }
}
