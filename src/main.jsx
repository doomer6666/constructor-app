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
import "./styles/read-only-page.scss";
import MainPage from "./pages/MainPage.jsx";
import ReadOnlyPage from "./pages/ReadPage.jsx";
import EmailVerifyPage from "./pages/EmailVerifyPage.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/auth" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/email-verify" element={<EmailVerifyPage />} />
      <Route path="/redactor" element={<RedactorPA />} />
      <Route path="/templates" element={<TemplatePage />} />
      <Route path="/sample/:id?" element={<SamplePage />} />
      <Route path="/read/:id?" element={<ReadOnlyPage />} />
    </Routes>
  </BrowserRouter>
);
