import React from "react";
import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

jest.mock("react-router", () => ({
  useNavigate: () => jest.fn(),
}));

const { initializeTimes, updateTimes } = require("./pages/Reservations");

// Mock the external API that is loaded via <script> tag in index.html
beforeEach(() => {
  window.fetchAPI = jest.fn((date) => {
    // Simulate the API returning available times based on the date
    return ["17:00", "17:30", "18:00", "19:00", "20:00"];
  });
});

afterEach(() => {
  delete window.fetchAPI;
});

test("Renders the BookingForm heading/labels", () => {
  render(
    <BookingForm
      date=""
      time="18:00"
      guests="1"
      occasion="Birthday"
      availableTimes={["17:00", "18:00"]}
      onDateChange={jest.fn()}
      onTimeChange={jest.fn()}
      onGuestsChange={jest.fn()}
      onOccasionChange={jest.fn()}
      onSubmit={jest.fn()}
    />
  );

  // Check for the text/labels
  const dateLabel = screen.getByText(/Choose date/i);
  expect(dateLabel).toBeInTheDocument();

  const timeLabel = screen.getByText(/Choose time/i);
  expect(timeLabel).toBeInTheDocument();

  const guestsLabel = screen.getByText(/Number of guests/i);
  expect(guestsLabel).toBeInTheDocument();

  const occasionLabel = screen.getByText(/Occasion/i);
  expect(occasionLabel).toBeInTheDocument();

  const submitButton = screen.getByRole("button", { name: /Make Your reservation/i });
  expect(submitButton).toBeInTheDocument();
});

test("initializeTimes returns a non-empty array from fetchAPI", () => {
  const result = initializeTimes();
  expect(result).toBeInstanceOf(Array);
  expect(result.length).toBeGreaterThan(0);
  expect(window.fetchAPI).toHaveBeenCalledWith(expect.any(Date));
});

test("updateTimes returns available times for the selected date via fetchAPI", () => {
  const currentState = ["17:00", "18:00"];
  const selectedDate = "2026-07-15";
  const action = { type: "UPDATE_TIMES", date: selectedDate };

  const result = updateTimes(currentState, action);
  expect(result).toBeInstanceOf(Array);
  expect(result.length).toBeGreaterThan(0);
  expect(window.fetchAPI).toHaveBeenCalledWith(new Date(selectedDate));
});
