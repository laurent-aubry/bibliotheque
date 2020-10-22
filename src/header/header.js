import React from "react";
import { NavLink } from "react-router-dom";

import "./header.css";

const Header = () => {
  return (
    <div className="main-header">
      <ul>
        <li>
          <NavLink to="/" exact>
            films
          </NavLink>
        </li>
        <li>
          <NavLink to="/musiques">Musiques</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
