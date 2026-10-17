import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.scrollCue?.init) {
      window.scrollCue.init();
    }
  }, []);

  return (
    <>
      <PageBanner
        title="Services"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
        bannerImage="page-banner7.jpg"
      />

      {/* End Page Banner Area */}

{/* Start Outsourcing Services Area */}
    <div className="outsourcing-services-area ptb-120" id="services">
        <div className="container">
            <div className="section-title section-title-animation animation-style2">
                <div className="row justify-content-center g-4" data-cues="slideInUp" data-duration="1000">
                    <div className="col-lg-12 col-md-12 text-center">
                        <span className="sub">Our Services</span>
                        <h2 className="title-animation">Focused Solutions For Employers & Professionals</h2>
                        <p>Simple, role-focused support designed around recruitment and career needs.</p>
                    </div>
                </div>
            </div>
            <div className="outsourcing-services-items" data-cues="slideInUp" data-duration="1000">
                <div className="item">
                    <div className="row justify-content-center g-4">
                        <div className="col-lg-6 col-md-12">
                            <div className="services-content">
                                <div className="number">01</div>
                                <h3>US Staffing & Recruitment</h3>
                                <p>Candidate sourcing and recruitment support for contract, contract-to-hire and permanent opportunities.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="services-image h-100">
                                <img src="/assets/images/service/service8.jpg" className="object-fit-cover h-100" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="row justify-content-center g-4">
                        <div className="col-lg-6 col-md-12">
                            <div className="services-content">
                                <div className="number">02</div>
                                <h3>UK Recruitment Support</h3>
                                <p>Role-focused sourcing, profile preparation and interview readiness for UK employers and job seekers.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="services-image h-100">
                                <img src="/assets/images/service/service9.jpg" className="object-fit-cover h-100" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="row justify-content-center g-4">
                        <div className="col-lg-6 col-md-12">
                            <div className="services-content">
                                <div className="number">03</div>
                                <h3>Candidate Marketing</h3>
                                <p>LinkedIn optimization, ATS-focused resumes/CVs, profile enhancement and targeted job-search support.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="services-image h-100">
                                <img src="/assets/images/service/service10.jpg" className="object-fit-cover h-100" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="row justify-content-center g-4">
                        <div className="col-lg-6 col-md-12">
                            <div className="services-content">
                                <div className="number">04</div>
                                <h3>Interview Preparation</h3>
                                <p>Role-specific interview guidance and communication practice to help candidates present their experience clearly.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="services-image h-100">
                                <img src="/assets/images/service/service11.jpg" className="object-fit-cover h-100" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="row justify-content-center g-4">
                        <div className="col-lg-6 col-md-12">
                            <div className="services-content">
                                <div className="number">05</div>
                                <h3>Technical Interview Support</h3>
                                <p>Practical technical interview preparation and support aligned with the candidate's target role.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="services-image h-100">
                                <img src="/assets/images/service/service12.jpg" className="object-fit-cover h-100" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="row justify-content-center g-4">
                        <div className="col-lg-6 col-md-12">
                            <div className="services-content">
                                <div className="number">06</div>
                                <h3>Employer Talent Solutions</h3>
                                <p>Requirement understanding, sourcing, screening and candidate presentation for hiring needs.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="services-image h-100">
                                <img src="/assets/images/service/service8.jpg" className="object-fit-cover h-100" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* End Outsourcing Services Area */}
    </>
  );
}
