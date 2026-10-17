import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="error-area ptb-120" style={{ textAlign: 'center', padding: '120px 20px' }}>
      <div className="container">
        <img src="/assets/images/error.png" alt="404" style={{ maxWidth: '300px', marginBottom: '30px' }} />
        <h2 style={{ fontSize: '48px', fontWeight: '800' }}>Page Not Found</h2>
        <p style={{ fontSize: '18px', marginBottom: '30px', color: '#666' }}>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="default-btn">Go Back Home</Link>
      </div>
    </div>
  );
}
