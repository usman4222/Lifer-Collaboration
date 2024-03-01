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
import Rider from "./Screens/Rider";
import RiderForm from "./Components/RiderForm";
import HelpForm from "./Components/HelpForm";
import Representator from "./Components/Representator";
import Menu from "./Screens/Menu";
import AddMenu from "./Screens/AddMenu";
import AddRevenue from "./Components/AddRevenue";
import Notification from "./Screens/Notification";
import NoPageFound from "./Screens/NoPageFound.jsx";
import EditorComponent from "./Screens/EditorComponent.jsx";
import OTP from "./Screens/OTP.jsx";
import OTP1 from "./Screens/Otpcode.jsx";
import Otpcode from "./Screens/Otpcode.jsx";
import PackageScreen from "./Screens/PackageScreen.jsx";
import RegRestaurant from "./Screens/RegRestaurant.jsx";
function App() {
  const [overlay, setOverlay] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showRiderForm, setShowRiderForm] = useState(false);
  const [showRepresentator, setShowRepresentator] = useState(false);
  const [showRevenueForm, setShowRevenueForm] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
    setOverlay(!overlay);
  };

  const toggleRiderForm = () => {
    setShowRiderForm(!showRiderForm);
    setOverlay(!overlay);
  };
  const toggleRepresentator = () => {
    setShowRepresentator(!showRepresentator);
    setOverlay(!overlay);
  };

  const toggleRevenueForm = () => {
    setShowRevenueForm(!showRevenueForm);
    setOverlay(!overlay);
  };

  const toggleNotification = () => {
    setShowNotification(!showNotification);
    setOverlay(!overlay);
  };

  return (
    <>
      <SideBar />
      <Navbar toggleChat={toggleChat} toggleNotification={toggleNotification} />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<OrderHistory />} path="/order-history" />
        <Route element={<Orders />} path="/orders" />
        <Route
          element={<Help toggleRepresentator={toggleRepresentator} />}
          path="/help"
        />
        <Route
          element={<Revenue toggleRevenueForm={toggleRevenueForm} />}
          path="/revenue"
        />
        <Route
          element={<Rider toggleRiderForm={toggleRiderForm} />}
          path="/riders"
        />
        <Route element={<HelpForm />} path="/help-form" />
        <Route element={<Menu />} path="/menu/*" />
        <Route element={<AddMenu />} path="/add-menu" />
        {/* <Route element={<Otpcode />} path="/code" />
        <Route element={<PackageScreen />} path="/cod" /> */}
        {/* <Route element={<RegRestaurant/>} path="/reg-res"/> */}
      </Routes>

      {showChat && (
        <>
          {createPortal(<Chat />, document.getElementById("modal"))}
          <Overlay toggleOverlay={toggleChat} />
        </>
      )}
      {showRiderForm && (
        <>
          {createPortal(<RiderForm />, document.getElementById("modal"))}
          <Overlay toggleOverlay={toggleRiderForm} />
        </>
      )}
      {showRepresentator && (
        <>
          {createPortal(<Representator />, document.getElementById("modal"))}
          <Overlay toggleOverlay={toggleRepresentator} />
        </>
      )}

      {showRevenueForm && (
        <>
          {createPortal(<AddRevenue />, document.getElementById("modal"))}
          <Overlay toggleOverlay={toggleRevenueForm} />
        </>
      )}

      {showNotification && (
        <>
          {createPortal(<Notification />, document.getElementById("modal"))}
          <Overlay toggleOverlay={toggleNotification} />
        </>
      )}
    </>
  );
}

export default App;
