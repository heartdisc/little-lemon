import { Link } from "react-router";
import heroImg from "../assets/restauranfood.jpg";
import greekSalad from "../assets/foods/greek-salad.jpg";
import bruchetta from "../assets/foods/bruchetta.svg";
import lemonDessert from "../assets/foods/lemon-dessert.jpg";
import marioA from "../assets/Mario-and-Adrian-A.jpg";
import marioB from "../assets/Mario-and-Adrian-b.jpg";

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

// Bicycle SVG Icon
function BikeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5S3.1 13.5 5 13.5s3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm14-8.5c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm-9.3-5.2h2.2l1.6-3.1 1.9 2.5c.3-.3.6-.5 1-.6L16.2 9c.4-.5.4-1.2-.1-1.7l-2.6-2.6c-.3-.3-.8-.4-1.2-.3l-3.3 1.1c-.5.2-.9.7-1 1.3L7.3 10h2.1l.6-2.6 1.8-.6L10.3 10.3c-.3.7-.1 1.5.5 2z"/>
    </svg>
  );
}

export default function Home() {
  const specials = [
    {
      id: 1,
      title: "Greek Salad",
      price: "$12.99",
      description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image: greekSalad,
    },
    {
      id: 2,
      title: "Bruchetta",
      price: "$5.99",
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      image: bruchetta,
    },
    {
      id: 3,
      title: "Lemon Dessert",
      price: "$5.00",
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image: lemonDessert,
    },
  ];

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
