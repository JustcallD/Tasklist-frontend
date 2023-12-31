import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import Store from "./Store/Store";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
