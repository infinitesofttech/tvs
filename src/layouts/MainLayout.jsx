import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';

export default function MainLayout() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Initial site load preloader only (one-time, 250ms)
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 250);
    return () => clearTimeout(t);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Back to top button
  useEffect(() => {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;
    const onScroll = () => {
      btn.style.opacity = window.scrollY > 200 ? '1' : '0';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <button
        type="button"
        id="back-to-top"
        className="position-fixed text-center border-0 p-0"
        style={{ opacity: 0, transition: 'opacity 0.3s' }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <i className="ri-arrow-up-s-line" />
      </button>
    </>
  );
}
