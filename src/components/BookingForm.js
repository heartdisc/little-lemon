import React from "react";

export default function BookingForm({
  date,
  time,
  guests,
  occasion,
  seating,
  onDateChange,
  onTimeChange,
  onGuestsChange,
  onOccasionChange,
  onSeatingChange,
  availableTimes = [],
  onSubmit,
  errors = {},
}) {
  return (
    <form
      style={{ display: "grid", gap: "20px" }}
      onSubmit={onSubmit}
      className="reservation-form"
      noValidate
    >
      {/* Date Selector */}
      <div className="form-group">
        <label htmlFor="res-date">Choose Date</label>
        <input
          type="date"
          id="res-date"
          name="res-date"
          value={date}
          onChange={(e) => onDateChange(e.target.value)}
          className={errors.date ? "input-error" : ""}
          aria-describedby={errors.date ? "date-error" : undefined}
          required
        />
        {errors.date && (
          <span id="date-error" className="error-text" role="alert">
            {errors.date}
          </span>
        )}
      </div>

      {/* Time Selector */}
      <div className="form-group">
        <label htmlFor="res-time">Choose Time</label>
        <select
          id="res-time"
          name="res-time"
          value={time}
          onChange={(e) => onTimeChange(e.target.value)}
          className={errors.time ? "input-error" : ""}
          aria-describedby={errors.time ? "time-error" : undefined}
          required
        >
          <option value="" disabled>Select Time</option>
          {availableTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {errors.time && (
          <span id="time-error" className="error-text" role="alert">
            {errors.time}
          </span>
        )}
      </div>

      {/* Number of Diners (Guests) */}
      <div className="form-group">
        <label htmlFor="guests">Number of Diners</label>
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          max="10"
          placeholder="2"
          value={guests}
          onChange={(e) => onGuestsChange(e.target.value)}
          className={errors.guests ? "input-error" : ""}
          aria-describedby={errors.guests ? "guests-error" : undefined}
          required
        />
        {errors.guests && (
          <span id="guests-error" className="error-text" role="alert">
            {errors.guests}
          </span>
        )}
      </div>

      {/* Occasion Selector */}
      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={occasion}
          onChange={(e) => onOccasionChange(e.target.value)}
          aria-describedby={errors.occasion ? "occasion-error" : undefined}
          required
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Engagement">Engagement</option>
          <option value="Other">Other</option>
        </select>
        {errors.occasion && (
          <span id="occasion-error" className="error-text" role="alert">
            {errors.occasion}
          </span>
        )}
      </div>

      {/* Seating Options */}
      <div className="form-group">
        <label>Seating Options</label>
        <div style={{ display: "flex", gap: "20px", marginTop: "8px" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "normal", cursor: "pointer" }}>
            <input
              type="radio"
              name="seating"
              value="Standard"
              checked={seating === "Standard"}
              onChange={() => onSeatingChange("Standard")}
            />
            Standard
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "normal", cursor: "pointer" }}>
            <input
              type="radio"
              name="seating"
              value="Outside"
              checked={seating === "Outside"}
              onChange={() => onSeatingChange("Outside")}
            />
            Outside
          </label>
        </div>
      </div>

      {/* Submit / Lets go Button */}
      <input
        type="submit"
        value="Lets go"
        className="button-primary submit-btn"
        style={{ marginTop: "10px" }}
      />
    </form>
  );
}
