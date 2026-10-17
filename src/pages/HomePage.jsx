import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);

    // ScrollCue animation
    if (window.scrollCue?.init) {
      window.scrollCue.init();
    }

    // Counter animation
    try {
      if ('IntersectionObserver' in window) {
        const counterObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const counter = entry.target;
              const target = parseInt(counter.innerText, 10);
              if (isNaN(target)) return;
              const step = Math.max(1, target / 100);
              let current = 0;
              const timer = setInterval(() => {
                current += step;
                counter.innerText = Math.floor(current);
                if (parseInt(counter.innerText, 10) >= target) {
                  counter.innerText = target;
                  clearInterval(timer);
                }
              }, 15);
              counterObserver.unobserve(counter);
            }
          });
        });
        document.querySelectorAll('.counter').forEach((c) => counterObserver.observe(c));
      }
    } catch (e) {}

    // Swiper sliders
    if (window.Swiper) {
      new window.Swiper('.testimonial-slider', {
        loop: true,
        spaceBetween: 25,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        breakpoints: {
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        },
      });

      new window.Swiper('.outsourcing-partner-slider', {
        loop: true,
        spaceBetween: 25,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        breakpoints: {
          0: { slidesPerView: 2 },
          576: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          992: { slidesPerView: 5 },
          1200: { slidesPerView: 6 },
        },
      });

      new window.Swiper('.approach-slider', {
        loop: true,
        spaceBetween: 25,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        breakpoints: {
          0: { slidesPerView: 1 },
          576: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        },
      });
    }
  }, []);

  return (
    <>
      
    <div className="outsourcing-banner-area bgImageParallax" id="home">
        <div className="container-fluid">
            <div className="outsourcing-banner-content section-title-animation animation-style1">
                <div className="row justify-content-center align-items-center g-4" data-cues="slideInUp"
                    data-duration="1000">
                    <div className="col-lg-9 col-md-12">
                        <span className="sub">Talent & Recruitment Solutions</span>
                        <h2 className="title-animation">Connecting Talent With Opportunity</h2>
                        <p style={{color: 'white', fontSize: '18px', marginBottom: '30px'}}>TalentVista Solutions provides recruitment, staffing and career support for professionals and businesses across the United States and United Kingdom.</p>
                        <a href="#contact" className="default-btn">Talk To Our Team</a>
                        <a href="#services" className="default-btn" style={{backgroundColor: 'white', color: 'var(--main-color)', marginLeft: '15px'}}>Our Services</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    
    <div className="outsourcing-about-area ptb-120">
        <div className="container">
            <div className="row justify-content-center align-items-center g-4" data-cues="slideInUp" data-duration="1000">
                <div className="col-xl-5 col-md-12">
                    <div className="outsourcing-about-content section-title-animation animation-style2">
                        <span className="sub">About TalentVista</span>
                        <h2 className="title-animation">Redefining HR For The Modern Workplace</h2>
                        <p>TalentVista was born from a vision to transform complex HR processes into streamlined, people-centric solutions that empower businesses to thrive.</p>
                        <div className="image">
                            <img src="/assets/images/about/about7.jpg" alt="image" />
                        </div>
                    </div>
                </div>
                <div className="col-xl-7 col-md-12">
                    <div className="outsourcing-about-inner-content">
                        <div className="row justify-content-center g-4">
                            <div className="col-lg-6 col-md-6">
                                <div className="left">
                                    <h3>Our Mission</h3>
                                    <p>To simplify HR through innovation and expertise, empowering businesses to focus on growth while we help their people thrive.</p>
                                    <img src="/assets/images/about/about8.jpg" alt="image" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="right">
                                    <img src="/assets/images/about/about9.jpg" alt="image" />
                                    <h3>Our Vision</h3>
                                    <p>A world where every business can access strategic HR solutions that inspire growth and employee fulfillment.</p>
                                </div>
                            </div>
                        </div>
                        <div className="circle-wrap">
                            <Link  to="/about-us">
                                <img src="/assets/images/about/circle.png" alt="image" />
                                <div className="icon">
                                    <img src="/assets/images/about/icon.png" alt="image" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    
    <div className="outsourcing-values-area pb-120">
        <div className="container">
            <div className="section-title text-center section-title-animation animation-style2">
                <h2 className="title-animation">Our Core Values</h2>
            </div>
            <div className="row justify-content-center g-4" data-cues="slideInUp" data-duration="1000">
                <div className="col-lg-3 col-sm-6">
                    <div className="outsourcing-values-card">
                        <div className="icon">
                            <i className="flaticon-idea-1"></i>
                        </div>
                        <h3>Innovation</h3>
                        <p>We innovate constantly to lead in HR and tech advancements.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="outsourcing-values-card">
                        <div className="icon">
                            <i className="flaticon-compassion"></i>
                        </div>
                        <h3>Empathy</h3>
                        <p>We understand that HR is about people, not just processes.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="outsourcing-values-card">
                        <div className="icon">
                            <i className="flaticon-trust"></i>
                        </div>
                        <h3>Integrity</h3>
                        <p>We lead with transparency and a strong ethical foundation.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="outsourcing-values-card">
                        <div className="icon">
                            <i className="flaticon-partnership"></i>
                        </div>
                        <h3>Partnership</h3>
                        <p>We view our clients as partners and their success as our own.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    
    <div className="outsourcing-services-area ptb-120">
        <div className="container">
            <div className="section-title section-title-animation animation-style2">
                <div className="row justify-content-center g-4" data-cues="slideInUp" data-duration="1000">
                    <div className="col-lg-3 col-md-12">
                        <span className="sub">Comprehensive HR Solutions</span>
                    </div>
                    <div className="col-lg-9 col-md-12">
                        <h2 className="title-animation">End-to-end HR Outsourcing Services Designed To Streamline Your Processes, Reduce Costs, And Empower Your Workforce.</h2>
                    </div>
                </div>
            </div>
            <div className="outsourcing-services-items" data-cues="slideInUp" data-duration="1000">
                <div className="item">
                    <div className="row justify-content-center g-4">
                        <div className="col-lg-6 col-md-12">
                            <div className="services-content">
                                <div className="number">01</div>
                                <h3>
                                    <Link  to="/service-details">Payroll Processing</Link>
                                </h3>
                                <p>Accurate, timely payroll processing with tax compliance and reporting for all employee types.</p>
                                <ul className="list">
                                    <li>
                                        <i className="ri-check-line"></i>
                                        <span>Multi-state tax compliance</span>
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i>
                                        <span>Direct deposit & pay cards</span>
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i>
                                        <span>Year-end reporting (W-2, 1099)</span>
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i>
                                        <span>Garnishment management</span>
                                    </li>
                                </ul>
                                <div className="service-btn">
                                    <Link  to="/service-details" className="default-btn">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="services-image h-100">
                                <Link  to="/service-details">
                                    <img src="/assets/images/service/service8.jpg" className="object-fit-cover h-100" alt="image" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="row justify-content-center g-4">
                        <div className="col-lg-6 col-md-12">
                            <div className="services-content">
                                <div className="number">02</div>
                                <h3>
                                    <Link  to="/service-details">Benefits Administration</Link>
                                </h3>
                                <p>Comprehensive benefits management including health insurance, retirement plans, and voluntary benefits.</p>
                                <ul className="list">
                                    <li>
                                        <i className="ri-check-line"></i>
                                        <span>Health, dental & vision plans</span>
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i>
                                        <span>401(k) and retirement planning</span>
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i>
                                        <span>Open enrollment support</span>
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i>
                                        <span>COBRA administration</span>
                                    </li>
                                </ul>
                                <div className="service-btn">
                                    <Link  to="/service-details" className="default-btn">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="services-image h-100">
                                <Link  to="/service-details">
                                    <img src="/assets/images/service/service9.jpg" className="object-fit-cover h-100" alt="image" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="row justify-content-center g-4">
                        <div className="col-lg-6 col-md-12">
                            <div className="services-content">
                                <div className="number">03</div>
                                <h3>
                                    <Link  to="/service-details">Talent Acquisition</Link>
                                </h3>
                                <p>End-to-end recruitment solutions from sourcing and screening to onboarding and orientation.</p>
                                <ul className="list">
                                    <li>
                                        <i className="ri-check-line"></i>
                                        <span>Job description development</span>
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i>
                                        <span>Candidate screening & interviewing</span>
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i>
                                        <span>Background checks & verifications</span>
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i>
                                        <span>Onboarding & orientation</span>
                                    </li>
                                </ul>
                                <div className="service-btn">
                                    <Link  to="/service-details" className="default-btn">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="services-image h-100">
                                <Link  to="/service-details">
                                    <img src="/assets/images/service/service10.jpg" className="object-fit-cover h-100" alt="image" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="row justify-content-center g-4">
                        <div className="col-lg-6 col-md-12">
                            <div className="services-content">
                                <div className="number">04</div>
                                <h3>
                                    <Link  to="/service-details">Compliance Management</Link>
                                </h3>
                                <p>Stay compliant with ever-changing employment laws and regulations across all jurisdictions.</p>
                                <ul className="list">
                                    <li>
                                        <i className="ri-check-line"></i>
                                        <span>HR policy development</span>
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i>
                                        <span>Compliance audits & reporting</span>
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i>
                                        <span>EEOC, ADA, FMLA compliance</span>
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i>
                                        <span>Workplace safety (OSHA)</span>
                                    </li>
                                </ul>
                                <div className="service-btn">
                                    <Link  to="/service-details" className="default-btn">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="services-image h-100">
                                <Link  to="/service-details">
                                    <img src="/assets/images/service/service11.jpg" className="object-fit-cover h-100" alt="image" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="row justify-content-center g-4">
                        <div className="col-lg-6 col-md-12">
                            <div className="services-content">
                                <div className="number">05</div>
                                <h3>
                                    <Link  to="/service-details">Performance Management</Link>
                                </h3>
                                <p>Comprehensive performance management systems to drive employee engagement and development.</p>
                                <ul className="list">
                                    <li>
                                        <i className="ri-check-line"></i>
                                        <span>Goal setting & tracking</span>
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i>
                                        <span>360-degree feedback</span>
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i>
                                        <span>Performance reviews</span>
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i>
                                        <span>Development planning</span>
                                    </li>
                                </ul>
                                <div className="service-btn">
                                    <Link  to="/service-details" className="default-btn">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="services-image h-100">
                                <Link  to="/service-details">
                                    <img src="/assets/images/service/service12.jpg" className="object-fit-cover h-100" alt="image" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    
    <div className="outsourcing-choose-area ptb-120 ">
        <div className="container">
            <div className="row justify-content-center align-items-center g-4" data-cues="slideInUp" data-duration="1000">
                <div className="col-xl-5 col-md-12">
                    <div className="outsourcing-choose-content section-title-animation animation-style3">
                        <span className="sub">Why Choose TalentVista?</span>
                        <h2 className="title-animation">A service-led model, not a headcount business
                        </h2>
                        <img src="/assets/images/choose3.jpg" alt="image" />
                    </div>
                </div>
                <div className="col-xl-7 col-md-12">
                    <div className="outsourcing-faq-accordion">
                        <div className="content">
                            <p>We start founder-led, keep fixed costs low, and only add people once placements or retainers justify it.</p>
                        </div>
                        <div className="accordion" id="faqAccordion">
                            <div className="accordion-item">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse_1" aria-expanded="true" aria-controls="collapse_1">
                                    Build a verified list of staffing firms and hiring partners
                                </button>
                                <div id="collapse_1" className="accordion-collapse collapse show"
                                    data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p>Unlike other providers who offer generic support, each TalentVista client gets a
                                            dedicated HR consultant who truly understands your business and becomes an
                                            extension of your team.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse_2" aria-expanded="false" aria-controls="collapse_2">
                                    Confirm the requirement and terms before sourcing begins
                                </button>
                                <div id="collapse_2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p>Unlike other providers who offer generic support, each TalentVista client gets a
                                            dedicated HR consultant who truly understands your business and becomes an
                                            extension of your team.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse_3" aria-expanded="false" aria-controls="collapse_3">
                                    Source and screen against the exact role, not a generic pool
                                </button>
                                <div id="collapse_3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p>Unlike other providers who offer generic support, each TalentVista client gets a
                                            dedicated HR consultant who truly understands your business and becomes an
                                            extension of your team.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse_4" aria-expanded="false" aria-controls="collapse_4">
                                    Submit with a standardized candidate summary
                                </button>
                                <div id="collapse_4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p>Unlike other providers who offer generic support, each TalentVista client gets a
                                            dedicated HR consultant who truly understands your business and becomes an
                                            extension of your team.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse_5" aria-expanded="false" aria-controls="collapse_5">
                                    Track interviews and feedback until the role is closed
                                </button>
                                <div id="collapse_5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p>Unlike other providers who offer generic support, each TalentVista client gets a
                                            dedicated HR consultant who truly understands your business and becomes an
                                            extension of your team.</p>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    
    <div className="outsourcing-fun-area pb-120 ">
        <div className="container">
            <div className="row justify-content-center g-4">
                <div className="col-lg-3 col-sm-6">
                    <div className="outsourcing-fun-card">
                        <div className="d-flex align-items-center justify-content-center">
                            <h3 className="counter">40</h3>
                            <h3 className="plus">%</h3>
                        </div>
                        <span>Average Cost Reduction</span>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="outsourcing-fun-card">
                        <div className="d-flex align-items-center justify-content-center">
                            <h3 className="counter">99</h3>
                            <h3 className="plus">%</h3>
                        </div>
                        <span>Client Retention Rate</span>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="outsourcing-fun-card">
                        <div className="d-flex align-items-center justify-content-center">
                            <h3 className="counter">48</h3>
                            <h3 className="plus">+</h3>
                        </div>
                        <span>Average Implementation Time</span>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="outsourcing-fun-card">
                        <div className="d-flex align-items-center justify-content-center">
                            <h3 className="counter">25</h3>
                            <h3 className="plus">%</h3>
                        </div>
                        <span>Higher Employee Satisfaction</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    
    <div className="methodology-area pb-120">
        <div className="container-fluid">
            <div className="row justify-content-center g-4" data-cues="slideInUp" data-duration="1000">
                <div className="col-lg-5 col-md-12">
                    <div className="methodology-image">
                        <img src="/assets/images/methodology.jpg" alt="image" />
                    </div>
                </div>
                <div className="col-lg-7 col-md-12">
                    <div className="methodology-content">
                        <div className="content section-title-animation animation-style1">
                            <span className="sub">Our Methodology</span>
                            <h2 className="title-animation">A Smart, Focused Way To Find Your Perfect Talent—no Spam, Just Results</h2>
                        </div>
                        <div className="items">
                            <div className="item">
                                <h2>01</h2>
                                <h3>Discover & Diagnose</h3>
                                <p>We conduct a deep-dive consultation to understand your role, team, and company vision.</p>
                                <ul className="list">
                                    <li>
                                        <i className="ri-circle-fill"></i>
                                        <span>Comprehensive needs analysis</span>
                                    </li>
                                    <li>
                                        <i className="ri-circle-fill"></i>
                                        <span>Cultural assessment</span>
                                    </li>
                                    <li>
                                        <i className="ri-circle-fill"></i>
                                        <span>Success metrics definition</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="item">
                                <h2>02</h2>
                                <h3>Talent Sourcing & Vetting</h3>
                                <p>We tap into our network and use advanced sourcing to find candidates, followed by rigorous screening.</p>
                                <ul className="list">
                                    <li>
                                        <i className="ri-circle-fill"></i>
                                        <span>Multi-channel candidate sourcing</span>
                                    </li>
                                    <li>
                                        <i className="ri-circle-fill"></i>
                                        <span>Technical skills assessment</span>
                                    </li>
                                    <li>
                                        <i className="ri-circle-fill"></i>
                                        <span>Behavioral interview screening</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="item">
                                <h2>03</h2>
                                <h3>Curated Introduction</h3>
                                <p>You receive detailed profiles of 3-5 exceptional candidates, complete with our insights and recommendations.</p>
                                <ul className="list">
                                    <li>
                                        <i className="ri-circle-fill"></i>
                                        <span>Detailed candidate profiles</span>
                                    </li>
                                    <li>
                                        <i className="ri-circle-fill"></i>
                                        <span>Cultural fit analysis</span>
                                    </li>
                                    <li>
                                        <i className="ri-circle-fill"></i>
                                        <span>Customized recommendations</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="item">
                                <h2>04</h2>
                                <h3>Interview & Selection</h3>
                                <p>We manage scheduling, feedback loops, and facilitate communication between all parties.</p>
                                <ul className="list">
                                    <li>
                                        <i className="ri-circle-fill"></i>
                                        <span>Interview coordination</span>
                                    </li>
                                    <li>
                                        <i className="ri-circle-fill"></i>
                                        <span>Structured feedback collection</span>
                                    </li>
                                    <li>
                                        <i className="ri-circle-fill"></i>
                                        <span>Candidate experience management</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="item">
                                <h2>05</h2>
                                <h3>Offer & Onboarding</h3>
                                <p>We assist with offer negotiation, background checks, and ensure a smooth transition for your new hire.</p>
                                <ul className="list">
                                    <li>
                                        <i className="ri-circle-fill"></i>
                                        <span>Offer negotiation support</span>
                                    </li>
                                    <li>
                                        <i className="ri-circle-fill"></i>
                                        <span>Background verification</span>
                                    </li>
                                    <li>
                                        <i className="ri-circle-fill"></i>
                                        <span>Onboarding integration</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    
    
    

    
    
    

    

    
    <div className="outsourcing-work-area ptb-120">
        <div className="container">
            <div className="section-title text-center section-title-animation animation-style2">
                <span className="sub wrap2">How TalentVista Works</span>
                <h2 className="title-animation">Recruitment Support Across Key Markets</h2>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row justify-content-center g-0" data-cues="slideInUp">
                <div className="col-xl-3 col-md-6">
                    <div className="outsourcing-work-card">
                        <div className="inner">
                            <h1>01</h1>
                            <div className="icon">
                                <i className="flaticon-need-assessment"></i>
                            </div>
                            <h3>US Market</h3>
                            <p>Staffing and recruitment support.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="outsourcing-work-card wrap2">
                        <div className="inner">
                            <h1>02</h1>
                            <div className="icon">
                                <i className="flaticon-contract"></i>
                            </div>
                            <h3>UK Market</h3>
                            <p>Recruitment and career support.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="outsourcing-work-card wrap3">
                        <div className="inner">
                            <h1>03</h1>
                            <div className="icon">
                                <i className="flaticon-team-1"></i>
                            </div>
                            <h3>IT & Non-IT</h3>
                            <p>Support across selected professional roles.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="outsourcing-work-card wrap4">
                        <div className="inner">
                            <h1>04</h1>
                            <div className="icon">
                                <i className="flaticon-relationships"></i>
                            </div>
                            <h3>Candidate Support</h3>
                            <p>Profile, marketing and interview preparation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    
    <div className="outsourcing-case-studies-area ptb-120 ">
        <div className="container">
            <div className="section-title text-start section-title-animation animation-style2">
                <div className="row justify-content-center align-items-center g-4">
                    <div className="col-lg-9 col-md-12">
                        <span className="sub wrap2">Case Studies</span>
                        <h2 className="title-animation">What clients can expect</h2>
                    </div>
                    <div className="col-lg-3 col-md-12">
                        <div className="section-btn">
                            <Link  to="/" className="default-btn">View Case Studies</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="outsourcing-case-studies-items" data-cues="slideInUp">
                <div className="item">
                    <div className="row justify-content-center align-items-center g-4">
                        <div className="col-lg-10 col-md-12">
                            <div className="left">
                                <div className="image h-100">
                                    <Link  to="/">
                                        <img src="/assets/images/case-studies/case-studies1.jpg"
                                            className="object-fit-cover h-100" alt="image" />
                                    </Link>
                                </div>
                                <div className="content">
                                    <h3>
                                        <Link  to="/">Focused</Link>
                                    </h3>
                                    <ul className="list">
                                        <li><span>Industry:</span> Technology (SaaS) "¢ 250 Employees</li>
                                        <li><span>Challenge:</span> The company was rapidly expanding but lacked the HR
                                            capacity to handle recruitment, payroll, and employee onboarding
                                            efficiently.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-12">
                            <Link  to="/" className="arrow-btn">
                                <i className="ri-arrow-right-long-line"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="row justify-content-center align-items-center g-4">
                        <div className="col-lg-10 col-md-12">
                            <div className="left">
                                <div className="content wrap2">
                                    <h3>
                                        <Link  to="/">Structured</Link>
                                    </h3>
                                    <ul className="list">
                                        <li><span>Industry:</span> Manufacturing "¢ 400 Employees</li>
                                        <li><span>Challenge:</span> Outdated manual HR processes led to delays in
                                            payroll, performance reviews, and employee engagement.</li>
                                    </ul>
                                </div>
                                <div className="image h-100">
                                    <Link  to="/">
                                        <img src="/assets/images/case-studies/case-studies2.jpg"
                                            className="object-fit-cover h-100" alt="image" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-12">
                            <Link  to="/" className="arrow-btn">
                                <i className="ri-arrow-right-long-line"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="row justify-content-center align-items-center g-4">
                        <div className="col-lg-10 col-md-12">
                            <div className="left">
                                <div className="image h-100">
                                    <Link  to="/">
                                        <img src="/assets/images/case-studies/case-studies3.jpg"
                                            className="object-fit-cover h-100" alt="image" />
                                    </Link>
                                </div>
                                <div className="content">
                                    <h3>
                                        <Link  to="/">Responsive</Link>
                                    </h3>
                                    <ul className="list">
                                        <li><span>Industry:</span> Retail "¢ 650 Employees</li>
                                        <li><span>Challenge:</span> A retail company expanding into new international
                                            markets needed to establish HR operations quickly and compliantly.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-12">
                            <Link  to="/" className="arrow-btn">
                                <i className="ri-arrow-right-long-line"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="row justify-content-center align-items-center g-4">
                        <div className="col-lg-10 col-md-12">
                            <div className="left">
                                <div className="content wrap2">
                                    <h3>
                                        <Link  to="/">Flexible</Link>
                                    </h3>
                                    <ul className="list">
                                        <li><span>Industry:</span> Healthcare "¢ 900 Employees</li>
                                        <li><span>Challenge:</span> High employee turnover and low engagement rates were
                                            affecting service quality and operational stability.</li>
                                    </ul>
                                </div>
                                <div className="image h-100">
                                    <Link  to="/">
                                        <img src="/assets/images/case-studies/case-studies4.jpg"
                                            className="object-fit-cover h-100" alt="image" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-12">
                            <Link  to="/" className="arrow-btn">
                                <i className="ri-arrow-right-long-line"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="outsourcing-case-studies-shape">
            <img src="/assets/images/case-studies/frame.png" alt="image" />
        </div>
    </div>
    

   

    
        <div className="testimonial-area ptb-120 ">
            <div className="container">
                <div className="section-title text-center section-title-animation animation-style1">
                    <span className="sub wrap2">Testimonial</span>
                    <h2 className="title-animation">See What Our Partners Say</h2>
                </div>
                <div className="swiper testimonial-slider">
                    <div className="swiper-wrapper" data-cues="slideInUp" data-duration="1000">
                        <div className="swiper-slide">
                            <div className="testimonial-card">
                                <div className="inner">
                                    <div className="top">
                                        <span>Technology</span>
                                        <ul className="list">
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                        </ul>
                                    </div>
                                    <p>"TalentVista didn't just fill a role; they found us a leader who has transformed our team's dynamic. Their thoughtful approach to cultural matching made all the difference."</p>
                                </div>
                                <div className="info">
                                    <div className="image">
                                        <img src="/assets/images/user1.png" className="rounded-circle" alt="image" />
                                    </div>
                                    <div className="title">
                                        <h3>Richard Newcomb</h3>
                                        <span>CEO</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="testimonial-card">
                                <div className="inner">
                                    <div className="top">
                                        <span>Finance</span>
                                        <ul className="list">
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                        </ul>
                                    </div>
                                    <p>"The compliance professionals TalentVista placed helped us navigate complex regulatory changes seamlessly. Their expertise in financial services recruitment is unmatched."</p>
                                </div>
                                <div className="info">
                                    <div className="image">
                                        <img src="/assets/images/user2.png" className="rounded-circle" alt="image" />
                                    </div>
                                    <div className="title">
                                        <h3>Andrea Roberts</h3>
                                        <span>Chief Risk Officer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="testimonial-card">
                                <div className="inner">
                                    <div className="top">
                                        <span>Candidate</span>
                                        <ul className="list">
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                        </ul>
                                    </div>
                                    <p>"As a candidate, TalentVista found me a role where I could truly thrive. They understood my career aspirations and matched me with a company that aligned with my values."</p>
                                </div>
                                <div className="info">
                                    <div className="image">
                                        <img src="/assets/images/user3.png" className="rounded-circle" alt="image" />
                                    </div>
                                    <div className="title">
                                        <h3>Fredrick Hensley</h3>
                                        <span>Talent Acquisition Lead</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="testimonial-card">
                                <div className="inner">
                                    <div className="top">
                                        <span>Technology</span>
                                        <ul className="list">
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                        </ul>
                                    </div>
                                    <p>"TalentVista didn't just fill a role; they found us a leader who has transformed our team's dynamic. Their thoughtful approach to cultural matching made all the difference."</p>
                                </div>
                                <div className="info">
                                    <div className="image">
                                        <img src="/assets/images/user1.png" className="rounded-circle" alt="image" />
                                    </div>
                                    <div className="title">
                                        <h3>Richard Newcomb</h3>
                                        <span>CEO</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="testimonial-card">
                                <div className="inner">
                                    <div className="top">
                                        <span>Finance</span>
                                        <ul className="list">
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                        </ul>
                                    </div>
                                    <p>"The compliance professionals TalentVista placed helped us navigate complex regulatory changes seamlessly. Their expertise in financial services recruitment is unmatched."</p>
                                </div>
                                <div className="info">
                                    <div className="image">
                                        <img src="/assets/images/user2.png" className="rounded-circle" alt="image" />
                                    </div>
                                    <div className="title">
                                        <h3>Andrea Roberts</h3>
                                        <span>Chief Risk Officer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="testimonial-card">
                                <div className="inner">
                                    <div className="top">
                                        <span>Candidate</span>
                                        <ul className="list">
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                        </ul>
                                    </div>
                                    <p>"As a candidate, TalentVista found me a role where I could truly thrive. They understood my career aspirations and matched me with a company that aligned with my values."</p>
                                </div>
                                <div className="info">
                                    <div className="image">
                                        <img src="/assets/images/user3.png" className="rounded-circle" alt="image" />
                                    </div>
                                    <div className="title">
                                        <h3>Fredrick Hensley</h3>
                                        <span>Talent Acquisition Lead</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        


         

    
    <div className="outsourcing-partner-area pb-120 ">
        <div className="container">
            <div className="section-title text-center section-title-animation animation-style2">
                <h2 className="title-animation">Our Valuable Clients</h2>
            </div>
            <div className="swiper outsourcing-partner-slider">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="outsourcing-partner-item">
                            <img src="/assets/images/partner/partner1.png" alt="image" />
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="outsourcing-partner-item">
                            <img src="/assets/images/partner/partner2.png" alt="image" />
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="outsourcing-partner-item">
                            <img src="/assets/images/partner/partner3.png" alt="image" />
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="outsourcing-partner-item">
                            <img src="/assets/images/partner/partner4.png" alt="image" />
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="outsourcing-partner-item">
                            <img src="/assets/images/partner/partner5.png" alt="image" />
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="outsourcing-partner-item">
                            <img src="/assets/images/partner/partner6.png" alt="image" />
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="outsourcing-partner-item">
                            <img src="/assets/images/partner/partner1.png" alt="image" />
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="outsourcing-partner-item">
                            <img src="/assets/images/partner/partner2.png" alt="image" />
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="outsourcing-partner-item">
                            <img src="/assets/images/partner/partner3.png" alt="image" />
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="outsourcing-partner-item">
                            <img src="/assets/images/partner/partner4.png" alt="image" />
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="outsourcing-partner-item">
                            <img src="/assets/images/partner/partner5.png" alt="image" />
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="outsourcing-partner-item">
                            <img src="/assets/images/partner/partner6.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    

    
    <div className="outsourcing-solutions-area ptb-120 ">
        <div className="container">
            <div className="row justify-content-center align-items-center g-4" data-cues="slideInUp">
                <div className="col-lg-4 col-md-12">
                    <div className="outsourcing-solutions-content section-title-animation animation-style2">
                        <h2 className="title-animation">HR Solutions For Every Industry</h2>
                        <img src="/assets/images/solutions.jpg" alt="image" />
                    </div>
                </div>
                <div className="col-lg-8 col-md-12">
                    <div className="row justify-content-center g-4">
                        <div className="col-lg-6 col-md-6">
                            <div className="outsourcing-solutions-card">
                                <i className="flaticon-project-management"></i>
                                <h3>Technology & IT Services</h3>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="outsourcing-solutions-card">
                                <i className="flaticon-public-health"></i>
                                <h3>Healthcare Services</h3>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="outsourcing-solutions-card">
                                <i className="flaticon-conveyor"></i>
                                <h3>Manufacturing</h3>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="outsourcing-solutions-card">
                                <i className="flaticon-marketplace"></i>
                                <h3>Retail & E-commerce</h3>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="outsourcing-solutions-card">
                                <i className="flaticon-stats"></i>
                                <h3>Finance & Banking</h3>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="outsourcing-solutions-card">
                                <i className="flaticon-education"></i>
                                <h3>Education & Training</h3>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="outsourcing-solutions-card">
                                <i className="flaticon-flight"></i>
                                <h3>Hospitality & Tourism</h3>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="outsourcing-solutions-card">
                                <i className="flaticon-social-security"></i>
                                <h3>Nonprofit & NGOs</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    
        <div className="consulting-overview-area ptb-120 ">
            <div className="container-fluid">
                <div className="consulting-overview-content">
                    <div className="top section-title-animation animation-style3">
                        <div className="row justify-content-center align-items-center g-4">
                            <div className="col-lg-8 col-md-12">
                                <h1 className="title-animation">Ready To Transform</h1>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <p>Join 200+ companies that have improved their HR functions with TalentVista's expert consulting.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom section-title-animation animation-style3">
                        <div className="row justify-content-center align-items-center g-4">
                            <div className="col-lg-5 col-md-12">
                                <div className="info">
                                    <Link  to="/book-an-appointment" className="default-btn">Start Now</Link>
                                    <span>Have Questions? <Link  to="/contact-us">Contact Us</Link></span>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12">
                                <h1 className="title-animation">Your Workplace?</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
         <br /><br />

    
    <div className="outsourcing-blog-area pb-120 ">
        <div className="container">
            <div className="row justify-content-center g-4" data-cues="slideInUp">
                <div className="col-xl-5 col-md-12">
                    <div className="outsourcing-blog-content section-title-animation animation-style3">
                        <span className="sub">TalentVista Blog</span>
                        <h2 className="title-animation">Expert HR Insights And Trends To Help Your Business Grow</h2>
                    </div>
                </div>
                <div className="col-xl-7 col-md-12">
                    <div className="outsourcing-blog-items">
                        <div className="item">
                            <div className="image">
                                <Link  to="/">
                                    <img src="/assets/images/blog/blog13.jpg" alt="image" />
                                </Link>
                            </div>
                            <div className="content">
                                <ul className="list">
                                    <li>
                                        <i className="ri-calendar-line"></i>
                                        <span>Dec 10, 2025</span>
                                    </li>
                                    <li>
                                        <i className="ri-time-line"></i>
                                        <span>8 Min Read</span>
                                    </li>
                                </ul>
                                <h3>
                                    <Link  to="/">Navigating 2024 Employment Law Changes: What Every Hr
                                        Leader Needs To Know</Link>
                                </h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="image">
                                <Link  to="/">
                                    <img src="/assets/images/blog/blog14.jpg" alt="image" />
                                </Link>
                            </div>
                            <div className="content">
                                <ul className="list">
                                    <li>
                                        <i className="ri-calendar-line"></i>
                                        <span>Dec 11, 2025</span>
                                    </li>
                                    <li>
                                        <i className="ri-time-line"></i>
                                        <span>7 Min Read</span>
                                    </li>
                                </ul>
                                <h3>
                                    <Link  to="/">Building A Future-proof Talent Strategy: Skills-based
                                        Hiring And Internal Mobility</Link>
                                </h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="image">
                                <Link  to="/">
                                    <img src="/assets/images/blog/blog15.jpg" alt="image" />
                                </Link>
                            </div>
                            <div className="content">
                                <ul className="list">
                                    <li>
                                        <i className="ri-calendar-line"></i>
                                        <span>Dec 12, 2025</span>
                                    </li>
                                    <li>
                                        <i className="ri-time-line"></i>
                                        <span>5 Min Read</span>
                                    </li>
                                </ul>
                                <h3>
                                    <Link  to="/">Measuring Hr Roi: How To Quantify The Impact Of Your
                                        People Programs</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

      {/* Start Recruiting Contact Area (Interactive API Connected Form) */}
      <ContactForm />
    </>
  );
}
