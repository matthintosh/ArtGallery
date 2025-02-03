import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ApplicationRepositoryProvider } from "./context/ApplicationRepository";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApplicationRepositoryProvider>
      <App />
    </ApplicationRepositoryProvider>
  </StrictMode>,
);
