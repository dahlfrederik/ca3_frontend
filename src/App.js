import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Jokes from "./components/Jokes";
import Quotes from "./components/Quotes";
import NoMatch from "./components/NoMatch";
import ManageJokes from "./components/ManageJokes";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
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
            <Login />
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
