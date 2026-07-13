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