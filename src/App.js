import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Jokes from "./components/Jokes";
import Quotes from "./components/Quotes";
import NoMatch from "./components/NoMatch";
import ManageJokes from "./components/ManageJokes";
import facade from "./api/apiFacade";
import { LogIn, LoggedIn } from "./components/Login";
import jwt_decode from "jwt-decode";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
  };
  const login = (user, pass) => {
    facade.login(user, pass).then((res) => setLoggedIn(true));
  };

  useEffect(() => {
    if (loggedIn) {
      const token = facade.getToken();
      const decodedToken = jwt_decode(token);
      setUser(decodedToken);
      console.log(user);
    }
  }, [loggedIn]);

  return (
    <div>
      <Router>
        <Navbar
          loginMsg={loggedIn ? "Logout" : "Login"}
          isLoggedIn={loggedIn}
          user={user}
        />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/jokes">
            <Jokes />
          </Route>
          <Route exact path="/quotes">
            <Quotes />
          </Route>
          <Route path="/manage-jokes">
            <ManageJokes />
          </Route>
          <Route path="/login-out">
            {!loggedIn ? (
              <LogIn login={login} />
            ) : (
              <div>
                <LoggedIn />
                <button onClick={logout}>Logout</button>
              </div>
            )}
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
