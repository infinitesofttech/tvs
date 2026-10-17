import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer-area pt-120">
      <div className="container">
        <div className="footer-top-info section-title-animation animation-style1">
          <h1 className="title-animation">Let's Talk With Us</h1>
          <a href="mailto:info@talentvistasolution.com" className="link-btn">
            <span>info@talentvistasolution.com</span>
          </a>
          <ul className="list">
            <li>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <i className="ri-facebook-fill" /><span>Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://x.com/" target="_blank" rel="noreferrer">
                <i className="ri-twitter-x-line" /><span>X</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                <i className="ri-linkedin-fill" /><span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                <i className="ri-instagram-line" /><span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="row justify-content-center g-4">
          <div className="col-lg-4 col-md-12">
            <div className="single-footer-widget border-wrap">
              <p>Your trusted partner in finding and nurturing top talent — creating lasting success for businesses and careers.</p>
              <div className="subscribe-inner">
                <h4>Subscribe Newsletter</h4>
                <form onSubmit={(e) => e.preventDefault()}>
                  <input type="email" className="form-control" placeholder="Enter email address" />
                  <button type="submit"><i className="ri-send-plane-fill" /></button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="row justify-content-center g-4">
              <div className="col-lg-4 col-sm-4">
                <div className="single-footer-widget ps-5">
                  <h3>Quick Links</h3>
                  <ul className="list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-sm-4">
                <div className="single-footer-widget ps-5">
                  <h3>Industries</h3>
                  <ul className="list">
                    <li><Link to="/service-details">Technology</Link></li>
                    <li><Link to="/service-details">Healthcare</Link></li>
                    <li><Link to="/service-details">Finance</Link></li>
                    <li><Link to="/service-details">Manufacturing</Link></li>
                    <li><Link to="/service-details">Retail</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-sm-4">
                <div className="single-footer-widget ps-3">
                  <h3>Contact Info</h3>
                  <ul className="info">
                    <li><b>Call:</b> <span><a href="tel:552588494">+55 258 8494</a></span></li>
                    <li><b>Email:</b> <span><a href="mailto:info@talentvistasolutions.com">info@talentvistasolutions.com</a></span></li>
                    <li><b>Address:</b> <span>258 Business District San Francisco, CA 94105</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-6 col-md-12">
              <p>© <span>TalentVista</span>. All rights reserved.</p>
            </div>
            <div className="col-lg-6 col-md-12">
              <ul className="info-links">
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service">Terms Of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-large-logo-wrap">
          <img src="/assets/images/large-logo.png" alt="large-logo" />
        </div>
      </div>
    </footer>
  );
}
