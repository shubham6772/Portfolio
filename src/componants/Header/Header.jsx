import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
 

  return (
    <header className="header">
      <nav className="nav container">
        <a className="nav__logo">Shubham</a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list ">
            <li className="nav__item">
              <NavLink to="/" className={({isActive})=> isActive ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-estate nav__icon "></i> Home
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink to="/about" className={({isActive})=> isActive ? "nav__link active-link" : "nav__link"} >
                <i className="uil uil-user nav__icon "></i> About
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/skills"  className={({isActive})=> isActive ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-file-alt nav__icon "> </i> Skills
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/services"  className={({isActive})=> isActive ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-briefcase-alt nav__icon "> </i> Services
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"> </i> Portfolio
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink to="/contact" className="nav__link">
                <i className="uil uil-message nav__icon"> </i> Contact
              </NavLink>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
