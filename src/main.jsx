import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditorComponent from "./Screens/EditorComponent.jsx";
import OTP from "./Screens/OTP";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="*" />
        <Route element={<EditorComponent />} path="/editor" />
        <Route element={<OTP />} path="/otp" />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
