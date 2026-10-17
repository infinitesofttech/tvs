import { Link } from 'react-router-dom';

/**
 * Reusable page banner (inner pages hero).
 * Props:
 *  - title: string
 *  - breadcrumb: [{ label, to? }]  (last item has no `to`)
 *  - bannerImage: string (path under /assets/images/)
 */
export default function PageBanner({ title, breadcrumb, bannerImage }) {
  return (
    <div className="page-banner-area">
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center g-4" data-cues="slideInUp" data-duration="1000">
          <div className="col-xl-8 col-md-12">
            <div className="page-banner-content">
              <div className="content section-title-animation animation-style1">
                <h2 className="title-animation">{title}</h2>
                <ul className="list">
                  {breadcrumb.map((crumb, i) => (
                    <li key={i}>
                      {crumb.to ? <Link to={crumb.to}>{crumb.label}</Link> : crumb.label}
                    </li>
                  ))}
                </ul>
              </div>
              {bannerImage && (
                <div className="image">
                  <img src={`/assets/images/${bannerImage}`} alt={title} />
                </div>
              )}
            </div>
          </div>
          <div className="col-xl-4 col-md-12">
            <div className="page-banner-right-content">
              <div className="wrap-image">
                <img src="/assets/images/wrap2.png" alt="wrap" />
              </div>
              <div className="wrap-content">
                <p>Transforming HR operations through innovative technology and expert guidance. We help businesses streamline processes, ensure compliance, and focus on growth.</p>
                <ul className="list">
                  <li><span>Follow Us:</span></li>
                  <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="ri-facebook-fill" /></a></li>
                  <li><a href="https://x.com/" target="_blank" rel="noreferrer"><i className="ri-twitter-x-line" /></a></li>
                  <li><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i className="ri-linkedin-fill" /></a></li>
                  <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="ri-instagram-line" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
