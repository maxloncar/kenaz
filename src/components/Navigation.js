import { NavLink } from 'react-router-dom';
import logo from "../images/logo.svg";
import search_icon from "../images/search_icon.svg";
import "../styles/index.min.css";

function Navigation() {
  return (
    <div className="header">
      <header className="firstNav">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="title">
          <h1>Kenaz</h1>
        </div>
          <ul className="first_nav_links">
            <li>
              <NavLink to="/">Media</NavLink>
            </li>
            <li>
              <NavLink to="/">Marketing</NavLink>
            </li>
            <li>
              <NavLink to="/">Contact</NavLink>
            </li>
          </ul>
        <div className="search_bar">
          <img src={search_icon} className="search_icon" alt="search icon" />
        </div>
      </header>
      <nav className="secondNav">
          <ul className="second_nav_links">
            <li>
              <NavLink to="/news">
                <p>NEWS</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/business">
                <p>BUSINESS</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/sport">
                <p>SPORT</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <p>LIFE</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <p>TECH</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <p>TRAVEL</p>
              </NavLink>
            </li>
          </ul>
      </nav>
    </div>
  );
}

export default Navigation;
