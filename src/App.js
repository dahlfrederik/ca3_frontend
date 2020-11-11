import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import ApiCalls from "./pages/ApiCalls";
import NoMatch from "./components/NoMatch";
import ManageUsers from "./pages/ManageUsers";
import facade from "./api/userFacade";
import { LogIn, LoggedIn } from "./pages/Login";
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
          <Route exact path="/api-calls">
            <ApiCalls />
          </Route>
          <Route path="/manage-users">
            <ManageUsers />
          </Route>
          <Route path="/login-out">
            {!loggedIn ? (
              <LogIn login={login} />
            ) : (
              <div className="container-fluid padding">
                <div className="row">
                  <div className="col-3"></div>
                  <div className="col-6 text-center">
                    <LoggedIn />
                    <button className="btn btn-primary" onClick={logout}>
                      Logout
                    </button>
                  </div>
                  <div className="col-3"></div>
                </div>
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
