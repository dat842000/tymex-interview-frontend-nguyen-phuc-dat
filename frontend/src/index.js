import React from "react";
import ReactDOM from "react-dom/client";
import DashboardPage from "./pages/DashboardPage.tsx";
import "../src/styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DashboardPage />
  </React.StrictMode>
);
