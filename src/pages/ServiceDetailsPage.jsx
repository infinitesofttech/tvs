import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

export default function ServiceDetailsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.scrollCue?.init) {
      window.scrollCue.init();
    }
    if (window.Swiper) {
      new window.Swiper(".expertise-slider", {
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
          992: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        },
      });
    }
  }, []);

  return (
    <>
      <PageBanner
        title="Service Details"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: 'Service Details' }]}
        bannerImage="page-banner11.jpg"
      />

      {/* End Page Banner Area */}
         
        {/* Start Service Details Area */}
        <div className="service-details-area ptb-120">
            <div className="container">
                <div className="row justify-content-center g-4" data-cues="slideInUp" data-duration="1000">
                    <div className="col-lg-6 col-md-12">
                        <div className="service-details-content">
                            <h2>End-to-end Permanent Placement</h2>
                            <p>We handle the entire recruitment lifecycle, from initial sourcing to successful onboarding and beyond.</p>
                            <h3>Building Lasting Teams Through Strategic Hiring</h3>
                            <p>Our permanent placement service goes beyond traditional recruitment. We focus on long-term success by ensuring each candidate not only has the right skills but also aligns with your company culture and growth trajectory.</p>
                            <ul className="list">
                                <li>
                                    <i className="ri-check-line"></i>
                                    <span>Comprehensive candidate sourcing and screening</span>
                                </li>
                                <li>
                                    <i className="ri-check-line"></i>
                                    <span>In-depth interviews and skills assessment</span>
                                </li>
                                <li>
                                    <i className="ri-check-line"></i>
                                    <span>Cultural fit evaluation and team integration analysis</span>
                                </li>
                                <li>
                                    <i className="ri-check-line"></i>
                                    <span>90-day placement guarantee for peace of mind</span>
                                </li>
                                <li>
                                    <i className="ri-check-line"></i>
                                    <span>Ongoing support during onboarding and integration</span>
                                </li>
                                <li>
                                    <i className="ri-check-line"></i>
                                    <span>Market insights and salary benchmarking</span>
                                </li>
                                <li>
                                    <i className="ri-check-line"></i>
                                    <span>Employer branding consultation</span>
                                </li>
                                <li>
                                    <i className="ri-check-line"></i>
                                    <span>Diversity and inclusion focused approach</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="service-details-image h-100">
                            <img src="/assets/images/service-details.jpg" className="object-fit-cover h-100" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Start Service Details Area */}

        {/* Start Consulting Choose Area */}
        <div className="consulting-choose-area bg-F5F5F5 ptb-120">
            <div className="container">
                <div className="row justify-content-center g-4" data-cues="fadeIn" data-duration="1000">
                    <div className="col-lg-5 col-md-12">
                        <div className="consulting-choose-content section-title-animation animation-style3">
                            <h2 className="title-animation">Our Permanent Placement Process</h2>
                            <img src="/assets/images/choose2.jpg" alt="image" />
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12">
                        <div className="consulting-choose-items">
                            <div className="item">
                                <div className="icon">
                                    <i className="flaticon-solution"></i>
                                </div>
                                <h3>Needs Analysis</h3>
                                <p>In-depth analysis to understand your hiring goals and define the ideal candidate profile.</p>
                            </div>
                            <div className="item">
                                <div className="icon">
                                    <i className="flaticon-experts"></i>
                                </div>
                                <h3>Talent Sourcing</h3>
                                <p>Multi-channel approach to identify and attract top passive and active candidates.</p>
                            </div>
                            <div className="item">
                                <div className="icon">
                                    <i className="flaticon-approach"></i>
                                </div>
                                <h3>Rigorous Screening</h3>
                                <p>Comprehensive screening to identify the most qualified and reliable candidates.</p>
                            </div>
                            <div className="item">
                                <div className="icon">
                                    <i className="flaticon-analysis"></i>
                                </div>
                                <h3>Interview Coordination</h3>
                                <p>Seamless interview scheduling and coordination to ensure a smooth hiring process.</p>
                            </div>
                            <div className="item">
                                <div className="icon">
                                    <i className="flaticon-relationship"></i>
                                </div>
                                <h3>Onboarding Support</h3>
                                <p>Smooth, efficient onboarding that helps new hires integrate and perform from day one.</p>
                            </div>
                            <div className="item">
                                <div className="icon">
                                    <i className="flaticon-digital-transformation"></i>
                                </div>
                                <h3>Technology Integration</h3>
                                <p>We leverage cutting-edge HR technology to streamline processes and provide data-driven insights.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Consulting Choose Area */}

        {/* Start Expertise Area */}
        <div className="expertise-area ptb-120">
            <div className="container">
                <div className="section-title section-title-animation animation-style1">
                    <div className="row justify-content-center g-4" data-cues="slideInUp" data-duration="1000">
                        <div className="col-lg-3 col-md-12">
                            <span className="sub">Our Expertise</span>
                        </div>
                        <div className="col-lg-9 col-md-12">
                            <h2 className="title-animation">With Expertise Across Industries And Hr Functions, We Provide Tailored Talent Solutions For Your Needs</h2>
                        </div>
                    </div>
                </div>
                <div className="swiper expertise-slider">
                    <div className="swiper-wrapper" data-cues="slideInUp" data-duration="1000">
                        <div className="swiper-slide">
                            <div className="expertise-card">
                                <img src="/assets/images/expertise/expertise1.jpg" alt="image" />
                                <div className="content">
                                    <h3>Technology & SaaS</h3>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="expertise-card">
                                <img src="/assets/images/expertise/expertise2.jpg" alt="image" />
                                <div className="content">
                                    <h3>Healthcare & Life Sciences</h3>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="expertise-card">
                                <img src="/assets/images/expertise/expertise3.jpg" alt="image" />
                                <div className="content">
                                    <h3>Finance & Banking</h3>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="expertise-card">
                                <img src="/assets/images/expertise/expertise4.jpg" alt="image" />
                                <div className="content">
                                    <h3>Education & Non-Profit</h3>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="expertise-card">
                                <img src="/assets/images/expertise/expertise1.jpg" alt="image" />
                                <div className="content">
                                    <h3>Technology & SaaS</h3>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="expertise-card">
                                <img src="/assets/images/expertise/expertise2.jpg" alt="image" />
                                <div className="content">
                                    <h3>Healthcare & Life Sciences</h3>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="expertise-card">
                                <img src="/assets/images/expertise/expertise3.jpg" alt="image" />
                                <div className="content">
                                    <h3>Finance & Banking</h3>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="expertise-card">
                                <img src="/assets/images/expertise/expertise4.jpg" alt="image" />
                                <div className="content">
                                    <h3>Education & Non-Profit</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Expertise Area */}

        {/* Start Overview CTA Area */}
        <div className="overview-cta-area">
            <div className="container">
                <div className="overview-cta-inner">
                    <div className="content section-title-animation animation-style1">
                        <h2 className="title-animation">Ready to Find Your Next Star Performer?</h2>
                        <p>Stop wasting time on mismatched candidates. Let us find you the perfect permanent team member who will drive your business forward.</p>
                        <Link  to="/contact-us" className="default-btn">Start Your Search Today</Link>
                    </div>
                    <div className="wrap-shape">
                        <img src="/assets/images/wrap3.png" alt="image" />
                    </div>
                </div>
            </div>
        </div>
        {/* End Overview CTA Area */}

        {/* Start Outsourcing Pricing Area */}
        <div className="outsourcing-pricing-area wrap-style2 ptb-120">
            <div className="container">
                <div className="section-title text-center section-title-animation animation-style2">
                    <h2 className="title-animation">Transparent Pricing</h2>
                </div>
                <div className="row justify-content-center g-4" data-cues="slideInUp">
                    <div className="col-xl-4 col-md-6">
                        <div className="outsourcing-pricing-card">
                            <div className="head">
                                <h3>Essential</h3>
                                <p>Perfect for small businesses getting started with HR outsourcing</p>
                            </div>
                            <div className="price">
                                $49 <span>/per month</span>
                            </div>
                            <div className="middle">
                                <p>Minimum 10 employees</p>
                            </div>
                            <ul className="list">
                                <li>
                                    <i className="ri-check-line"></i>
                                    <span>Payroll Processing</span>
                                </li>
                                <li>
                                    <i className="ri-check-line"></i>
                                    <span>Basic Benefits Administration</span>
                                </li>
                                <li>
                                    <i className="ri-check-line"></i>
                                    <span>Compliance Monitoring</span>
                                </li>
                                <li>
                                    <i className="ri-check-line"></i>
                                    <span>HR Help Desk Support</span>
                                </li>
                                <li>
                                    <i className="ri-check-line"></i>
                                    <span>Basic Reporting & Analytics</span>
                                </li>
                                <li>
                                    <i className="ri-check-line"></i>
                                    <span>Talent Acquisition</span>
                                </li>
                                <li>
                                    <i className="ri-check-line"></i>
                                    <span>Performance Management</span>
                                </li>
                                <li>
                                    <i className="ri-check-line"></i>
                                    <span>Advanced Analytics</span>
                                </li>
                            </ul>
                            <div className="price-btn">
                                <Link  to="/contact-us" className="default-btn">Get Started</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="outsourcing-pricing-card">
                            <div className="head">
                                <h3>Professional</h3>
                                <p>Ideal for growing companies with complex HR needs</p>
                            </div>
                            <div className="price">
                                $79 <span>/per month</span>
                            </div>
                            <div className="middle">
                                <p>Minimum 25 employees</p>
                            </div>
                            <ul className="list">
                                <li>
                                    <i className="ri-check-line"></i>
                                    <span>Everything in Essential</span>
                                </li>
                                <li>
                                    <i className="ri-check-line"></i>
                                    <span>Full Benefits Administration</span>
                                </li>
                                <li>
                                    <i className="ri-check-line"></i>
                                    <span>Talent Acquisition & Onboarding</span>
                                </li>
                                <li>
                                    <i className="ri-check-line"></i>
                                    <span>Performance Management</span>
                                </li>
                                <li>
                                    <i className="ri-check-line"></i>
                                    <span>Advanced Analytics & Reporting</span>
                                </li>
                                <li>
                                    <i className="ri-check-line"></i>
                                    <span>Employee Self-Service Portal</span>
                                </li>
                                <li>
                                    <i className="ri-check-line"></i>
                                    <span>Custom HR Policies</span>
                                </li>
                                <li>
                                    <i className="ri-check-line"></i>
                                    <span>Dedicated HR Manager</span>
                                </li>
                            </ul>
                            <div className="price-btn">
                                <Link  to="/contact-us" className="default-btn">Get Started</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="outsourcing-pricing-card">
                            <div className="head">
                                <h3>Enterprise</h3>
                                <p>Complete HR solution for large organizations</p>
                            </div>
                            <div className="price">
                                $119 <span>/per month</span>
                            </div>
                            <div className="middle">
                                <p>Minimum 100 employees</p>
                            </div>
                            <ul className="list">
                                <li>
                                    <i className="ri-check-line"></i>
                                    <span>Everything in Professional</span>
                                </li>
                                <li>
                                    <i className="ri-check-line"></i>
                                    <span>Dedicated HR Manager</span>
                                </li>
                                <li>
                                    <i className="ri-check-line"></i>
                                    <span>Strategic HR Consulting</span>
                                </li>
                                <li>
                                    <i className="ri-check-line"></i>
                                    <span>Custom Integration & API Access</span>
                                </li>
                                <li>
                                    <i className="ri-check-line"></i>
                                    <span>Executive Dashboards</span>
                                </li>
                                <li>
                                    <i className="ri-check-line"></i>
                                    <span>24/7 Priority Support</span>
                                </li>
                                <li>
                                    <i className="ri-check-line"></i>
                                    <span>Custom Training Programs</span>
                                </li>
                                <li>
                                    <i className="ri-check-line"></i>
                                    <span>SLA Guarantee</span>
                                </li>
                            </ul>
                            <div className="price-btn">
                                <Link  to="/contact-us" className="default-btn">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Outsourcing Pricing Area */}
    </>
  );
}
