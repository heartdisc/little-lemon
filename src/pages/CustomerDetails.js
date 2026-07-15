import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";

const localSubmitAPI = function (formData) {
  return true;
};

const getSubmitAPI = () => {
  return (typeof window !== "undefined" && window.submitAPI) || localSubmitAPI;
};

export default function CustomerDetails() {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve booking details from Step 1
  const bookingData = location.state || {
    date: new Date().toISOString().split("T")[0],
    time: "18:00",
    guests: "2",
    occasion: "Birthday",
    seating: "Standard"
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [specialRequest, setSpecialRequest] = useState("");

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";
    
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(phone.trim())) {
      newErrors.phone = "Invalid phone number format";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "6-character password is all you need";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validate();
  };

  const handleInputChange = (field, value, setter) => {
    setter(value);
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTouched({
      firstName: true,
      lastName: true,
      phone: true,
      email: true,
      password: true
    });

    if (validate()) {
      const fullFormData = {
        ...bookingData,
        firstName,
        lastName,
        phone,
        email,
        specialRequest
      };

      const submitAPI = getSubmitAPI();
      if (submitAPI(fullFormData)) {
        navigate("/booking-confirmed", { state: fullFormData });
      }
    }
  };

  // Format date display
  const formatDate = (dateStr) => {
    try {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateStr).toLocaleDateString('en-US', options);
    } catch {
      return dateStr;
    }
  };

  return (
    <main className="reservation-page container">
      <div className="reservation-layout">
        
        {/* Left Column: Summary of booking details */}
        <div className="reservation-info">
          <h1>Customer Details</h1>
          <p className="reservation-intro">
            You are almost there! Please complete the form with your information to secure your table reservation.
          </p>

          <div className="branch-info" style={{ marginTop: "1rem" }}>
            <h3>Your Reservation Summary</h3>
            <p><strong>Date:</strong> {formatDate(bookingData.date)}</p>
            <p><strong>Time:</strong> {bookingData.time}</p>
            <p><strong>Diners:</strong> {bookingData.guests} {parseInt(bookingData.guests) === 1 ? "guest" : "guests"}</p>
            <p><strong>Occasion:</strong> {bookingData.occasion}</p>
            <p><strong>Seating:</strong> {bookingData.seating}</p>
          </div>
        </div>

        {/* Right Column: Customer info form */}
        <form onSubmit={handleSubmit} className="reservation-form" noValidate>
          <h3>Sign in to collect points</h3>
          <p style={{ fontSize: "0.9rem", color: "var(--color-gray)", marginBottom: "1.5rem" }}>
            Fields marked with an asterisk (*) are required.
          </p>

          {/* First Name */}
          <div className="form-group">
            <label htmlFor="first-name">First Name *</label>
            <input
              type="text"
              id="first-name"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value, setFirstName)}
              onBlur={() => handleBlur("firstName")}
              className={touched.firstName && errors.firstName ? "input-error" : ""}
              required
              aria-describedby={touched.firstName && errors.firstName ? "firstname-error" : undefined}
            />
            {touched.firstName && errors.firstName && (
              <span id="firstname-error" className="error-text" role="alert">
                {errors.firstName}
              </span>
            )}
          </div>

          {/* Last Name */}
          <div className="form-group">
            <label htmlFor="last-name">Last Name *</label>
            <input
              type="text"
              id="last-name"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value, setLastName)}
              onBlur={() => handleBlur("lastName")}
              className={touched.lastName && errors.lastName ? "input-error" : ""}
              required
              aria-describedby={touched.lastName && errors.lastName ? "lastname-error" : undefined}
            />
            {touched.lastName && errors.lastName && (
              <span id="lastname-error" className="error-text" role="alert">
                {errors.lastName}
              </span>
            )}
          </div>

          {/* Phone Number */}
          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              placeholder="e.g. +1 312 555-0199"
              value={phone}
              onChange={(e) => handleInputChange("phone", e.target.value, setPhone)}
              onBlur={() => handleBlur("phone")}
              className={touched.phone && errors.phone ? "input-error" : ""}
              required
              aria-describedby={touched.phone && errors.phone ? "phone-error" : undefined}
            />
            {touched.phone && errors.phone && (
              <span id="phone-error" className="error-text" role="alert">
                {errors.phone}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              placeholder="e.g. customer@example.com"
              value={email}
              onChange={(e) => handleInputChange("email", e.target.value, setEmail)}
              onBlur={() => handleBlur("email")}
              className={touched.email && errors.email ? "input-error" : ""}
              required
              aria-describedby={touched.email && errors.email ? "email-error" : undefined}
            />
            {touched.email && errors.email && (
              <span id="email-error" className="error-text" role="alert">
                {errors.email}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">Password *</label>
            <div style={{ display: "flex", position: "relative", alignItems: "center" }}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => handleInputChange("password", e.target.value, setPassword)}
                onBlur={() => handleBlur("password")}
                className={touched.password && errors.password ? "input-error" : ""}
                required
                style={{ paddingRight: "3rem", width: "100%" }}
                aria-describedby={touched.password && errors.password ? "password-error" : undefined}
              />
              <button
                type="button"
                className="password-toggle-btn"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                style={{
                  position: "absolute",
                  right: "10px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--color-gray)",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                  {!showPassword && <line x1="1" y1="1" x2="23" y2="23"></line>}
                </svg>
              </button>
            </div>
            {touched.password && errors.password ? (
              <span id="password-error" className="error-text" role="alert">
                {errors.password}
              </span>
            ) : (
              <span style={{ fontSize: "0.85rem", color: "var(--color-gray)", marginTop: "4px", display: "block" }}>
                6 -character password is all you need
              </span>
            )}
          </div>

          {/* Special Requests */}
          <div className="form-group">
            <label htmlFor="special-request">Special Request (optional)</label>
            <textarea
              id="special-request"
              placeholder="Any special requests (e.g. high chair, quiet table, dietary requests)"
              value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)}
              rows="3"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="button-primary submit-btn" style={{ marginTop: "1rem" }}>
            Confirm Reservation
          </button>
        </form>
      </div>
    </main>
  );
}
