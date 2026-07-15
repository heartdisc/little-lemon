import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Footer from './components/Footer';
import Header from './components/Header';
import LoadingSpinner from './components/LoadingSpinner';
import ScrollToTop from './components/ScrollToTop';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Menu = React.lazy(() => import('./pages/Menu'));
const ItemDescription = React.lazy(() => import('./pages/ItemDescription'));
const Reservations = React.lazy(() => import('./pages/Reservations'));
const Order = React.lazy(() => import('./pages/Order'));
const Login = React.lazy(() => import('./pages/Login'));
const ConfirmedBooking = React.lazy(() => import('./pages/ConfirmedBooking'));
const CustomerDetails = React.lazy(() => import('./pages/CustomerDetails'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:itemId" element={<ItemDescription />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/reservations/details" element={<CustomerDetails />} />
          <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
