import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import EditorComponent from "./Screens/EditorComponent.jsx";
import OTP from "./Screens/OTP";
import Package from "./Screens/Package.jsx";
import Account from "./Screens/Account";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="*" />
        <Route element={<Account />} path="/account/*" />
        <Route element={<EditorComponent />} path="/editor" />
        <Route element={<OTP />} path="/otp" />
        <Route element={<Package />} path="/package" />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
