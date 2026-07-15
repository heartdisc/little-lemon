import React from "react";

export default function BookingForm({
  date,
  time,
  guests,
  occasion,
  onDateChange,
  onTimeChange,
  onGuestsChange,
  onOccasionChange,
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
      <div className="form-group">
        <label htmlFor="res-date">Choose date</label>
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

      <div className="form-group">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="res-time"
          value={time}
          onChange={(e) => onTimeChange(e.target.value)}
          aria-describedby={errors.time ? "time-error" : undefined}
          required
        >
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

      <div className="form-group">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          name="guests"
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
        </select>
        {errors.occasion && (
          <span id="occasion-error" className="error-text" role="alert">
            {errors.occasion}
          </span>
        )}
      </div>

      <input
        type="submit"
        value="Make Your reservation"
        className="button-primary submit-btn"
        style={{ marginTop: "10px" }}
      />
    </form>
  );
}
