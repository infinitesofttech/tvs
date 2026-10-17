import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import AlertMessage from '../components/AlertMessage';
import { authService } from '../api/services/authService';

export default function LoginPage() {
  const navigate = useNavigate();
  const [tab, setTab] = useState('login');

  // Login state
  const [loginForm, setLoginForm] = useState({ identifier: '', password: '' });
  const [loginStatus, setLoginStatus] = useState({ type: '', message: '' });
  const [loginLoading, setLoginLoading] = useState(false);

  // Register state
  const [regForm, setRegForm] = useState({ username: '', email: '', password: '', confirm_password: '' });
  const [regStatus, setRegStatus] = useState({ type: '', message: '' });
  const [regLoading, setRegLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginStatus({ type: '', message: '' });
    const { data, error } = await authService.login(loginForm.identifier, loginForm.password);
    setLoginLoading(false);
    if (error) {
      setLoginStatus({ type: 'error', message: error });
    } else {
      setLoginStatus({ type: 'success', message: 'Logged in successfully. Redirecting...' });
      setTimeout(() => navigate('/'), 800);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (regForm.password !== regForm.confirm_password) {
      setRegStatus({ type: 'error', message: 'Passwords do not match.' });
      return;
    }
    setRegLoading(true);
    setRegStatus({ type: '', message: '' });
    const { data, error } = await authService.register(regForm);
    setRegLoading(false);
    if (error) {
      setRegStatus({ type: 'error', message: error });
    } else {
      setRegStatus({ type: 'success', message: 'Account created successfully. You can now log in.' });
      setRegForm({ username: '', email: '', password: '', confirm_password: '' });
    }
  };

  return (
    <>
      <PageBanner
        title="Login"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Login' }]}
        bannerImage="page-banner5.jpg"
      />

      <div className="profile-authentication-area ptb-120">
        <div className="container">
          <div className="pa-tabs-inner">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <button
                  className={`nav-link${tab === 'login' ? ' active' : ''}`}
                  onClick={() => setTab('login')}
                >Login</button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link${tab === 'register' ? ' active' : ''}`}
                  onClick={() => setTab('register')}
                >Register</button>
              </li>
            </ul>

            <div className="tab-content">
              {/* Login Tab */}
              {tab === 'login' && (
                <div className="tab-pane fade show active">
                  <form id="loginForm" onSubmit={handleLogin}>
                    <div className="form-group"><h3>Welcome to TalentVista</h3></div>
                    <div className="form-group">
                      <label>Username or email address</label>
                      <input
                        type="text" className="form-control"
                        id="loginIdentifier"
                        value={loginForm.identifier}
                        onChange={(e) => setLoginForm({ ...loginForm, identifier: e.target.value })}
                        placeholder="Enter name or email" required
                      />
                    </div>
                    <div className="form-group">
                      <label>Password *</label>
                      <input
                        type="password" className="form-control"
                        id="loginPassword"
                        value={loginForm.password}
                        onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                        placeholder="********" required
                      />
                    </div>
                    {loginStatus.message && <AlertMessage type={loginStatus.type} message={loginStatus.message} />}
                    <div className="form-group">
                      <div className="authentication-btn">
                        <button type="submit" className="default-btn" disabled={loginLoading}>
                          {loginLoading ? 'Logging in...' : 'Log In'}
                        </button>
                      </div>
                    </div>
                    <div className="form-group">
                      <Link to="/login" className="forgot-link">Forgot password?</Link>
                    </div>
                    <div className="or"><span>Or</span></div>
                    <ul className="authentication-btn-list">
                      <li><button type="button">Continue with Google</button></li>
                      <li><button type="button">Continue with Facebook</button></li>
                    </ul>
                  </form>
                </div>
              )}

              {/* Register Tab */}
              {tab === 'register' && (
                <div className="tab-pane fade show active">
                  <form id="registerForm" onSubmit={handleRegister}>
                    <div className="form-group"><h3>Create Your Account</h3></div>
                    <div className="form-group">
                      <label>Username</label>
                      <input type="text" className="form-control" id="registerUsername"
                        value={regForm.username}
                        onChange={(e) => setRegForm({ ...regForm, username: e.target.value })}
                        placeholder="Enter username" required />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" className="form-control" id="registerEmail"
                        value={regForm.email}
                        onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}
                        placeholder="Enter email address" required />
                    </div>
                    <div className="form-group">
                      <label>Your Password</label>
                      <input type="password" className="form-control" id="registerPassword"
                        value={regForm.password}
                        onChange={(e) => setRegForm({ ...regForm, password: e.target.value })}
                        placeholder="Your password" required />
                    </div>
                    <div className="form-group">
                      <label>Confirm Password</label>
                      <input type="password" className="form-control" id="registerConfirmPassword"
                        value={regForm.confirm_password}
                        onChange={(e) => setRegForm({ ...regForm, confirm_password: e.target.value })}
                        placeholder="Confirm password" required />
                    </div>
                    {regStatus.message && <AlertMessage type={regStatus.type} message={regStatus.message} />}
                    <div className="form-group">
                      <div className="authentication-btn">
                        <button type="submit" className="default-btn" disabled={regLoading}>
                          {regLoading ? 'Registering...' : 'Register Now'}
                        </button>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="checkbox1" required />
                        <label className="form-check-label" htmlFor="checkbox1">
                          I accept the <Link to="/terms-of-service">Terms and Conditions</Link>
                        </label>
                      </div>
                    </div>
                    <div className="or"><span>Or</span></div>
                    <ul className="authentication-btn-list">
                      <li><button type="button">Continue with Google</button></li>
                      <li><button type="button">Continue with Facebook</button></li>
                    </ul>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
