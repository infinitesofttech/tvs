import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

export default function TermsOfServicePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageBanner
        title="Terms Of Service"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Terms Of Service' }]}
        bannerImage="page-banner13.jpg"
      />

      {/* End Page Banner Area */}
         
        {/* Start Terms & Condition Area */}
        <div className="terms-condition-area ptb-120">
            <div className="container">
                <div className="terms-condition-content">
                    <h2>Timido Terms and Conditions</h2>
                    <p className="color">Last Updated: Dec 01, 2025</p>
                    <h3>1. Introduction</h3>
                    <div className="inner">
                        <p>Welcome to Timido. These Terms and Conditions govern your use of our website, services, and solar energy solutions. By accessing or using our services, you agree to comply with these terms.</p>
                    </div>
                    <h3>2. Services Overview</h3>
                    <div className="inner">
                        <p>Timido provides residential and commercial solar energy solutions including:</p>
                        <ul className="list">
                            <li>Solar panel system design and installation</li>
                            <li>Battery storage solutions</li>
                            <li>System maintenance and monitoring</li>
                            <li>Energy efficiency assessments</li>
                        </ul>
                        <p>All services are subject to site evaluation and technical feasibility.</p>
                    </div>
                    <h3>3. Contractual Agreements</h3>
                    <div className="inner">
                        <h5>3.1 Proposal Acceptance</h5>
                        <p>All solar proposals are valid for 30 days from issue date. Installation contracts become binding only when:</p>
                        <ul className="list">
                            <li>Signed by both parties</li>
                            <li>Site assessment is completed</li>
                            <li>All necessary permits are secured</li>
                        </ul>
                        <h5>3.2 Cancellation Policy</h5>
                        <p>Customers may cancel within 3 business days of contract signing without penalty. After this period:</p>
                        <ul className="list">
                            <li>50% deposit is non-refundable if cancellation occurs after permit submission</li>
                            <li>S90% of contract value is due if cancellation occurs within 7 days of scheduled installation</li>
                        </ul>
                    </div>
                    <h3>4. Payment Terms</h3>
                    <div className="inner">
                        <h5>4.1 Payment Schedule</h5>
                        <ul className="list">
                            <li>30% deposit upon contract signing</li>
                            <li>50% due upon permit approval</li>
                            <li>20% balance due upon system completion</li>
                        </ul>
                        <h5>4.2 Financing</h5>
                        <p>Third-party financing arrangements are subject to lender terms. Timido is not responsible for financing approval decisions or terms.</p>
                    </div>
                    <h3>5. Warranties</h3>
                    <div className="inner">
                        <h5>5.1 Equipment Warranties</h5>
                        <p>All solar equipment carries manufacturer warranties:</p>
                        <ul className="list">
                            <li><span>Panels:</span> 25-year performance warranty (90% output at year 25)</li>
                            <li><span>Inverters:</span> 10-12 years depending on manufacturer</li>
                            <li><span>Batteries:</span> 10-year warranty</li>
                        </ul>
                        <h5>5.2 Workmanship Warranty</h5>
                        <p>Timido provides a 10-year warranty on installation workmanship covering:</p>
                        <ul className="list">
                            <li>Roof penetrations</li>
                            <li>Electrical connections</li>
                            <li>Structural integrity</li>
                        </ul>
                        <p>Warranty excludes damage caused by:</p>
                        <ul className="list">
                            <li>Acts of nature (hurricanes, earthquakes, etc.)</li>
                            <li>Unauthorized modifications</li>
                            <li>Improper maintenance</li>
                        </ul>
                    </div>
                    <h3>6. Liability Limitations</h3>
                    <div className="inner">
                        <p>Timido's total liability for any claim shall not exceed the contract price. We are not liable for:</p>
                        <ul className="list">
                            <li>Pre-existing roof conditions</li>
                            <li>Utility rate changes</li>
                            <li>Acts of third parties</li>
                            <li>Consequential or incidental damages</li>
                        </ul>
                        <p>Customers must maintain homeowners insurance covering the solar system.</p>
                    </div>
                    <h3>7. Permitting and Interconnection</h3>
                    <div className="inner">
                        <p>Timido handles all necessary permits and utility interconnection paperwork. Timeline estimates:</p>
                        <ul className="list">
                            <li><strong>Residential:</strong> 2-8 weeks for full approval</li>
                            <li><strong>Commercial:</strong> 4-16 weeks depending on jurisdiction</li>
                        </ul>
                        <p>System activation cannot occur until utility approval is granted.</p>
                    </div>
                    <h3>8. Dispute Resolution</h3>
                    <div className="inner">
                        <p>Any disputes shall be resolved through binding arbitration in Maricopa County, AZ. Class action waivers apply. Governing law: State of Arizona.</p>
                    </div>
                    <h3>9. Changes to Terms</h3>
                    <div className="inner">
                        <p>Timido may modify these terms at any time. Continued use of services constitutes acceptance of updated terms.</p>
                    </div>
                    <h3>10. Contact Information</h3>
                    <div className="inner">
                        <p>For questions about these Terms and Conditions, please contact us:</p>
                        <p>Timido Legal Department</p>
                        <ul className="list mb-0">
                            <li><strong>Address:</strong> 123 Solar Way Phoenix, AZ 85004</li>
                            <li><strong>Email:</strong> <a href="https://templates.envytheme.com/cdn-cgi/l/email-protection#31585f575e7145585c58555e1f525e5c"><span className="__cf_email__" data-cfemail="234a4d454c63574a4e4a474c0d404c4e">[email&#160;protected]</span></a></li>
                            <li><strong>Phone:</strong> <a href="tel:14440758494">+1 (444) 075 8494</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* Start Terms & Condition Area */}
    </>
  );
}
