import React, { useState } from "react";
import { Link } from "react-router";
import greekSalad from "../assets/foods/greek-salad.jpg";
import lemonDessert from "../assets/foods/lemon-dessert.jpg";

export default function Order() {
  // Initialize with some mock items in the basket
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Greek Salad",
      price: 12.99,
      quantity: 1,
      image: greekSalad,
      description: "Crispy lettuce, peppers, olives, feta cheese, garlic croutons."
    },
    {
      id: 6,
      title: "Grandma's Lemon Dessert",
      price: 5.00,
      quantity: 2,
      image: lemonDessert,
      description: "Fresh lemon curd, puff pastry, dusted with powdered sugar."
    }
  ]);

  const [paymentDetails, setPaymentDetails] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);

  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const subtotal = calculateSubtotal();
  const deliveryFee = subtotal > 0 ? 5.00 : 0.00;
  const tax = subtotal * 0.08; // 8% sales tax
  const total = subtotal + deliveryFee + tax;

  const validatePayment = () => {
    const newErrors = {};
    if (!paymentDetails.cardName.trim()) newErrors.cardName = "Required";
    if (!/^\d{16}$/.test(paymentDetails.cardNumber.replace(/\s/g, ""))) {
      newErrors.cardNumber = "Invalid card number (16 digits required)";
    }
    if (!/^\d{2}\/\d{2}$/.test(paymentDetails.expiry)) {
      newErrors.expiry = "MM/YY format required";
    }
    if (!/^\d{3}$/.test(paymentDetails.cvv)) {
      newErrors.cvv = "3 digits required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    if (validatePayment()) {
      setOrderPlaced(true);
      setCartItems([]);
    }
  };

  if (orderPlaced) {
    return (
      <main className="order-confirmation-page container">
        <div className="confirmation-card">
          <div className="confirmation-icon">🍕</div>
          <h2>Order Received!</h2>
          <p className="confirmation-subtitle">Your delicious Mediterranean meal is on its way.</p>
          <div className="delivery-tracker">
            <div className="tracker-stage active">
              <span className="stage-icon">📝</span>
              <p>Confirmed</p>
            </div>
            <div className="tracker-line" />
            <div className="tracker-stage">
              <span className="stage-icon">🍳</span>
              <p>Preparing</p>
            </div>
            <div className="tracker-line" />
            <div className="tracker-stage">
              <span className="stage-icon">🛵</span>
              <p>On the Way</p>
            </div>
          </div>
          <p className="delivery-time-estimate">Estimated Delivery Time: <strong>30-40 minutes</strong></p>
          <Link to="/menu" className="button-primary">
            Order More Food
          </Link>
        </div>
      </main>
    );
  }

  if (cartItems.length === 0) {
    return (
      <main className="order-page container empty-cart-container">
        <h2>Your Basket is Empty</h2>
        <p>You haven't added any items to your basket yet.</p>
        <Link to="/menu" className="button-primary" style={{ marginTop: "1.5rem" }}>
          Browse Our Menu
        </Link>
      </main>
    );
  }

  return (
    <main className="order-page container">
      <h1>Your Order</h1>
      <div className="order-layout">
        {/* Left Column: Basket Items list */}
        <section className="basket-section">
          <h2>Items in your basket</h2>
          <div className="basket-list">
            {cartItems.map((item) => (
              <div key={item.id} className="basket-item">
                <img src={item.image} alt={item.title} className="basket-item-img" />
                <div className="basket-item-info">
                  <h3>{item.title}</h3>
                  <p className="basket-item-desc">{item.description}</p>
                  <span className="basket-item-price">${item.price.toFixed(2)}</span>
                </div>
                <div className="basket-item-actions">
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, -1)} aria-label="Decrease quantity">−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} aria-label="Increase quantity">+</button>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="remove-btn" aria-label="Remove item">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Right Column: Checkout Summary & Payment Form */}
        <aside className="checkout-sidebar">
          <div className="summary-card">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Delivery Fee</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Sales Tax (8%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="summary-row total-row">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <form onSubmit={handlePlaceOrder} className="payment-form" noValidate>
            <h2>Checkout Details</h2>
            <div className="form-group">
              <label htmlFor="cardName">Name on Card *</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={paymentDetails.cardName}
                onChange={handleInputChange}
                placeholder="e.g. John Doe"
                className={errors.cardName ? "input-error" : ""}
                required
              />
              {errors.cardName && <span className="error-text">{errors.cardName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="cardNumber">Card Number *</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={paymentDetails.cardNumber}
                onChange={handleInputChange}
                placeholder="1234 5678 1234 5678"
                maxLength="19"
                className={errors.cardNumber ? "input-error" : ""}
                required
              />
              {errors.cardNumber && <span className="error-text">{errors.cardNumber}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="expiry">Expiry Date *</label>
                <input
                  type="text"
                  id="expiry"
                  name="expiry"
                  value={paymentDetails.expiry}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                  maxLength="5"
                  className={errors.expiry ? "input-error" : ""}
                  required
                />
                {errors.expiry && <span className="error-text">{errors.expiry}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="cvv">CVV *</label>
                <input
                  type="password"
                  id="cvv"
                  name="cvv"
                  value={paymentDetails.cvv}
                  onChange={handleInputChange}
                  placeholder="123"
                  maxLength="3"
                  className={errors.cvv ? "input-error" : ""}
                  required
                />
                {errors.cvv && <span className="error-text">{errors.cvv}</span>}
              </div>
            </div>

            <button type="submit" className="button-primary checkout-btn">
              Place Order - ${total.toFixed(2)}
            </button>
          </form>
        </aside>
      </div>
    </main>
  );
}
