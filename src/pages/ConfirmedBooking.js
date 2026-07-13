import React from "react";
import { Link } from "react-router";

export default function ConfirmedBooking() {
  return (
    <main className="reservation-confirmation-page container">
      <div className="confirmation-card">
        <div className="confirmation-icon">🍋</div>
        <h2>Booking Confirmed!</h2>
        <p className="confirmation-subtitle">
          Your reservation has been successfully submitted. We look forward to welcoming you to Little Lemon!
        </p>
        <Link to="/" className="button-primary">
          Return to Home
        </Link>
      </div>
    </main>
  );
}
