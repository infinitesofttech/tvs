import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

export default function TeamPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.scrollCue?.init) {
      window.scrollCue.init();
    }
  }, []);

  return (
    <>
      <PageBanner
        title="Team"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Team' }]}
        bannerImage="page-banner3.jpg"
      />

      {/* End Page Banner Area */}
         
        {/* Start Team Area */}
        <div className="team-area ptb-120">
            <div className="container">
                <div className="section-title text-center section-title-animation animation-style2">
                    <h2 className="title-animation" style={{maxWidth: '1100px', margin: 'auto'}}>Meet The Dedicated Experts Driving Timido's Success—blending Hr, Recruitment, And <span>Tech Expertise To Deliver Outstanding Results.</span></h2>
                </div>
                <div className="row justify-content-center g-4" data-cues="slideInUp" data-duration="1000">
                    <div className="col-lg-4 col-md-6">
                        <div className="team-card">
                            <div className="image">
                                <Link  to="/team">
                                    <img src="/assets/images/team/team1.jpg" alt="image" />
                                </Link>
                                <ul className="social-list">
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <i className="ri-facebook-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://x.com/" target="_blank">
                                            <i className="ri-twitter-x-line"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank">
                                            <i className="ri-linkedin-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank">
                                            <i className="ri-instagram-line"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="content">
                                <h3>
                                    <Link  to="/team">Robert Carroll</Link>
                                </h3>
                                <span>CEO & Founder</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="team-card">
                            <div className="image">
                                <Link  to="/team">
                                    <img src="/assets/images/team/team2.jpg" alt="image" />
                                </Link>
                                <ul className="social-list">
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <i className="ri-facebook-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://x.com/" target="_blank">
                                            <i className="ri-twitter-x-line"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank">
                                            <i className="ri-linkedin-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank">
                                            <i className="ri-instagram-line"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="content">
                                <h3>
                                    <Link  to="/team">Dorothy Cochran</Link>
                                </h3>
                                <span>Head of Operations</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="team-card">
                            <div className="image">
                                <Link  to="/team">
                                    <img src="/assets/images/team/team3.jpg" alt="image" />
                                </Link>
                                <ul className="social-list">
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <i className="ri-facebook-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://x.com/" target="_blank">
                                            <i className="ri-twitter-x-line"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank">
                                            <i className="ri-linkedin-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank">
                                            <i className="ri-instagram-line"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="content">
                                <h3>
                                    <Link  to="/team">Marshall Rodrigue</Link>
                                </h3>
                                <span>Chief Compliance Officer</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="team-card">
                            <div className="image">
                                <Link  to="/team">
                                    <img src="/assets/images/team/team4.jpg" alt="image" />
                                </Link>
                                <ul className="social-list">
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <i className="ri-facebook-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://x.com/" target="_blank">
                                            <i className="ri-twitter-x-line"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank">
                                            <i className="ri-linkedin-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank">
                                            <i className="ri-instagram-line"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="content">
                                <h3>
                                    <Link  to="/team">Georgina Patton</Link>
                                </h3>
                                <span>Senior Tech Recruiter</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="team-card">
                            <div className="image">
                                <Link  to="/team">
                                    <img src="/assets/images/team/team5.jpg" alt="image" />
                                </Link>
                                <ul className="social-list">
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <i className="ri-facebook-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://x.com/" target="_blank">
                                            <i className="ri-twitter-x-line"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank">
                                            <i className="ri-linkedin-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank">
                                            <i className="ri-instagram-line"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="content">
                                <h3>
                                    <Link  to="/team">Zachary Tomlinson</Link>
                                </h3>
                                <span>Healthcare & Life Sciences Specialist</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="team-card">
                            <div className="image">
                                <Link  to="/team">
                                    <img src="/assets/images/team/team6.jpg" alt="image" />
                                </Link>
                                <ul className="social-list">
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <i className="ri-facebook-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://x.com/" target="_blank">
                                            <i className="ri-twitter-x-line"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank">
                                            <i className="ri-linkedin-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank">
                                            <i className="ri-instagram-line"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="content">
                                <h3>
                                    <Link  to="/team">Carol Crandell</Link>
                                </h3>
                                <span>Finance & Banking Recruiter</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="pagination-area">
                            <Link  to="/team">
                                <i className="ri-arrow-left-long-line"></i>
                            </Link>
                            <Link  to="/team">01</Link>
                            <Link className="active"  to="/team">02</Link>
                            <Link  to="/team">03</Link>
                            <Link  to="/team">
                                <i className="ri-arrow-right-long-line"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Team Area */}
    </>
  );
}
