import React from "react";
import ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "App";

import "assets/css/index.css";

ReactDOMClient.createRoot(document.querySelector("#root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
