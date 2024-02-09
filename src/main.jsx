import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./Screens/Chat.jsx";
import "flowbite";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="*" />
        <Route element={<Chat />} path="/chat" />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
