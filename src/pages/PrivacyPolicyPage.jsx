import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageBanner
        title="Privacy Policy"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Privacy Policy' }]}
        bannerImage="page-banner3.jpg"
      />

      {/* End Page Banner Area */}
         
        {/* Start Privacy Policy Area */}
        <div className="privacy-policy-area ptb-120">
            <div className="container">
                <div className="privacy-policy-content">
                    <h2>Timido Privacy Policy</h2>
                    <p className="color">Last Updated: Dec 01, 2025</p>
                    <div className="inner">
                        <p>Timido is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website timido.com or use our services.</p>
                    </div>
                    <h3>1. Information We Collect</h3>
                    <div className="inner">
                        <p>We may collect personal information that you voluntarily provide to us when you:</p>
                        <ul className="list">
                            <li>Request a solar quote or consultation</li>
                            <li>Create an account on our website</li>
                            <li>Subscribe to our newsletter</li>
                            <li>Contact us via forms, email, or phone</li>
                            <li>Participate in surveys or promotions</li>
                        </ul>
                    </div>
                    <h3>2. How We Use Your Information</h3>
                    <div className="inner">
                        <p>We use the information we collect for the following purposes:</p>
                        <ul className="list">
                            <li><strong>Service Delivery:</strong> To provide solar assessments, designs, and installations</li>
                            <li><strong>Communication:</strong> To respond to inquiries and send service updates</li>
                            <li><strong>Improvement:</strong> To enhance our website and services</li>
                            <li><strong>Marketing:</strong> To send relevant solar content (with consent)</li>
                            <li><strong>Legal Compliance:</strong> To meet regulatory requirements</li>
                        </ul>
                    </div>
                    <h3>3. Information Sharing and Disclosure</h3>
                    <div className="inner">
                        <p>We may share information with:</p>
                        <ul className="list">
                            <li><strong>Installation Partners:</strong> Certified technicians for system installation</li>
                            <li><strong>Financing Providers:</strong> For loan/lease applications (with consent)</li>
                            <li><strong>Government Agencies:</strong> For incentive program verification</li>
                            <li><strong>Service Providers:</strong> CRM, email, and analytics platforms</li>
                        </ul>
                    </div>
                    <p className="color">We do not sell your personal information to third-party marketers.</p>
                    <h3>4. Data Security</h3>
                    <div className="inner">
                        <p>We implement appropriate technical and organizational measures including:</p>
                        <ul className="list">
                            <li>SSL encryption for data transmission</li>
                            <li>Secure access controls to personal data</li>
                            <li>Regular security audits</li>
                            <li>Employee privacy training</li>
                        </ul>
                    </div>
                    <h3>5. Your Privacy Rights</h3>
                    <div className="inner">
                        <p>Depending on your location, you may have rights to:</p>
                        <ul className="list">
                            <li><strong>Access:</strong> Request copies of your personal data</li>
                            <li><strong>Correction:</strong> Update inaccurate information</li>
                            <li><strong>Deletion:</strong> Request erasure under certain conditions</li>
                            <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
                        </ul>
                    </div>
                    <h3>6. Cookies and Tracking Technologies</h3>
                    <div className="inner">
                        <p>We use cookies for:</p>
                        <ul className="list">
                            <li>Website functionality (e.g., login sessions)</li>
                            <li>Analytics (Google Analytics)</li>
                            <li>Advertising (Google Ads, Facebook Pixel)</li>
                        </ul>
                    </div>
                    <h3>7. Children's Privacy</h3>
                    <div className="inner">
                        <p>Our services are not directed to children under 16. We do not knowingly collect data from children without parental consent.</p>
                    </div>
                    <h3>8. Policy Updates</h3>
                    <div className="inner">
                        <p>We may update this policy periodically. The "Last Updated" date at the top indicates when revisions were made.</p>
                    </div>
                    <h3>9. Contact Us</h3>
                    <div className="inner">
                        <p>For questions about this Privacy Policy:</p>
                        <p>Timido Inc.</p>
                        <ul className="list">
                            <li><strong>Address:</strong> 123 Solar Way Phoenix, AZ 85004</li>
                            <li><strong>Email:</strong> <a href="https://templates.envytheme.com/cdn-cgi/l/email-protection#721b1c141d32061b1f1b161d5c111d1f"><span className="__cf_email__" data-cfemail="365f58505976425f5b5f52591855595b">[email&#160;protected]</span></a></li>
                            <li><strong>Phone:</strong> <a href="tel:14440758494">+1 (444) 075 8494</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* End Privacy Policy Area */}
    </>
  );
}
