import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecruiterProvider } from "./context/RecruiterContext.jsx";
import { EmployeeProvider } from "./context/EmployeeContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <RecruiterProvider>
        <EmployeeProvider>
          <App />
        </EmployeeProvider>
      </RecruiterProvider>
    </BrowserRouter>
  </StrictMode>
);
