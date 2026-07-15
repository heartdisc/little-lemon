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
      <main className="container" style={{ padding: "4rem 2rem", textAlign: "center" }}>
        <h2>Item Not Found</h2>
        <p>Sorry, the menu item you are looking for does not exist.</p>
        <Link to="/menu" className="button-primary" style={{ marginTop: "2rem" }}>
          Back to Menu
        </Link>
      </main>
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
    <main className="item-detail-container container">
      <div className="item-detail-layout">
        {/* Left Column: Image wrapper */}
        <div className="item-detail-image-wrapper">
          <img src={item.image} alt={item.title} />
        </div>

        {/* Right Column: Info & selection details */}
        <div className="item-detail-info">
          <h2>{item.title}</h2>
          <p className="item-detail-desc">{item.description}</p>
          <div className="item-detail-price">${basePrice.toFixed(2)}</div>

          <div className="delivery-info">
            <span className="delivery-icon-wrapper">
              <DeliveryIcon />
            </span>
            <span className="delivery-text">Delivery time: 15-20 min</span>
          </div>

          <section className="addons-section">
            <h3>Add</h3>

            {/* Addon 1: Feta */}
            <label className="addon-row" htmlFor="addon-feta">
              <div className="addon-left">
                <input
                  type="checkbox"
                  id="addon-feta"
                  className="visually-hidden"
                  checked={extras.feta}
                  onChange={() => toggleExtra("feta")}
                />
                <span
                  className="circle-selector"
                  role="checkbox"
                  aria-checked={extras.feta}
                ></span>
                <span className="addon-name">Feta Cheese</span>
              </div>
              <div className="addon-right">
                <span className="addon-price">+$1.00</span>
              </div>
            </label>

            {/* Addon 2: Parmesan */}
            <label className="addon-row" htmlFor="addon-parmesan">
              <div className="addon-left">
                <input
                  type="checkbox"
                  id="addon-parmesan"
                  className="visually-hidden"
                  checked={extras.parmesan}
                  onChange={() => toggleExtra("parmesan")}
                />
                <span
                  className="circle-selector"
                  role="checkbox"
                  aria-checked={extras.parmesan}
                ></span>
                <span className="addon-name">Parmesan Cheese</span>
              </div>
              <div className="addon-right">
                <span className="addon-price">+$1.00</span>
              </div>
            </label>

            {/* Addon 3: Dressing */}
            <label className="addon-row" htmlFor="addon-dressing">
              <div className="addon-left">
                <input
                  type="checkbox"
                  id="addon-dressing"
                  className="visually-hidden"
                  checked={extras.dressing}
                  onChange={() => toggleExtra("dressing")}
                />
                <span
                  className="circle-selector"
                  role="checkbox"
                  aria-checked={extras.dressing}
                ></span>
                <span className="addon-name">Lemon Vinaigrette Dressing</span>
              </div>
              <div className="addon-right">
                <span className="addon-price">+$1.00</span>
              </div>
            </label>

            {/* Addon 4: Raisins */}
            <label className="addon-row" htmlFor="addon-raisins">
              <div className="addon-left">
                <input
                  type="checkbox"
                  id="addon-raisins"
                  className="visually-hidden"
                  checked={extras.raisins}
                  onChange={() => toggleExtra("raisins")}
                />
                <span
                  className="circle-selector"
                  role="checkbox"
                  aria-checked={extras.raisins}
                ></span>
                <span className="addon-name">Raisins</span>
              </div>
              <div className="addon-right">
                <span className="addon-price">+$1.00</span>
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
    </main>
  );
}
