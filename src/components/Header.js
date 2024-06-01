import { useState } from "react";
import Logo from "../../src/logo1.png";
import { Link } from "react-router-dom";
import cart from '../images/shopping-cart.png';

// Title component for display logo
const Title = () => (
  <a href="/">
    <img className="logo" src={Logo} alt="Logo" title="Food Fire" />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  // use useState for user logged in or logged out
  const [isLoggedin, setIsLoggedin] = useState(true);

  return (
    <div className="header1">

    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" className="link">Home</Link>
          </li>
          <li>
            <Link to="/about" className="link">About</Link>
          </li>
          <li>
            <Link to="/contact" className="link">Contact</Link>
          </li>
          <li>
          <img src={cart} className="iconStyle" />
          </li>
          <li>
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedin(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => setIsLoggedin(true)}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
    </div>);
};

export default Header;
