import { useState } from "react";
import { Link } from "react-router";
import { BikeIcon } from "../components/Icons";
import { menuItems } from "../data/menuItems";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "lunch", label: "Lunch" },
    { id: "mains", label: "Mains" },
    { id: "desserts", label: "Desserts" },
    { id: "A La Carte", label: "A La Carte" },
    { id: "specials", label: "Specials" }
  ];

  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <main className="menu-page">
      {/* 1. Menu Hero */}
      <section className="menu-hero">
        <div className="container">
          <h1>Our Menu</h1>
          <p>Fresh, healthy, and authentic Mediterranean flavours crafted with love</p>
        </div>
      </section>

      {/* 2. Menu Content Section */}
      <section className="menu-section">
        <div className="container">
          <h2 className="order-delivery-title">Order for Delivery!</h2>
          
          {/* Category Tabs Container */}
          <div className="menu-tabs-container">
            <ul className="menu-tabs">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    className={`menu-tab-btn ${activeCategory === cat.id ? "active" : ""}`}
                    onClick={() => setActiveCategory(cat.id)}
                    aria-pressed={activeCategory === cat.id}
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Items Grid */}
          <div className="menu-grid">
            {filteredItems.map((item) => (
              <article key={item.id} className="special-card">
                <Link to={`/menu/${item.id}`} className="special-card-img-link">
                  <img src={item.image} alt={item.title} className="special-card-img" loading="lazy" />
                </Link>
                <div className="special-card-body">
                  <div className="special-card-header">
                    <h3>
                      <Link to={`/menu/${item.id}`}>{item.title}</Link>
                    </h3>
                    <span className="special-card-price">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="special-card-desc">{item.description}</p>
                  <Link to={`/menu/${item.id}`} className="special-card-delivery">
                    Order a delivery <BikeIcon />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
