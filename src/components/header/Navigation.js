import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import search_icon from "../../images/search_icon.svg";
import "../../styles/index.min.css";

function Navigation() {
  return (
    <div className="header">
      <header className="firstNav">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="title">
          <Link to="/">
            <h1>Kenaz</h1>
          </Link>
        </div>
        <ul className="first_nav_links">
          <li>
            <Link to="/">Media</Link>
          </li>
          <li>
            <Link to="/">Marketing</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
        <div className="search_bar">
          <img src={search_icon} className="search_icon" alt="search icon" />
        </div>
      </header>
      <nav className="secondNav">
        <div className="secondNavigation">
          <ul className="second_nav_links">
            <li>
              <Link to="/category">NEWS</Link>
            </li>
            <li>
              <Link to="/category">BUSINESS</Link>
            </li>
            <li>
              <Link to="/category">SPORT</Link>
            </li>
            <li>
              <Link to="/category">LIFE</Link>
            </li>
            <li>
              <Link to="/category">TECH</Link>
            </li>
            <li>
              <Link to="/category">TRAVEL</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
