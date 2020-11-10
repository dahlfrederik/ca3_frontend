import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home"
import Jokes from "./components/Jokes"
import Quotes from "./components/Quotes"
import NoMatch from "./components/NoMatch"
import ManageJokes from "./components/ManageJokes"
import facade from "./api/apiFacade";

function LogIn({ login }) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const performLogin = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
  };
  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onChange={onChange}>
        <input placeholder="User Name" id="username" />
        <input placeholder="Password" id="password" />
        <button onClick={performLogin}>Login</button>
      </form>
    </div>
  );
}
function LoggedIn() {
  const [dataFromServer, setDataFromServer] = useState("Venter spændt...");

  useEffect(() => {
    facade.fetchData().then((data) => setDataFromServer(data.msg));
  }, []);

  return (
    <div>
      <h2>Success velkommen!</h2>
      <h3>{dataFromServer}</h3>
    </div>
  );
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  
    const logout = () => {
      facade.logout();
      setLoggedIn(false);
    };
    const login = (user, pass) => {
      facade.login(user, pass).then((res) => setLoggedIn(true));
    };
  
  return (
    <div>
      <Router>
        <Navbar
          loginMsg={loggedIn ? "Logout" : "Login"}
          isLoggedIn={loggedIn} />
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
