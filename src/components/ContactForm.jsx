import { useState } from 'react';
import { contactService } from '../api/services/contactService';
import AlertMessage from './AlertMessage';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '', company_name: '', email: '', phone: '',
    select_market: '', role_hiring_requirement: '', message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });
    const { data, error } = await contactService.submit(form);
    setLoading(false);
    if (error) {
      setStatus({ type: 'error', message: error });
    } else {
      setStatus({ type: 'success', message: 'Thanks! Your message was sent successfully.' });
      setForm({ name: '', company_name: '', email: '', phone: '', select_market: '', role_hiring_requirement: '', message: '' });
    }
  };

  return (
    <div className="recruiting-contact-area pb-120" id="contact">
      <div className="container">
        <div className="row justify-content-center g-4" data-cues="slideInUp" data-duration="1000">
          <div className="col-xl-5 col-md-12">
            <div className="recruiting-contact-information">
              <div className="info">
                <h3>Get In Touch</h3>
                <ul className="list">
                  <li>
                    <div className="icon"><i className="ri-phone-line" /></div>
                    <div className="title"><span>Call</span><a href="tel:552588494">+55 258 8494</a></div>
                  </li>
                  <li>
                    <div className="icon"><i className="ri-mail-line" /></div>
                    <div className="title"><span>Email</span><a href="mailto:info@talentvistasolutions.com">info@talentvistasolutions.com</a></div>
                  </li>
                  <li>
                    <div className="icon"><i className="ri-map-pin-line" /></div>
                    <div className="title"><span>Address</span><strong>258 Business District San Francisco, CA 94105</strong></div>
                  </li>
                </ul>
                <div className="wrap-shape">
                  <img src="/assets/images/frame2.png" alt="frame" />
                </div>
              </div>
              <div className="offices-info">
                <h3>Our Offices</h3>
                <div className="item">
                  <h5>New York Headquarters</h5>
                  <span>753 Business Ave, Suite 500, New York, NY 10001</span>
                  <span>Mon-Fri: 9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="item wrap2">
                  <h5>San Francisco Office</h5>
                  <span>159 Tech Street, Floor 3, San Francisco, CA 94105</span>
                  <span>Mon-Fri: 8:00 AM - 5:00 PM PST</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-md-12">
            <div className="recruiting-contact-form">
              <div className="content">
                <h3>Send Us A Message</h3>
                <p>Fill out the form below and our team will get back to you within 24 hours.</p>
              </div>
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="row justify-content-center g-4">
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input type="text" className="form-control" name="name" value={form.name} onChange={handleChange} placeholder="William Bobbitt" required />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label>Company Name</label>
                      <input type="text" className="form-control" name="company_name" value={form.company_name} onChange={handleChange} placeholder="www.TalentVista.com" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} placeholder="william@TalentVista.com" required />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input type="text" className="form-control" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 555 000 0000" required />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label>Select Market *</label>
                      <select className="form-select form-control" name="select_market" value={form.select_market} onChange={handleChange} required>
                        <option value="">Select an Option</option>
                        <option value="us">United States</option>
                        <option value="uk">United Kingdom</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label>I'm Interested In *</label>
                      <select className="form-select form-control" name="role_hiring_requirement" value={form.role_hiring_requirement} onChange={handleChange} required>
                        <option value="">Select an Option</option>
                        <option value="us_staffing">US Staffing/Recruitment</option>
                        <option value="uk_recruitment">UK Recruitment Support</option>
                        <option value="candidate_marketing">Candidate Marketing</option>
                        <option value="interview_prep">Interview Scheduling & Prep</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Message *</label>
                      <textarea className="form-control" name="message" value={form.message} onChange={handleChange} placeholder="Tell us how we can help you..." required />
                    </div>
                  </div>
                  {status.message && (
                    <div className="col-lg-12">
                      <AlertMessage type={status.type} message={status.message} />
                    </div>
                  )}
                  <div className="col-lg-12 col-md-12">
                    <button type="submit" className="default-btn" disabled={loading}>
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
