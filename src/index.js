import React from "react";
import ReactDOM from "react-dom";

import "./assets/css/bootstrap.min.css";
import "./assets/scss/index.scss";

import { Route, Router } from "react-router-dom";

import App from "./App";
import Contacts from "./components/contacts";

import * as serviceWorker from "./serviceWorker";
import history from "./components/history";

ReactDOM.render(
  <Router history={history}>
    <Route exact path="/" component={App} />
    <Route path="/contacts" component={Contacts} />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
