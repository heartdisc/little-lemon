import { useState } from "react";
import { Link } from "react-router";
import greekSalad from "../assets/foods/greek-salad.jpg";
import bruchetta from "../assets/foods/bruchetta.svg";
import lemonDessert from "../assets/foods/lemon-dessert.jpg";
import pasta from "../assets/foods/pasta.jpg";
import grilledFish from "../assets/foods/grilled-fish.jpg";
import hummusPlate from "../assets/restauranfood.jpg";

// Bicycle SVG Icon
function BikeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5S3.1 13.5 5 13.5s3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm14-8.5c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm-9.3-5.2h2.2l1.6-3.1 1.9 2.5c.3-.3.6-.5 1-.6L16.2 9c.4-.5.4-1.2-.1-1.7l-2.6-2.6c-.3-.3-.8-.4-1.2-.3l-3.3 1.1c-.5.2-.9.7-1 1.3L7.3 10h2.1l.6-2.6 1.8-.6L10.3 10.3c-.3.7-.1 1.5.5 2z"/>
    </svg>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");

  const menuItems = [
    {
      id: 1,
      title: "Greek Salad",
      price: "$12.99",
      category: "lunch",
      description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image: greekSalad,
    },
    {
      id: 2,
      title: "Bruchetta",
      price: "$5.99",
      category: "lunch",
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      image: bruchetta,
    },
    {
      id: 3,
      title: "Mediterranean Hummus Plate",
      price: "$8.99",
      category: "A La Carte",
      description: "Creamy hummus served with olives, roasted cherry tomatoes, falafel and warm home-made pita bread.",
      image: hummusPlate,
    },
    {
      id: 4,
      title: "Creamy Pesto Pasta",
      price: "$18.99",
      category: "mains",
      description: "Penne pasta tossed in our rich house-made basil pesto cream sauce, served with roasted pine nuts and parmesan.",
      image: pasta,
    },
    {
      id: 5,
      title: "Grilled Sea Bass",
      price: "$22.99",
      category: "mains",
      description: "Freshly caught sea bass grilled with olive oil, rosemary, and lemon. Served with seasonal grilled vegetables.",
      image: grilledFish,
    },
    {
      id: 6,
      title: "Grandma's Lemon Dessert",
      price: "$5.00",
      category: "desserts",
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be.",
      image: lemonDessert,
    },
    {
      id: 7,
      title: "Little Lemon Special",
      price: "$10.00",
      category: "specials",
      description: "Our signature dessert with fresh lemon curd, baked in a crispy puff pastry crust, dusted with powdered sugar.",
      image: lemonDessert,
    },
  ];

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
                <img src={item.image} alt={item.title} className="special-card-img" />
                <div className="special-card-body">
                  <div className="special-card-header">
                    <h3>{item.title}</h3>
                    <span className="special-card-price">{item.price}</span>
                  </div>
                  <p className="special-card-desc">{item.description}</p>
                  <Link to="/order" className="special-card-delivery">
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
