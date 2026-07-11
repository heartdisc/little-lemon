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
          required
        />
        {errors.date && <span className="error-text">{errors.date}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="res-time"
          value={time}
          onChange={(e) => onTimeChange(e.target.value)}
          required
        >
          {availableTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {errors.time && <span className="error-text">{errors.time}</span>}
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
          required
        />
        {errors.guests && <span className="error-text">{errors.guests}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={occasion}
          onChange={(e) => onOccasionChange(e.target.value)}
          required
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {errors.occasion && <span className="error-text">{errors.occasion}</span>}
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
