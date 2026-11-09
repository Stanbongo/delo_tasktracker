import { useState } from "react";
import "../index.css";
import { ThemeContext } from "../context/themeContext";
import { Navigate, Route, Routes } from "react-router";
import TasksPage from "../pages/TasksPage";
import AboutPage from "../pages/AboutPage";
import Layout from "../Layout";
import AuthLayout from "../AuthLayout";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import NotFoundPage from "../pages/NotFoundPage";

import { StyledEngineProvider } from "@mui/material/styles";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Создайте страницу AboutPage и вынесите его в route
  // <h1>This is about page!</h1>
  return (
    <>
      <StyledEngineProvider enableCssLayer>
        {/* Ваше приложение, включая ThemeProvider */}
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Navigate to={"/tasks"} replace />} />
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<ProductDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<h2>Login</h2>} />
              <Route path="/register" element={<h2>Register</h2>} />
            </Route>
          </Routes>
        </ThemeContext.Provider>
      </StyledEngineProvider>
      {/* Provider - "облако", в которое мы помещаем состояние и сетСтейт для дочерних компонентов  */}
    </>
  );
}

export default App;
