# Little Lemon Restaurant Web Application

This is the **Little Lemon** restaurant web application, built as part of the Meta Front-End Developer Capstone Project.

The application provides restaurant details, menu browsing, an interactive mock online order page, and a dynamic table reservation system integrated with an external API.

---

## 🚀 Key Features

### 1. Table Reservation System
*   **BookingForm & BookingPage**: Architecture split into a parent container component (`Reservations.js`) and a controlled child form component (`BookingForm.js`).
*   **useReducer & Lifted State**: The `availableTimes` state is lifted to the page container and managed via a React `useReducer` hook.
*   **API Integration**: Integrates with external `fetchAPI(date)` and `submitAPI(formData)` functions. Includes a **local fallback implementation** to ensure the app continues to operate flawlessly even if browsers block the external script due to MIME-type (`text/plain`) restrictions.
*   **Confirmed Booking Page**: A dedicated confirmation route (`/booking-confirmed`) displays a success message upon submitting the reservation.

### 2. Interactive Online Ordering
*   **Dynamic Basket**: Customers can add items to their basket, dynamically adjust quantities, or remove items in real-time.
*   **Auto Recalculation**: Subtotal, delivery fee ($5.00), sales tax (8%), and grand totals recalculate automatically.
*   **Form Validation**: Checkout form validates credit card details (cardholder name, exactly 16-digit card number, valid MM/YY expiration format, and a 3-digit CVV).
*   **Delivery Tracker**: Displays a visual status tracker (Confirmed, Preparing, On the Way) upon successful order placement.

### 3. User Authentication Mockup
*   Supports switching between login and registration panels with card-style styling.
*   Performs form validation for email, password strength (minimum 6 characters), name, and matching passwords on signup.

### 4. Accessibility & Performance Optimizations
*   **Accessibility (a11y)**: Built using semantic HTML5 tags, proper heading hierarchy, matching `<label>` and `<input>` associations, and visible focus outlines for keyboard navigation.
*   **Performance (Code Splitting)**: Leverages `React.lazy()` and `<Suspense>` to load pages on-demand, reducing the initial JS bundle size. Displays a custom, brand-themed loading spinner.
*   **Lazy Loading Images**: Features `loading="lazy"` on all below-the-fold images to optimize page performance and bandwidth usage.

---

## 🛠️ Tech Stack

*   **Core**: React 19, JavaScript (ES6+), HTML5
*   **Styling**: Vanilla CSS (using CSS Custom Properties, Flexbox, Grid, and Keyframe animations)
*   **Routing**: React Router v7/v8 (Client-side routing)
*   **Testing**: Jest, React Testing Library (RTL)

---

## 💻 Getting Started

You can run the following commands in the project directory:

### `npm install`
Installs all the required dependencies and node packages.

### `npm start`
Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`
Launches the test runner in interactive watch mode. This runs unit tests for components, helper functions, and the reservation time reducer.

### `npm run build`
Builds the app for production to the `build` folder, optimising it for best performance.
