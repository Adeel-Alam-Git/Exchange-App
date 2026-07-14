import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import App from "./App.jsx";
import { CurrencyProvider } from "./context/CurrencyProvider.jsx";
import { RatesProvider } from "./context/RatesProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CurrencyProvider>
      <RatesProvider>
        <App />
      </RatesProvider>
    </CurrencyProvider>
  </StrictMode>
);