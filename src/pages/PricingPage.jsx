import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

export default function PricingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.scrollCue?.init) {
      window.scrollCue.init();
    }
  }, []);

  return (
    <>
      <PageBanner
        title="Pricing Plans"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Pricing Plans' }]}
        bannerImage="page-banner2.jpg"
      />

      {/* End Page Banner Area */}
         
        {/* Start Outsourcing Pricing Area */}
        <div className="outsourcing-pricing-area wrap-style2 ptb-120">
            <div className="container">
                <div className="section-title text-center section-title-animation animation-style2">
                    <h2 className="title-animation" style={{maxWidth: '1100px', margin: 'auto'}}>Choose The Perfect Plan For Your Hiring Needs. All Plans Include <span>Our Ai-powered Matching And Dedicated Support.</span></h2>
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

        {/* Start Outsourcing Choose Area */}
        <div className="outsourcing-choose-area pb-120">
            <div className="container">
                <div className="row justify-content-center g-4" data-cues="slideInUp" data-duration="1000">
                    <div className="col-xl-5 col-md-12">
                        <div className="outsourcing-choose-content section-title-animation animation-style3">
                            <span className="sub">FAQs</span>
                            <h2 className="title-animation">Frequently Asked Questions</h2>
                            <img src="/assets/images/choose3.jpg" alt="image" />
                        </div>
                    </div>
                    <div className="col-xl-7 col-md-12">
                        <div className="outsourcing-faq-accordion">
                            <div className="content">
                                <p>We go beyond traditional HR outsourcing — delivering tailored, transparent, and people-centered solutions that empower your business to grow.</p>
                            </div>
                            <div className="accordion" id="faqAccordion">
                                <div className="accordion-item">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_1" aria-expanded="true" aria-controls="collapse_1">
                                        How Does The Pricing Work?
                                    </button>
                                    <div id="collapse_1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            <p>Unlike other providers who offer generic support, each Timido client gets a dedicated HR consultant who truly understands your business and becomes an extension of your team.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_2" aria-expanded="false" aria-controls="collapse_2">
                                        Is There A Free Trial?
                                    </button>
                                    <div id="collapse_2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            <p>Unlike other providers who offer generic support, each Timido client gets a dedicated HR consultant who truly understands your business and becomes an extension of your team.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_3" aria-expanded="false" aria-controls="collapse_3">
                                        What's Included In The Replacement Guarantee?
                                    </button>
                                    <div id="collapse_3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            <p>Unlike other providers who offer generic support, each Timido client gets a dedicated HR consultant who truly understands your business and becomes an extension of your team.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_4" aria-expanded="false" aria-controls="collapse_4">
                                        Can I Change Plans Later?
                                    </button>
                                    <div id="collapse_4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            <p>Unlike other providers who offer generic support, each Timido client gets a dedicated HR consultant who truly understands your business and becomes an extension of your team.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_5" aria-expanded="false" aria-controls="collapse_5">
                                        Do You Offer Custom Enterprise Solutions?
                                    </button>
                                    <div id="collapse_5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            <p>Unlike other providers who offer generic support, each Timido client gets a dedicated HR consultant who truly understands your business and becomes an extension of your team.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_6" aria-expanded="false" aria-controls="collapse_6">
                                        What Industries Do You Specialize In?
                                    </button>
                                    <div id="collapse_6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            <p>Unlike other providers who offer generic support, each Timido client gets a dedicated HR consultant who truly understands your business and becomes an extension of your team.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Outsourcing Choose Area */}
    </>
  );
}
