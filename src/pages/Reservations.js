import React, { useState, useReducer } from "react";
import { useNavigate } from "react-router";
import BookingForm from "../components/BookingForm";

// Robust local fallback for fetchAPI and submitAPI in case the browser blocks
// raw.githubusercontent.com due to MIME-type restrictions (X-Content-Type-Options: nosniff)
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

const localSubmitAPI = function (formData) {
  return true;
};

// Safe access helper
const getFetchAPI = () => {
  return (typeof window !== "undefined" && window.fetchAPI) || localFetchAPI;
};

const getSubmitAPI = () => {
  return (typeof window !== "undefined" && window.submitAPI) || localSubmitAPI;
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

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("1");
  const [occasion, setOccasion] = useState("Birthday");

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!date) {
      newErrors.date = "Please select a date";
    } else {
      // Check if date is in the past
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = "Date cannot be in the past";
      }
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

  const handleTimeChange = (newTime) => {
    setTime(newTime);
    if (errors.time) {
      setErrors((prev) => ({ ...prev, time: "" }));
    }
  };

  const handleGuestsChange = (newGuests) => {
    setGuests(newGuests);
    if (errors.guests) {
      setErrors((prev) => ({ ...prev, guests: "" }));
    }
  };

  const handleOccasionChange = (newOccasion) => {
    setOccasion(newOccasion);
    if (errors.occasion) {
      setErrors((prev) => ({ ...prev, occasion: "" }));
    }
  };

  const submitForm = (formData) => {
    if (getSubmitAPI()(formData)) {
      navigate("/booking-confirmed");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      submitForm({ date, time, guests, occasion });
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

        <BookingForm
          date={date}
          time={time}
          guests={guests}
          occasion={occasion}
          onDateChange={handleDateChange}
          onTimeChange={handleTimeChange}
          onGuestsChange={handleGuestsChange}
          onOccasionChange={handleOccasionChange}
          availableTimes={availableTimes}
          onSubmit={handleSubmit}
          errors={errors}
        />
      </div>
    </main>
  );
}
