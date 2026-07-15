import React, { useState, useReducer } from "react";
import { useNavigate } from "react-router";

// Robust local fallback for fetchAPI in case browser blocks external script
const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

const localFetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};

// Safe access helper
const getFetchAPI = () => {
  return (typeof window !== "undefined" && window.fetchAPI) || localFetchAPI;
};

export function initializeTimes() {
  return getFetchAPI()(new Date());
}

export function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return getFetchAPI()(new Date(action.date));
    default:
      return state;
  }
}

export default function Reservations() {
  const navigate = useNavigate();

  // Set default date to today
  const todayStr = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(todayStr);
  const [time, setTime] = useState("18:00");
  const [guests, setGuests] = useState("2");
  const [occasion, setOccasion] = useState("Birthday");
  const [seating, setSeating] = useState("Standard");

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!date) {
      newErrors.date = "Please select a date";
    } else {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = "Date cannot be in the past";
      }
    }

    if (!time) {
      newErrors.time = "Please select a time";
    }

    const parsedGuests = parseInt(guests);
    if (!guests || isNaN(parsedGuests) || parsedGuests < 1 || parsedGuests > 10) {
      newErrors.guests = "Number of guests must be between 1 and 10";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
    dispatch({ type: "UPDATE_TIMES", date: newDate });
    if (errors.date) {
      setErrors((prev) => ({ ...prev, date: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Forward the booking details to the customer details page
      navigate("/reservations/details", {
        state: { date, time, guests, occasion, seating }
      });
    }
  };

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
          {/* Date Selector */}
          <div className="form-group">
            <label htmlFor="res-date">Choose Date</label>
            <input
              type="date"
              id="res-date"
              value={date}
              onChange={(e) => handleDateChange(e.target.value)}
              className={errors.date ? "input-error" : ""}
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
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className={errors.time ? "input-error" : ""}
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
              min="1"
              max="10"
              placeholder="2"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className={errors.guests ? "input-error" : ""}
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
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              required
            >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Engagement">Engagement</option>
              <option value="Other">Other</option>
            </select>
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
                  onChange={() => setSeating("Standard")}
                />
                Standard
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "normal", cursor: "pointer" }}>
                <input
                  type="radio"
                  name="seating"
                  value="Outside"
                  checked={seating === "Outside"}
                  onChange={() => setSeating("Outside")}
                />
                Outside
              </label>
            </div>
          </div>

          {/* Lets go Button */}
          <button type="submit" className="button-primary submit-btn">
            Lets go
          </button>
        </form>
      </div>
    </main>
  );
}
