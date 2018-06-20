import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-page">
      <div>SuddenlySia</div>
      <nav className="navbar">
        <ul>
          <li>About</li>
          <li>Meals</li>
          <li>Contact</li>
        </ul>
        {/* {admin && <i class="fas fa-user-circle" />} if user is admin */}
      </nav>
    </div>
  );
};

export default Header;
