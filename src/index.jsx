import React from "react";
import ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "store";

import App from "App";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOMClient.createRoot(document.querySelector("#root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
