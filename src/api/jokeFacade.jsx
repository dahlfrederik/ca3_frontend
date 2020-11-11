import SERVER_URL from "../util/Settings";

function GetJokes() {
  return fetch(SERVER_URL + "/api/jokes")
    .then(handleHttpErrors)
    .catch((err) => {
      if (err.status) {
        err.fullError.then((e) => console.log(e.message));
      } else {
        console.log("Network error");
      }
    });
}

const jokeFacade = {
  GetJokes,
};

function makeOptions(method, body) {
  var opts = {
    method: method,
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  };
  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
}

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

export default jokeFacade;
