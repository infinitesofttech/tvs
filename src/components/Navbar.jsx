import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY >= 150);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setPagesOpen(false);
    setServicesOpen(false);
  }, [navigate]);

  const closeAll = () => {
    setMobileOpen(false);
    setPagesOpen(false);
    setServicesOpen(false);
    setSearchOpen(false);
  };

  return (
    <>
      {/* Search Popup */}
      <div className={`search-popup${searchOpen ? ' active' : ''}`}>
        <div className="search-popup-overlay search-toggler" onClick={() => setSearchOpen(false)} />
        <div className="search-popup-content">
          <form className="search-popup-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" className="form-control" placeholder="Search here" autoFocus />
            <button type="submit"><i className="ri-search-line" /></button>
          </form>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`sidebar-menu-area offcanvas offcanvas-end${mobileOpen ? ' show' : ''}`} tabIndex="-1">
        <div className="offcanvas-header">
          <Link to="/" onClick={closeAll}>
            <img src="/assets/images/logo2.png" alt="logo" />
          </Link>
          <button type="button" className="close-btn" onClick={() => setMobileOpen(false)}>
            <i className="ri-close-line" />
          </button>
        </div>
        <div className="offcanvas-body">
          <div className="accordion" id="sidebarAccordion">
            <div className="accordion-item">
              <Link className="accordion-button without-icon" to="/" onClick={closeAll}>Home</Link>
            </div>
            <div className="accordion-item">
              <button
                className={`accordion-button${pagesOpen ? '' : ' collapsed'}`}
                type="button"
                onClick={() => setPagesOpen(!pagesOpen)}
              >
                Pages
              </button>
              {pagesOpen && (
                <div className="accordion-collapse">
                  <div className="accordion-body">
                    <div className="accordion">
                      {[
                        { to: '/about-us', label: 'About Us' },
                        { to: '/pricing-plan', label: 'Pricing Plan' },
                        { to: '/team', label: 'Team' },
                        { to: '/testimonials', label: 'Testimonials' },
                        { to: '/book-an-appointment', label: 'Book An Appointment' },
                        { to: '/login', label: 'Login' },
                        { to: '/register', label: 'Register' },
                        { to: '/privacy-policy', label: 'Privacy Policy' },
                        { to: '/terms-of-service', label: 'Terms Of Service' },
                      ].map(({ to, label }) => (
                        <div key={to} className="accordion-item">
                          <Link to={to} className="accordion-link" onClick={closeAll}>{label}</Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="accordion-item">
              <button
                className={`accordion-button${servicesOpen ? '' : ' collapsed'}`}
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
              </button>
              {servicesOpen && (
                <div className="accordion-collapse">
                  <div className="accordion-body">
                    <div className="accordion">
                      <div className="accordion-item">
                        <Link to="/services" className="accordion-link" onClick={closeAll}>Services</Link>
                      </div>
                      <div className="accordion-item">
                        <Link to="/service-details" className="accordion-link" onClick={closeAll}>Service Details</Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="accordion-item">
              <Link className="accordion-button without-icon" to="/contact-us" onClick={closeAll}>Contact Us</Link>
            </div>
          </div>
          <div className="others-option">
            <div className="option-item">
              <div className="info">
                <span>Call Us Now</span>
                <a href="tel:552588494">+55 258 8494</a>
              </div>
            </div>
            <div className="option-item">
              <Link to="/book-an-appointment" className="default-btn" onClick={closeAll}>Hire Talent</Link>
            </div>
          </div>
        </div>
      </div>
      {mobileOpen && <div className="offcanvas-backdrop fade show" onClick={() => setMobileOpen(false)} />}

      {/* Main Navbar */}
      <nav
        className={`navbar navbar-expand-xl ${isHome ? 'navbar-style-two navbar-style-three navbar-style-four' : 'navbar-style-three'}${sticky ? ' sticky' : ''}`}
        id="navbar"
        style={isHome ? undefined : { backgroundColor: '#010101' }}
      >
        <div className="container-fluid">
          {(() => {
            const innerElements = (
              <>
                <Link className="navbar-brand" to="/">
                  <img src="/assets/images/logo.png" alt="logo" />
                </Link>
                <button className="navbar-toggler" onClick={() => setMobileOpen(true)}>
                  <span className="burger-menu">
                    <span className="top-bar" />
                    <span className="middle-bar" />
                    <span className="bottom-bar" />
                  </span>
                </button>
                <div className="collapse navbar-collapse">
                  <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                      <NavLink to="/" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} end>Home</NavLink>
                    </li>
                    <li className="nav-item" style={{ position: 'relative' }}>
                      <a href="#" className="dropdown-toggle nav-link" onClick={(e) => e.preventDefault()}>
                        Pages <i className="ri-arrow-down-s-line" />
                      </a>
                      <ul className="dropdown-menu">
                        {[
                          { to: '/about-us', label: 'About Us' },
                          { to: '/pricing-plan', label: 'Pricing Plan' },
                          { to: '/team', label: 'Team' },
                          { to: '/testimonials', label: 'Testimonials' },
                          { to: '/book-an-appointment', label: 'Book An Appointment' },
                          { to: '/login', label: 'Login' },
                          { to: '/register', label: 'Register' },
                          { to: '/privacy-policy', label: 'Privacy Policy' },
                          { to: '/terms-of-service', label: 'Terms Of Service' },
                        ].map(({ to, label }) => (
                          <li key={to} className="nav-item">
                            <NavLink to={to} className="nav-link">{label}</NavLink>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="nav-item" style={{ position: 'relative' }}>
                      <a href="#" className="dropdown-toggle nav-link" onClick={(e) => e.preventDefault()}>
                        Services <i className="ri-arrow-down-s-line" />
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item"><NavLink to="/services" className="nav-link">Services</NavLink></li>
                        <li className="nav-item"><NavLink to="/service-details" className="nav-link">Service Details</NavLink></li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/contact-us" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Contact Us</NavLink>
                    </li>
                  </ul>
                  <div className="others-option d-flex align-items-center">
                    <div className="option-item">
                      <div className="info">
                        <span>Call Us Now</span>
                        <a href="tel:552588494">+55 258 8494</a>
                      </div>
                    </div>
                    <div className="option-item">
                      <div className="search-toggler" onClick={() => setSearchOpen(!searchOpen)}>
                        <i className="ri-search-line" />
                      </div>
                    </div>
                    <div className="option-item">
                      {isHome ? (
                        <Link to="/contact-us" className="default-btn">Talk To Us</Link>
                      ) : (
                        <Link to="/book-an-appointment" className="default-btn">Hire Talent</Link>
                      )}
                    </div>
                  </div>
                </div>
              </>
            );

            return isHome ? (
              <div className="wrap-inner">
                {innerElements}
              </div>
            ) : (
              innerElements
            );
          })()}
        </div>
      </nav>
    </>
  );
}
