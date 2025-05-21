import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import RedactorPA from "./pages/RedactorPA";
import SamplePage from "./pages/SamplePage";
import TemplatePage from "./pages/TemplatePage.jsx";
import "./styles/sample.scss";
import "./styles/selection-pages.scss";
import MainPage from "./pages/MainPage.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/auth" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/redactor" element={<RedactorPA />} />
      <Route path="/templates" element={<TemplatePage />} />
      <Route path="/sample" element={<SamplePage />} />
    </Routes>
  </BrowserRouter>
);
