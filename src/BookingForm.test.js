import React from "react";
import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes } from "./pages/Reservations";

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

test("initializeTimes returns the correct initial times", () => {
  const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const result = initializeTimes();
  expect(result).toEqual(expectedTimes);
});

test("updateTimes returns the initial times regardless of input date", () => {
  const currentState = ["17:00", "18:00"];
  const action = { type: "UPDATE_TIMES", date: "2026-07-12" };
  const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  
  const result = updateTimes(currentState, action);
  expect(result).toEqual(expectedTimes);
});
