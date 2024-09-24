import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 
import { Link } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="auth-container login-container">
      <form className="auth-form login-form">
        <button type="button" className="close-button" onClick={handleClose}>×</button>
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="but login-button">Log In</button>
        <span>Don't have an account? <Link to="/signup">Sign Up</Link></span>
      </form>
    </div>
  );
}

function SignupPage() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="auth-container signup-container">
      <form className="auth-form signup-form">
        <button type="button" className="close-button" onClick={handleClose}>×</button>
        <h2>Sign Up</h2>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="but signup-button">Sign Up</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
}

export { LoginPage, SignupPage };
