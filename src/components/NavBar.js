import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar({ loginMsg, isLoggedIn, user }) {
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
      <li>{user.username}</li>
    </ul>
  );
}

export default NavBar;
