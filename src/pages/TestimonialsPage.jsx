import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

export default function TestimonialsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.scrollCue?.init) {
      window.scrollCue.init();
    }
  }, []);

  return (
    <>
      <PageBanner
        title="Testimonials"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Testimonials' }]}
        bannerImage="page-banner6.jpg"
      />

      {/* End Page Banner Area */}
         
        {/* Start Testimonial Area */}
        <div className="testimonial-area ptb-120">
            <div className="container">
                <div className="section-title text-center section-title-animation animation-style1">
                    <h2 className="title-animation" style={{maxWidth: '1150px', margin: 'auto'}}>Don't Just Take Our Word For It. Hear From The Companies We've Helped Build Exceptional Teams And <span>The Professionals Who've Found Their Dream Careers Through Timido.</span></h2>
                </div>
                <div className="row justify-content-center g-4" data-cues="slideInUp" data-duration="1000">
                    <div className="col-xl-4 col-md-6">
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
                                <p>"Timido didn't just fill a role; they found us a leader who has transformed our team's dynamic. Their thoughtful approach to cultural matching made all the difference."</p>
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
                    <div className="col-xl-4 col-md-6">
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
                                <p>"The compliance professionals Timido placed helped us navigate complex regulatory changes seamlessly. Their expertise in financial services recruitment is unmatched."</p>
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
                    <div className="col-xl-4 col-md-6">
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
                                <p>"As a candidate, Timido found me a role where I could truly thrive. They understood my career aspirations and matched me with a company that aligned with my values."</p>
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
                    <div className="col-xl-4 col-md-6">
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
                                <p>"I was hesitant to use a recruitment agency, but Timido proved me wrong. They found me opportunities I didn't know existed and their interview preparation was invaluable."</p>
                            </div>
                            <div className="info">
                                <div className="image">
                                    <img src="/assets/images/user4.png" className="rounded-circle" alt="image" />
                                </div>
                                <div className="title">
                                    <h3>Nancy Reiter</h3>
                                    <span>CTO</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="testimonial-card">
                            <div className="inner">
                                <div className="top">
                                    <span>MediHealth</span>
                                    <ul className="list">
                                        <li><i className="ri-star-fill"></i></li>
                                        <li><i className="ri-star-fill"></i></li>
                                        <li><i className="ri-star-fill"></i></li>
                                        <li><i className="ri-star-fill"></i></li>
                                        <li><i className="ri-star-fill"></i></li>
                                    </ul>
                                </div>
                                <p>"Working with Timido was a game-changer for our digital health initiative. They found candidates who understood both healthcare operations and technology implementation."</p>
                            </div>
                            <div className="info">
                                <div className="image">
                                    <img src="/assets/images/user5.png" className="rounded-circle" alt="image" />
                                </div>
                                <div className="title">
                                    <h3>George Cummings</h3>
                                    <span>Chief Medical Officer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="testimonial-card">
                            <div className="inner">
                                <div className="top">
                                    <span>Design</span>
                                    <ul className="list">
                                        <li><i className="ri-star-fill"></i></li>
                                        <li><i className="ri-star-fill"></i></li>
                                        <li><i className="ri-star-fill"></i></li>
                                        <li><i className="ri-star-fill"></i></li>
                                        <li><i className="ri-star-fill"></i></li>
                                    </ul>
                                </div>
                                <p>"The career guidance I received from Timido was worth more than any salary increase. They helped me identify my strengths and find a role that aligns with my long-term goals."</p>
                            </div>
                            <div className="info">
                                <div className="image">
                                    <img src="/assets/images/user6.png" className="rounded-circle" alt="image" />
                                </div>
                                <div className="title">
                                    <h3>Teresa Couch</h3>
                                    <span>UX Design Director</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="pagination-area">
                            <Link  to="/testimonials">
                                <i className="ri-arrow-left-long-line"></i>
                            </Link>
                            <Link  to="/testimonials">01</Link>
                            <Link className="active"  to="/testimonials">02</Link>
                            <Link  to="/testimonials">03</Link>
                            <Link  to="/testimonials">
                                <i className="ri-arrow-right-long-line"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Testimonial Area */}
    </>
  );
}
