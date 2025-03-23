import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import RedactorPA from "./pages/RedactorPA";
import SamplePage from "./pages/SamplePage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SamplePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/redactor" element={<RedactorPA />} />
      <Route path="/sample" element={<SamplePage />} />
      {/* Добавьте другие маршруты (например, /register) позже */}
    </Routes>
  </BrowserRouter>
);
