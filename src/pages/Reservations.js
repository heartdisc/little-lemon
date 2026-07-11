import React, { useState } from "react";

export default function Reservations() {
  const [formData, setFormData] = useState({
    date: "",
    time: "18:00",
    guests: "2",
    occasion: "Birthday",
    fullName: "",
    email: "",
    requests: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.date) newErrors.date = "Please select a date";
    if (!formData.fullName.trim()) newErrors.fullName = "Please enter your name";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Please enter your email";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Check if date is in the past
    if (formData.date) {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = "Date cannot be in the past";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for that field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const getMinDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  };

  if (isSubmitted) {
    return (
      <main className="reservation-confirmation-page container">
        <div className="confirmation-card">
          <div className="confirmation-icon">🍋</div>
          <h2>Reservation Confirmed!</h2>
          <p className="confirmation-subtitle">We look forward to welcoming you to Little Lemon.</p>
          
          <div className="confirmation-details">
            <div className="detail-item">
              <strong>Guest Name:</strong> <span>{formData.fullName}</span>
            </div>
            <div className="detail-item">
              <strong>Date:</strong> <span>{formData.date}</span>
            </div>
            <div className="detail-item">
              <strong>Time:</strong> <span>{formData.time}</span>
            </div>
            <div className="detail-item">
              <strong>Number of Guests:</strong> <span>{formData.guests} {parseInt(formData.guests) === 1 ? 'person' : 'people'}</span>
            </div>
            <div className="detail-item">
              <strong>Occasion:</strong> <span>{formData.occasion}</span>
            </div>
            {formData.requests && (
              <div className="detail-item requests-item">
                <strong>Special Requests:</strong> <p>{formData.requests}</p>
              </div>
            )}
          </div>
          
          <p className="confirmation-footer">A confirmation email has been sent to <strong>{formData.email}</strong>.</p>
          
          <button onClick={() => setIsSubmitted(false)} className="button-primary">
            Book Another Table
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="reservation-page container">
      <div className="reservation-layout">
        <div className="reservation-info">
          <h1>Reserve a Table</h1>
          <p className="reservation-intro">
            Experience traditional Mediterranean recipes with a modern twist. 
            Fill out the form to guarantee your seating at our Chicago branch.
          </p>
          <div className="branch-info">
            <h3>Little Lemon Chicago</h3>
            <p>123 Lemon Street, Chicago, IL 60611</p>
            <p><strong>Phone:</strong> +1 (312) 555-0199</p>
            <p><strong>Hours:</strong> 5:00 PM - 10:00 PM Daily</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="reservation-form" noValidate>
          <div className="form-group">
            <label htmlFor="fullName">Full Name *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              className={errors.fullName ? "input-error" : ""}
              required
            />
            {errors.fullName && <span className="error-text">{errors.fullName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. john@example.com"
              className={errors.email ? "input-error" : ""}
              required
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Choose Date *</label>
              <input
                type="date"
                id="date"
                name="date"
                min={getMinDate()}
                value={formData.date}
                onChange={handleChange}
                className={errors.date ? "input-error" : ""}
                required
              />
              {errors.date && <span className="error-text">{errors.date}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="time">Choose Time *</label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              >
                <option value="17:00">5:00 PM</option>
                <option value="17:30">5:30 PM</option>
                <option value="18:00">6:00 PM</option>
                <option value="18:30">6:30 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="19:30">7:30 PM</option>
                <option value="20:00">8:00 PM</option>
                <option value="20:30">8:30 PM</option>
                <option value="21:00">9:00 PM</option>
                <option value="21:30">9:30 PM</option>
                <option value="22:00">10:00 PM</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="guests">Number of Guests *</label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
              >
                {[...Array(10).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1} {num + 1 === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="occasion">Occasion</label>
              <select
                id="occasion"
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
              >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Engagement">Engagement</option>
                <option value="Other">Other celebration</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="requests">Special Requests (Optional)</label>
            <textarea
              id="requests"
              name="requests"
              rows="3"
              value={formData.requests}
              onChange={handleChange}
              placeholder="e.g. High chair for baby, quiet table, allergy alerts..."
            />
          </div>

          <button type="submit" className="button-primary submit-btn">
            Book Table
          </button>
        </form>
      </div>
    </main>
  );
}
