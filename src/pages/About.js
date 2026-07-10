import { Link } from "react-router";
import aboutHeroImg from "../assets/restaurant.jpg";
import foundersImg from "../assets/Mario-and-Adrian-b.jpg";
import chefImg from "../assets/restaurant-chef-B.jpg";

export default function About() {
  return (
    <main className="about-page">
      {/* 1. About Hero */}
      <section className="about-hero">
        <div className="container about-hero-content">
          <div className="about-hero-text">
            <h1>About Us</h1>
            <h2>Our Story & Mediterranean Passion</h2>
            <p>
              Discover the heritage, culinary philosophy, and Italian family traditions behind Chicago's favorite neighborhood bistro.
            </p>
            <Link to="/menu" className="button-primary">
              View Our Menu
            </Link>
          </div>
          <div className="about-hero-image">
            <img src={aboutHeroImg} alt="Little Lemon Restaurant Interior" />
          </div>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section className="about-story">
        <div className="container about-story-content">
          <div className="about-story-text">
            <h3>Our Heritage</h3>
            <h2>The Culinary Journey of Mario & Adrian</h2>
            <p>
              Little Lemon was founded in 2015 by Italian brothers Mario and Adrian. Raised in a small coastal village in Italy, they spent their childhood in their family's kitchen, learning traditional Mediterranean cooking techniques and secret spice blends handed down from their grandmother.
            </p>
            <p>
              When they relocated to Chicago, they wanted to bring the authentic taste of the Italian coast with them. Driven by their passion, they opened Little Lemon to offer Chicagoans authentic, home-cooked Mediterranean dishes.
            </p>
            <p>
              Mario leads the kitchen as Head Chef, making fresh pasta and marinades daily. Adrian leads the front of house, curation of fine wines, and custom cocktail selection, ensuring every guest feels at home.
            </p>
          </div>
          <div className="about-story-image">
            <img src={foundersImg} alt="Co-founders Mario and Adrian" />
          </div>
        </div>
      </section>

      {/* 3. Philosophy Section */}
      <section className="about-philosophy">
        <div className="container about-philosophy-content">
          <div className="about-philosophy-image">
            <img src={chefImg} alt="Cooking fresh dishes" />
          </div>
          <div className="about-philosophy-text">
            <h3>Our Philosophy</h3>
            <h2>Traditional Recipes with a Modern Twist</h2>
            <p>
              At Little Lemon, we believe that food is a shared experience. Our menu revolves around using locally-sourced, organic ingredients to craft timeless Mediterranean recipes, refined with modern culinary techniques.
            </p>
            <div className="philosophy-bullets">
              <div className="philosophy-bullet">
                <span className="bullet-icon">🍋</span>
                <div>
                  <h4>100% Fresh Ingredients</h4>
                  <p>We work directly with organic farms around Illinois to bring fresh ingredients to your table daily.</p>
                </div>
              </div>
              <div className="philosophy-bullet">
                <span className="bullet-icon">🍷</span>
                <div>
                  <h4>Curated Wine Selection</h4>
                  <p>Our wine menu features authentic Italian and French selections carefully curated by Adrian.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
