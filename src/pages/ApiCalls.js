import apiFacade from "../api/apiFacade";
import React, { useState, useEffect } from "react";

export default function Jokes() {
  const [dataFromServer, setDataFromServer] = useState("Waiting...");

  useEffect(() => {
    apiFacade.getJokes().then((data) => setDataFromServer(data));
  }, []);

  return (
    <div className="container-fluid padding">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 text-center">
          <h2 className="text-center mt-5 mb-2">Api Calls</h2>
          <p className="text-center">{dataFromServer.chuckValue}</p>
          <p className="text-center">{dataFromServer.dadValue}</p>
          <p className="text-center">{dataFromServer.insult}</p>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
}
