import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar({ loginMsg, isLoggedIn }) {
  return (
    <ul className="header">
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/jokes">
          Jokes
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/quotes">
          Quotes
        </NavLink>
      </li>
      {isLoggedIn && (
        <>
          <li>
            <NavLink activeClassName="active" to="/manage-jokes">
              Manage Jokes
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink activeClassName="active" to="/login-out">
          {loginMsg}
        </NavLink>
      </li>
    </ul>
  );
}

export default NavBar;
