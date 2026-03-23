import "@mantine/core/styles.css";
// ‼️ import dropzone styles after core package styles
// import "@mantine/dropzone/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
