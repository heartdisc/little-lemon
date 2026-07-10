import { Link } from "react-router";
import heroImg from "../assets/restauranfood.jpg";
import marioA from "../assets/Mario-and-Adrian-A.jpg";
import marioB from "../assets/Mario-and-Adrian-b.jpg";
import { BikeIcon } from "../components/Icons";
import { menuItems } from "../data/menuItems";

// Custom offline-friendly Avatar component using initials and style colors
function Avatar({ color, text }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      style={{ width: 50, height: 50, borderRadius: "50%", minWidth: 50 }}
    >
      <rect width="100" height="100" fill={color} />
      <text 
        x="50%" 
        y="50%" 
        dominantBaseline="central" 
        textAnchor="middle" 
        fill="#ffffff" 
        fontSize="36" 
        fontFamily="Karla" 
        fontWeight="bold"
      >
        {text}
      </text>
    </svg>
  );
}


export default function Home() {
  const specials = menuItems.filter((item) => item.isSpecial);

  const testimonials = [
    {
      id: 1,
      name: "Sara L.",
      rating: "⭐⭐⭐⭐⭐",
      avatarText: "SL",
      avatarColor: "#495E57",
      text: "Seriously the best Greek salad I've ever had! Fresh ingredients and authentic taste.",
    },
    {
      id: 2,
      name: "Mark K.",
      rating: "⭐⭐⭐⭐⭐",
      avatarText: "MK",
      avatarColor: "#EE9972",
      text: "The Bruschetta is simple but absolutely packed with flavor. The garlic olive oil blend is perfection.",
    },
    {
      id: 3,
      name: "Brandon O.",
      rating: "⭐⭐⭐⭐⭐",
      avatarText: "BO",
      avatarColor: "#F4CE14",
      text: "The atmosphere is warm, and the Lemon Dessert is out of this world. Highly recommend!",
    },
    {
      id: 4,
      name: "Selena G.",
      rating: "⭐⭐⭐⭐⭐",
      avatarText: "SG",
      avatarColor: "#333333",
      text: "Authentic Mediterranean recipes served with a modern twist. The service was top-notch.",
    },
  ];

  return (
    <main>
      {/* 1. Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <Link to="/reservations" className="button-primary">
              Reserve a Table
            </Link>
          </div>
          <div className="hero-image-container">
            <img src={heroImg} alt="Little Lemon Restaurant Food" />
          </div>
        </div>
      </section>

      {/* 2. Specials Section */}
      <section className="specials">
        <div className="container">
          <div className="specials-header">
            <h2>This weeks specials!</h2>
            <Link to="/menu" className="button-primary">
              Online Menu
            </Link>
          </div>
          
          <div className="specials-grid">
            {specials.map((item) => (
              <article key={item.id} className="special-card">
                <Link to={`/menu/${item.id}`} className="special-card-img-link">
                  <img src={item.image} alt={item.title} className="special-card-img" />
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

      {/* 3. Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2>Testimonials</h2>
          
          <div className="testimonials-grid">
            {testimonials.map((item) => (
              <div key={item.id} className="testimonial-card">
                <div className="testimonial-stars">{item.rating}</div>
                <div className="testimonial-user">
                  <Avatar color={item.avatarColor} text={item.avatarText} />
                  <div className="testimonial-user-info">
                    <h4>{item.name}</h4>
                  </div>
                </div>
                <p className="testimonial-text">"{item.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. About Section */}
      <section className="about">
        <div className="container about-content">
          <div className="about-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.
            </p>
            <p>
              Owned by two Italian brothers, Mario and Adrian, who moved to Chicago to start their culinary dream. They bring traditional recipes from their family kitchen, updated with modern culinary techniques.
            </p>
          </div>
          <div className="about-images">
            <img src={marioA} alt="Mario and Adrian A" className="about-img-back" />
            <img src={marioB} alt="Mario and Adrian B" className="about-img-front" />
          </div>
        </div>
      </section>
    </main>
  );
}
