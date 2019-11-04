import React from 'react'
import { NavLink} from "react-router-dom";
import './Header.css'

function Header() {
  return(
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <NavLink to="/home" className="navbar-brand">The Skinner Daily</NavLink>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink to="/home" className="nav-link">Home <span className="sr-only">(current)</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/business" className="nav-link">Business</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/technology" className="nav-link">Technology</NavLink>
          </li>
        </ul>
    </nav>
  )
}

export default Header;
