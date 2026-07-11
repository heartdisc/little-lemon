import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router";
import { DeliveryIcon } from "../components/Icons";
import { menuItems } from "../data/menuItems";

export default function ItemDescription() {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  // Checked state for extras
  const [extras, setExtras] = useState({
    feta: true,      // Checked by default to match design mock
    parmesan: true,
    dressing: true,
    raisins: false,
  });

  const item = menuItems.find((i) => i.id.toString() === itemId);


  if (!item) {
    return (
      <div className="container" style={{ padding: "4rem 2rem", textAlign: "center" }}>
        <h2>Item Not Found</h2>
        <p>Sorry, the menu item you are looking for does not exist.</p>
        <Link to="/menu" className="button-primary" style={{ marginTop: "2rem" }}>
          Back to Menu
        </Link>
      </div>
    );
  }

  // Toggle additions
  const toggleExtra = (key) => {
    setExtras((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Calculate prices
  const basePrice = item.price;
  const extrasCount = Object.values(extras).filter(Boolean).length;
  const unitPrice = basePrice + extrasCount * 1.0; // each extra is $1.00
  const totalPrice = (unitPrice * quantity).toFixed(2);

  const incrementQty = () => setQuantity((q) => q + 1);
  const decrementQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAdd = () => {
    alert(`Added ${quantity} x ${item.title} (Extras: ${Object.keys(extras).filter(k => extras[k]).join(", ") || "None"}) to basket! Total: $${totalPrice}`);
    navigate("/menu");
  };

  return (
    <div className="item-detail-container container">
      <div className="item-detail-layout">
        {/* Left Column: Image wrapper */}
        <div className="item-detail-image-wrapper">
          <img src={item.image} alt={item.title} className="item-detail-main-image" />
        </div>

        {/* Right Column: Info details and purchasing */}
        <div className="item-detail-info-wrapper">
          <h1 className="item-detail-main-title">{item.title}</h1>
          <p className="item-detail-main-desc">{item.description}</p>

          {/* Delivery Row */}
          <div className="delivery-info-row">
            <div className="delivery-info-left">
              <DeliveryIcon />
              <span>Delivery time: <strong>{item.deliveryTime}</strong></span>
            </div>
            <button className="change-btn">Change</button>
          </div>

          {/* Addons Section */}
          <section className="addons-section">
            <h3>Add</h3>
            
            <label className="addon-row">
              <input 
                type="checkbox" 
                checked={extras.feta} 
                onChange={() => toggleExtra("feta")} 
                className="visually-hidden"
              />
              <span>Feta</span>
              <div className="addon-right">
                <span className="addon-price">$1.00</span>
                <span 
                  className={`circle-selector ${extras.feta ? "active" : ""}`}
                  role="checkbox"
                  aria-checked={extras.feta}
                />
              </div>
            </label>

            <label className="addon-row">
              <input 
                type="checkbox" 
                checked={extras.parmesan} 
                onChange={() => toggleExtra("parmesan")} 
                className="visually-hidden"
              />
              <span>Parmesan</span>
              <div className="addon-right">
                <span className="addon-price">$1.00</span>
                <span 
                  className={`circle-selector ${extras.parmesan ? "active" : ""}`}
                  role="checkbox"
                  aria-checked={extras.parmesan}
                />
              </div>
            </label>

            <label className="addon-row">
              <input 
                type="checkbox" 
                checked={extras.dressing} 
                onChange={() => toggleExtra("dressing")} 
                className="visually-hidden"
              />
              <span>Dressing</span>
              <div className="addon-right">
                <span className="addon-price">$1.00</span>
                <span 
                  className={`circle-selector ${extras.dressing ? "active" : ""}`}
                  role="checkbox"
                  aria-checked={extras.dressing}
                />
              </div>
            </label>

            <label className="addon-row">
              <input 
                type="checkbox" 
                checked={extras.raisins} 
                onChange={() => toggleExtra("raisins")} 
                className="visually-hidden"
              />
              <span>Raisins</span>
              <div className="addon-right">
                <span className="addon-price">$1.00</span>
                <span 
                  className={`circle-selector ${extras.raisins ? "active" : ""}`}
                  role="checkbox"
                  aria-checked={extras.raisins}
                />
              </div>
            </label>
          </section>

          {/* Quantity selector & Add to cart button */}
          <div className="item-detail-actions-wrapper">
            <div className="quantity-selector">
              <button className="qty-btn" onClick={decrementQty} aria-label="Decrease quantity">−</button>
              <span className="qty-number">{quantity}</span>
              <button className="qty-btn" onClick={incrementQty} aria-label="Increase quantity">+</button>
            </div>
            <button className="add-cart-btn" onClick={handleAdd}>
              Add for ${totalPrice}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
