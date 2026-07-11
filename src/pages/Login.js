import React, { useState } from "react";
import { Link } from "react-router";

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
  });

  const [errors, setErrors] = useState({});
  const [loggedInUser, setLoggedInUser] = useState(null);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      newErrors.email = "Please enter your email";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Please enter your password";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (isSignUp) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = "Please enter your name";
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoggedInUser(isSignUp ? formData.fullName : formData.email.split("@")[0]);
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      fullName: "",
    });
  };

  if (loggedInUser) {
    return (
      <main className="login-page container">
        <div className="login-card success-card">
          <div className="success-icon">🍋</div>
          <h2>Welcome, {loggedInUser}!</h2>
          <p className="login-subtitle">You have successfully logged in to Little Lemon.</p>
          <div className="success-actions">
            <Link to="/menu" className="button-primary">
              Browse Menu
            </Link>
            <button onClick={handleLogout} className="button-secondary" style={{ marginTop: "1rem" }}>
              Logout
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="login-page container">
      <div className="login-card">
        <h2>{isSignUp ? "Create an Account" : "Welcome Back"}</h2>
        <p className="login-subtitle">
          {isSignUp 
            ? "Sign up to earn points and track your food deliveries" 
            : "Sign in to access your details and quick checkout"}
        </p>

        <form onSubmit={handleSubmit} noValidate>
          {isSignUp && (
            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="e.g. John Doe"
                className={errors.fullName ? "input-error" : ""}
                required
              />
              {errors.fullName && <span className="error-text">{errors.fullName}</span>}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="e.g. john@example.com"
              className={errors.email ? "input-error" : ""}
              required
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Min. 6 characters"
              className={errors.password ? "input-error" : ""}
              required
            />
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>

          {isSignUp && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password *</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Repeat password"
                className={errors.confirmPassword ? "input-error" : ""}
                required
              />
              {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
            </div>
          )}

          {!isSignUp && (
            <div className="login-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#forgot" className="forgot-password-link">
                Forgot password?
              </a>
            </div>
          )}

          <button type="submit" className="button-primary login-btn">
            {isSignUp ? "Sign Up" : "Log In"}
          </button>
        </form>

        <p className="toggle-auth-prompt">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button 
            type="button" 
            onClick={() => {
              setIsSignUp(!isSignUp);
              setErrors({});
            }} 
            className="toggle-auth-btn"
          >
            {isSignUp ? "Log In" : "Sign Up"}
          </button>
        </p>
      </div>
    </main>
  );
}
