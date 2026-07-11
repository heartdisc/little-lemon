# Defining the Bookings page

## Overview
Now that you’ve set up the foundations of the project, the next step is to begin adding the key features of the Little Lemon web app.In this exercise, you’ll set up the table booking page.

## Scenario
Currently, a visitor to the Little Lemon web app cannot reserve a table.  Your task is to improve the app by allowing the user to enter data into the form so that they can complete their registration.  Thus, you need to build a **Booking Form** component that has the following entries (form items):

- Date
- Time
- Number of guests
- Occasion (Birthday, Anniversary)
- Submit reservation button (to submit the form)

To do this, you need to implement a form in a controlled component named **BookingForm**. As you progress through the exercise, it may be helpful to revisit the following lesson items:

- Creating a form
- What are controlled components?
- Creating a Form component in React
- Event handling and embedded expressions
- Using hooks
- Observing state

## Instructions
### Step 1: Check the component and routes
If you haven’t done so already, create the **BookingForm** and **BookingPage** components. The **BookingPage** will contain the **BookingForm** component, in addition to any additional content before and after the form. 
**Note:** Before proceeding to the next step, check that your routes and navigation bar are set up to allow navigation to the booking page.

### Step 2: Code the form structure
Next, you’ll need to build the form structure in the BookingForm component. You can use the following plain HTML5 implementation as a starting point, however, you should convert it to JSX so that you can later connect the input to the React state.

```html
<form style="display: grid; max-width: 200px; gap: 20px">
   <label for="res-date">Choose date</label>
   <input type="date" id="res-date">
   <label for="res-time">Choose time</label>
   <select id="res-time ">
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
   </select>
   <label for="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests">
   <label for="occasion">Occasion</label>
   <select id="occasion">
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input type="submit" value="Make Your reservation">
</form>
```

**Note:** Keep in mind the difference between the `for` attribute in HTML and `htmlFor` in JSX. Also, remember to self-close all tags in JSX.

### Step 3: Code the form behavior
Using what you already know about **events**, **effects** and **state** in React, update your form's code to keep track of its own state.

- Define a state variable for each field in the form.
- Connect each state variable to the form fields using the `value` and `onChange` form element attributes.
- The options in the booking time field should be displayed from a list of available times. For now, create a stateful array in the component named `availableTimes` and use this state variable to populate the time select field options.

**Tip:** Use the **useState** function to declare the variable.

Now that the state is connected to the input elements, the form is ready to communicate with an API, a task you may complete in future.

### Conclusion
By completing this exercise, you’ve created the component of the Bookings page for customers to reserve a table. In the next lesson, you’ll work on lifting up the state and connecting the component to the list of available reservation times.

---

# Adding table booking state
## Overview
Previously, you set up the BookingForm component and tracked its state. However, to be truly functional, your Little Lemon reserve-a-table web app functionality will need to be able to share state across components.

## Scenario
The goal of this exercise is for you to expand the implementation of the component for the Booking page of the Little Lemon website. 

As part of the reserve-a-table web app functionality, the page will display the existing booked table times and available slots, using a list component containing several instances of a **BookingSlot** component.  

Available booking slots will be shared between the components and updated when the user submits the form. As your progress through the exercise, it may be worth revising the following lesson items in the Advanced React course:

- Working with React hooks
- Lifting up state
- Working with complex data in useState
- What is useReducer and how it differs from useState

## Instructions
### Step 1: Life state up to the Main component
As you added the table booking state to the **BookingForm** component in the previous exercise, in this exercise, you need to lift the state up to the **Main** component. This is the preferred approach in this case, as your app is relatively simple.

- Move the **availableTimes** **useState** hook from the **BookingForm** component into the **Main** component
- Pass down the **state** and **state changing functions** from the **Main** component to the **BookingForm** component using **props** in order to make **state** work across different components.

### Step 2: Update BookingForm to display available times based on the selected date
- The next step is to prepare the available times to be updated based on the date the user has selected. To do this, you will change the **availableTimes** **state** to a **reducer**.
- In the **Main** component, create a function named **updateTimes** which will handle the state change. This function will change the **availableTimes** based on the selected **date**. For now, the function can return the same **availableTimes** regardless of the date.
- Next, create a function called **initializeTimes** which will create the initial **state** for the **availableTimes**.
- Then, change **availableTimes** to a reducer using the **useReducer** function and provide the two previous functions as parameters.
- Update the **BookingForm** component to dispatch the state change when the date form field is changed.

**Tip:** Include the newly selected date in the dispatch parameter.

## Conclusion
By completing this exercise, you should now have an app for Little Lemon in which state works across several components, moving you another step closer to having a fully-functional booking page. 

Although outside the scope of this capstone project, it’s worth mentioning that you may favor more robust state management approaches in the case of larger or more complex apps.