import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const staticSeoRoot = document.getElementById("pre-render-content");
if (staticSeoRoot) {
  staticSeoRoot.remove();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
