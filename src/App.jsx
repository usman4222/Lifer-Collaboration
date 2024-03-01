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
import Login from "./Screens/Login.jsx";
import Signup from "./Screens/Signup.jsx";
import { AuthProvider } from "./Context/AuthContext.jsx";
import ProtectedRoute from "./Components/ProtectedRoute";
import { Toaster } from "react-hot-toast";
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
      <Toaster />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute
                  toggleNotification={toggleNotification}
                  toggleChat={toggleChat}
                />
              }
            >
              <Route key="home" element={<Home />} path="/" />,
              <Route
                key="order-history"
                element={<OrderHistory />}
                path="/order-history"
              />
              <Route key="orders" element={<Orders />} path="/orders" />,
              <Route
                key="help"
                element={<Help toggleRepresentator={toggleRepresentator} />}
                path="/help"
              />
              <Route
                key="revenue"
                element={<Revenue toggleRevenueForm={toggleRevenueForm} />}
                path="/revenue"
              />
              <Route
                key="riders"
                element={<Rider toggleRiderForm={toggleRiderForm} />}
                path="/riders"
              />
              <Route key="help-form" element={<HelpForm />} path="/help-form" />
              <Route key="menu" element={<Menu />} path="/menu/*" />,
              <Route key="add-menu" element={<AddMenu />} path="/add-menu" />,
              {/* <Route key="reg-restaurant" element={<RegRestaurant />} path="/reg-restaurant" /> */}
            </Route>
            <Route key="login" element={<Login />} path="/account/login" />,
            <Route key="signup" element={<Signup />} path="/account/signup" />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
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
