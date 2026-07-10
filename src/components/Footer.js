import { Link } from "react-router";


export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Logo */}
          <div className="footer-logo">
            <Link to="/">
              <img src="/logo.png" alt="Little Lemon Logo" />
            </Link>
          </div>

          {/* Column 2: Doormat Navigation */}
          <div className="footer-column">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/reservations">Reservations</Link></li>
              <li><Link to="/order">Order Online</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="footer-column">
            <h4>Contact</h4>
            <ul>
              <li>
                <p>123 Lemon Street,<br />Chicago, IL 60611</p>
              </li>
              <li>
                <a href="tel:+13125550199">+1 (312) 555-0199</a>
              </li>
              <li>
                <a href="mailto:info@littlelemon.com">info@littlelemon.com</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media Links */}
          <div className="footer-column">
            <h4>Social Media</h4>
            <ul>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter (X)</a>
              </li>
              <li>
                <a href="https://yelp.com" target="_blank" rel="noopener noreferrer">Yelp</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom copyright */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
