import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.scrollCue?.init) {
      window.scrollCue.init();
    }
  }, []);

  return (
    <>
      <PageBanner
        title="About Us"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
        bannerImage="page-banner1.jpg"
      />

      {/* End Page Banner Area */}

{/* Start Outsourcing About Area */}
    <div className="outsourcing-about-area ptb-120 " id="about">
        <div className="container">
            <div className="row justify-content-center align-items-center g-4" data-cues="slideInUp" data-duration="1000">
                <div className="col-xl-5 col-md-12">
                    <div className="outsourcing-about-content section-title-animation animation-style2">
                        <span className="sub">About TalentVista</span>
                        <h2 className="title-animation">Professional Recruitment & Career Support</h2>
                        <p>We help employers find qualified professionals and help candidates become more visible, prepared and market-ready.</p>
                        <div className="image">
                            <img src="/assets/images/about/about7.jpg" alt="image" />
                        </div>
                    </div>
                </div>
                <div className="col-xl-7 col-md-12">
                    <div className="outsourcing-about-inner-content">
                        <div className="row justify-content-center g-4">
                            <div className="col-lg-12 col-md-12">
                                <div className="left">
                                    <h3>Our Focus</h3>
                                    <ul style={{listStyleType: 'none', paddingLeft: '0'}}>
                                        <li style={{marginBottom: '10px'}}><i className="ri-check-line" style={{color: 'var(--main-color)', marginRight: '10px'}}></i> US and UK recruitment and staffing support</li>
                                        <li style={{marginBottom: '10px'}}><i className="ri-check-line" style={{color: 'var(--main-color)', marginRight: '10px'}}></i> IT, non-IT and selected professional roles</li>
                                        <li style={{marginBottom: '10px'}}><i className="ri-check-line" style={{color: 'var(--main-color)', marginRight: '10px'}}></i> Candidate sourcing, screening and profile presentation</li>
                                        <li style={{marginBottom: '10px'}}><i className="ri-check-line" style={{color: 'var(--main-color)', marginRight: '10px'}}></i> ATS-friendly CV/resume and LinkedIn optimization</li>
                                        <li style={{marginBottom: '10px'}}><i className="ri-check-line" style={{color: 'var(--main-color)', marginRight: '10px'}}></i> Interview preparation and career marketing support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="circle-wrap" style={{pointerEvents: 'none'}}>
                            <a href="javascript:void(0)">
                                <img src="/assets/images/about/circle.png" alt="image" />
                                <div className="icon">
                                    <img src="/assets/images/about/icon.png" alt="image" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* End Outsourcing About Area */}

{/* Start Outsourcing Values Area */}
    <div className="outsourcing-values-area pb-120 ">
        <div className="container">
            <div className="section-title text-center section-title-animation animation-style2">
                <span className="sub">Why TalentVista</span>
                <h2 className="title-animation">A Focused Approach To Talent</h2>
                <p>Our approach combines recruitment expertise, candidate marketing and practical career support.</p>
            </div>
            <div className="row justify-content-center g-4" data-cues="slideInUp" data-duration="1000">
                <div className="col-lg-3 col-sm-6">
                    <div className="outsourcing-values-card">
                        <div className="icon">
                            <i className="flaticon-idea-1"></i>
                        </div>
                        <h3>Cross-Market Focus</h3>
                        <p>Recruitment and career support designed for both the US and UK.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="outsourcing-values-card">
                        <div className="icon">
                            <i className="flaticon-compassion"></i>
                        </div>
                        <h3>Candidate-Focused</h3>
                        <p>Professional presentation of genuine experience and skills.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="outsourcing-values-card">
                        <div className="icon">
                            <i className="flaticon-trust"></i>
                        </div>
                        <h3>Business-Minded</h3>
                        <p>We understand the requirement before presenting suitable candidates.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="outsourcing-values-card">
                        <div className="icon">
                            <i className="flaticon-partnership"></i>
                        </div>
                        <h3>Practical Support</h3>
                        <p>Clear communication and interview support throughout the process.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* End Outsourcing Values Area */}

{/* Start Methodology Area */}
        <div className="methodology-area pb-120 " id="process">
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
                                <h2 className="title-animation">A Simple, Focused Way To Connect Talent</h2>
                                <p>From understanding the requirement to supporting the next professional opportunity.</p>
                            </div>
                            <div className="items">
                                <div className="item">
                                    <h2>01</h2>
                                    <h3>Understand</h3>
                                    <p>We learn the hiring requirement or candidate's career objective.</p>
                                </div>
                                <div className="item">
                                    <h2>02</h2>
                                    <h3>Prepare</h3>
                                    <p>We refine the profile, role alignment and search strategy.</p>
                                </div>
                                <div className="item">
                                    <h2>03</h2>
                                    <h3>Connect</h3>
                                    <p>We source, market and connect suitable talent with relevant opportunities.</p>
                                </div>
                                <div className="item">
                                    <h2>04</h2>
                                    <h3>Support</h3>
                                    <p>We provide communication and interview support throughout the process.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Methodology Area */}
    </>
  );
}
