import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <div className="header-page">
      <Link to="/">
        <div className="title">SuddenlySia</div>
      </Link>
      <div className="mobile-bars">
        <div className="bar bar1" />
        <div className="bar bar2" />
        <div className="bar bar3" />
      </div>
      <nav className="navbar">
        <ul>
          <li>About</li>
          <Link to="/meals">
            <li>Meals</li>
          </Link>
          <li>Contact</li>
        </ul>
        {/* {admin && <i class="fas fa-user-circle" />} if user is admin */}
      </nav>
      <ul className="slide">
        <li>About</li>
        <li>Meals</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Header;
