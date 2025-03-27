import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./sanitize.css";
import "./index.css";
import "./globals.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
