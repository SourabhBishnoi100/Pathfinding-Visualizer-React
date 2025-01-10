import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import GradientBackground from "./utils/GradientBackground.jsx";
import { DragContextProvider } from "./context/DragContext.jsx";
import { GridContextProvider } from "./context/GridContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GridContextProvider>
      <GradientBackground>
        <DragContextProvider>
          <App />
        </DragContextProvider>
      </GradientBackground>
    </GridContextProvider>
  </StrictMode>
);
