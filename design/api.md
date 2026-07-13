# Connecting the bookings page to the API

## Overview
In this exercise, you will connect the Bookings page of the Little Lemon restaurant to the API.

## Scenario
Now that the Booking page is set up, you need to make sure that customers do not reserve a table that has already been reserved. Double booking a table would lead to a poor customer experience. By updating the web app to retrieve the available booking times for an API, you can help ensure that Little Lemon’s customers can reserve a table without issue. The goal of this exercise is for you to work with data in your Little Lemon restaurant app by connecting the Bookings page to the booking API. As you progress through the exercise, the following lesson items from the Advanced React course are worth revisiting:
- What are side effects?
- Data fetching using hooks

## Instructions
### Step 1: Set up the API library
To prepare for the completion of this exercise, you need to include the API JavaScript file in your code.

- Add the following code to your index.html.

```html
<script src="https://raw.githubusercontent.com/courseraap/capstone/main/api.js"></script>
```
- The API has two functions that you can use in your code: 

  - `fetchAPI(date)` - This function accepts a date as a parameter and returns an array of available reservation times for the provided date 
  - `submitAPI(formData)` - This function accepts the booking form data as a parameter and will return true if the data was successfully submitted.

### Step 2: Update the booking form to display the available times from the API
- Update the `initializeTimes` function that you previously created to use the `fetchData` API function to return the available times for today’s date. 

**Tip**: You can create a `Date` object to represent today’s date.

- Update the `updateTimes` function that you previously created to use the `fetchData` API function. Remember, you dispatched the selected date to the `updateTimes` function. This should be passed to the `fetchData` function as a parameter.

### Step 3: Test the behavior

Run your web app and check that the available times on the booking form change when you select a different date.

### Conclusion
By completing this exercise, the Bookings page of your app is connected to an API and the customer now has an improved experience of the Little Lemon restaurant.

---

# Submitting the new booking page to the API

## Overview
Now that the reservation times are updated based on the date selected, the next step is to submit the booking form to the API.

## Scenario
In your web app for Little Lemon, users will want to create new bookings. In previous exercises, you set up the form and connected the state. The next step is to submit the booking form to the API and notify the user when the booking is successful. In preparation for this exercise, you may find it helpful to revisit the following lesson items:
- Creating a form component in React
- Working with React hooks
- Data Flow in React

## Instructions
### Step 1: Set up a booking confirmation page
- Create a component named ConfirmedBooking that will represent the booking confirmation page.
- Add JSX to display a message that the booking has been confirmed.
- Add a route that will allow navigation to the booking confirmation page.

### Step 2: Set up the function for submitting the form
- In the Main component, set up a function named submitForm that accepts the form data as a parameter and will submit it to the submitAPI (formData) API set up in the previous exercise. 
- If the submitAPI(formData) API call returns true, navigate to the booking confirmed page.

**Tip:** You can use the `useNavigate()` hook to navigate via code.

### Step 3: Update the submit event handler
- Pass the submitForm function to the BookingForm component via props.
- Update the button submit event handler to call the submitForm function, passing the form data as a parameter.

### Step 4: Test the app
- Run the app and verify that the booking confirmation page is displayed when you submit the form. 

### Conclusion
In this exercise, you connected the form submission to the API. Little Lemon customers can now successfully reserve a table. However, this is not the end of developing the web app.  As a developer, you must make sure that the web app is well-tested and meets the user experience requirements. You will work on this in the next exercises.

---

# Update the unit tests for the API queries

## Overview
Now that the functionality of the booking form is set up, it is important to add and update unit tests to automate verifying the expected behavior of the web app.

## Scenario
In this exercise, you will update your previous unit tests for `initializeTimes` and `updateTimes`. Unit testing is an important part of software development. Creating and maintaining your tests will help ensure that you deliver a quality product to Little Lemon's owner.

## Instructions
### Step 1: Update the test for initializeTimes
Now that the `initializeTimes` function calls the `fetchAPI` function, the unit tests need to be updated. In fact, if you run the tests now, you will discover that the existing test is failing. For testing purposes, the `fetchAPI` function will return a non-empty array of available booking times.

### Step 2: Update the test for updateTimes
Similar to the previous step, the test you previously created for `updateTimes` will fail. You will need to update the test to include a pre-selected date as part of the dispatch data.

### Step 3: Run the tests
Run all unit tests and verify that they are succeeding.

## Conclusion
By completing this exercise, you demonstrated your ability to implement unit tests for the API queries.