import "./App.css";
import { useState } from "react";
import SideBar from "./Components/SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Navbar from "./Components/Navbar";
import OrderHistory from "./Screens/OrderHistory";
import Orders from "./Screens/Orders";
import Help from "./Screens/Help";
import Chat from "./Screens/Chat";
import Revenue from "./Screens/Revenue";
import { createPortal } from "react-dom";
import Overlay from "./Components/Overlay";
function App() {
  const [overlay, setOverlay] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
    setOverlay(!overlay);
  };

  return (
    <>
      <SideBar />
      <Navbar toggleChat={toggleChat} />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<OrderHistory />} path="/order-history" />
        <Route element={<Orders />} path="/orders" />
        <Route element={<Help />} path="/help" />
        <Route element={<Revenue />} path="/revenue" />
      </Routes>
      {showChat && (
        <>
          {createPortal(<Chat />, document.getElementById("modal"))}
          <Overlay toggleChat={toggleChat} />
        </>
      )}
    </>
  );
}

export default App;
