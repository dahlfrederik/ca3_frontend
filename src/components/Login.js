import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import facade from "../api/apiFacade";


export function LogIn({ login }) {
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
    <div class="container-fluid padding">
    <div class="row">
    <div class="col-3"></div>
        <div class="col-6 text-center">
      <h2 className="text-center mb-2 mt-5">Login</h2>
      <form onChange={onChange}>
        <input className="mb-2" placeholder="User Name" id="username" />
        <br/>
        <input className="mb-2" placeholder="Password" id="password" />
        <br/>
        <button className="btn btn-primary" onClick={performLogin}>Login</button>
      </form>
      <div class="col-3"></div>
      </div>
      </div>
    </div>
  );
}

export function LoggedIn() {
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
  

  