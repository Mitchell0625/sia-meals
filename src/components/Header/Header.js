import React from 'react';
import './Header.css';
import { NavLink, Link } from 'react-router-dom';

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
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
        <NavLink to="/social">
          <li>Social</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>

        {/* {admin && <i class="fas fa-user-circle" />} if user is admin */}
      </nav>
      {!props.user ? (
        <div>
          <Link to="/login" className="button">
            Login
          </Link>
        </div>
      ) : (
        ''
      )}
      <ul className="slide">
        <li>About</li>
        <li>Social</li>
        <li>Contact</li>
      </ul>
      {props.user && (
        <button onClick={() => props.userSignOut()}> Leave</button>
      )}
    </div>
  );
};

export default Header;
