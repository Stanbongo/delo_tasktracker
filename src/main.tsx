// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { BrowserRouter } from "react-router";
import { StyledEngineProvider } from "@mui/material";
import { GlobalStyles } from "@mui/material";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <BrowserRouter>
    <StyledEngineProvider enableCssLayer>
      <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
      <App />
    </StyledEngineProvider>
  </BrowserRouter>,
  // </StrictMode>,
);
