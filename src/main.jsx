import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import GradientBackground from "./utils/GradientBackground.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GradientBackground>
      <App />
    </GradientBackground>
  </StrictMode>
);
