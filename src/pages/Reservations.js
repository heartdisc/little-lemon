import React, { useState, useReducer } from "react";
import BookingForm from "../components/BookingForm";

export function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

export function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      // The instructions say "For now, the function can return the same availableTimes regardless of the date."
      return initializeTimes();
    default:
      return state;
  }
}

export default function Reservations() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("18:00");
  const [guests, setGuests] = useState("1");
  const [occasion, setOccasion] = useState("Birthday");

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const resetForm = () => {
    setDate("");
    setTime("18:00");
    setGuests("1");
    setOccasion("Birthday");
    setIsSubmitted(false);
    setErrors({});
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
              <strong>Date:</strong> <span>{date}</span>
            </div>
            <div className="detail-item">
              <strong>Time:</strong> <span>{time}</span>
            </div>
            <div className="detail-item">
              <strong>Number of Guests:</strong> <span>{guests} {parseInt(guests) === 1 ? 'person' : 'people'}</span>
            </div>
            <div className="detail-item">
              <strong>Occasion:</strong> <span>{occasion}</span>
            </div>
          </div>
          
          <button onClick={resetForm} className="button-primary">
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
