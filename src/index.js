import React from "react";
import ReactDOM from "react-dom/client";
import "../src/assets/css/index.css";
import { Todo } from "./pages/Todo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>
);
